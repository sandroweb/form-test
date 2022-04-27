import { object, string } from "yup";
import { cpf } from 'cpf-cnpj-validator'; 

const schema = object({
  name: string()
    .nullable()
    .trim('Nome é um campo obrigatório.')
    .required('Nome é um campo obrigatório.'),
  
  rg: string()
    .nullable()
    .trim('RG é um campo obrigatório.')
    .min(10, 'O RG deve conter entre 10 e 11 dígitos')
    .required('RG é um campo obrigatório.'),
  
  cellphone: string()
    .nullable()
    .trim('Celular é um campo obrigatório.')
    .min(14, 'O celular deve conter entre 8 e 9 dígitos, fora o DDD.')
    .required('Celular é um campo obrigatório.'),
  
  cpf: string()
    .nullable()
    .trim('CPF é um campo obrigatório.')
    .test({
      message: 'O CPF digitado é inválido',
      test: value => cpf.isValid(String(value))
    })
    .required('CPF é um campo obrigatório.'),
})

export default schema;