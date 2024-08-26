import React from "react";
import { ThemeContext } from "./themes-context";
import { themes } from "./themes-context";

class ThemeButton extends React.Component {
  render() {
    return (
      <button
        {...this.props}
        style={{
          backgroundColor: this.context.background,
          color: this.context.fontColor,
        }}
        className="btn"
      />
    );
  }
}

ThemeButton.contextType = ThemeContext;

export default ThemeButton;
