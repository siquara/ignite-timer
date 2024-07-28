export type ButtonVariant = "primary" | "secondary" | "danger" | "success";

export interface ButtonProps {
  variant?: ButtonVariant;
}

export interface ButtonContainerProps {
  variant: ButtonVariant
}

