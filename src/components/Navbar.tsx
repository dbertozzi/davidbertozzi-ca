import React from "react";
import { css, cx } from "emotion";

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
const Navbar: React.FC = () => {
  return (
    <div
      className={css`
        display: flexbox;
      `}
    >
      <Button label="software" />
    </div>
  );
};

export default Navbar;
