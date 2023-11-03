"use client";

import Mangalist from "@/components/Animelist/manga";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { getAnimeResponse } from "@/libs/api-libs";
import { useEffect, useState } from "react";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topManga, setTopManga] = useState([]);

  const fetchData = async() => {
    const popularManga = await getAnimeResponse("top/manga", `page=${page}`);
    setTopManga(popularManga);
  }

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`Top Manga #${page}`} />
      <Mangalist api={topManga} />
      <Pagination
        page={page}
        lastPage={topManga.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  );
};

export default Page;
