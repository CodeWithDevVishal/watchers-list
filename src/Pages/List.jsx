import React, { useState, useMemo } from 'react'
import { useSelector } from 'react-redux'
import ShortCard from '../Components/ShortCard'

function List({ anime }) {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedType, setSelectedType] = useState('all')

    // Get unique types from data + predefined types
    const allTypes = useMemo(() => {
        if (!anime?.length) return ['all']
        
        const dataTypes = anime
            .map(item => item.type)
            .filter(Boolean)
            .map(type => type.toLowerCase().trim())
        
        const predefinedTypes = ['movie', 'web series']
        const uniqueTypes = new Set([...dataTypes, ...predefinedTypes])
        
        return ['all', ...Array.from(uniqueTypes).sort()]
    }, [anime])

    // Filter content based on search and type
    const filteredAnime = useMemo(() => {
        if (!anime?.length) return []
        
        return anime.filter(item => {
            const matchesSearch = !searchTerm || 
                item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.original_title?.toLowerCase().includes(searchTerm.toLowerCase())
            
            const matchesType = selectedType === 'all' || 
                item.type?.toLowerCase().trim() === selectedType
            
            return matchesSearch && matchesType
        })
    }, [anime, searchTerm, selectedType])

    const clearFilters = () => {
        setSearchTerm('')
        setSelectedType('all')
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent mb-4 drop-shadow-lg">
                        Media Collection
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Discover anime, movies, and web series
                    </p>
                </div>

                {/* Filters */}
                <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 md:p-8 mb-12 shadow-2xl border border-white/30">
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                        {/* Search */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                                🔍 Search by title
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search anime, movies, web series..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-2xl bg-white/90 backdrop-blur-sm focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 text-lg placeholder-gray-500 shadow-sm hover:shadow-md"
                                />
                                <svg className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                {searchTerm && (
                                    <button
                                        type="button"
                                        onClick={() => setSearchTerm('')}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                    >
                                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Type Filter */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                                Filter by type
                            </label>
                            <select
                                value={selectedType}
                                onChange={(e) => setSelectedType(e.target.value)}
                                className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl bg-white/90 backdrop-blur-sm focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 text-lg shadow-sm hover:shadow-md appearance-none cursor-pointer"
                            >
                                {allTypes.map(type => (
                                    <option key={type} value={type}>
                                        {type === 'all' ? '🎯 All Types' : 
                                         type === 'movie' ? '🎬 Movies' : 
                                         type === 'web series' ? '📺 Web Series' : 
                                         `${type.charAt(0).toUpperCase() + type.slice(1)}`}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Results count & Clear button */}
                    {(searchTerm || selectedType !== 'all') && (
                        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-between items-center pt-4 border-t border-gray-200">
                            <div className="text-sm text-gray-600 font-medium">
                                Showing {filteredAnime.length} of {anime?.length || 0} items
                            </div>
                            <button
                                onClick={clearFilters}
                                className="px-6 py-2 text-sm font-medium text-purple-600 bg-purple-100 hover:bg-purple-200 rounded-xl transition-all duration-200 hover:scale-105"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 sm:gap-8">
                    {filteredAnime?.length ? (
                        filteredAnime.map((animeItem, index) => (
                            <ShortCard 
                                key={  index} 
                                anime={animeItem} 
                            />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-24">
                            <div className="text-gray-400 text-7xl mb-6 animate-pulse">📺</div>
                            <p className="text-2xl font-medium text-gray-500 mb-2">
                                {searchTerm || selectedType !== 'all' 
                                    ? 'No content matches your filters' 
                                    : 'No content found'
                                }
                            </p>
                            <p className="text-lg text-gray-400">
                                Try adjusting your search or filter options
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default List
