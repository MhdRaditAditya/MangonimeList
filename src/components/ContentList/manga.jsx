import Image from "next/image";
import Link from "next/link";

const Mangalist = ({ api }) => {
  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-4 px-5 mb-5">
      {api.data?.map((manga, index) => {
        return (
          <Link
            href={`/manga/${manga.mal_id}`}
            className="relative shadow-2xl cursor-pointer rounded-lg transition-all text-color-primary"
            key={index}
          >
            <div className="absolute md:text-base text-xs z-10 text-transparent">
              <h3 className=" font-bold p-1 ml-2 mt-3">{manga.title}</h3>
              {manga.score ? (
                <p className=" p-1 ml-2 ">Score: {manga.score}</p>
              ) : <p className=" p-1 ml-2 ">Score: -</p>}
            </div>
            <Image
              src={manga.images.webp.image_url}
              alt="..."
              width={350}
              height={350}
              className="rounded z-0 brightness-25 hover:brightness-80"
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Mangalist;
