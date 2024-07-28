import styled, { css } from "styled-components";
import { ButtonContainerProps } from "./types";

const buttonVariants = {
  primary: "purple",
  secondary: "orange",
  danger: "red",
  success: "green",
};
export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 5px;
  border: 0;
  margin: 8px;

  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white}

  /* ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `;
  }} */
`;
