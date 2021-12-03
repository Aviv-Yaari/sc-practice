import React from "react";
import styled from "styled-components";

interface Props {
  column?: boolean;
  justifyContent?: React.CSSProperties["justifyContent"];
  alignItems?: React.CSSProperties["alignItems"];
  wrap?: React.CSSProperties["flexWrap"];
  grow?: React.CSSProperties["flexGrow"];
}

export const Flex = styled.div<Props>`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-wrap: ${(props) => props.wrap};
  flex-grow: ${(props) => props.grow};
`;
