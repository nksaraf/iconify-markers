import { serve } from "https://deno.land/std@0.155.0/http/server.ts";
import { createIconResponse } from "./createIconResponse.tsx";

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
  return createIconResponse(
    icons.icons[icon].body,
    fillColor,
    strokeColor,
    strokeWidth
  );
}

serve(GET);
