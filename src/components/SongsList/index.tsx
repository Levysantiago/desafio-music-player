import React from "react";
import songRepository, { ISong } from "../../repositories/SongRepository";
import {
  AlbumImg,
  BandTitle,
  Container,
  ItemsContainer,
  SongTitle,
  TitlesContainer,
} from "./styles";

interface IProps {
  selectSong: (song: ISong) => void;
}

const SongsList: React.FC<IProps> = (props: IProps) => {
  const { selectSong } = props;

  return (
    <Container>
      {songRepository.list.map((song, key) => {
        return (
          <ItemsContainer
            key={key}
            onClick={() => {
              selectSong(song);
            }}
          >
            <AlbumImg
              src={require(`../../assets/band-images/${song.imageName}`)}
            />
            <TitlesContainer>
              <SongTitle>{song.title}</SongTitle>
              <BandTitle>{song.bandTitle}</BandTitle>
            </TitlesContainer>
          </ItemsContainer>
        );
      })}
    </Container>
  );
};

export default SongsList;
