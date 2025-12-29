import React from "react";
import { useNavigate } from "react-router-dom";

function ShortCard({ data }) {
  const navigate = useNavigate()
  const handleRedirect = () => {
    navigate("detail", {state:data})
    // const query = data.title || data.original_title || "";
    // if (!query.trim()) return;

    // const encoded = encodeURIComponent(query.trim());
    // const url = `https://www.google.com/search?q=${encoded}`;
    // window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group">
      {/* Poster */}
      <div className="h-64 bg-gray-100 overflow-hidden">
        {data.poster_url ? (
          <img
            src={data.poster_url}
            alt={data.title || "Media poster"}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
            No image
          </div>
        )}
      </div>

      {/* Key info */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {data.title || "Untitled Media"}
        </h3>

        {/* Badges */}
        {(data.type || data.status || data.tab_number) && (
          <div className="flex flex-wrap gap-2 mb-4">
            {/* Type badge */}
            {data.type && data.type.trim() && (
              <span className="px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-700">
                {data.type}
              </span>
            )}
            {/* Status badge */}
            {data.status && data.status.trim() && (
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-medium">
                {data.status}
              </span>
            )}
            {/* Tab number badge */}
            {data.tab_number && (
              <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-medium border border-indigo-200">
                Tab #{data.tab_number}
              </span>
            )}
          </div>
        )}

        {/* Action button */}
        <button
          onClick={handleRedirect}
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-xl text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!data.title?.trim() && !data.original_title?.trim()}
        >
          🔍 View
        </button>
      </div>
    </div>
  );
}

export default ShortCard;
