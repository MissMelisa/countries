import React from "react";
import PropTypes from "prop-types";

function Countries({
  countryCode,
  language,
  countryName,
  dialCode,
  spanName,
  currency,
}) {
  return (
    <>
      <div>
        <div>{countryName}</div>
        <span>{spanName}</span>
      </div>
      <div>
        <span>Country code {countryCode}</span>
        <span>Currency{currency}</span>
        <span>Int. Dial Code {dialCode}</span>
        <span>Language{language}</span>
      </div>
    </>
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
