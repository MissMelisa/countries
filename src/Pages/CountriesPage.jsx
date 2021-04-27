import React, { useState } from "react";
import { useQuery } from "react-query";

import Paper from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Countries from "../Components/Countries";
import Checkbox from "@material-ui/core/Checkbox";

import styles from "./styles.module.css";

function CountriesPage() {
  const [input, setInput] = useState("");
  const [checked, setChecked] = useState(false);

  const [language, setLanguage] = useState(false);

  function handleOnInputChange(event) {
    setInput(event.target.value);
  }

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.checked);
  };

  const { data, isLoading } = useQuery("repoData", () =>
    fetch("https://restcountries.eu/rest/v2/all").then((result) =>
      result.json()
    )
  );
  if (isLoading) return "Loading...";

  return (
    <>
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

      <label>
        No borders
        <Checkbox
          color="green"
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </label>
      <label>
        Multiple languages
        <Checkbox
          color="green"
          checked={language}
          onChange={handleChangeLanguage}
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </label>

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
          .map((item) => (
            <Countries
              countryName={item.name}
              language={item.languages.map((language) => language.name).join()}
              countryCode={item.alpha2Code}
              dialCode={item.callingCodes[0]}
              currency={item.currencies[0].code}
              nativeName={item.nativeName}
            />
          ))}
      </div>
    </>
  );
}

export default CountriesPage;
