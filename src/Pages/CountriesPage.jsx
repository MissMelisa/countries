import React from "react";
import { useQuery } from "react-query";

import Countries from "../Components/Countries";
import styles from "./styles.module.css";

function CountriesPage() {
  const { data, isLoading } = useQuery("repoData", () =>
    fetch("https://restcountries.eu/rest/v2/all").then((result) =>
      result.json()
    )
  );
  if (isLoading) return "Loading...";
  return (
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
  );
}

export default CountriesPage;
