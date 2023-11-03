const { getAnimeResponse } = require("@/libs/api-libs");
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const manga = await getAnimeResponse(`manga/${id}`);

  return (
    <>
      <div className="text-color-secondary dark:text-color-primary">
        <div className="pt-4 px-4">
          <h3 className="text-2xl flex flex-col">
            {manga.data.title}
            <h3 className="text-2xl">
              {manga.data.published.prop.from.year} -
              {manga.data.published.prop.to.year
                ? `${manga.data.published.prop.to.year}`
                : " Now"}
            </h3>
          </h3>
        </div>
        <div className="pt-4 px-4 gap-2 flex overflow-x-auto">
          <div className="w-36 flex flex-col justify-center items-center rounded border dark:border-color-yellow-fun border-color-blue-dark p-2">
            <h3>rank</h3>
            <p>{manga.data.rank}</p>
          </div>
          <div className="w-36 flex flex-col justify-center items-center rounded border dark:border-color-yellow-fun border-color-blue-dark p-2">
            <h3>score</h3>
            <p>{manga.data.score}</p>
          </div>
          <div className="w-36 flex flex-col justify-center items-center rounded border dark:border-color-yellow-fun border-color-blue-dark p-2">
            <h3>popularity</h3>
            <p>{manga.data.popularity}</p>
          </div>
          <div className="w-36 flex flex-col justify-center items-center rounded border dark:border-color-yellow-fun border-color-blue-dark p-2">
            <h3>chapters</h3>
            {manga.data.chapters ? <p>{manga.data.chapters}</p> : <p>-</p>}
          </div>
        </div>
        <div className="pt-4 px-4 flex gap-4 sm:flex-nowrap flex-wrap gap-2">
          <Image
            src={manga.data.images.webp.image_url}
            alt={manga.data.images.jpg.image_url}
            width={250}
            height={250}
            className="w-full rounded object-cover"
          />
          <p className="text-lg text-justify">{manga.data.synopsis}</p>
        </div>
      </div>
    </>
  );
};

export default Page;
