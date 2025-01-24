import { serve } from "https://deno.land/std@0.155.0/http/server.ts";
import {
  createIconResponse,
  createImgIconResponse,
  createMarkerIconResponse,
} from "./createIconResponse.tsx";

serve(async (request) => {
  const searchParams = new URL(request.url).searchParams;
  if (searchParams.get("img")) {
    const fillColor = `#${searchParams.get("fill") ?? "16A34A"}`;
    const strokeColor = searchParams.get("stroke")
      ? `#${searchParams.get("stroke")}`
      : fillColor;
    const strokeWidth = Number(searchParams.get("strokeWidth") ?? 0.5);
    const iconColor = searchParams.get("iconColor")
      ? `#${searchParams.get("iconColor")}`
      : "white";
    const width = 24;
    const height = 24;
    return createImgIconResponse(
      searchParams.get("img")!,
      fillColor,
      strokeColor,
      strokeWidth,
      iconColor,
      width,
      height
    );
  } else if (searchParams.get("marker")) {
    const fillColor = `#${searchParams.get("fill") ?? "16A34A"}`;
    const strokeColor = searchParams.get("stroke")
      ? `#${searchParams.get("stroke")}`
      : fillColor;
    const strokeWidth = Number(searchParams.get("strokeWidth") ?? 0.5);
    const iconColor = searchParams.get("iconColor")
      ? `#${searchParams.get("iconColor")}`
      : "white";
    const width = 24;
    const height = 24;
    return createMarkerIconResponse(
      searchParams.get("marker")!,
      fillColor,
      strokeColor,
      strokeWidth,
      iconColor,
      width,
      height
    );
  }
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

  const metadata: any = Object.values(icons.icons)[0]; 
  metadata.width ??= icons.width ?? 24;
  metadata.height ??= icons.height ?? 24;
  
  return createIconResponse(
    metadata.body,
    fillColor,
    strokeColor,
    strokeWidth,
    iconColor,
    metadata.width,
    metadata.height
  );
});
