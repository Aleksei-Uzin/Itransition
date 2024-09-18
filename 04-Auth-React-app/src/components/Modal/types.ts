export type ModalContextType =
  | [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  | undefined

export type ModalContextProviderProps = { children: JSX.Element[] }

export type ModalOpenButtonProps = { children: JSX.Element }

export type ModalCloseButtonProps = { children: JSX.Element }

export type ModalProps = {
  children: JSX.Element
  title: string
}
