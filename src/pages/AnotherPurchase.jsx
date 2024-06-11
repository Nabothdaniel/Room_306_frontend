import React from "react";

const AnotherPurchase = ({ purchaseClass, handleWallet }) => {
  return (
    <div
      className={`bg-black/40 duration-500 ${purchaseClass} fixed top-0 z-[999999] flex left-0 w-[100%] h-screen  justify-center items-center`}
    >
      <div className="bg-white w-[90%] md:w-[40vw] p-8 rounded-xl">
        <h2 className="text-center md:text-4xl text-[22px] font-semibold">
          Buy Coins
        </h2>

        <div className="pt-8">
          <p className="text-center">
            For Activation of your account and Buying of Coin send the money to
            the Bank details below:
          </p>

          <p className="md:text-xl text-center py-3 font-semibold">
            100 Coins is NGN 10,000
          </p>
          <div className="text-center">
            <h2 className="md:text-xl font-semibold pb-5 pt-3 text-center">
              Bank Details
            </h2>
            <p>
              <span className="font-semibold">Account Name:</span> Room 306
              Entertainment
            </p>
            <p>
              <span className="font-semibold">Account Number:</span> 1027071879
            </p>
            <p>
              <span className="font-semibold">Bank Name:</span> United Bank For
              Africa
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <button
            onClick={handleWallet}
            className="text-center hover:bg-yellow-500/80 duration-500 text-white  bg-yellow-500 w-[40%] py-3  font-semibold mt-4 rounded-xl"
          >
            Paid
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnotherPurchase;
