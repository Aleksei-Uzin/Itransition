export type ButtonProps = {
  children: (string | JSX.Element)[] | string
  color?: 'primary' | 'secondary' | 'alert'
  disabled?: boolean
  isLoading?: boolean
  onClick?: () => void
}
