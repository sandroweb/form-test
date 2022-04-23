import { FC, Fragment, PropsWithChildren } from "react";
import TopBar from "../TopBar";

export interface LayoutProps {}

const Layout: FC<PropsWithChildren<LayoutProps>> = props => {
  return (
    <Fragment>
      <TopBar />
      { props.children }
    </Fragment>
  );
};

export default Layout;