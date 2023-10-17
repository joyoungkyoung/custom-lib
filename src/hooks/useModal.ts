import { ModalDispatchContext, ModalPropsType } from "@/contexts/modal/ModalContext";
import { useContext } from "react";

export default function useModal() {
  const { open, close } = useContext(ModalDispatchContext);

  const openModal = (Component: (props: ModalPropsType) => JSX.Element, props: ModalPropsType) => {
    open(Component, props);
  };

  const closeModal = (key: string) => {
    close(key);
  };

  return { openModal, closeModal };
}
