import styled from "styled-components";

export default function Button({ children, onButtonClicked, isClickable }) {
  return (
    <Wrapper
      onClick={() => {
        if (isClickable) {
          onButtonClicked();
        }
      }}
      isClickable={isClickable}
    >
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  padding: 6px 12px;
  border: solid 1px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => (props.isClickable ? "white" : "grey")};
  transition: ease 0.2s;
  &:hover {
    background-color: ${(props) => (props.isClickable ? "lightgrey" : "grey")};
    border-color: ${(props) => (props.isClickable ? "lightgrey" : "grey")};
    color: ${(props) => (props.isClickable ? "white" : "")};
  }
  &:active {
    transform: translateY(1px);
    outline: none;
  }
  &:focus {
    outline: none;
    background-color: ${(props) => (props.isClickable ? "grey" : "grey")};
    color: ${(props) => (props.isClickable ? "white" : "")};
  }
  @media (max-width: 1040px) {
    background-color: lightcoral !important;
  }
`;
