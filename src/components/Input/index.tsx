import React from "react";
import * as I from "./interface";

function Input(props: I.IPropsInput) {
  const {
    type = "text",
    value,
    placeholder,
    maxlength,
    disabled,
    onFocus,
    onBlur,
    onInput,
    onChange,
  } = props;

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onFocus && typeof onFocus === "function") {
      onFocus(e);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur && typeof onBlur === "function") {
      onBlur(e);
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onInput && typeof onInput === "function") {
      onInput(e);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange && typeof onChange === "function") {
      onChange(e);
    }
  };

  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      maxLength={maxlength}
      disabled={disabled}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onInput={handleInput}
      onChange={handleChange}
    />
  );
}

export default Input;
