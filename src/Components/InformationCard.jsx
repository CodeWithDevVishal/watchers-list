import React from "react";
import { Link, useLocation } from "react-router-dom";

function InformationCard() {
  const location = useLocation()
  const data = location.state
  const handleSearchTitle = () => {
    const query = data.title || data.original_title || "";
    if (!query.trim()) return;

    const encoded = encodeURIComponent(query.trim());
    const url = `https://www.google.com/search?q=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Filter out empty strings from arrays
  const cleanLanguage = Array.isArray(data.language)
    ? data.language.filter(lang => lang.trim())
    : [];
  const cleanSubtitles = Array.isArray(data.subtitles)
    ? data.subtitles.filter(sub => sub.trim())
    : [];
  const cleanGenres = Array.isArray(data.genres)
    ? data.genres.filter(genre => genre.trim())
    : [];

  // Type-specific badge styling
  const getTypeBadge = (type) => {
    const typeConfig = {
      anime: { bg: "bg-gradient-to-r from-blue-500 to-purple-600", text: "text-white", icon: "🎌" },
      movie: { bg: "bg-gradient-to-r from-orange-500 to-red-500", text: "text-white", icon: "🎬" },
      'web series': { bg: "bg-gradient-to-r from-green-500 to-emerald-600", text: "text-white", icon: "📺" }
    };
    const config = typeConfig[type?.toLowerCase().trim()] || { bg: "bg-gray-100", text: "text-gray-700", icon: "" };
    return (
      <span className={`px-3 py-1 rounded-full ${config.bg} ${config.text} text-sm font-semibold shadow-md flex items-center gap-1`}>
        {config.icon} {type}
      </span>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-indigo-50 px-4 py-8 sm:py-12">

      <div className="w-full max-w-sm sm:max-w-md md:max-w-5xl lg:max-w-7xl mx-auto bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden border border-white/50 md:flex md:shadow-2xl md:flex-row-reverse">
        {/* Poster - Right side on desktop */}

        <div className="h-48 sm:h-56 md:h-72 lg:h-80 md:w-2/5 lg:w-1/2 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden md:flex-shrink-0 relative group">
          {data.poster_url ? (
            <img
              src={data.poster_url}
              alt={data.title || "Media poster"}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 p-3  "
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
              <div className="text-center p-4">
                <div className="text-4xl mb-2">📺</div>
                No image available
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 md:p-8 lg:p-10 space-y-4 md:space-y-6 flex-1">
          {/* Titles */}
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
              {data.title || "Untitled Media"}
            </h2>
            {data.original_title && data.original_title.trim() && (
              <p className="text-xs sm:text-sm md:text-base text-gray-500 italic mt-2 font-light">
                {data.original_title}
              </p>
            )}
          </div>

          {/* Meta row */}
          <div className="flex flex-wrap gap-2">
            {data.type && data.type.trim() && getTypeBadge(data.type)}
            {data.status && data.status.trim() && (
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold shadow-sm border border-emerald-200">
                {data.status}
              </span>
            )}
            {data.age_rating && data.age_rating.trim() && (
              <span className="px-3 py-1 rounded-full bg-red-100 text-red-800 text-sm font-semibold shadow-sm border border-red-200">
                {data.age_rating}
              </span>
            )}
            {data.tab_number && (
              <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm font-semibold shadow-sm border border-indigo-200">
                Tab #{data.tab_number}
              </span>
            )}
          </div>

          {/* Description */}
          {data.description && data.description.trim() && (
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed line-clamp-4 bg-gray-50 p-4 rounded-xl">
              {data.description}
            </p>
          )}

          {/* Details grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 text-sm md:text-base text-gray-700">
            <div>
              <p className="font-semibold text-gray-900 text-xs sm:text-sm mb-1">Language</p>
              <p className="text-gray-600">{cleanLanguage.length ? cleanLanguage.join(", ") : "N/A"}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-xs sm:text-sm mb-1">Subtitles</p>
              <p className="text-gray-600">{cleanSubtitles.length ? cleanSubtitles.join(", ") : "N/A"}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-xs sm:text-sm mb-1">Season</p>
              <p className="font-mono text-indigo-600 font-semibold">
                {data.season} / {data.total_seasons}
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-xs sm:text-sm mb-1">Year</p>
              <p className="text-gray-600 font-medium">{data.year || "N/A"}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-xs sm:text-sm mb-1">Studio</p>
              <p className="text-gray-600">{data.studio?.trim() || "N/A"}</p>
            </div>
            <div className="md:col-span-2">
              <p className="font-semibold text-gray-900 text-xs sm:text-sm mb-1">Genres</p>
              <p className="text-gray-600 line-clamp-2">{cleanGenres.length ? cleanGenres.join(", ") : "N/A"}</p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center">
            <button
              onClick={handleSearchTitle}
              className="flex-1 bg-gradient-to-r from-purple-600 via-purple-600 to-indigo-600 hover:from-purple-700 hover:via-purple-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 text-lg focus:outline-none focus:ring-4 focus:ring-purple-500/50"
              disabled={!data.title?.trim() && !data.original_title?.trim()}
            >
              🔍 Search "{data.title || data.original_title}" on Google
            </button>
            <Link
              to="/watchers-list/"
              className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 text-lg flex items-center justify-center gap-2 group focus:outline-none focus:ring-4 focus:ring-emerald-500/50 focus:ring-offset-2"
              title="Back to Watchers List Collection"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformationCard;


