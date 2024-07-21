import { Theme } from ".";
import { BaseElementProps } from "./types";


export function getRestPropsStyle(props: BaseElementProps) {
  return {
    ...(props.m && { margin: Theme.margin[props.m] }),
    ...(props.mt && { marginTop: Theme.margin[props.mt] }),
    ...(props.mb && { marginBottom: Theme.margin[props.mb] }),
    ...(props.mr && { marginRight: Theme.margin[props.mr] }),
    ...(props.ml && { marginLeft: Theme.margin[props.ml] }),
    ...(props.mh && { marginHorizontal: Theme.margin[props.mh] }),
    ...(props.mv && { marginVertical: Theme.margin[props.mv] }),

    ...(props.p && { margin: Theme.padding[props.p] }),
    ...(props.pt && { marginTop: Theme.padding[props.pt] }),
    ...(props.pb && { marginBottom: Theme.padding[props.pb] }),
    ...(props.pr && { marginRight: Theme.padding[props.pr] }),
    ...(props.pl && { marginLeft: Theme.padding[props.pl] }),
    ...(props.ph && { marginHorizontal: Theme.padding[props.ph] }),
    ...(props.pv && { marginVertical: Theme.padding[props.pv] }),
  };
}
