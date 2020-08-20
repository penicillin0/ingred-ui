import * as React from "react";
import * as Styled from "./styled";
import * as PopperJS from "@popperjs/core";
import { ContentProp } from "../MenuList/MenuList";
import Menu from "../Menu";

export type ContextMenuProps = {
  contents: ContentProp[];
  positionPriority?: PopperJS.Placement[];
};

const ContextMenu: React.FunctionComponent<ContextMenuProps> = ({
  contents,
  positionPriority = ["bottom-start", "bottom-end", "top-start", "top-end"],
}) => {
  const [
    iconWrapperElement,
    setIconWrapperElement,
  ] = React.useState<HTMLButtonElement | null>(null);
  const [showContent, setShowContent] = React.useState<boolean>(false);

  const onHandleToggleContent = (showContent: boolean) => () => {
    setShowContent(showContent);
  };

  return (
    <>
      <Styled.ActionButton
        ref={setIconWrapperElement}
        data-testid="icon-wrapper"
        icon="more_vert"
        onClick={onHandleToggleContent(!showContent)}
      />
      {showContent && (
        <Menu
          baseElement={iconWrapperElement}
          contents={contents}
          positionPriority={positionPriority}
          onClick={onHandleToggleContent(false)}
          onClickAway={onHandleToggleContent(false)}
        />
      )}
    </>
  );
};

export default ContextMenu;
