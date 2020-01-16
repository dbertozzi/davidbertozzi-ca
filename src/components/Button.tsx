import React from "react";
import { css } from "emotion";

const Button: React.FunctionComponent<{ label: string }> = props => {
  return (
    <button
      className={css`
        background-color: black;
        color: white;
        padding: 10px;
        border: 0px;
        &:hover {
          background-color: grey;
        }
      `}
    >
      {props.label}
    </button>
  );
};

export default Button;
