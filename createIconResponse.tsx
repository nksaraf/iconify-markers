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
  iconColor: string,
  width: number,
  height: number
) {
  const element = htmlToJSX(icon);
  console.log(element, icon);
  console.log(width, height);

  const widthRem = 4;
  const heightRem = widthRem * (height / width);
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
            width={widthRem + "rem"}
            height={heightRem + "rem"}
            viewBox={`0 0 ${width} ${height}`}
          >
            {element}
          </svg>
        </div>
      </Marker>
    ),
    {
      height: 128,
      width: 128,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers":
          "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With",
        "Access-Control-Allow-Methods": "POST, OPTIONS, GET, PUT, DELETE",
      },
    }
  );
}

export function createImgIconResponse(
  img: string,
  fillColor: string,
  strokeColor: string,
  strokeWidth: number,
  iconColor: string,
  width: number,
  height: number
) {
  // const element = htmlToJSX(icon);
  // console.log(element, icon);
  console.log(width, height);

  const widthRem = 4;
  const heightRem = widthRem * (height / width);
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
          <img src={img} tw="w-[3rem] h-[3rem]" />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width={widthRem + "rem"}
            height={heightRem + "rem"}
            viewBox={`0 0 ${width} ${height}`}
          >
            {element}
          </svg> */}
        </div>
      </Marker>
    ),
    {
      height: 128,
      width: 128,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers":
          "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With",
        "Access-Control-Allow-Methods": "POST, OPTIONS, GET, PUT, DELETE",
      },
    }
  );
}

export function createMarkerIconResponse(
  text: string,
  fillColor: string,
  strokeColor: string,
  strokeWidth: number,
  iconColor: string,
  width: number,
  height: number
) {
  const widthRem = 4;
  const heightRem = widthRem * (height / width);
  const radius = Math.min(width, height) / 2; // Ensure the circle fits within the SVG

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
            width={widthRem + "rem"}
            height={heightRem + "rem"}
            viewBox={`0 0 ${width} ${height}`}
          >
            <circle
              cx={width / 2}
              cy={height / 2}
              r={radius}
              fill={iconColor}
            />
            <span
              tw="relative"
              style={{
                color: fillColor,
                fontSize: "35px",
                margin: "auto",
              }}
            >
              {text}
            </span>
          </svg>
        </div>
      </Marker>
    ),
    {
      height: 128,
      width: 128,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers":
          "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With",
        "Access-Control-Allow-Methods": "POST, OPTIONS, GET, PUT, DELETE",
      },
    }
  );
}
