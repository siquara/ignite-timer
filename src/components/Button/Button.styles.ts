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

  ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `;
  }}
`;
