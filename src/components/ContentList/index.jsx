import Image from "next/image";
import Link from "next/link";

const Animelist = ({ api }) => {
  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-4 px-5 ">
      {api.data?.map((anime, index) => {
        return (
          <Link
            href={`/anime/${anime.mal_id}`}
            className="relative shadow-2xl cursor-pointer rounded-lg text-color-primary"
            key={index}
          >
            <div className="absolute md:text-base text-xs z-10 ">
              <h3 className=" font-bold p-1 ml-2 mt-3">{anime.title}</h3>
              {anime.score ? (
                <p className=" p-1 ml-2 ">Score: {anime.score}</p>
              ) : null}
            </div>
            <Image
              src={anime.images.webp.image_url}
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

export default Animelist;
