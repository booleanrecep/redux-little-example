import React from "react";

const Article = () => {
  const [value, setValue] = React.useState("");
  return (
    <div
      style={{
        width: "60%",
        height: 400,
        position: "absolute",
        top: 3,
        right: 10,
        border: "2px solid aqua"
      }}
    >
      <textarea
        onChange={(e) => setValue(e.target.value)}
        style={{
          minWidth: "99%",
          maxWidth: "99%",
          maxHeight: 210,
          fontWeight: "bold",
          fontSize: 18,
          height: 40,
          width: 210,
          background: "white",
          color: "black"
        }}
      ></textarea>
      <textarea
        value={value}
        style={{
          minWidth: "99%",
          maxWidth: "99%",
          maxHeight: "99%",
          minHeight: "78%",
          fontWeight: "bold",
          fontSize: 18,
          height: 40,
          width: 210,
          background: "white",
          color: "black",
          boxSizing: "content-box"
        }}
      ></textarea>
    </div>
  );
};

export default Article;
