import { createContext } from "react";
import Person from "../../interfaces/Person";

export interface IEditContext {
  person?: Person;
  newer: boolean;
  loading: boolean;
  saving: boolean;
  onSubmit: (person: Partial<Person>) => void;
  fieldsDisabled: boolean;
}

export default createContext<IEditContext>({
  person: undefined,
  newer: false,
  loading: false,
  saving: false,
  onSubmit: () => {},
  fieldsDisabled: false,
});