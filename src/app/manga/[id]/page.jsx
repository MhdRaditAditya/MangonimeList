const { getAnimeResponse } = require("@/libs/api-libs");
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const manga = await getAnimeResponse(`manga/${id}`);

  return (
    <>
      <div className="text-color-secondary dark:text-color-primary">
        <div className="pt-4 px-4">
          <h3 className="md:text-2xl text-base flex flex-row gap-4">
            {manga.data.title} ({manga.data.title_japanese})
            <h3 className="md:text-xl text-sm">
              {manga.data.published.prop.from.year} -
              {manga.data.published.prop.to.year
                ? `${manga.data.published.prop.to.year}`
                : " Now"}
            </h3>
          </h3>
          <h3 className="md:text-xl text-sm">
            score: {manga.data.score} [ by {manga.data.scored_by} people ]
          </h3>
        </div>
        <div className="pt-4 px-4 gap-2 flex overflow-x-auto">
          <div className="w-36 flex flex-col justify-center items-center rounded border dark:border-color-yellow-fun border-color-blue-dark p-2">
            <h3>type</h3>
            <p>{manga.data.type}</p>
          </div>
          <div className="w-36 flex flex-col justify-center items-center rounded border dark:border-color-yellow-fun border-color-blue-dark p-2">
            <h3>rank</h3>
            {manga.data.rank ? <p>{manga.data.rank}</p> : "-"}
          </div>
          <div className="w-36 flex flex-col justify-center items-center rounded border dark:border-color-yellow-fun border-color-blue-dark p-2">
            <h3>score</h3>
            {manga.data.score ? <p>{manga.data.score}</p> : "-"}
          </div>
          <div className="w-36 flex flex-col justify-center items-center rounded border dark:border-color-yellow-fun border-color-blue-dark p-2">
            <h3>popularity</h3>
            {manga.data.popularity ? <p>{manga.data.popularity}</p> : "-"}
          </div>
          <div className="w-36 flex flex-col justify-center items-center rounded border dark:border-color-yellow-fun border-color-blue-dark p-2">
            <h3>volumes</h3>
            {manga.data.volumes ? <p>{manga.data.volumes}</p> : <p>-</p>}
          </div>
          <div className="w-36 flex flex-col justify-center items-center rounded border dark:border-color-yellow-fun border-color-blue-dark p-2">
            <h3>chapters</h3>
            {manga.data.chapters ? <p>{manga.data.chapters}</p> : <p>-</p>}
          </div>
          <div className="w-36 flex flex-col justify-center items-center rounded border dark:border-color-yellow-fun border-color-blue-dark p-2">
            <h3>status</h3>
            {manga.data.status ? <p>{manga.data.status}</p> : <p>-</p>}
          </div>
        </div>
        <div className="pt-4 px-4 flex gap-4 sm:flex-nowrap flex-wrap gap-2">
          <Image
            src={manga.data.images.webp.image_url}
            alt={manga.data.images.jpg.image_url}
            width={250}
            height={250}
            className="w-72 rounded object-cover"
          />
          <p className="md:text-base text-xs text-justify">
            {manga.data.synopsis}
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;
