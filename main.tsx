import React, { createElement } from "https://esm.sh/react@18.2.0";
import { ImageResponse } from "https://deno.land/x/og_edge/mod.ts";
import { serve } from "https://deno.land/std@0.155.0/http/server.ts";
import { parse } from "npm:node-html-parser";

function Marker({
  children,
  strokeColor = "currentColor",
  fillColor = "currentColor",
  strokeWidth = 0.5,
}) {
  return (
    <div tw="flex flex-row mx-auto relative bg-transparent w-[128px] h-[128px] justify-center items-center">
      <svg
        height={128}
        viewBox="0 0 22 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          d="M11 27.333c-3.578-3.044-6.25-5.872-8.016-8.482C1.218 16.24.334 13.823.334 11.6c0-3.333 1.072-5.989 3.217-7.967C5.696 1.656 8.179.667 11 .667c2.822 0 5.306.989 7.45 2.966 2.146 1.978 3.218 4.634 3.217 7.967 0 2.222-.884 4.64-2.651 7.25-1.767 2.612-4.44 5.44-8.016 8.483z"
          fill={fillColor}
        />
      </svg>
      {children}
      {/* <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    tw="absolute left-[16px] top-[40px] w-[70px] h-[15px]"
    y="0px"
    viewBox="0 0 180 40"
    xmlSpace="preserve"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="black"
      d="M135.5 29.181c1.945-10.229 13.989-15.416 22.876-14.922v.001c3.434.194 6.395 1.236 8.114 3.166l.012-.012a.12.12 0 01.011.012c.706-.748 1.413-1.495 2.126-2.237.416-.433 1.605-.293 2.661-.102 1.195.217 2.472.711 3.289.712.833 0 2.801-.604 4.673-.885 1.871-.28 3.646-.237 3.341.519l-1.675 4.15h.032l-5.475 13.542c-1.09 2.697 3.179 1.982 9.109-4.291 1.016.666 1.478.791 2.493 3.311-5.066 4.354-9.902 7.482-16.605 9.791-6.027 2.078-10.467-.93-11.864-5.943-8.563 8.02-20.494 7.934-23.919-1.113-5.567 2.752-12.222 5.676-14.982 6.473-2.164.625-4.134 1.064-5.982 1.076-2.965.02-6.198-2.74-5.178-6.801-4.91 2.174-8.81 3.592-14.436 5.529-6.027 2.078-9.494-.15-10.892-5.164-8.565 8.021-20.501 7.934-23.922-1.121-3.363 1.619-8.017 3.998-12.3 5.676-6.889 3.096-14.962 2.477-20.993-3.838l1.972-3.104c2.839 3.02 6.302 2.85 9.016.398 2.89-2.611 4.724-7.646 3.409-11.771-.578-1.813-2.622-3.205-6.456-2.951l1.187-3.161c3.92-.139 6.986-.662 8.678-3.126 2.376-3.461 2.417-8.794-2.681-8.65-.901.025-1.961.217-3.195.614-.883 2.613-2.439 5.697-3.691 8.937-2.857 7.393-6.057 15.599-9.774 20.888-4.429 6.301-9.165 7.547-12.981 7.291-3.992-.27-7.122-1.479-11.497-5.424-.021-1.674.146-2.402.464-4.48 1.531 2.156 6.807 4.451 8.517 1.943 3.826-5.615 8.036-16.445 11.177-23.436-2.839.942-5.474 2.67-9.196 5.251.044-.428-1.242-1.366-1.191-2.625C15.734 6.428 26.294 2.224 33.405.721c10.868-2.297 22.53 1.044 24.28 7.913 1.167 4.581-4.236 8.875-9.313 9.495 2.922 1.72 6.023 4.707 6.8 8.361.392 1.844.284 3.824-.3 5.719 1.708-.793 3.772-1.834 5.132-2.387 2.143-14.696 24.854-19.423 31.121-12.396l2.148-2.237c.416-.433 1.605-.293 2.66-.102 1.195.217 2.473.711 3.29.712.833 0 2.801-.604 4.672-.885 1.872-.28 3.646-.237 3.341.519l-7.139 17.693c-1.614 3.994 10.238-3.084 10.937-3.467l5.092-10.823-5.244.073.942-4.448 5.794.003c.953-1.265 1.235-2.784 2.5-3.736 1.716-1.292 5.63-.598 7.429-1.772 1.555-1.016 2.75-2.546 4.187-4.902 1.241-2.036 5.756-1.515 4.893.424l-4.04 10.104 5.105-.048c2.426.127.343 4.157-2.415 4.188l-4.218.077-4.898 12.682c-1.608 4.155 4.649.46 9.339-2.3zm-46.899-8.677c-.56-1.925-2.234-2.442-3.682-2.288-3.429.366-6.742 4.172-8.442 6.82-2.724 4.244-2.078 10.496 2.252 9.334 4.581-1.232 10.685-11.07 9.872-13.866zm75.389 0c-.561-1.925-2.234-2.442-3.683-2.288-3.429.366-6.741 4.172-8.442 6.82-2.724 4.244-2.077 10.496 2.252 9.334 4.582-1.232 10.685-11.07 9.873-13.866z"
    />
  </svg> */}
      {/* <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.988 5.438T12 22Z"
    ></path>
  </svg> */}
      {/* Hello */}
    </div>
  );
}

function createElementFromNode(node) {
  return createElement(
    node.tagName.toLowerCase(),
    node.attributes,
    node.childNodes.map(createElementFromNode)
  );
}

function htmlToJSX(html) {
  const root = parse(html);
  return createElementFromNode(root.childNodes[0]);
}

async function GET(request) {
  const searchParams = new URL(request.url).searchParams;
  const [set, icon] = (searchParams.get("icon") ?? "mdi:account-box").split(
    ":"
  );
  const icons = await fetch(
    `https://api.iconify.design/${set}.json?icons=${icon}`
  ).then((res) => res.json());
  const fillColor = `#${searchParams.get("fill") ?? "16A34A"}`;
  const strokeColor = searchParams.get("stroke")
    ? `#${searchParams.get("stroke")}`
    : fillColor;
  const strokeWidth = Number(searchParams.get("strokeWidth") ?? 0.5);
  const element = htmlToJSX(icons.icons[icon].body);
  return new ImageResponse(
    (
      <Marker
        fillColor={fillColor}
        strokeColor={strokeColor}
        strokeWidth={strokeWidth}
      >
        <div tw="absolute w-[128px] h-[128px] flex justify-center items-center text-white -top-4">
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

serve(GET);
