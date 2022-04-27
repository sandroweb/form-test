import { FC, PropsWithChildren, ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { EditRoutePath } from "../../components/library/Routes";
import useDebouncedCallback from "../../hook/useDebounceCallback";
import Person from "../../interfaces/Person";
import { loadPeople } from "../../services/People";
import Context, { IListContext } from './context';


export interface EditProvider {

}

const Provider: FC<PropsWithChildren<EditProvider>> = ({
  children,
}) => {
  const navigate = useNavigate();
  const [people, setPeople] = useState<Person[]>();
  const [toSearchTerm, setToSearchTerm] = useState<string>();
  const [searchTerm, setSerachTerm] = useState<string>();

  const filteredList = useMemo<Person[]>(() => {
    const newTerm = (searchTerm || '').trim().toLowerCase();
    if (newTerm.length === 0) return people || [];
    return people?.filter(it => {
      return !!Object.values(it).find(value => String(value).trim().toLowerCase().indexOf(newTerm) > -1);
    }) || [];
  }, [searchTerm, people]);

  const refreshList = useCallback(() => {
    loadPeople()
      .then(response => setPeople(response.data))
  }, [setPeople]);

  const gotoEdit = useCallback((id: number) => {
    navigate(EditRoutePath.replace(':id', id.toString()));
  }, [navigate]);

  useDebouncedCallback(() => {
    setSerachTerm(toSearchTerm);
  }, 300);

  useEffect(() => {
    refreshList();
    // eslint-disable-next-line
  }, []);

  return (
    <Context.Provider value={{
      hasPeople: people !== undefined,
      list: filteredList,
      toSearchTerm,
      setToSearchTerm,
      gotoEdit,
    }}>
      { children }
    </Context.Provider>
  )
}

export default Provider;

interface ConsumerProps {
  children: (value: IListContext) => ReactNode;
}

export function Consumer({ children }: ConsumerProps) {
  return <Context.Consumer>{children}</Context.Consumer>;
}
