import { FC, PropsWithChildren, useMemo } from "react";
import Wrapper from "./style";

export type GridColumnType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface GridProps {
  container?: boolean;
  xs?: GridColumnType;
  sm?: GridColumnType;
  md?: GridColumnType;
  lg?: GridColumnType;
  xl?: GridColumnType;
}

const Grid: FC<PropsWithChildren<GridProps>> = ({
  container,
  xs,
  sm,
  md,
  lg,
  xl,
  children,
}) => {
  const rootClassName = useMemo<string>(() => {
    return [
      'Grid',
      `Grid-${ !!container ? 'container' : 'item'}`,
      `Grid-xs-${xs || 12}`,
      sm && `Grid-sm-${sm}`,
      md && `Grid-md-${md}`,
      lg && `Grid-lg-${lg}`,
      xl && `Grid-xl-${xl}`,
    ].join(' ');
  }, [container, xs, sm, md, lg, xl])

  return (
    <Wrapper className={rootClassName}>
      { children }
    </Wrapper>
  )
}

export default Grid;
