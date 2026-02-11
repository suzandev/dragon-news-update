import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  return (
    <div className="space-y-5">
      <img
        className="w-full h-87.5 object-cover"
        src={news.image_url}
        alt="Details Card Image"
      />
      <h3 className="text-2xl">{news.title}</h3>
      <p>{news.details}</p>

      <Link to={`/category/${news.category_id}`} className="btn btn-secondary">
        Back to Categories
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
