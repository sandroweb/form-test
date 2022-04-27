import { createContext } from "react";

export interface IAppContext {
  isMobile: boolean;
}

export default createContext<IAppContext>({
  isMobile: false,
});