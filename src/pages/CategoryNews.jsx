import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();

  let categoryNews = [];

  if (id === "0") {
    categoryNews = data;
  } else if (id === "1") {
    categoryNews = data.filter((news) => news.others.is_today_pick == true);
  } else {
    categoryNews = data.filter((news) => news.category_id == Number(id));
  }

  return (
    <div>
      <h3 className="font-bold mb-5">
        Total <span className="text-secondary">{categoryNews.length}</span> News
        Found
      </h3>
      <div className="grid grid-cols-1 gap-5">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
