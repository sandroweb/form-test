import { FC, PropsWithChildren, ReactNode, useMemo } from "react";
import Context, { IAppContext } from './AppContext';
import useMediaQueryMatch, { MediaQuery } from "./hook/useMediaQueryMatch";

const queries: MediaQuery[] = [
  '(max-width: 768px)',
];

export interface AppProvider { };

const Provider: FC<PropsWithChildren<AppProvider>> = ({
  children,
}) => {
  const [mobile] = useMediaQueryMatch(queries);

  const isMobile = useMemo<boolean>(() => {
    return !!mobile;
  }, [mobile])

  return (
    <Context.Provider value={{
      isMobile
    }}>
      { children }
    </Context.Provider>
  )
}

export default Provider;

interface ConsumerProps {
  children: (value: IAppContext) => ReactNode;
}

export function Consumer({ children }: ConsumerProps) {
  return <Context.Consumer>{children}</Context.Consumer>;
}
