import { object, string } from "yup";

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
    .min('(00) 0000.0000'.length, 'O celular deve conter entre 8 e 9 dígitos, fora o DDD.')
    .required('Celular é um campo obrigatório.'),
})

export default schema;