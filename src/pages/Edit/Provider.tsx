import { FC, PropsWithChildren, ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { EditRoutePath } from "../../components/library/Routes";
import Person from "../../interfaces/Person";
import { addPerson, loadPerson, updatePerson } from "../../services/People";
import Context, { IEditContext } from './context';

export interface EditPathParams extends Record<string, string> {
  id: string;
}

export interface EditProvider {

}

const Provider: FC<PropsWithChildren<EditProvider>> = ({
  children,
}) => {
  const { id } = useParams<EditPathParams>();
  const [ person, setPerson ] = useState<Person>();
  const [ loading, setLoading ] = useState<boolean>(false);
  const [ saving, setSaving ] = useState<boolean>(false);
  const navigate = useNavigate();

  const fieldsDisabled = useMemo<boolean>(() => {
    return loading || saving;
  }, [loading, saving])

  const newer = useMemo<boolean>(() => {
    return isNaN(Number(id));
  }, [ id ]);

  const onSubmit = useCallback((newPerson: Partial<Person>) => {
    setSaving(true);
    if (newer) {
      addPerson(newPerson)
        .then(response => {
          navigate(EditRoutePath.replace(':id', response.data.id.toString()))
        })
        .finally(() => setSaving(false));
    } else if(!!newPerson?.id) {
      updatePerson(newPerson)
        .finally(() => setSaving(false));
    }
  }, [setSaving, newer, navigate]);

  const load = useCallback(() => {
    setLoading(true);
    loadPerson(Number(id))
      .then(response => setPerson(response.data))
      .finally(() => setLoading(false))
  }, [id, setPerson, setLoading])

  useEffect(() => {
    if (!!id) {
      load();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Context.Provider value={{
      person,
      newer,
      loading,
      saving,
      onSubmit,
      fieldsDisabled,
    }}>
      { children }
    </Context.Provider>
  )
}

export default Provider;

interface ConsumerProps {
  children: (value: IEditContext) => ReactNode;
}

export function Consumer({ children }: ConsumerProps) {
  return <Context.Consumer>{children}</Context.Consumer>;
}
