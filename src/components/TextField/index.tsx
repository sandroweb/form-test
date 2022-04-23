import { ChangeEvent, FC, HTMLInputTypeAttribute, ReactNode, useCallback } from "react";
import styled from "styled-components";
import { ThemeColor } from "../../enuns/ThemeColors";
import { TypographyTypes } from "../../enuns/TypographyTypes";
import Typography from "../Typography";

export const onlyNumbersInputMask = (value: string = '') => {
  return value.replace(/\D/g,"");
}

export const phoneInputMask = (value: string = '') => {
  let newValue = value.replace(/\D/g,"").substring(0, 11);
  newValue = newValue.replace(/^(\d\d)(\d)/g,"($1) $2");
  newValue = newValue.replace(/(\d{4})(\d)/,"$1-$2");
  return newValue;
}

export const cpfInputMask = (value: string = '') => {
  let newValue = value.replace(/\D/g,"").substring(0, 11);
  newValue = newValue.replace(/(\d{3})(\d)/,"$1.$2");
  newValue = newValue.replace(/(\d{3})(\d)/,"$1.$2");
  newValue = newValue.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
  return newValue;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  input {
    margin-top: 3px;
    margin-bottom: 3px;
  }
`

export interface TextFieldProps {
  type?: HTMLInputTypeAttribute;
  name: string,
  label: ReactNode;
  error?: ReactNode;
  disabled?: boolean;
  value?: unknown;
  onChange?: (newValue: unknown) => void;
  maxLength?: number;
  mask?: (newValue: string) => string;
}

const TextField: FC<TextFieldProps> = ({
  type,
  name,
  label,
  error,
  disabled,
  value,
  onChange,
  maxLength,
  mask,
}) => {

  const getTransformedNewValueType = useCallback((newValue: string | undefined) => {
    switch (typeof value) {
      case 'number':
        return !isNaN(Number(newValue)) ? Number(newValue) : 0;
      case 'string':
      default:
        return newValue;
    }
  }, [value])

  const changed = useCallback((event: ChangeEvent<HTMLInputElement> | undefined) => {
    if (!!onChange) {
      if (!!mask) {
        onChange(mask(String(getTransformedNewValueType(event?.target.value))) || '');
      } else {
        onChange(getTransformedNewValueType(event?.target.value));
      }
    }
  }, [onChange, getTransformedNewValueType, mask]);

  return (
    <Wrapper>
      <Typography type={ TypographyTypes.InputLabel }>{ label }</Typography>
      <input
        name={ name }
        type={ type }
        value={ String(value || '') }
        disabled={ disabled }
        onChange={ changed }
        maxLength={ maxLength }
      />
      {
        !!error && (
          <Typography
            type={ TypographyTypes.InputLabel }
            color={ ThemeColor.Error }
          >
            { error }
          </Typography>
        )
      }
    </Wrapper>
  );
};

export default TextField;