import styled from "styled-components";
import { ThemeColor } from "../../enuns/ThemeColors";
import Container from "../Container";
import { MainRoutePath, NewRoutePath } from "../library/Routes";
import MenuItem from "./MenuItem";
import { MdAdd, MdList } from "react-icons/md";
import AppContext from "../../AppContext";
import { useContext } from "react";

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
  const { isMobile } = useContext(AppContext);

  return (
    <Wrapper>
      <Content>
        <MenuItem path={ MainRoutePath } icon={ <MdList /> }>Lista</MenuItem>
        { !isMobile && <Separator /> }
        <MenuItem path={ NewRoutePath } icon={ <MdAdd /> }>Adicionar</MenuItem>
      </Content>
    </Wrapper>
  );
}

export default TopBar;