import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;
  width: 100%;
`;

export const ItemsContainer = styled.div`
  display: flex;
  margin-top: 10px;
  width: 100%;
  cursor: pointer;

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
  margin: 5px 10px;
`;

export const SongTitle = styled.span`
  font-family: "Roboto-Regular";
  font-size: 18px;
  color: #e1e1e6;

  @media (max-width: 300px) {
    font-size: 16px;
  }
`;

export const BandTitle = styled.span`
  font-family: "Roboto-Regular";
  font-size: 14px;
  color: #a5a2b0;

  @media (max-width: 300px) {
    font-size: 12px;
  }
`;
