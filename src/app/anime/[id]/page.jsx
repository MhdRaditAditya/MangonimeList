import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);

  return (
    <>
      <div className="text-color-secondary dark:text-color-primary">
        <div className="pt-4 px-4">
          <h3 className="md:text-2xl text-base">
            {anime.data.title} - {anime.data.year}
          </h3>
          <h3 className="md:text-xl text-sm">
            score: {anime.data.score} [ by {anime.data.scored_by} people ]
          </h3>
        </div>
        <div className="pt-4 px-4 gap-2 flex overflow-x-auto md:text-base text-xs">
          <div className="w-36 flex flex-col justify-center items-center rounded border dark:border-color-yellow-fun border-color-blue-dark p-2">
            <h3>rank</h3>
            <p>{anime.data.rank}</p>
          </div>
          <div className="w-36 flex flex-col justify-center items-center rounded border dark:border-color-yellow-fun border-color-blue-dark p-2">
            <h3>score</h3>
            <p>{anime.data.score}</p>
          </div>
          <div className="w-36 flex flex-col justify-center items-center rounded border dark:border-color-yellow-fun border-color-blue-dark p-2">
            <h3>popularity</h3>
            {anime.data.popularity ? <p>{anime.data.popularity}</p> : "-"}
          </div>
          <div className="w-36 flex flex-col justify-center items-center rounded border dark:border-color-yellow-fun border-color-blue-dark p-2">
            <h3>episode</h3>
            {anime.data.episodes ? <p>{anime.data.episodes}</p> : "-"}
          </div>
          <div className="w-36 flex flex-col justify-center items-center rounded border dark:border-color-yellow-fun border-color-blue-dark p-2">
            <h3>type</h3>
            <p>{anime.data.type}</p>
          </div>
          <div className="w-36 flex flex-col justify-center items-center rounded border dark:border-color-yellow-fun border-color-blue-dark p-2">
            <h3>source</h3>
            <p>{anime.data.source}</p>
          </div>
          <div className="w-36 flex flex-col justify-center items-center rounded border dark:border-color-yellow-fun border-color-blue-dark p-2">
            <h3>season</h3>
            {anime.data.season ? <p>{anime.data.season}</p> : "-"}
          </div>
        </div>
        <div className="pt-4 px-4 flex gap-4 sm:flex-nowrap flex-wrap gap-2">
          <Image
            src={anime.data.images.webp.image_url}
            alt={anime.data.images.jpg.image_url}
            width={250}
            height={250}
            className="w-72 rounded p-2"
          />
          <div className="flex flex-col md:ml-0 mx-1">
            <h3 className="md:text-xl text-sm font-bold mt-3">
              {anime.data.rating}
            </h3>
            <p className="md:text-base text-xs text-justify mt-5">
              {anime.data.synopsis}
            </p>
          </div>
        </div>
      </div>
      <VideoPlayer youtubeId={anime.data.trailer.youtube_url} />
    </>
  );
};

export default Page;
