import Image from "next/image";
import Link from "next/link";

const Mangalist = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-5 mb-5 dark:text-color-primary text-color-secondary">
      {api.data?.map((manga, index) => {
        return (
          <Link
            href={`/manga/${manga.mal_id}`}
            className="shadow-2xl cursor-pointer dark:bg-color-card-dark bg-color-card-light rounded-lg dark:hover:text-color-yellow-fun hover:text-color-blue-tosca transition-all"
            key={index}
          >
            <Image
              src={manga.images.webp.image_url}
              alt="..."
              width={350}
              height={350}
              className="rounded"
            />
            <h3 className="md:text-xl text-sm font-bold p-1 ml-2">
              {manga.title}
            </h3>
            {manga.score ? (
              <p className="md:text-base text-xs p-1 ml-2 ">
                Score: {manga.score}
              </p>
            ) : null}
          </Link>
        );
      })}
    </div>
  );
};

export default Mangalist;
