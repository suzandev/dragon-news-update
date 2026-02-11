import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RightAside from "../components/homelayout/RightAside";
import NewsDetailsCard from "../components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const newsData = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});

  useEffect(() => {
    const foundNews = newsData.find((singleNews) => singleNews.id == id);
    setNews(foundNews);
  }, [id, newsData]);
  return (
    <div>
      <header className="w-11/12 mx-auto py-4">
        <Header />
      </header>
      <main className="w-11/12 mx-auto py-5 grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <h2 className="mb-4 font-bold">News Details</h2>
          <NewsDetailsCard news={news} />
        </section>
        <aside className="col-span-3 sticky top-0 h-fit">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
