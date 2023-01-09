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
  position: relative;

  @media (max-width: 380px) {
    width: 80%;
  }

  @media (max-width: 300px) {
    width: 70%;
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
