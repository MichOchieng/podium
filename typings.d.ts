import { ImageProps } from 'next/image';

export interface Circuit {
  name: string;
  modelName: string;
  length: string;
  raceDistance: string;
  laps: number;
  lapRecord: string;
  lapRecordHolder: string;
  slug: string;
  trackThumbnail: {
    asset: {
      _ref: string;
      _type: 'reference';
    };
    metadata: {
      dimensions: {
        width: number;
        height: number;
      };
    };
    url: string;
  } & ImageProps;
  trackLayout: {
    asset: {
      _ref: string;
      _type: 'reference';
    };
    metadata: {
      dimensions: {
        width: number;
        height: number;
      };
    };
    url: string;
  } & ImageProps;
}
