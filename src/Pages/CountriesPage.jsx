import React, { useState } from "react";
import { useQuery } from "react-query";

import Paper from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Country from "../Components/Countries/Countries";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

import styles from "./styles.module.css";

function CountriesPage() {
  const [input, setInput] = useState("");
  const [checked, setChecked] = useState(false);
  const [language, setLanguage] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  function handleOnClickSelected(name) {
    // setSelected(selected === true ? false : true);
    setSelected(name);
  }

  function handleOnInputChange(event) {
    setInput(event.target.value);
  }

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.checked);
  };

  const handleChangeSortBy = (event) => {
    setSortBy(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const { data, isLoading } = useQuery("repoData", () =>
    fetch("https://restcountries.eu/rest/v2/all").then((result) =>
      result.json()
    )
  );
  if (isLoading) return "Loading...";

  return (
    <div className={styles.mainContainerPage}>
      <div className={styles.containerExtras}>
        <Paper className={styles.rootCard} component="form">
          <IconButton aria-label="menu"></IconButton>
          <InputBase
            id="search"
            onChange={handleOnInputChange}
            placeholder="Enter country name"
            inputProps={{ "aria-label": "Enter country name" }}
          />
          <SearchIcon />
          <IconButton type="submit" aria-label="search"></IconButton>
        </Paper>
        <div className={styles.checkboxStyles}>
          <label className={styles.labelStyle}>
            No borders
            <Checkbox
              color="green"
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          </label>
          <label className={styles.labelStyle}>
            Multiple languages
            <Checkbox
              color="green"
              checked={language}
              onChange={handleChangeLanguage}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          </label>
          <div>
            <Button className={styles.button} onClick={handleOpen}>
              Sort by
            </Button>
            <FormControl>
              <InputLabel id="demo-controlled-open-select-label"></InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={sortBy}
                onChange={handleChangeSortBy}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"population"}>Population</MenuItem>
                <MenuItem value={"area"}>Area</MenuItem>
                <MenuItem value={"border"}>Border</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      <div className={styles.countryList}>
        {data

          .filter(
            (item) =>
              item.name.toLowerCase().startsWith(input.toLowerCase()) &&
              (checked === false ||
                (checked === true && item.borders.length === 0)) &&
              (language === false ||
                (language === true && item.languages.length > 1))
          )
          .sort(function (a, b) {
            if (!sortBy) {
              return 0;
            }

            let areaA = a.area;
            let areaB = b.area;
            let bordersA = a.borders;
            let bordersB = b.borders;
            let populationA = a.population;
            let populationB = b.population;

            if (bordersA < bordersB) {
              return -1;
            }
            if (bordersA > bordersB) {
              return 1;
            }

            if (areaA < areaB) {
              return -1;
            }

            if (areaA > areaB) {
              return 1;
            }

            if (populationA < populationB) {
              return -1;
            }
            if (populationA > populationB) {
              return 1;
            }
            return 0;
          })
          .map((item) => (
            <Country
              selected={selected === item.name}
              handleOnClickSelected={() => handleOnClickSelected(item.name)}
              countryName={item.name}
              language={item.languages.map((language) => language.name).join()}
              countryCode={item.alpha2Code}
              dialCode={item.callingCodes[0]}
              currency={item.currencies[0].code}
              nativeName={item.nativeName}
              population={item.population}
              area={item.area}
              borders={item.borders.join()}
            />
          ))}
      </div>
    </div>
  );
}

export default CountriesPage;
