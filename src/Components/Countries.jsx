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
}) {
  return (
    <Card className={styles.mainContainer}>
      <div className={styles.mainData}>
        <div>{countryName}</div>
        <span className={styles.nativeName}>{nativeName}</span>
      </div>
      <div className={styles.infoContainer}>
        <span className={styles.countryCode}>Country code:{countryCode}</span>
        <span className={styles.currency}>Currency: {currency}</span>
        <span className={styles.dialCode}>Int. Dial Code: {dialCode}</span>
        <span className={styles.language}>Language: {language}</span>
      </div>
    </Card>
  );
}
Countries.propTypes = {
  countryName: PropTypes.string.isRequired,
  spanName: PropTypes.string.isRequired,
  countryCode: PropTypes.string.isRequired,
  currency: PropTypes.string,
  dialCode: PropTypes.number,
  language: PropTypes.string,
};

export default Countries;
