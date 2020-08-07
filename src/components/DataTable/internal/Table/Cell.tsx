import * as React from "react";
import styled from "styled-components";

type CellProps = {
  width: string;
  enableRuledLine: boolean;
};

const Component = styled.td<CellProps>`
  width: ${({ width }) => width};
  padding-right: ${({ theme }) => theme.spacing * 3}px;
  padding-left: ${({ theme }) => theme.spacing * 2}px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.gray.light};
  border-right: ${({ theme, enableRuledLine }) =>
    enableRuledLine ? `1px solid ${theme.palette.gray.light}` : "none"};

  &:last-of-type {
    border-right: none;
  }
`;

export type Props = React.TdHTMLAttributes<HTMLTableDataCellElement> & {
  width?: string;
  enableRuledLine?: boolean;
  children?: React.ReactNode;
};

export const Cell: React.FunctionComponent<Props> = ({
  width = "auto",
  enableRuledLine = false,
  children,
  ...rest
}) => {
  return (
    <Component width={width} enableRuledLine={enableRuledLine} {...rest}>
      {children}
    </Component>
  );
};
