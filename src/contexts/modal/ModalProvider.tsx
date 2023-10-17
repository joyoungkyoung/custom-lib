import { useMemo, useState } from "react";
import { StrictPropsWithChildren } from "@/types/strictPropsWithChildren";
import { ModalDispatchContext, ModalPropsType, ModalStateContext, ModalType } from "./ModalContext";
import ModalRender from "./Modals";

export default function ModalProvider({ children }: StrictPropsWithChildren) {
  const [openedModals, setOpenedModals] = useState<ModalType[]>([]);

  const open = (Component: (props: ModalPropsType) => JSX.Element, props: ModalPropsType) => {
    setOpenedModals((modals) => {
      const modal = props.key ? modals.find((m) => m.key === props.key) : null;
      const key = props.key || Date.now().toString();

      if (!modal) {
        return [...modals, { Component, props, key }];
      } else {
        return modals;
      }
    });
  };
  const close = (key: string) => {
    setOpenedModals((modals) => modals.filter((modal) => modal.key !== key));
  };

  const dispatch = useMemo(() => ({ open, close }), []);

  return (
    <ModalDispatchContext.Provider value={dispatch}>
      <ModalStateContext.Provider value={openedModals}>
        {children}
        <ModalRender />
      </ModalStateContext.Provider>
    </ModalDispatchContext.Provider>
  );
}
