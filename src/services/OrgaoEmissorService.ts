import axios from "axios"
import OrgaoEmissor from "../interfaces/OrgaoEmissor"

export const loadOrgaoEmissorList = () => {
  return axios.get<OrgaoEmissor[]>('library/orgao-emissor-list.json');
}