import React from "react";
import { useQuery } from "react-query";

import Countries from "../Components/Countries";
import styles from "./styles.module.css";
import Paper from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

function CountriesPage() {
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
          placeholder="Enter country name"
          inputProps={{ "aria-label": "Enter country name" }}
        />
        <SearchIcon />
        <IconButton type="submit" aria-label="search"></IconButton>
      </Paper>

      <div className={styles.countryList}>
        {data.map((item) => (
          <Countries
            countryName={item.name}
            language={item.languages[0].name}
            countryCode={item.alpha2Code}
            dialCode={item.callingCodes[0]}
            currency={item.currencies[0].code}
            spanName={item.nativeName}
          />
        ))}
      </div>
    </>
  );
}

export default CountriesPage;
