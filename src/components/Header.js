import React from "react";
import PropTypes from "prop-types";

import Button from "./Button";

const Header = ({ title, showForm, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        text={showAdd ? "Close" : "Add"}
        color={showAdd ? "red" : "green"}
        btnClick={showForm}
      />
    </header>
  );
};

// Header.defaultProps = {
//   title: "Task Tracker",
// };

// css in js
// const styleInJS = {
//   color: "red",
//   backgroundColor: "black",
// };

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
