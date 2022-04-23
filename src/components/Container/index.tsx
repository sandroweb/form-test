import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding-left: 45px;
  padding-right: 45px;
  width: 100%;
  @media (min-width: 769px) {
    max-width: 1200px;
  }
  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

export interface ContainerProps {
  className?: string;
}

const Container: FC<PropsWithChildren<ContainerProps>> = ({
  className,
  children,
}) => {
  return (
    <Wrapper className={ className }>
      { children }
    </Wrapper>
  );
};

export default Container;