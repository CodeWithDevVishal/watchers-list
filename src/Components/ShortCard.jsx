import React from "react";
import { useNavigate } from "react-router-dom";

function ShortCard({ data }) {
  const navigate = useNavigate();

  const handleRedirect = (e) => {
    if (e.target.tagName == 'BUTTON') {

      // navigate("detail", { state: data })
      const query = data.title || data.original_title || "";
      if (!query.trim()) return;

      const encoded = encodeURIComponent(query.trim());
      const url = `https://www.google.com/search?q=${encoded}`;
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

   // Progress percentage
  const progressPercent = data.progress?.episodes_total 
    ? Math.round((data.progress.episodes_watched / data.progress.episodes_total) * 100)
    : 0;


  return (
    <div
      className="max-w-sm mx-auto bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 hover:shadow-2xl hover:-translate-y-2 cursor-pointer transition-all duration-300 group relative"
      onClick={handleRedirect}
    >
      {/* Poster */}
      <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden relative">
        {data.poster_url ? (
          <img
            src={data.poster_url}
            alt={data.title || "Media poster"}
            className="w-full h-full object-cover hover:scale-105 group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <div className="text-center p-6">
              <div className="text-5xl mb-2">📺</div>
              <div className="text-sm">No image</div>
            </div>
          </div>
        )}
        
        {/* Progress overlay */}
        {progressPercent > 0 && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-3">
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-emerald-400 to-teal-500 h-2 rounded-full shadow-lg transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="text-xs text-emerald-300 font-bold mt-1">
              {data.progress.episodes_watched}/{data.progress.episodes_total}
            </p>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Key info */}
      <div className="p-6 relative z-10">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight hover:text-purple-600 transition-colors group-hover:text-purple-600">
          {data.title || "Untitled Media"}
        </h3>

        {/* Badges */}
        {(data.type || data.status || data.tab_number) && (
          <div className="flex flex-wrap gap-2 mb-5">
            {data.type && data.type.trim() && (
              <span className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-800 shadow-sm transition-colors">
                {data.type}
              </span>
            )}
            {data.status && data.status.trim() && (
              <span className="px-3 py-1 rounded-full bg-emerald-100 hover:bg-emerald-200 text-emerald-800 text-xs font-semibold shadow-sm transition-colors">
                {data.status}
              </span>
            )}
            {data.tab_number && (
              <span className="px-3 py-1 rounded-full bg-indigo-100 hover:bg-indigo-200 text-indigo-800 text-xs font-semibold shadow-sm border border-indigo-200 transition-colors">
                Tab #{data.tab_number}
              </span>
            )}
          </div>
        )}

        {/* Action buttons */}
        <div className="space-y-2">
          {/* Primary: View Details */}
          <button
            onClick={handleRedirect}
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-sm"
          >
            👁️ View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShortCard;
