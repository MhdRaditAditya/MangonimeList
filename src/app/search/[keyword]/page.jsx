import { getAnimeResponse } from "@/libs/api-libs";
import Animelist from "@/components/Animelist";
import Header from "@/components/Animelist/header";
import Mangalist from "@/components/Animelist/manga";

const Page = async ({ params }) => {

    const keyword = params.keyword;
    const decodedKeyword = decodeURI(keyword)
    const searchAnime = await getAnimeResponse("anime",`q=${decodedKeyword}`)
    const searchManga = await getAnimeResponse("manga",`q=${decodedKeyword}`)
    
    return (
        <>
            <section className="md:mt-10 md:mx-3 mb-10">
                <Header title={`Search result for "${decodedKeyword}"...`} />
                <h3 className="mt-5 mb-3 ml-5 md:text-2xl text-xl font-bold text-color-secondary dark:text-color-primary">Anime:</h3>
                <Animelist api={searchAnime} />
                <h3 className="mt-14 mb-3 ml-5 md:text-2xl text-xl font-bold text-color-secondary dark:text-color-primary">Manga:</h3>
                <Mangalist api={searchManga} />
            </section>
        </>
    )
}

export default Page