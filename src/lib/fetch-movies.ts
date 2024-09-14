import { MovieData } from "@/types";

export default async function fetchMovies(q?: string): Promise<MovieData[]> {
  let url = `${process.env.NEXT_PUBLIC_API_URL}/movie`;

  if (q) url += `/search?q=${q}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
