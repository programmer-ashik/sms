export const FilterBar = ({ dataPerPage, setDataPerPage }) => {
  return (
    <div className="filter py-2 flex justify-center items-center gap-2">
      <span className="">Show</span>
      <select
        value={dataPerPage}
        onChange={(e) => setDataPerPage(Number(e.target.value))}
        className=" w-12 h-8 border rounded-md"
      >
        <option className=" mt-4" value={10}>
          10
        </option>
        <option value={15}>15</option>
        <option value={20}>20</option>
      </select>
      <span>entries</span>
    </div>
  );
};
