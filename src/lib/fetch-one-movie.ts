import { MovieData } from "@/types";

export default async function fetchOneMovie(
  id: number
): Promise<MovieData | null> {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/movie/${id}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}
