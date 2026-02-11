import React from "react";
import Header from "../components/Header";
import RightAside from "../components/homelayout/RightAside";
import NewsDetailsCard from "../components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const newsData = useLoaderData();
  const { id } = useParams();

  const news = newsData.find((singleNews) => singleNews.id == id);

  return (
    <div>
      <header className="w-11/12 mx-auto py-4">
        <Header />
      </header>

      <main className="w-11/12 mx-auto py-5 md:grid grid-cols-12 gap-5 space-y-5 md:space-y-0">
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
