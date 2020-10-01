import * as React from "react";
import * as Styled from "./styled";
import * as PopperJS from "@popperjs/core";
import Popover from "../Popover";
import Icon from "../Icon";
import { ModalCloseReason } from "../Modal";
import { useTheme } from "../../themes";

export type FloatingTipCloseReason = "clickCloseIcon";

export type FloatingTipProps = {
  baseElement: HTMLElement | null;
  positionPriority?: PopperJS.Placement[];
  offset?: [number, number];
  isOpen: boolean;
  children: React.ReactNode;
  onClose?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    reason: ModalCloseReason | FloatingTipCloseReason,
  ) => void;
};

const FloatingTip: React.FunctionComponent<FloatingTipProps> = ({
  baseElement,
  positionPriority = ["right-start"],
  offset = [0, 10],
  isOpen,
  onClose,
  children,
}) => {
  const theme = useTheme();

  const onHandleClickCloseIcon = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (onClose) onClose(event, "clickCloseIcon");
  };

  return (
    <Popover
      isOpen={isOpen}
      baseElement={baseElement}
      positionPriority={positionPriority}
      offset={offset}
      onClose={onClose}
    >
      <Styled.Container>
        <Styled.ContentWrapper>{children}</Styled.ContentWrapper>
        <Styled.IconWrapper onClick={onHandleClickCloseIcon}>
          <Icon name="close" color={theme.palette.black} />
        </Styled.IconWrapper>
      </Styled.Container>
    </Popover>
  );
};

export default FloatingTip;
