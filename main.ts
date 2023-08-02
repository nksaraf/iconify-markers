import { serve } from "https://deno.land/std@0.155.0/http/server.ts";
import { createIconResponse } from "./createIconResponse.tsx";

async function GET(request) {
  const searchParams = new URL(request.url).searchParams;
  const [set, icon] = (searchParams.get("icon") ?? "ci:dot-05-xl").split(":");
  const icons = await fetch(
    `https://api.iconify.design/${set}.json?icons=${icon}`
  ).then((res) => res.json());
  const fillColor = `#${searchParams.get("fill") ?? "16A34A"}`;
  const strokeColor = searchParams.get("stroke")
    ? `#${searchParams.get("stroke")}`
    : fillColor;
  const strokeWidth = Number(searchParams.get("strokeWidth") ?? 0.5);
  const iconColor = searchParams.get("iconColor")
    ? `#${searchParams.get("iconColor")}`
    : "white";
  return createIconResponse(
    icons.icons[icon].body,
    fillColor,
    strokeColor,
    strokeWidth,
    iconColor
  );
}

serve(GET);
