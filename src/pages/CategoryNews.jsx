import React from "react";
import { useParams } from "react-router";

const CategoryNews = () => {
  const { id } = useParams();
  console.log("Category ID:", id);
  return (
    <div>
      <h3 className="text-2xl font-bold">Category News Page</h3>
    </div>
  );
};

export default CategoryNews;
