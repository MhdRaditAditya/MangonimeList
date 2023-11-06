import Animelist from "@/components/ContentList";
import Header from "@/components/ContentList/header";
import Mangalist from "@/components/ContentList/manga";
import {
  generateRandomData,
  getAnimeResponse,
  getNestedAnimeResponse,
} from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=9");
  const topManga = await getAnimeResponse("top/manga", "limit=9");
  let recommendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recommendedAnime = generateRandomData(recommendedAnime, 7);

  let recommendedManga = await getNestedAnimeResponse(
    "recommendations/manga",
    "entry"
  );
  recommendedManga = generateRandomData(recommendedManga, 7);

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
