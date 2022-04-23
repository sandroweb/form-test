import { FC, PropsWithChildren } from "react";
import { useMatch } from "react-router";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
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
  &:Hover, &.actived {
    &:before {
      width: 100%;
    }
  }
  &:last-child {
    margin-right: -10px;
  }
`

export interface MenuItemProps {
  path: string;
}

const MenuItem: FC<PropsWithChildren<MenuItemProps>> = ({
  path,
  children,
}) => {
  const match = useMatch(path);

  return (
    <Wrapper to={path} className={!!match ? 'actived' : ''}>
      <Typography type={ TypographyTypes.TopBarButtonLabel }>
        { children }
      </Typography>
    </Wrapper>
  );
  };

export default MenuItem;