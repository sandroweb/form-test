export default interface Person {
  id: number;
  createdAt: string;
  name: string;
  cpf: string;
  rg: string;
  emissionOrgan: string;
  emissionDate: string;
  gender: Gender;
  cellphone: string;
  email: string;
}