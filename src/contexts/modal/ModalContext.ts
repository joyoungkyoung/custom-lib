import { createContext } from "react";

export type ModalPropsType = {
  onClose?: () => void;
  onSubmit?: (_props?: any) => void;
  key?: string;
  [key: string]: any;
};
export type ModalType = {
  Component: (props: ModalPropsType) => JSX.Element;
  props: ModalPropsType;
  key: string;
};
export const ModalStateContext = createContext<ModalType[]>([]);

interface DispatchContext {
  open: (Component: (props: ModalPropsType) => JSX.Element, props: ModalPropsType) => void;
  close: (key: string) => void;
}
export const ModalDispatchContext = createContext<DispatchContext>({
  open: () => {},
  close: () => {},
});
