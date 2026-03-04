
import React from "react";

function Button({ text, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={styles.button}
    >
      {text}
    </button>
  );
}

const styles = {
  button: {
    padding: "10px 20px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#4f46e5",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "10px"
  }
};

export default Button;