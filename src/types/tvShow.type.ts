import Rating from "./rating.type";
import Image from "./image.type";

export default interface TvShow {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: Array<string>;
  status: string;
  runtime: number;
  premiered: string;
  officialSite: string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network; 
  webChannel: null;
  externals: Externals;
  image: Image; 
  summary: string;
  updated: number;
  _links: Links;
}

interface Schedule {
  time: string;
  days: Array<string>;
}

interface Externals {
  tvrage: number;
  thetvdb: number;
  imdb: string;
}

interface Links {
  self: object;
  previousepisode: object;
}

interface Network {
  id: number;
  name: string;
  country: object;
}
