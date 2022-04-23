import axios from "axios";
import Person from "../interfaces/Person";

const endpoint = 'https://6260547492df0bc0f34304c6.mockapi.io/api/v1/people';

export const loadPeople = () => {
  return axios.get<Person[]>(endpoint);
}

export const loadPerson = (id: number) => {
  return axios.get<Person>(`${endpoint}/${id}`);
}

export const addPerson = (person: Partial<Person>) => {
  return axios.post<Person>(endpoint, person);
}

export const updatePerson = (person: Partial<Person>) => {
  return axios.put<Person>(`${endpoint}/${person.id}`, person);
}