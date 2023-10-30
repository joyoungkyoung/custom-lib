import { create } from "zustand";

export type ModalPropsType = {
  onClose?: () => void;
  onSubmit?: (event?: any) => void;
  key?: string;
  [property: string]: any;
};

type ModalType = {
  key: string;
  props: ModalPropsType;
  Component: (props: ModalPropsType) => JSX.Element;
};

type ModalStoreType = {
  modals: ModalType[];
  open: (Component: (props: ModalPropsType) => JSX.Element, props: ModalPropsType) => void;
  close: (key: string) => void;
};

export const useModalStore = create<ModalStoreType>((set, get) => ({
  modals: [],
  open: (Component: (props: ModalPropsType) => JSX.Element, props: ModalPropsType) => {
    const { modals } = get();
    const modal = props.key ? modals.find((m) => m.key === props.key) : null;
    const key = props.key || Date.now().toString();

    if (!modal) {
      set({ modals: [...modals, { Component, props, key }] });
    }
  },
  close: (key: string) => {
    const { modals } = get();
    set({ modals: modals.filter((m) => m.key !== key) });
  },
}));
