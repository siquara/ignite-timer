import { ButtonContainer } from './Button.styles'
import { ButtonProps } from './types'

export function Button({ variant = 'primary' }: ButtonProps) {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}
