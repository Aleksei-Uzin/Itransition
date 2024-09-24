import { Spinner } from '../Spinner'
import { ButtonProps } from './types'

export const Button = ({
  children,
  color = 'primary',
  disabled,
  isLoading,
  onClick,
}: ButtonProps) => {
  const colorVariants: Record<typeof color, string> = {
    primary: 'text-blue-700 hover:bg-blue-500 hover:text-white border-blue-500',
    secondary: 'text-gray-600 bg-gray-200',
    alert: 'text-red-500 hover:bg-red-400 hover:text-white border-red-400',
  }

  return (
    <button
      className={`flex items-center justify-center gap-2.5 font-semibold py-2 px-4 border rounded ${colorVariants[color]}`}
      disabled={disabled}
      onClick={onClick}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  )
}
