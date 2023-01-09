import React from "react";
import songRepository, { ISong } from "../../repositories/SongRepository";
import {
  AlbumImg,
  BandTitle,
  Container,
  ItemsContainer,
  PlayingIcon,
  SongTitle,
  TitlesContainer,
} from "./styles";

interface IProps {
  selectSong: (song: ISong) => void;
  song: ISong;
}

const SongsList: React.FC<IProps> = (props: IProps) => {
  const { selectSong, song } = props;

  return (
    <Container>
      {songRepository.list.map((songItem, key) => {
        return (
          <ItemsContainer
            key={key}
            onClick={() => {
              selectSong(songItem);
            }}
          >
            <AlbumImg
              src={require(`../../assets/band-images/${songItem.imageName}`)}
            />
            <TitlesContainer>
              <SongTitle selected={songItem.id === song.id}>
                {songItem.title}
              </SongTitle>
              <BandTitle>{songItem.bandTitle}</BandTitle>
              {songItem.id === song.id ? <PlayingIcon /> : null}
            </TitlesContainer>
          </ItemsContainer>
        );
      })}
    </Container>
  );
};

export default SongsList;
