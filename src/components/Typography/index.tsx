import { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { ThemeColor } from "../../enuns/ThemeColors";
import { TypographyTypes } from "../../enuns/TypographyTypes";

const Wrapper = styled.span`
  color: ${props => props.color};
  text-transform: uppercase;
  &.text-${TypographyTypes.TopBarButtonLabel} {
    font-size: 8px;
    font-weight: 600;
  }
  &.text-${TypographyTypes.InfoText} {
    font-size: 13px;
    font-weight: 600;
  }
  &.text-${TypographyTypes.SubSupInfoText} {
    font-size: 6px;
    font-weight: 500;
  }
  &.text-${TypographyTypes.StepNumber} {
    font-size: 8px;
    font-weight: 500;
  }
  &.text-${TypographyTypes.StepLabel} {
    font-size: 7px;
    font-weight: 500;
  }
  &.text-${TypographyTypes.InputLabel} {
    font-size: 7px;
    font-weight: 600;
  }
  &.text-${TypographyTypes.InputValue} {
    font-size: 10px;
    font-weight: 600;
    line-height: 14px;
  }
  &.text-${TypographyTypes.SectionTitle} {
    font-size: 20px;
    font-weight: 600;
  }
`;

export interface TypographyProps {
  color?: ThemeColor;
  type: TypographyTypes;
}

const Typography: FC<PropsWithChildren<TypographyProps>> = props => {

  return (
    <Wrapper color={ props.color } className={ `text-${props.type}` }>
      { props.children }
    </Wrapper>
  );
};

export default Typography;