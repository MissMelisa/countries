import React from "react";
import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import styles from "./styles.module.css";

function Countries({
  countryCode,
  language,
  countryName,
  dialCode,
  nativeName,
  currency,
  population,
  area,
  borders,
}) {
  return (
    <Card className={styles.mainContainer}>
      <div className={styles.mainData}>
        <div>{countryName}</div>
        <span className={styles.nativeName}>{nativeName}</span>
      </div>
      <div className={styles.infoContainer}>
        <span className={styles.infoStyle}>Country code:{countryCode}</span>
        <span className={styles.infoStyle}>Currency: {currency}</span>
        <span className={styles.infoStyle}>Int. Dial Code: {dialCode}</span>
        <span className={styles.infoStyle}>Language: {language}</span>
        <span className={styles.infoStyle}>Population: {population}</span>
        <span className={styles.infoStyle}>Area: {area || 0}</span>
        <span className={styles.infoStyle}>Borders: {borders || 0}</span>
      </div>
    </Card>
  );
}
Countries.propTypes = {
  countryName: PropTypes.string.isRequired,
  nativeName: PropTypes.string.isRequired,
  countryCode: PropTypes.string.isRequired,
  currency: PropTypes.string,
  dialCode: PropTypes.number,
  language: PropTypes.string,
  area: PropTypes.number,
  borders: PropTypes.number,
};

export default Countries;
