import styled, { ThemeProvider } from "styled-components";
import { DashBox } from "./components/DashBox";
import { Intro } from "./components/Intro";
import { theme } from "./styles/theme";
import data from "./data.json";
import { MainContent } from "./components/MainContent";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { Data } from "./types/data";

function App() {
  const [timeframe, setTimeframe] = useState<keyof Data["timeframes"]>("weekly");
  if (!data) return <div>Loading...</div>;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <MainContent>
          <Intro timeframe={timeframe} onTimeSelect={setTimeframe} />
          {data.map((info) => (
            <DashBox timeframe={timeframe} info={info} />
          ))}
        </MainContent>
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  display: grid;
  min-height: 100vh;
  place-content: center;
  padding: 10px;
`;

export default App;
