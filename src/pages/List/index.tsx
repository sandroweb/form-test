import { FC, Fragment } from "react";
import BarWave from "react-cssfx-loading/lib/BarWave";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Container from "../../components/Container";
import Grid from "../../components/Grid";
import { EditRoutePath } from "../../components/library/Routes";
import SectionTitle from "../../components/SectionTitle";
import TextField from "../../components/TextField";
import { ThemeColor } from "../../enuns/ThemeColors";
import Provider, { Consumer } from "./Provider";

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

const List: FC = () => {

  return (
    <Provider>
      <Consumer>
        {
          ({
            hasPeople,
            list,
            toSearchTerm,
            setToSearchTerm,
            gotoEdit
          }) => (
            <Wrapper>
              <Content>
                <SectionTitle>
                  Clientes
                </SectionTitle>
                <Grid container>
                  { !hasPeople && <Grid><BarWave color={ ThemeColor.Highlight } /></Grid> }
                </Grid>
                {
                  hasPeople && (
                    <Fragment>
                      <Grid>
                        <TextField
                          label="Procurar por:"
                          value={ toSearchTerm }
                          onChange={ v => typeof v === 'string' && setToSearchTerm(v) }
                        />
                      </Grid>
                      <Grid>
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
                              list.map((it, key) => (
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
                      </Grid>
                    </Fragment>
                  )
                }
              </Content>
            </Wrapper>
          )
        }
      </Consumer>
    </Provider>
  );
};

export default List;