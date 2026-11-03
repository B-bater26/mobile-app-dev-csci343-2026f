import List from "../components/List/List";
import NewsItem from "../components/List/NewsItem";
import { NEWS } from "../data/dummy_data";

export default function TechNewsScreen() {
  const category = "tech";
  const displayedNews = NEWS.filter((NewsItem) => {
    return NewsItem.category === category;
  })
  return <List items={displayedNews} />
}

