import { Theme } from ".";

export type ColorTypes = keyof typeof Theme.color;
export type MarginTypes = keyof typeof Theme.margin;
export type PaddingTypes = keyof typeof Theme.padding;

export type BaseElementProps = {
  m?: MarginTypes;
  mr?: MarginTypes;
  ml?: MarginTypes;
  mt?: MarginTypes;
  mb?: MarginTypes;
  mh?: MarginTypes;
  mv?: MarginTypes;
  p?: PaddingTypes;
  pr?: PaddingTypes;
  pl?: PaddingTypes;
  pt?: PaddingTypes;
  pb?: PaddingTypes;
  ph?: PaddingTypes;
  pv?: PaddingTypes;
};
