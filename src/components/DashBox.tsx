import styled from "styled-components";
import { ReactComponent as IconMore } from "../styles/images/icon-ellipsis.svg";
import { Data } from "../types/data";
import { InnerBox, OuterBox } from "./shared/Box";
import { Flex } from "./shared/Flex";
const reqSvgs = (require as any).context("../styles/images", true, /\.svg$/);

const toKebab = (str: string) => {
  return str.replace(/\s+/g, "-").toLowerCase();
};

interface Props {
  info: Data;
  timeframe: keyof Data["timeframes"];
}

export function DashBox({ timeframe, info }: Props) {
  const { title, timeframes } = info;
  const Icon = reqSvgs(`./icon-${toKebab(title)}.svg`).default;

  return (
    <StyledOuterBox title={title} icon={Icon}>
      <StyledInnerBox>
        <Flex column justifyContent="space-between" grow="1">
          <Header>
            <h2>{title}</h2>
            <IconMore />
          </Header>
          <Current>{timeframes[timeframe].current}hrs</Current>
          <p>
            Last {timeframe.slice(0, -2)} - {timeframes[timeframe].previous}hrs
          </p>
        </Flex>
      </StyledInnerBox>
    </StyledOuterBox>
  );
}

const StyledOuterBox = styled(OuterBox)<{ icon: string }>`
  background-image: url(${(props) => props.icon});
  background-repeat: no-repeat;
  background-position: top -7px right 12px;
`;

const StyledInnerBox = styled(InnerBox)`
  top: 35px;
  display: flex;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Current = styled.p`
  font-size: 3.25em;
  color: #fff;
  font-weight: 300;
`;
