import React from "react";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    toZero: () => dispatch({ type: "TOZERO" }),
    powerOfIt: () => dispatch({ type: "POWEROF" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
    increment: () => dispatch({ type: "INCREMENT" })
  };
};
const Child = (props) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 65,
        left: 5,
        border: "2px solid aqua",
        width: 200,
        boxSizing: "content-box",
        background: "black",
        color: "white"
      }}
    >
      <p style={{ marginLeft: 45, fontSize: "1.5em" }}>PANEL</p>
      <p
        style={{
          fontSize: "1.5em",
          marginLeft: 4,
          border: "1px solid white",
          borderRadius: "5px",
          width: 25,
          height: 25,
          padding: 3,
          textAlign: "center",
          cursor: "pointer"
        }}
        onClick={props.toZero}
      >
        0
      </p>
      <p
        style={{
          fontSize: "1.5em",
          marginLeft: 4,
          border: "1px solid white",
          borderRadius: "5px",
          width: 25,
          height: 30,
          padding: "3 3 3 3",
          textAlign: "center",
          cursor: "pointer"
        }}
        onClick={props.powerOfIt}
      >
        e<sup>2</sup>
      </p>
      <p
        style={{
          fontSize: "1.5em",
          marginLeft: 4,
          border: "1px solid white",
          borderRadius: "5px",
          width: 25,
          height: 30,
          padding: 3,
          textAlign: "center",
          cursor: "pointer"
        }}
        onClick={props.increment}
      >
        +
      </p>
      <p
        style={{
          fontSize: "1.5em",
          marginLeft: 4,
          border: "1px solid white",
          borderRadius: "5px",
          width: 25,
          height: 30,
          padding: 3,
          textAlign: "center",
          cursor: "pointer"
        }}
        onClick={props.decrement}
      >
        -
      </p>
    </div>
  );
};
const Mapped = connect(null, mapDispatchToProps)(Child);
export default Mapped;
