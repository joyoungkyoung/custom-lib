import React, { useContext } from "react";
import { ModalDispatchContext, ModalPropsType, ModalStateContext } from "./ModalContext";

export default function ModalRender() {
  const openedModals = useContext(ModalStateContext);
  const { close } = useContext(ModalDispatchContext);

  return (
    <React.Fragment>
      {openedModals.map((modal) => {
        const { Component, props, key } = modal;

        const { onSubmit = () => {}, onClose = () => {}, ...restProps } = props;
        const handleClose = async () => {
          await onClose?.();
          close(key);
        };
        const handleSubmit = async (_props?: ModalPropsType) => {
          await onSubmit?.(_props);
          close(key);
        };

        return <Component key={key} onSubmit={handleSubmit} onClose={handleClose} {...restProps} />;
      })}
    </React.Fragment>
  );
}
