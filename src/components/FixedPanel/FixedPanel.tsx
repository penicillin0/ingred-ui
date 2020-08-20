import * as React from "react";
import * as Styled from "./styled";

export type FixedPanelProps = {
  isOpen: boolean;
  placement?: "top" | "bottom";
  offset?: number;
};

const FixedPanel: React.FunctionComponent<FixedPanelProps> = ({
  isOpen,
  placement = "top",
  offset = 0,
  children,
}) => {
  const [containerRef, setContainerRef] = React.useState<HTMLDivElement | null>(
    null,
  );
  return (
    <Styled.Container
      ref={setContainerRef}
      height={containerRef?.clientHeight || 0}
      offset={offset}
      isOpen={isOpen}
      placement={placement}
    >
      {children}
    </Styled.Container>
  );
};

export default FixedPanel;
