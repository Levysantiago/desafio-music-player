import { listToCircularList } from "../helpers/list-to-circular-list";
import lifetime from "../assets/songs/lifetime-coldplay.mp3";
import leftright from "../assets/songs/leftright-charlie.mp3";
import memories from "../assets/songs/memories-maroon5.mp3";

export interface ISong {
  title: string;
  bandTitle: string;
  file: any;
  imageName: string;
}

const songRepository = listToCircularList<ISong>([
  {
    bandTitle: "Maroon 5",
    title: "Memories",
    file: memories,
    imageName: "maroon5.webp",
  },
  {
    bandTitle: "Charlie Puth",
    title: "Left and Right",
    file: leftright,
    imageName: "charlie.jpeg",
  },
  {
    bandTitle: "Coldplay",
    title: "Adventure of a Lifetime",
    file: lifetime,
    imageName: "coldplay.jpeg",
  },
]);

export default songRepository;
