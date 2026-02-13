
export type QRType = 'text' | 'url' | 'number' | 'symbol';

export interface QRSettings {
  content: string;
  fgColor: string;
  bgColor: string;
  size: number;
  margin: number;
  errorCorrectionLevel: 'L' | 'M' | 'Q' | 'H';
}

export enum ExportFormat {
  PNG = 'png',
  JPG = 'jpg',
  PDF = 'pdf'
}
