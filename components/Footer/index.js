import styled from "styled-components";

export default function Footer() {
  return (
    <Wrapper>
      <p>The footer</p>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  width: 100%;
  height: 120px;
  border-color: ${(props) => props.theme.mainColor};
  border-top: solid 1px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
