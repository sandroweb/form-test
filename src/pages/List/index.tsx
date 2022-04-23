import { FC, useCallback, useEffect, useState } from "react";
import BarWave from "react-cssfx-loading/lib/BarWave";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Container from "../../components/Container";
import { EditRoutePath } from "../../components/library/Routes";
import SectionTitle from "../../components/SectionTitle";
import { ThemeColor } from "../../enuns/ThemeColors";
import Person from "../../interfaces/Person";
import { loadPeople } from "../../services/People";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${ ThemeColor.LightBlack };
  text-align: right;
  width: 100%;
`

const Content = styled(Container)`
  justify-content: center;
  flex-direction: column;
`

const List: FC = props => {
  const navigate = useNavigate();
  const [people, setPeople] = useState<Person[]>();

  const refreshList = useCallback(() => {
    loadPeople()
      .then(response => setPeople(response.data))
  }, [setPeople]);

  const gotoEdit = useCallback((id: number) => {
    navigate(EditRoutePath.replace(':id', id.toString()));
  }, [navigate]);

  useEffect(() => {
    refreshList();
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <Content>
        <SectionTitle>
          Clientes
        </SectionTitle>
        { !people && <BarWave color={ ThemeColor.Highlight } /> }
        {
          !!people && people?.length > 0 && (
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>RG</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  people.map((it, key) => (
                    <tr onClick={() => gotoEdit(it.id)} key={ key }>
                      <td>{ it.name }</td>
                      <td>{ it.rg }</td>
                      <td>
                        <Link to={ EditRoutePath.replace(':id', it.id.toString()) }>
                          Editar
                        </Link>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          )
        }
      </Content>
    </Wrapper>
  );
};

export default List;