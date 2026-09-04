function SearchBar({ searchTerm, onSearchChange, currentFilter, onFilterChange }) {
  const filters = ['all', 'MERN', 'React', 'Node.js', 'C++', 'Python'];

  return (
    <section className="glass-card p-6 md:p-8 mb-6 animate-slide-up delay-2">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"></i>
          <input
            type="text"
            placeholder="Search user by name..."
            className="input-field pl-11"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${
                currentFilter === filter ? 'filter-btn-active' : 'filter-btn-inactive'
              }`}
              onClick={() => onFilterChange(filter)}
            >
              {filter === 'all' ? 'All' : filter}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SearchBar;