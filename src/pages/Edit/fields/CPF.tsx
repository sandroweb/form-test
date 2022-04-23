import { FC, useContext } from 'react';
import { FieldRenderProps } from 'react-final-form';
import TextField, { cpfInputMask } from '../../../components/TextField';
import Context from './../context';

const Field: FC<FieldRenderProps<any, HTMLElement, any>> = (props) => {
  const { newer, fieldsDisabled } = useContext(Context);
  return (
    <TextField
      name={ props.input.name }
      value={ props.input.value }
      label="CPF"
      mask={ cpfInputMask }
      error={ (newer ? props.meta.error && props.meta.touched : props.meta.error) ? props.meta.error : '' }
      onChange={ props.input.onChange }
      disabled={ fieldsDisabled }
    />
  )
}

export default Field;