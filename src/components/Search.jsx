import React from "react";

function Search({ searchTerm, onChange }) {

    /**
     * Search component renders a search input for filtering plants.
     * 
     * @component Search
     * @param {Object} props
     * @param {string} props.searchTerm - The current search term
     * @param {Function} props.onChange - Handler for search input changes
     * @returns {JSX.Element} a search input element
     */
    return (
        <div className="searchbar">
            <label htmlFor="search">Search Plants:</label>
            <input
                type="text"
                id="search"
                name="search"
                value={searchTerm}
                placeholder="Type a name to search..."
                onChange={onChange}
            />
        </div>
    );
}

export default Search;
