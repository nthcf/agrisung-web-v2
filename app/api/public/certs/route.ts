import { getCertifications } from "@/libs/cms";

export const GET = async () => {
  const { data } = await getCertifications();

  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
