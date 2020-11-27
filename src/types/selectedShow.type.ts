import Rating from "./rating.type";
import Image from "./image.type";

export default interface SelectedShow {
  image: Image;
  name: string;
  rating: Rating;
  genres: Array<string>;
  summary: string;
  status: string;
  premiered: string;
  language: string;
}