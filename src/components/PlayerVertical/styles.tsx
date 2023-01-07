import styled from "styled-components";

export const Container = styled.div`
  background-color: #2a2141;
  padding: 50px 38px;
  width: 200px;
  border-radius: 9.6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const AlbumImg = styled.img`
  width: 190px;
  height: 190px;
`;

export const SongTitle = styled.span`
  font-family: "Roboto-Bold";
  font-size: 24px;
  color: #e1e1e6;
  margin-top: 30px;
`;

export const BandTitle = styled.span`
  font-family: "Roboto-Regular";
  font-size: 20px;
  color: #a5a2b0;
`;

export const SoundControlContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
`;

export const SoundProgressContainer = styled.div`
  margin-top: 30px;
`;