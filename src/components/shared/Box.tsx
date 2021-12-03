import styled from "styled-components";
import { colors } from "../../styles/colors";

interface Props {
  background?: React.CSSProperties["backgroundColor"];
}

export const Box = styled.section<Props>`
  border-radius: 10px;
  padding: 40px;
  background: ${(props) => {
    if (props.title) return props.theme.colors.boxes[props.title];
    if (props.background) return props.background;
    return colors.blueDark2;
  }};
`;

export const OuterBox = styled(Box)`
  position: relative;
`;

export const InnerBox = styled(Box)`
  position: absolute;
  inset: 0;
`;
