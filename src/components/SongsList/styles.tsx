import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 28px;
  width: 100%;
`;

export const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  width: 100%;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: #1a122c;
  }
`;

export const TitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0px;
`;

export const AlbumImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 6px;
  margin: 5px 15px;
`;

export const SongTitle = styled.span(
  (props: { selected: boolean }) => `
  font-family: "Roboto-Regular";
  font-size: 16px;
  color: ${props.selected ? "#9B74FE" : "#e1e1e6"};

  @media (max-width: 300px) {
    font-size: 14px;
  }
`
);

export const BandTitle = styled.span`
  font-family: "Roboto-Regular";
  font-size: 12px;
  color: #a5a2b0;
`;

export const PlayingIcon = styled.img.attrs({
  src: require("../../assets/playing.svg").default,
  alt: "Play icon",
})`
  position: absolute;
  right: 15px;
  top: 35%;
  width: 15px;
  height: 15px;
`;
