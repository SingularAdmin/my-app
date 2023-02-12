import React from "react";
import PropTypes from "prop-types";
import "../NameAdder.css";
import { useRef } from "react";

const NameAdder = (props) => {
  const inputEl = useRef(null);
  const getName = () => {
    props.addName(inputEl.current.value);
  };
  return (
    <div className="InputName">
      <input className="myInput" ref={inputEl} type="text" />
      <button className="myButton" onClick={getName}>
        Place you Name Above :D
      </button>
    </div>
  );
};

NameAdder.propTypes = {
  addName: PropTypes.func,
};
export default NameAdder;
