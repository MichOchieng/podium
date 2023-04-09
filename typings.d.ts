import { ImageProps } from 'next/image';

export interface Slug {
    current: string
}

export interface Circuit {
  name: string;
  modelName: string;
  length: string;
  raceDistance: string;
  laps: number;
  lapRecord: string;
  lapRecordHolder: string;
  slug: Slug;
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
