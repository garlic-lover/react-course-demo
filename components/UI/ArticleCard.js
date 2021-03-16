import { useState } from "react";
import styled from "styled-components";

import Newspaper from "./icons/outline/Newspaper";
import ChevronDown from "./icons/outline/ChevronDown";

export default function Article({
  article: { url, title, author, createdAt, updatedAt, notes },
}) {
  const [isOpened, setIsOpened] = useState(false);

  function handleClick(e) {
    e.stopPropagation();
    setIsOpened(!isOpened);
  }

  return (
    <Wrapper isOpened={isOpened}>
      <Top>
        <SubBloc href={url} target="_blank">
          <Icon>
            <Newspaper />
          </Icon>
          <div>
            <ArticleTitle>{title}</ArticleTitle>
            <ArticleDescr>
              {author?.name ? author.name : "unknown author"} •{" "}
              {createdAt?.formatted.split("T")[0]} • modifié le{" "}
              {updatedAt?.formatted.split("T")[0]}
            </ArticleDescr>
          </div>
        </SubBloc>
        <SeeMore isOpened={isOpened} onClick={handleClick}>
          <ChevronDown />
        </SeeMore>
      </Top>
      {isOpened && (
        <Notes hasNotes={notes}>
          {notes ? notes : "Pas de résumé pour ce contenu"}
        </Notes>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-radius: 8px;
  width: 100%;
  border: solid 1px
    ${(props) => (props.isOpened ? "rgba(0, 0, 0, 0.1)" : "transparent")};
  margin-bottom: 12px;
  transition: ease 0.2s;
  &:hover {
    border-color: rgba(0, 0, 0, 0.1);
  }
  & button {
    display: ${(props) => (props.isOpened ? "" : "none")};
  }
  &:hover button {
    display: block;
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Notes = styled.p`
  margin: 6px 0 12px 24px;
  color: rgba(0, 0, 0, ${(props) => (props.hasNotes ? "0.85" : "0.35")});
`;

const SubBloc = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ArticleTitle = styled.h4`
  font-weight: 400;
  padding: 0;
  margin: 0;
  margin-bottom: 4px;
`;

const ArticleDescr = styled.p`
  padding: 0;
  margin: 0;
  font-size: 14px;
  color: grey;
`;

const Icon = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: rgba(0, 191, 192, 0.15);
  margin: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  & svg {
    height: 20px;
  }
`;

const SeeMore = styled.button`
  border: none;
  background: inherit;
  margin: 0px 24px;
  cursor: pointer;
  & svg {
    transition: ease 0.5s;
    transform: rotate(${(props) => (props.isOpened ? "180" : "0")}deg);
    height: 24px;
    filter: invert(55%) sepia(6%) saturate(300%) hue-rotate(185deg)
      brightness(92%) contrast(81%);
  }
  &:focus {
    outline: none;
  }
`;
