import { ModalPropsType, useModalStore } from "@/stores/modalStore";

export default function useModal() {
  const { open, close } = useModalStore();

  const openModal = (Component: (props: ModalPropsType) => JSX.Element, props: ModalPropsType) => {
    open(Component, props);
  };

  const closeModal = (key: string) => {
    close(key);
  };

  return { openModal, closeModal };
}
