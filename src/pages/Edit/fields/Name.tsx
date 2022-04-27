import { FC, useContext } from 'react';
import { FieldRenderProps } from 'react-final-form';
import TextField from '../../../components/TextField';
import Context from './../context';

const Field: FC<FieldRenderProps<any, HTMLElement, any>> = (props) => {
  const { newer, fieldsDisabled } = useContext(Context);
  return (
    <TextField
      name={ props.input.name }
      value={ props.input.value }
      label="Nome"
      error={ !fieldsDisabled && (newer ? props.meta.error && props.meta.touched : props.meta.error) ? props.meta.error : '' }
      onChange={ props.input.onChange }
      maxLength={ 150 }
      disabled={ fieldsDisabled }
    />
  )
}

export default Field;