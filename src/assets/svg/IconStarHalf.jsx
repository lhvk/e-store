// icon:star-half | Ionicons https://ionicons.com/ | Ionic Framework
import * as React from "react";

export function IconStarHalf(props) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
      />
      <path d="M256 48v316L118 464l54-160-140-96h172l52-160z" />
    </svg>
  );
}
