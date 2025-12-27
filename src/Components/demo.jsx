import React from "react";

function InformationCard({ anime }) {
  const handleSearchTitle = () => {
    const query = anime.title || anime.original_title || "";
    if (!query.trim()) return;

    const encoded = encodeURIComponent(query.trim());
    const url = `https://www.google.com/search?q=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Filter out empty strings from arrays
  const cleanLanguage = Array.isArray(anime.language) 
    ? anime.language.filter(lang => lang.trim()) 
    : [];
  const cleanSubtitles = Array.isArray(anime.subtitles) 
    ? anime.subtitles.filter(sub => sub.trim()) 
    : [];
  const cleanGenres = Array.isArray(anime.genres) 
    ? anime.genres.filter(genre => genre.trim()) 
    : [];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200">
        {/* Poster */}
        <div className="h-56 bg-gray-100 overflow-hidden">
          {anime.poster_url ? (
            <img
              src={anime.poster_url}
              alt={anime.title || "Anime poster"}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
              No image available
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          {/* Titles */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              {anime.title || "Untitled Anime"}
            </h2>
            {anime.original_title && anime.original_title.trim() && (
              <p className="text-sm text-gray-500 italic">
                {anime.original_title}
              </p>
            )}
          </div>

          {/* Meta row */}
          <div className="flex flex-wrap gap-2 text-xs text-gray-600">
            {anime.type && anime.type.trim() && (
              <span className="px-2 py-0.5 rounded-full bg-gray-100">
                {anime.type}
              </span>
            )}
            {anime.status && anime.status.trim() && (
              <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
                {anime.status}
              </span>
            )}
            {anime.age_rating && anime.age_rating.trim() && (
              <span className="px-2 py-0.5 rounded-full bg-red-50 text-red-700">
                {anime.age_rating}
              </span>
            )}
          </div>

          {/* Description */}
          {anime.description && anime.description.trim() && (
            <p className="text-sm text-gray-700 line-clamp-3">
              {anime.description}
            </p>
          )}

          {/* Details grid */}
          <div className="grid grid-cols-2 gap-3 text-xs text-gray-700">
            <div>
              <p className="font-medium text-gray-900">Language</p>
              <p>{cleanLanguage.length ? cleanLanguage.join(", ") : "N/A"}</p>
            </div>
            <div>
              <p className="font-medium text-gray-900">Subtitles</p>
              <p>{cleanSubtitles.length ? cleanSubtitles.join(", ") : "N/A"}</p>
            </div>
            <div>
              <p className="font-medium text-gray-900">Season</p>
              <p>
                {anime.season} / {anime.total_seasons}
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-900">Year</p>
              <p>{anime.year || "N/A"}</p>
            </div>
            <div>
              <p className="font-medium text-gray-900">Studio</p>
              <p>{anime.studio?.trim() || "N/A"}</p>
            </div>
            <div>
              <p className="font-medium text-gray-900">Genres</p>
              <p>{cleanGenres.length ? cleanGenres.join(", ") : "N/A"}</p>
            </div>
          </div>

          {/* Search button */}
          <div className="pt-2">
            <button
              type="button"
              onClick={handleSearchTitle}
              className="w-full inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-blue-300"
              disabled={!anime.title?.trim() && !anime.original_title?.trim()}
            >
              Search title on Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformationCard;
