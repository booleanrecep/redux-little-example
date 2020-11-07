import React from "react";
import Child from "./Child";
import Article from "./Article"
import { connect } from "react-redux";

function toInput(payload) {
  return {
    type: "TOINPUT",
    payload
  };
}
const mapStateToProps = (state) => {
  return { value: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toInput: (e) => dispatch(toInput(e))
  };
};
const Counter = ({ value, toInput }) => {
  return (
    <>
      <input
        style={{
          position: "absolute",
          top: 3,
          left: 5,
          border: "2px solid aqua",
          background: "black",
          color: "white",
          width: 200,
          height: 50,
          fontSize: 45
        }}
        type="number"
        value={value}
        onChange={(e) => toInput(e.target.value)}
      />
      <Child />
      <Article/>
    </>
  );
};

const Mapped = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Mapped;
