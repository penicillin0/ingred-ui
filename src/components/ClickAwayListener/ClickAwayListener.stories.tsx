import { ArgsTable, Stories, Title } from "@storybook/addon-docs";
import { Story } from "@storybook/react/types-6-0";
import React from "react";
import Button from "../Button";
import Typography from "../Typography";
import ClickAwayListener from "./ClickAwayListener";

export default {
  title: "Components/Utils/ClickAwayListener",
  component: ClickAwayListener,
  parameters: {
    docs: {
      source: { type: "code" },
      page: () => (
        <>
          <Title />
          <ArgsTable of={ClickAwayListener} />
          <Stories includePrimary title="Stories" />
        </>
      ),
    },
  },
};

export const Basic: Story = () => {
  const [text, setText] = React.useState("not clicked");

  const handleClickInner = () => {
    setText("clicked inner");
  };

  const handleClickOuter = () => {
    setText("clicked outer");
  };

  return (
    <>
      <ClickAwayListener onClickAway={handleClickOuter}>
        <Button style={{ width: "240px" }} onClick={handleClickInner}>
          Click inner/outer me!!
        </Button>
      </ClickAwayListener>
      <Typography>{text}</Typography>
    </>
  );
};
