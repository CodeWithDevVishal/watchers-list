import React from "react";

function ShortCard({ anime }) {
  const handleSearchTitle = () => {
    const query = anime.title || anime.original_title || "";
    if (!query.trim()) return;

    const encoded = encodeURIComponent(query.trim());
    window.open(`https://www.google.com/search?q=${encoded}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group">
      {/* Poster */}
      <div className="h-64 bg-gray-100 overflow-hidden">
        {anime.poster_url ? (
          <img
            src={anime.poster_url}
            alt={anime.title || "Anime poster"}
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
          {anime.title || "Untitled Anime"}
        </h3>

        {/* Badges */}
        {(anime.type || anime.status) && (
          <div className="flex flex-wrap gap-2 mb-4">
            {anime.type && anime.type.trim() && (
              <span className="px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-700">
                {anime.type}
              </span>
            )}
            {anime.status && anime.status.trim() && (
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-medium">
                {anime.status}
              </span>
            )}
          </div>
        )}

        {/* Action button */}
        <button
          onClick={handleSearchTitle}
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-xl text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!anime.title?.trim() && !anime.original_title?.trim()}
        >
          🔍 Search on Google
        </button>
      </div>
    </div>
  );
}

export default ShortCard;
