import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);

  return (
    <>
      <div className="text-color-secondary dark:text-color-primary">
        <div className="pt-4 px-4">
          <h3 className="text-2xl">
            {anime.data.title} - {anime.data.year}
          </h3>
        </div>
        <div className="pt-4 px-4 gap-2 flex overflow-x-auto">
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
            <p>{anime.data.popularity}</p>
          </div>
          <div className="w-36 flex flex-col justify-center items-center rounded border dark:border-color-yellow-fun border-color-blue-dark p-2">
            <h3>episode</h3>
            <p>{anime.data.episodes}</p>
          </div>
        </div>
        <div className="pt-4 px-4 flex gap-4 sm:flex-nowrap flex-wrap gap-2">
          <Image
            src={anime.data.images.webp.image_url}
            alt={anime.data.images.jpg.image_url}
            width={250}
            height={250}
            className="w-full rounded object-cover"
          />
          <p className="text-lg text-justify">{anime.data.synopsis}</p>
        </div>
      </div>
      <VideoPlayer youtubeId={anime.data.trailer.youtube_url} />
    </>
  );
};

export default Page;
