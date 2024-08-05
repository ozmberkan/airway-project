import React, { useState } from "react";
import { searchData } from "../../data/searchData";
import SearchBanner from "../../assets/SearchBanner.svg";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";

const Search = () => {
  const [passCount, setPassCount] = useState(0);

  return (
    <div className=" px-12 w-3/4 mx-auto gap-x-3  font-Nunito h-[800px] flex justify-center items-center">
      <div className="w-[60%] h-[500px] bg-white  rounded-xl border ">
        <div className="w-full h-20 bg-violet-500 rounded-t-xl flex justify-start items-center px-12 mb-4">
          <span className="text-white font-Nunito text-2xl">
            Kendine uygun ucuz biletini ara!
          </span>
        </div>

        <form className="p-6 grid grid-cols-3 gap-5">
          <div className="flex flex-col gap-y-2">
            <label className="text-lg ">Nereden</label>
            <select className="border p-2 rounded-xl focus:ring-2 ring-offset-2 ring-violet-500 outline-none">
              {searchData.map((option) => (
                <option value={option.value}>{option.name}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="text-lg ">Nereye</label>
            <select className="border p-2 rounded-xl focus:ring-2 ring-offset-2 ring-violet-500 outline-none">
              {searchData.map((option) => (
                <option value={option.value}>{option.name}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="text-lg ">Tarih</label>
            <input
              type="date"
              className="border p-2 rounded-xl focus:ring-2 ring-offset-2 ring-violet-500 outline-none"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="text-lg ">Yolcu</label>
            <div className="flex items-center justify-between  border w-[300px] p-2 rounded-xl">
              <span className="w-1/2">Yetişkin</span>
              <CiSquareMinus
                size={20}
                className="cursor-pointer"
                onClick={() => setPassCount(passCount - 1)}
              />
              <span>{passCount}</span>
              <CiSquarePlus
                size={20}
                className="cursor-pointer"
                onClick={() => setPassCount(passCount + 1)}
              />
            </div>
            <div className="flex items-center justify-between  border w-[300px] p-2 rounded-xl">
              <span className="w-1/2">Çocuk 2-12 Yaş</span>
              <CiSquareMinus
                size={20}
                className="cursor-pointer"
                onClick={() => setPassCount(passCount - 1)}
              />
              <span>{passCount}</span>
              <CiSquarePlus
                size={20}
                className="cursor-pointer"
                onClick={() => setPassCount(passCount + 1)}
              />
            </div>
            <div className="flex items-center justify-between  border w-[300px] p-2 rounded-xl">
              <span className="w-1/2">Bebek 0-2 Yaş</span>
              <CiSquareMinus
                size={20}
                className="cursor-pointer"
                onClick={() => setPassCount(passCount - 1)}
              />
              <span>{passCount}</span>
              <CiSquarePlus
                size={20}
                className="cursor-pointer"
                onClick={() => setPassCount(passCount + 1)}
              />
            </div>
            <div className="w-full mt-4">
              <button className="w-full bg-violet-500 text-white rounded-xl px-4 py-2 ">
                ARA!
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="w-[40%] h-[500px] bg-white  rounded-xl  border">
        <div className="w-full h-20 bg-violet-500 rounded-t-xl flex justify-start items-center px-12">
          <span className="text-white font-Nunito text-2xl">Biletlerim</span>
        </div>
        <div className="p-6 flex flex-col justify-center items-center gap-y-5">
          <div className="w-full rounded-md bg-[#f9f9f9] p-3 ring-2 border ring-violet-500 ring-offset-2">
            <div>BİLET</div>
            <div>ZAMAN</div>
          </div>
          <div className="w-full rounded-md bg-[#f9f9f9] p-3 ring-2 border ring-violet-500 ring-offset-2">
            <div>BİLET</div>
            <div>ZAMAN</div>
          </div>
          <div className="w-full rounded-md bg-[#f9f9f9] p-3 ring-2 border ring-violet-500 ring-offset-2">
            <div>BİLET</div>
            <div>ZAMAN</div>
          </div>
          <div className="w-full rounded-md bg-[#f9f9f9] p-3 ring-2 border ring-violet-500 ring-offset-2">
            <div>BİLET</div>
            <div>ZAMAN</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
