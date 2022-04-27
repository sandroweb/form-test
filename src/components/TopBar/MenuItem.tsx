import { FC, PropsWithChildren, ReactNode, useContext } from "react";
import { useMatch } from "react-router";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import AppContext from "../../AppContext";
import { ThemeColor } from "../../enuns/ThemeColors";
import { TypographyTypes } from "../../enuns/TypographyTypes";
import Typography from "../Typography";

const Wrapper = styled(NavLink)`
  position: relative;
  display: flex;
  padding: 5px 10px;
  color: ${ ThemeColor.Bege };
  text-decoration: none;
  &:before {
    content: '';
    display: block;
    position: absolute;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background-color: ${ ThemeColor.Highlight };
    transition: width 0.2s ease;
  }
  &.mobile {
    transition: color 0.2s ease, background-color 0.2s ease;
    padding: 5px;
    border-radius: 50%;
    margin-left: 5px;
    &:first-child {
      margin: 0;
    }
    &:last-child {
      margin-right: -5px;
    }
    &:before {
      content: none;
    }
    & > span {
      display: flex;
      align-items: center;
      font-size: 18px;
    }
  }
  &:Hover, &.actived {
    &:before {
      width: 100%;
    }
    &.mobile {
      background-color: ${ ThemeColor.Bege };
      color: ${ ThemeColor.LightBlack };
    }
  }
  &:last-child {
    margin-right: -10px;
  }
`

export interface MenuItemProps {
  path: string;
  icon: ReactNode;
}

const MenuItem: FC<PropsWithChildren<MenuItemProps>> = ({
  path,
  icon,
  children,
}) => {
  const match = useMatch(path);
  const { isMobile } = useContext(AppContext);

  return (
    <Wrapper to={path} className={`${!!match ? 'actived' : ''} ${isMobile && 'mobile'}`}>
      <Typography type={ TypographyTypes.TopBarButtonLabel }>
        { isMobile ? icon : children }
      </Typography>
    </Wrapper>
  );
  };

export default MenuItem;