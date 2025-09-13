export const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="filter py-2 flex items-center gap-2">
      <p>Search:</p>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};
