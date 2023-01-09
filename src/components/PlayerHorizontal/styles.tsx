import styled from "styled-components";

export const Container = styled.div`
  background-color: #2a2141;
  padding: 30px 28px;
  width: 300px;
  border-radius: 9.6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 15px 0px;

  @media (max-width: 380px) {
    width: 80%;
  }

  @media (max-width: 300px) {
    width: 70%;
  }
`;

export const ImageTitlesContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const TitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 28px;
`;

export const AlbumImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 6px;

  @media (max-width: 300px) {
    width: 50px;
    height: 50px;
  }
`;

export const SoundControlContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const SoundProgressContainer = styled.div`
  margin-top: 30px;
`;

export const SongTitle = styled.span`
  font-family: "Roboto-Bold";
  font-size: 24px;
  color: #e1e1e6;
  display: block;

  @media (max-width: 300px) {
    font-size: 20px;
  }
`;

export const BandTitle = styled.span`
  font-family: "Roboto-Regular";
  font-size: 20px;
  color: #a5a2b0;
  display: block;

  @media (max-width: 300px) {
    font-size: 18px;
  }
`;
