import React from "react";
import styled from "styled-components";

import Table from "./";
import Flex from "../Flex";
import Typography from "../Typography";
import Badge from "../Badge";
import { VerticalSpacing } from "./Row";

export default {
  title: "Table",
  parameters: {
    component: Table,
  },
};

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing * 3}px;
  background-color: ${({ theme }) => theme.palette.background.default};
`;

const table = (verticalSpacing: VerticalSpacing) => (
  <Table>
    <Table.Body>
      <Table.Row verticalSpacing={verticalSpacing}>
        <Table.HeaderCell width="177px">
          <Flex
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography component="div" weight="bold" size="md">
              タイトル
            </Typography>
            <Badge color="danger" fontWeight="bold">
              必須
            </Badge>
          </Flex>
        </Table.HeaderCell>
        <Table.Cell colSpan={2}>コンテンツ</Table.Cell>
      </Table.Row>
      <Table.Row verticalSpacing={verticalSpacing}>
        <Table.HeaderCell width="177px">タイトル</Table.HeaderCell>
        <Table.Cell colSpan={2}>コンテンツ</Table.Cell>
      </Table.Row>
      <Table.Row verticalSpacing={verticalSpacing}>
        <Table.HeaderCell rowSpan={2} width="177px">
          タイトル
        </Table.HeaderCell>
        <Table.HeaderCell width="177px">タイトル</Table.HeaderCell>
        <Table.Cell>コンテンツ</Table.Cell>
      </Table.Row>
      <Table.Row verticalSpacing={verticalSpacing}>
        <Table.HeaderCell width="177px">タイトル</Table.HeaderCell>
        <Table.Cell>コンテンツ</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export const Overview = () => (
  <Container>
    <Typography>verticalSpacing = small</Typography>
    {table("small")}
    <Typography>verticalSpacing = medium</Typography>
    {table("medium")}
    <Typography>verticalSpacing = large</Typography>
    {table("large")}
  </Container>
);
