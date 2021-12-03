import { Box, InnerBox, OuterBox } from "./shared/Box";
import ImageJeremy from "../styles/images/image-jeremy.png";
import { Avatar } from "./shared/Avatar";
import styled from "styled-components";
import { colors } from "../styles/colors";

interface Props {
  timeframe: string;
  onTimeSelect: Function;
}
export function Intro({ timeframe, onTimeSelect }: Props) {
  return (
    <Styles>
      <OuterBox style={{ display: "flex", minWidth: "200px" }}>
        <InnerBox style={{ bottom: "180px" }} background={colors.blue}>
          <StyledAvatar src={ImageJeremy} alt="Jeremy" />
          <p>Report for</p>
          <Username>Jeremy Robson</Username>
        </InnerBox>
        <ul>
          <TimeFrame isActive={timeframe === "daily"} onClick={() => onTimeSelect("daily")}>
            Daily
          </TimeFrame>
          <TimeFrame isActive={timeframe === "weekly"} onClick={() => onTimeSelect("weekly")}>
            Weekly
          </TimeFrame>
          <TimeFrame isActive={timeframe === "monthly"} onClick={() => onTimeSelect("monthly")}>
            Monthly
          </TimeFrame>
        </ul>
      </OuterBox>
    </Styles>
  );
}

const Styles = styled.header`
  display: flex;
  grid-row: 1/3;
  min-height: 550px;
  ul {
    margin-top: auto;
  }
`;

const StyledAvatar = styled(Avatar)`
  margin-bottom: 40px;
`;

const TimeFrame = styled.li<{ isActive?: boolean }>`
  font-weight: 400;
  color: ${(props) => (props.isActive ? "#fff" : "inherit")};
  cursor: pointer;
  padding: 10px 0;
`;

const Username = styled.h2`
  font-size: 2.5em;
  font-weight: 300;
  max-width: 220px;
  line-height: 1.25;
`;
