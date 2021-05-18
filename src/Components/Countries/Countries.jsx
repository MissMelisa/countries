import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import Card from "@material-ui/core/Card";
import styles from "./styles.module.css";

function Country({
  countryCode,
  language,
  countryName,
  dialCode,
  nativeName,
  currency,
  population,
  area,
  borders,
  handleOnClickSelected,
  selected,
}) {
  return (
    <Card
      onClick={handleOnClickSelected}
      className={cn(styles.mainContainer, {
        [styles.enlarge]: selected,
      })}
    >
      <div className={styles.mainData}>
        <div className={styles.name}>{countryName}</div>
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
Country.propTypes = {
  countryName: PropTypes.string.isRequired,
  nativeName: PropTypes.string.isRequired,
  countryCode: PropTypes.string.isRequired,
  currency: PropTypes.string,
  dialCode: PropTypes.number,
  language: PropTypes.string,
  area: PropTypes.number,
  borders: PropTypes.number,
};

export default Country;
