import { ReactNode, useEffect, useState } from "react";
import SearchableLayout from "./components/searchable-layout";
import MovieItem from "./components/movie-item";
import style from "./search.module.css";
import fetchMovies from "@/lib/fetch-movies";
import { MovieData } from "@/types";
import { useRouter } from "next/router";
import Head from "next/head";

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const q = context.query.q;
//   const movies = await fetchMovies(q as string);

//   return {
//     props: {
//       movies,
//     },
//   };
// };

export default function Page() {
  const [movies, setMovies] = useState<MovieData[]>([]);

  const router = useRouter();
  const q = router.query.q;

  const fetchSearchMovies = async () => {
    const data = await fetchMovies(q as string);
    setMovies(data);
  };

  useEffect(() => {
    if (q) {
      fetchSearchMovies();
    }
  }, [q]);

  return (
    <>
      <Head>
        <title>{q} : 한입 씨네마 검색</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="한입 씨네마" />
        <meta
          property="og:description"
          content="한입 씨네마에 등록된 영화들을 만나보세요"
        />
      </Head>
      <div className={style.search_container}>
        {movies.map((movie) => (
          <MovieItem key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
