import { getCountries } from "@/libs/cms";

export const GET = async () => {
  const { data } = await getCountries();

  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
