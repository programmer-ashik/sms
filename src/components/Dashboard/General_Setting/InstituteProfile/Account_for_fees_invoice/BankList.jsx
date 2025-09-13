import React, { useState } from "react";
import Icon from "../../../../../shared/Components/Iocn/Icon";
import { Icons } from "../../../../../shared/constant/icon.constant";
import { Pagination } from "../../../../../shared/Components/Paginations/Pagination";
import { SearchBar } from "./SearchBar";
import { BankTableHeader } from "./TableHeader";
import { BankTableRow } from "./BankTableRow";
import { FilterBar } from "./FilterBar";

const bankData = [
  {
    id: 1,
    name: "City Bank",
    logo: "https://via.placeholder.com/40x40.png?text=C",
    accountNo: "1234-5678-9012",
  },
  {
    id: 2,
    name: "Dutch-Bangla Bank",
    logo: "https://via.placeholder.com/40x40.png?text=DBBL",
    accountNo: "9876-5432-1098",
  },
  {
    id: 3,
    name: "BRAC Bank",
    logo: "https://via.placeholder.com/40x40.png?text=BRAC",
    accountNo: "4567-8901-2345",
  },
  {
    id: 1,
    name: "City Bank",
    logo: "https://via.placeholder.com/40x40.png?text=C",
    accountNo: "1234-5678-9012",
  },
  {
    id: 2,
    name: "Dutch-Bangla Bank",
    logo: "https://via.placeholder.com/40x40.png?text=DBBL",
    accountNo: "9876-5432-1098",
  },
  {
    id: 3,
    name: "BRAC Bank",
    logo: "https://via.placeholder.com/40x40.png?text=BRAC",
    accountNo: "4567-8901-2345",
  },
  {
    id: 1,
    name: "City Bank",
    logo: "https://via.placeholder.com/40x40.png?text=C",
    accountNo: "1234-5678-9012",
  },
  {
    id: 2,
    name: "Dutch-Bangla Bank",
    logo: "https://via.placeholder.com/40x40.png?text=DBBL",
    accountNo: "9876-5432-1098",
  },
  {
    id: 3,
    name: "BRAC Bank",
    logo: "https://via.placeholder.com/40x40.png?text=BRAC",
    accountNo: "4567-8901-2345",
  },
  {
    id: 1,
    name: "City Bank",
    logo: "https://via.placeholder.com/40x40.png?text=C",
    accountNo: "1234-5678-9012",
  },
  {
    id: 2,
    name: "Dutch-Bangla Bank",
    logo: "https://via.placeholder.com/40x40.png?text=DBBL",
    accountNo: "9876-5432-1098",
  },
  {
    id: 3,
    name: "BRAC Bank",
    logo: "https://via.placeholder.com/40x40.png?text=BRAC",
    accountNo: "4567-8901-2345",
  },
];

const BankList = () => {
  const [search, setSearch] = useState("");
  const [dataPerPage, setDataPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // 1. Filter by search
  const filterBankData = bankData.filter(
    (bank) =>
      bank.name.toLowerCase().includes(search.toLowerCase()) ||
      bank.accountNo.toLowerCase().includes(search.toLowerCase())
  );

  // 2. Pagination setup
  const totalEntries = filterBankData.length;
  const indexOfLast = currentPage * dataPerPage;
  const indexOfFirst = indexOfLast - dataPerPage;
  const currentData = filterBankData.slice(indexOfFirst, indexOfLast);

  // 3. Reset to first page if search or perPage changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [search, dataPerPage]);

  return (
    <div className="w-full flex flex-col justify-start items-center p-4 rounded-lg shadow-md px-8">
      {/* Filter */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center">
        <FilterBar dataPerPage={dataPerPage} setDataPerPage={setDataPerPage} />
        {/* Search */}
        <SearchBar search={search} setSearch={setSearch} />
      </div>
      {/* Table Header + Rows */}
      <div className=" content-center w-full mt-4">
        <BankTableHeader />
        <div className=" w-full h-[55vh] overflow-scroll">
          {currentData.length > 0 ? (
            currentData.map((bank) => (
              <BankTableRow key={bank.id} bank={bank} />
            ))
          ) : (
            <div className="col-span-4 text-center py-4 text-gray-500">
              No banks found
            </div>
          )}
        </div>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalEntries={totalEntries}
        dataPerPage={dataPerPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default BankList;
