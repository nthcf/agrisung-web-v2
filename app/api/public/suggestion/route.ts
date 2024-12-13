import { getSuggestion } from "@/libs/cms";

export const GET = async () => {
  const { data } = await getSuggestion();

  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
