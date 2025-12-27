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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8 sm:py-12">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-5xl lg:max-w-7xl mx-auto bg-white shadow-lg sm:shadow-xl rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200 md:flex md:shadow-2xl md:flex-row-reverse">
        {/* Poster - Right side on desktop */}
        <div className="h-48 sm:h-56 md:h-72 lg:h-80 md:w-2/5 lg:w-1/2 bg-gray-100 overflow-hidden md:flex-shrink-0">
          {anime.poster_url ? (
            <img
              src={anime.poster_url}
              alt={anime.title || "Anime poster"}
              className="w-full h-full object-cover p-3"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs sm:text-sm">
              No image available
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-4 md:space-y-6 flex-1">
          {/* Titles */}
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 leading-tight">
              {anime.title || "Untitled Anime"}
            </h2>
            {anime.original_title && anime.original_title.trim() && (
              <p className="text-xs sm:text-sm md:text-base text-gray-500 italic mt-1">
                {anime.original_title}
              </p>
            )}
          </div>

          {/* Meta row */}
          <div className="flex flex-wrap gap-1 sm:gap-2 text-xs sm:text-sm md:text-base text-gray-600">
            {anime.type && anime.type.trim() && (
              <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-gray-100 text-xs sm:text-sm">
                {anime.type}
              </span>
            )}
            {anime.status && anime.status.trim() && (
              <span className="px-2 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-2 rounded-full bg-emerald-50 text-emerald-700 text-xs sm:text-sm">
                {anime.status}
              </span>
            )}
            {anime.age_rating && anime.age_rating.trim() && (
              <span className="px-2 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-2 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm">
                {anime.age_rating}
              </span>
            )}
          </div>

          {/* Description */}
          {anime.description && anime.description.trim() && (
            <p className="text-sm sm:text-base md:text-lg text-gray-700 line-clamp-3 leading-relaxed">
              {anime.description}
            </p>
          )}

          {/* Details grid */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-6 text-xs sm:text-sm md:text-base text-gray-700">
            <div>
              <p className="font-medium text-gray-900 text-xs sm:text-sm md:text-base">Language</p>
              <p className="text-xs sm:text-sm md:text-base">{cleanLanguage.length ? cleanLanguage.join(", ") : "N/A"}</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 text-xs sm:text-sm md:text-base">Subtitles</p>
              <p className="text-xs sm:text-sm md:text-base">{cleanSubtitles.length ? cleanSubtitles.join(", ") : "N/A"}</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 text-xs sm:text-sm md:text-base">Season</p>
              <p className="font-mono text-xs sm:text-sm md:text-base">
                {anime.season} / {anime.total_seasons}
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-900 text-xs sm:text-sm md:text-base">Year</p>
              <p className="text-xs sm:text-sm md:text-base">{anime.year || "N/A"}</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 text-xs sm:text-sm md:text-base">Studio</p>
              <p className="text-xs sm:text-sm md:text-base">{anime.studio?.trim() || "N/A"}</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 text-xs sm:text-sm md:text-base">Genres</p>
              <p className="text-xs sm:text-sm md:text-base line-clamp-2">{cleanGenres.length ? cleanGenres.join(", ") : "N/A"}</p>
            </div>
          </div>

          {/* Search button - Centered */}
          <div className="pt-3 sm:pt-4 md:pt-6 flex justify-center">
            <button
              type="button"
              onClick={handleSearchTitle}
              className="w-full md:w-auto md:max-w-xs inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 via-purple-600 to-indigo-600 hover:from-purple-700 hover:via-purple-700 hover:to-indigo-700 px-4 sm:px-6 py-2.5 sm:py-3 md:text-lg font-semibold text-white focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:from-purple-400 disabled:to-indigo-400 transition-all duration-200 shadow-lg hover:shadow-xl"
              disabled={!anime.title?.trim() && !anime.original_title?.trim()}
            >
              🔍 Search title on Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformationCard;
