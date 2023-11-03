import Animelist from "@/components/Animelist";
import Header from "@/components/Animelist/header";
import Mangalist from "@/components/Animelist/manga";
import {
  generateRandomData,
  getAnimeResponse,
  getNestedAnimeResponse,
} from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  const topManga = await getAnimeResponse("top/manga", "limit=8");
  let recommendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recommendedAnime = generateRandomData(recommendedAnime, 6);

  let recommendedManga = await getNestedAnimeResponse(
    "recommendations/manga",
    "entry"
  );
  recommendedManga = generateRandomData(recommendedManga, 6);

  return (
    
    <>
      <section className="md:mt-5 md:mx-3 mb-10">
        <Header
          title="Most Popular Anime⭐"
          linkTitle="View all"
          linkHref="/PopularAnime"
        />
        <Animelist api={topAnime} />
      </section>
      <section className="md:mt-5 md:mx-3 mb-10">
        <Header title="Recommendation Anime🚀" />
        <Animelist api={recommendedAnime} />
      </section>
      <section className="md:mt-5 md:mx-3 mb-10">
        <Header
          title="Most Popular Manga💡"
          linkTitle="View all"
          linkHref="/PopularManga"
        />
        <Mangalist api={topManga} />
      </section>
      <section className="md:mt-5 md:mx-3 mb-10">
        <Header title="Recommendation Manga🍥" />
        <Mangalist api={recommendedManga} />
      </section>
    </>
  );
};

export default Page;
