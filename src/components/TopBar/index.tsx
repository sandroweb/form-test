import styled from "styled-components";
import { ThemeColor } from "../../enuns/ThemeColors";
import Container from "../Container";
import { MainRoutePath, NewRoutePath } from "../library/Routes";
import MenuItem from "./MenuItem";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${ ThemeColor.Black };
  color: ${ ThemeColor.Bege };
  text-align: right;
  height: 45px;
  width: 100%;
`

const Separator = styled.span`
  display: flex;
  background-color: ${ ThemeColor.Highlight };
  width: 4px;
  height: 4px;
  border-radius: 50%;
  margin-left: -2px;
  margin-right: -2px;
`

const Content = styled(Container)`
flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

const TopBar = () => {

  return (
    <Wrapper>
      <Content>
        <MenuItem path={ MainRoutePath }>Lista</MenuItem>
        <Separator />
        <MenuItem path={ NewRoutePath }>Adicionar</MenuItem>
      </Content>
    </Wrapper>
  );
}

export default TopBar;