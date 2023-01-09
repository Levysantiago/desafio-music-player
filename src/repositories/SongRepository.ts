import { listToCircularList } from "../helpers/list-to-circular-list";
import fixyou from "../assets/songs/fixyou-coldplay.mp3";
import wonderwall from "../assets/songs/wonderwall-oasis.mp3";

export interface ISong {
  title: string;
  bandTitle: string;
  file: any;
}

const songRepository = listToCircularList<ISong>([
  {
    bandTitle: "Coldplay",
    title: "Fix You",
    file: fixyou,
  },
  {
    bandTitle: "Oasis",
    title: "Wonderwall",
    file: wonderwall,
  },
]);

export default songRepository;
