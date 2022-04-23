import { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { TypographyTypes } from "../../enuns/TypographyTypes";
import Typography from "../Typography";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
  width: 100%;
`

export interface SectionTitleProps {}

const SectionTitle: FC<PropsWithChildren<SectionTitleProps>> = ({
  children,
}) => {
  return (
    <Wrapper>
      <Typography type={ TypographyTypes.SectionTitle }>
        { children }
      </Typography>
    </Wrapper>
  )
}

export default SectionTitle;