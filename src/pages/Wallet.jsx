import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Arrow from "../images/arrow-left.svg";
import Coin from "../images/coin.svg";
import Purchase from "./Purchase";
import { useNavigate } from "react-router-dom";
import { useTransactionQuery, useWalletQuery } from "../redux/ApiSlice";
import Footer from "../components/Footer";
import AnotherPurchase from "./AnotherPurchase";

const Wallet = () => {
  let useD = JSON.parse(localStorage.getItem("details"));
  let user = useD?.profile;
  const { data } = useWalletQuery();
  const [openWallet, setWallet] = useState(false);
  const navigate = useNavigate();
  const { data: transact } = useTransactionQuery();

  const handleWallet = () => {
    setWallet(!openWallet);
  };

  useEffect(() => {
    if (!user || user == null) {
      navigate("/");
      return;
    }
  }, []);

  return (
    <div className="block md:flex overflow-x-clip max-w-[1740px] mx-auto">
      <SideBar />
      <div className="flex-1 md:w-[80%] pt-6 md:pt-14 px-6 lg:px-10">
        <Navbar
          Headervalue={"Welcome to Room 306"}
          textValue={"Explore our escort at your own pace"}
        />

        <div className="md:py-8  pb-8">
          <div className="flex justify-between items-center md:pb-6 py-2 md:pt-8">
            <h2
              onClick={() => navigate(-1)}
              className="text-white font-semibold cursor-pointer flex items-center"
            >
              <img className="size-5 mr-1" src={Arrow} alt="" />
              Back
            </h2>

            <button className="bg-[#0A0A0A] text-[14px] text-white font-medium rounded-lg py-3 w-[125px]">
              Client Account
            </button>
          </div>
          <div className="w-[300px] h-[92px] flex justify-between bg-[#1E1E1E] pt-4 pb-4 px-4 rounded-xl mb-4">
            <div>
              <p className="text-[#B29A9A] text-[14px]">My Wallet Balance</p>
              <p className="text-[#F9E598] text-[20px] font-semibold">
                {data?.available_coin}
              </p>
              <p className="uppercase text-[#B29A9A] text-[10px] ">
                coins in escrow <span>0.00</span>
              </p>
            </div>
            <div className="flex items-end">
              <button
                onClick={handleWallet}
                className="bg-[#E9CB50] text-[14px] font-medium w-[91px] h-[32px] rounded-lg"
              >
                Buy Coin
              </button>
            </div>
          </div>
          <div className="overflow-x-scroll lg:overflow-auto">
            <div className="rounded-xl px-4 py-5 min-w-[1300px] min-h-[500px] text-[#7D6C6C] bg-[#1E1E1E] ">
              <div className="flex border-b border-[#7D6C6C] pb-4 items-center">
                <p className="w-[300px] text-center">Transaction ID</p>
                <p className="w-[300px] text-center">Debit | Credit | Escrow</p>
                <p className="w-[300px] text-center">Coins</p>
                <p className="w-[300px] text-center">Paid</p>
                <p className="w-[300px] text-center">Status</p>
              </div>

              <div className="overflow-y-scroll h-[400px]">
                {transact?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex capitalize pt-5 duration-500 hover:bg-black pb-4 items-center"
                    >
                      <p className="w-[300px] text-center">#{1447 + index}</p>
                      <p className="w-[300px] text-center">{item.type}</p>
                      <p className="w-[300px] text-center">{item.coin}</p>
                      <p className="w-[300px] text-center">{item.amount}</p>
                      <p
                        className={` ${
                          item.status == "pending" && "text-[#0C8CE9]"
                        } ${
                          item.status == "rejected" && "text-[#DC3545]"
                        } w-[300px] text-center`}
                      >
                        {item.status}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>

      {/* <Purchase
        handleWallet={handleWallet}
        purchaseClass={`${
          !openWallet ? "translate-x-[120vw]" : "translate-x-0"
        }`}
      /> */}

      <AnotherPurchase
        handleWallet={handleWallet}
        purchaseClass={`${
          !openWallet ? "translate-x-[120vw]" : "translate-x-0"
        }`}
      />
    </div>
  );
};

export default Wallet;
