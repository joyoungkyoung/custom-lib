import { ReactNode } from "react";

// children이 필수적으로 필요할 경우
export type StrictPropsWithChildren<P = unknown> = P & {
  children: ReactNode;
};
