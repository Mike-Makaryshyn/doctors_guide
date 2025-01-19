// src/components/Checkbox/Checkbox.jsx

import React from "react";
import styled, { keyframes } from "styled-components";

const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

const rotate = keyframes`
  from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(45deg);
  }
`;

const Indicator = styled.div`
  width: 1.2em;
  height: 1.2em;
  background: #e6e6e6;
  border: 1px solid #757575;
  border-radius: 50%; /* Кругла форма */
  margin-right: 0.5em; /* Відступ справа */
  position: relative;
  transition: background 0.3s, border-color 0.3s;

  ${Input}:not(:disabled):checked + & {
    background: #4caf50; /* Зелений фон при відміченому чекбоксі */
    border-color: #4caf50;
  }

  ${Input}:not(:disabled):hover + & {
    background: #ccc;
  }

  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  ${Input}:checked + &::after {
    display: block;
    top: 0.3em;
    left: 0.45em;
    width: 0.3em;
    height: 0.6em;
    border: solid #fff;
    border-width: 0 0.2em 0.2em 0;
    transform: rotate(45deg);
    animation: ${rotate} 0.3s forwards;
  }

  /* Додаткові стилі для мобільних */
  @media (max-width: 768px) {
    width: 1.6em;
    height: 1.6em;

    ${Input}:not(:disabled):checked + & {
      background: #4caf50; /* Зелений фон при відміченому чекбоксі */
      border-color: #4caf50;
    }

    ${Input}:not(:disabled):hover + & {
      background: #ccc;
    }

    ${Input}:checked + &::after {
      top: 0.4em;
      left: 0.6em;
      width: 0.4em;
      height: 0.8em;
      border-width: 0 0.3em 0.3em 0;
    }
  }
`;

const Label = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding-left: 1.6em; /* Збільшено для кращого відображення */
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  user-select: none; 
  color: ${(props) => (props.disabled ? "#757575" : "#013b6e")};
  font-size: 16px;

  /* Додаткові стилі для мобільних */
  @media (max-width: 768px) {
    padding-left: 2em; /* Збільшено відступ для більших чекбоксів */
    font-size: 14px;
  }
`;

export default function Checkbox({
  checked,      // Використовується для контролю стану
  onChange,
  name,
  id,
  label,
  disabled,
  labelRight
}) {
  return (
    <Label htmlFor={id} disabled={disabled}>
      {!labelRight && label}

      <Input
        id={id}
        type="checkbox"
        name={name}
        disabled={disabled}
        checked={checked}    // Правильне використання пропса checked
        onChange={onChange}
        aria-checked={checked}
        aria-disabled={disabled}
      />
      <Indicator />
      {labelRight && label}
    </Label>
  );
}