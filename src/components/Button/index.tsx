import { rgba } from "polished";
import { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { ThemeColor } from "../../enuns/ThemeColors";
import { TypographyTypes } from "../../enuns/TypographyTypes";
import Typography from "../Typography";

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: ${ ThemeColor.LightBlack };
  border-style: solid;
  border-width: 1px;
  background-color: transparent;
  transition: all 0.3s ease;
  padding: 3px 6px;
  height: 22px;
  &.block {
    width: 100%;
  }
  &:not(disabled) {
    &:hover, &:focus {
      background-color: ${ ThemeColor.Highlight };
      color: ${ ThemeColor.Bege };
    }
  }
  &:disabled {
    border-color: transparent;
    background-color: ${ ThemeColor.StrongBege };
    color: ${ rgba(ThemeColor.LightBlack, 0.5) }
  }
`

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => {};
  disabled?: boolean;
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  type,
  onClick,
  disabled,
  children,
}) => (
  <Wrapper
    type={ type || 'button' }
    onClick={
      () => !!onClick && onClick()
    }
    disabled={ disabled }
  >
    <Typography type={ TypographyTypes.InputValue }>
      { children }
    </Typography>
  </Wrapper>
)

export default Button;