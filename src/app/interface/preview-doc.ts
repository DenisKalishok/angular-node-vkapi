import { ISizes } from "./sizes";

/*информация для предварительного просмотра документа*/
export interface IPreviewDoc {

  photo: {
    sizes: ISizes;
  };
  graffiti: {
    src: string;
    width: number;
    height: number;
  };
  audio_msg: {
    duration: number;
    waveform: number[];
    link_ogg: string;
    link_mp3: string;
  };
}
