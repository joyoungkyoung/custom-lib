import { ModalPropsType, useModalStore } from "@/stores/modalStore";
import { createPortal } from "react-dom";

export default function ModalContainer() {
  const { modals, close } = useModalStore();
  console.log(modals);
  return createPortal(
    modals.map((m) => {
      const { Component, props, key } = m;
      const { onSubmit = () => {}, onClose = () => {}, ...restProps } = props;

      const handleClose = async () => {
        await onClose?.();
        console.log("key:", key);
        close(key);
      };

      const handleSubmit = async (_props?: ModalPropsType) => {
        await onSubmit?.(_props);
        console.log("key:", key);
        close(key);
      };

      return <Component key={key} onSubmit={handleSubmit} onClose={handleClose} {...restProps} />;
    }),
    document.getElementById("modal")!
  );
}
