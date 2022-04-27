import { FC } from "react";
import { Field, Form, FormRenderProps } from "react-final-form";
import styled from "styled-components";
import Container from "../../components/Container";
import Grid from "../../components/Grid";
import SectionTitle from "../../components/SectionTitle";
import { ThemeColor } from "../../enuns/ThemeColors";
import Person from "../../interfaces/Person";
import Name from './fields/Name';
import RG from './fields/RG';
import Cellphone from './fields/Cellphone';
import CPF from './fields/CPF';
import Provider, { Consumer } from "./Provider";
import Button from "../../components/Button";
import { yupUtilsValidateSchema } from "../../utils/yupValidationUtils";
import schema from "./schema";

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
`

const Edit: FC = props => {

  return (
    <Provider>
      <Consumer>
        {
          ({ newer, person, onSubmit, fieldsDisabled }) => (
            <Wrapper>
              <Content>
                <SectionTitle>
                  { newer ? 'Adicionar ' : 'Editar ' }cliente
                </SectionTitle>
                <Form
                  onSubmit={ onSubmit }
                  initialValues={{
                    ...(person || {})
                  }}
                  validate={yupUtilsValidateSchema(schema)}
                >
                  {
                    ({ handleSubmit, invalid, submitFailed }: FormRenderProps<Partial<Person>>) => (
                      <form onSubmit={handleSubmit}>
                        <Grid container>
                          <Grid sm={6}>
                            <Field name="name" children={ Name } />
                          </Grid>
                          <Grid sm={6}>
                            <Field name="rg" children={ RG } />
                          </Grid>
                          <Grid sm={6}>
                            <Field name="cellphone" children={ Cellphone } />
                          </Grid>
                          <Grid sm={6}>
                            <Field name="cpf" children={ CPF } />
                          </Grid>
                          <Grid sm={12}>
                            <Button
                              type="submit"
                              disabled={
                                fieldsDisabled || (invalid && submitFailed)
                              }
                            >
                              Enviar
                            </Button>
                          </Grid>
                        </Grid>
                      </form>
                    )
                  }
                </Form>
              </Content>
            </Wrapper>
          )
        }
      </Consumer>
    </Provider>
  );
};

export default Edit;