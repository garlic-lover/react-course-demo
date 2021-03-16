import styled, { ThemeProvider } from "styled-components";

import GlobalStyles from "./GlobalStyles";

import Header from "../Header";
import Footer from "../Footer";

const theme = {
  background: "lightblue",
  mainColor: "salmon",
  headerHeight: "84px",
  containerWidth: "94%",
  containerMaxWidth: "900px",
};

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Main>
        <Header />
        <Container>{children}</Container>
        <Footer />
      </Main>
    </ThemeProvider>
  );
}

const Main = styled.main``;

const Container = styled.div`
  padding-top: calc(${(props) => props.theme.headerHeight} + 60px);
  min-height: calc(100vh - ${(props) => props.theme.headerHeight} - 180px);
  width: ${(props) => props.theme.containerWidth};
  max-width: ${(props) => props.theme.containerMaxWidth};
  margin: auto;
`;
