import Edit from "../../pages/Edit";
import List from "../../pages/List";
import { Route, Routes as ReactRoutes } from "react-router-dom";

export const MainRoutePath = '/';

export const NewRoutePath = '/add';

export const EditRoutePath = '/:id';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path={NewRoutePath} element={ <Edit /> } />
      <Route path={EditRoutePath} element={ <Edit /> } />
      <Route path={MainRoutePath} element={ <List /> } />
    </ReactRoutes>
  )
};

export default Routes;