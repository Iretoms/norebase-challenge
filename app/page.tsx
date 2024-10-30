"use client";
import { useState, useEffect } from "react";
import { CoinTickers } from "@/services/tickers/types";
import { CoinTickersService } from "@/services/tickers";
import Table from "@/components/Table";

const Home = () => {
  const [data, setData] = useState<CoinTickers[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async (page: number) => {
    const data = await CoinTickersService.getCoinTickers();
    const coinTickers = data?.data.slice((page - 1) * 10, page * 10);
    setData(coinTickers);
    setLoading(false);
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  if (loading) {
    return <div className="font-bold">Loading, please wait...</div>;
  }
  return (
    <div className="w-full h-[60%] max-w-[40rem] bg-white rounded-lg shadow-lg">
      <Table data={data} />
      <div className="flex justify-between items-center p-3">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={currentPage === 1 ? "hidden" : "flex items-center"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-3 h-3"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
          <span className="ml-2 text-sm font-semibold">Previous</span>
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === 10}
          className={
            currentPage === 10 ? "hidden" : "ml-auto flex items-center"
          }
        >
          <span className="mr-2 text-sm font-semibold">Next</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-3 h-3"
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Home;
