import List from "../components/List/List";
import NewsItem from "../components/List/NewsItem";
import { NEWS } from "../data/dummy_data";

export default function USNewsScreen() {
  const category = "us";
  const displayedNews = NEWS.filter((NewsItem) => {
    return NewsItem.category === category;
  })
  return <List items={displayedNews} />
}

