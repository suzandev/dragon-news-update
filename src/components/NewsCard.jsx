import { FaEye, FaStar, FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { id, title, author, thumbnail_url, details, total_view, rating } =
    news;

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );
  return (
    <div className="card bg-base-100 shadow-md mb-6">
      <div className="bg-base-200 flex justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <h4 className="font-bold text-sm">{author.name}</h4>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-primary flex gap-5">
          <FaRegBookmark />
          <FaShareAlt />
        </button>
      </div>
      {/* Title */}
      <div className="px-4 py-2">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-48 md:h-full object-cover rounded-md"
        />
      </div>

      {/* details  */}
      <div className="px-4 text-sm text-gray-700">
        {details.length > 200 ? (
          <>
            {details.slice(0, 200)}...
            <Link
              to={`/news-details/${id}`}
              className="text-primary font-semibold cursor-pointer hover:underline">
              Read More
            </Link>
          </>
        ) : (
          details
        )}
      </div>
      {/* Footer  */}
      <div className="bg-base-200 flex justify-between items-center px-4 py-3 border-t mt-3">
        {/* Ratting  */}
        <div className="flex items-center gap-1 text-orange-400">
          {Array.from({ length: Math.round(rating.number) }).map((_, index) => (
            <FaStar key={index} />
          ))}
          <span className="text-gray-500 text-sm">({rating.number})</span>
        </div>
        {/* View  */}
        <div className="flex items-center gap-2 text-gray-500"></div>
        <FaEye />
        <span className="text-sm">{total_view}</span>
      </div>
    </div>
  );
};
export default NewsCard;
