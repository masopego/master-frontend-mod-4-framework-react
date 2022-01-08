import React from "react";

export type InputProps = {
  placeholder?: string;
  identifier: string;
  value?: string;
  onChange?: (value: any) => void;
  disabled?: boolean;
  type: string;
};

const Input = ({
  identifier,
  value,
  placeholder,
  onChange = undefined,
  disabled,
  type,
}: InputProps) => {
  return (
    <input
      type={type}
      id={identifier}
      name={identifier}
      value={value}
      placeholder={placeholder}
      onChange={(ev) => onChange?.(ev.target.value)}
      disabled={disabled}
    />
  );
};

export default Input;
