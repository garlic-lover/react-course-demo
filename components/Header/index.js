import styled from "styled-components";

export default function Header() {
  return (
    <Wrapper>
      <h1>The header</h1>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  position: fixed;
  height: ${(props) => props.theme.headerHeight};
  background-color: ${(props) => props.theme.background};
  width: 100%;
  border-bottom: solid 1px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
