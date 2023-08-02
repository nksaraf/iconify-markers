import React, { createElement as h } from "https://esm.sh/react@18.2.0";
import { ImageResponse } from "https://deno.land/x/og_edge/mod.ts";
import { parse } from "https://esm.sh/node-html-parser";
import { Marker } from "./Marker.tsx";

function createElementFromNode(node) {
  return h(
    node.tagName.toLowerCase(),
    node.attributes,
    node.childNodes.map(createElementFromNode)
  );
}

export function htmlToJSX(html) {
  const root = parse(html);
  return createElementFromNode(root.childNodes[0]);
}

export function createIconResponse(
  icon: string,
  fillColor: string,
  strokeColor: string,
  strokeWidth: number,
  iconColor: string
) {
  const element = htmlToJSX(icon);
  return new ImageResponse(
    (
      <Marker
        fillColor={fillColor}
        strokeColor={strokeColor}
        strokeWidth={strokeWidth}
      >
        <div
          tw="absolute w-[128px] h-[128px] flex justify-center items-center -top-4"
          style={{
            color: iconColor,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4em"
            height="4em"
            viewBox="0 0 24 24"
          >
            {element}
          </svg>
        </div>
      </Marker>
    ),
    {
      height: 128,
      width: 128,
    }
  );
}
