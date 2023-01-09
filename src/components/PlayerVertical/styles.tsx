import styled from "styled-components";

export const Container = styled.div`
  background-color: #2a2141;
  padding: 50px 38px;
  width: 200px;
  height: 100%;
  border-radius: 9.6px;
  display: flex;
  flex-direction: column;
  margin: 15px 0px;
  position: relative;

  @media (max-width: 300px) {
    width: 70%;
    padding: 30px 28px;
  }
`;

export const HiddenContent = styled.div`
  visibility: hidden;
`;

export const MusicList = styled.div`
  width: 100%;
  height: 0px;
  background-color: #221939;
  position: absolute;
  bottom: 0px;
  left: 0px;
  border-radius: 9.6px;

  transition: height 0.3s;
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const AlbumImg = styled.img`
  width: 190px;
  height: 190px;
  border-radius: 6px;
`;

export const QueueIcon = styled.img.attrs({
  src: require("../../assets/queue.svg").default,
  alt: "Queue icon.",
})`
  width: 25px;
  height: 25px;
  position: absolute;
  right: 20px;
  top: 10px;
  cursor: pointer;
`;

export const CloseIcon = styled.img.attrs({
  src: require("../../assets/close.svg").default,
  alt: "Close icon.",
})`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 20px;
  top: 10px;
  cursor: pointer;
`;

export const SongTitle = styled.span`
  font-family: "Roboto-Bold";
  font-size: 24px;
  color: #e1e1e6;
  margin-top: 30px;

  @media (max-width: 300px) {
    font-size: 20px;
  }
`;

export const BandTitle = styled.span`
  font-family: "Roboto-Regular";
  font-size: 20px;
  color: #a5a2b0;

  @media (max-width: 300px) {
    font-size: 18px;
  }
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
