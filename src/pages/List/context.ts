import { createContext } from "react";
import Person from "../../interfaces/Person";

export interface IListContext {
  hasPeople: boolean;
  list: Person[];
  toSearchTerm: string | undefined;
  setToSearchTerm: (value: string) => void;
  gotoEdit: (id: number) => void;
}

export default createContext<IListContext>({
  hasPeople: false,
  list: [],
  toSearchTerm: undefined,
  setToSearchTerm: () => {},
  gotoEdit: () => {},
});