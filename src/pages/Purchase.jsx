import React, { useEffect, useState } from "react";
import axios from "axios";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";

const Purchase = ({ purchaseClass }) => {
  const user = JSON.parse(localStorage.getItem("details"));
  const [amount, setAmount] = useState(0);
  const [coin, setCoin] = useState("");

  const coinPer = 1;
  const coinAmount = 100;

  const currency = async () => {
    try {
      const res = "";

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const result = amount / coinAmount;
    setCoin(result * coinPer);
  }, [amount]);

  useEffect(() => {
    currency();
  }, []);

  const config = {
    public_key: "FLWPUBK_TEST-c0b57df8f3e8c9ce075538ebe6565d91-X",
    tx_ref: Date.now(),
    amount,
    currency: user?.currency,
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: user?.user?.email,
      phone_number: user?.user?.mobile_number,
      name: user?.user?.username,
    },
    customizations: {
      title: "My store",
      description: "Payment for coins",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const fwConfig = {
    ...config,
    text: "Purchase Coin Now",
    callback: (response) => {
      console.log(response);
      closePaymentModal();
    },
    onClose: () => {},
  };

  return (
    <div
      className={`bg-black/40 duration-500 ${purchaseClass} fixed top-0 z-[999999] flex left-0 w-[100%] h-screen  justify-center items-center`}
    >
      <div className="bg-white w-[90%] md:w-[40vw] p-8 rounded-xl">
        <h2 className="text-center md:text-4xl text-[22px] font-semibold">
          Buy Coins
        </h2>

        <div className="pt-8">
          <h2 className="font-medium text-[20px] pb-3">Input Amount</h2>
          <div className="flex items-center border-2 px-3 py-2 rounded-xl">
            <p>{user?.currency}</p>

            <input
              onChange={(e) => setAmount(e.target.value)}
              className="px-2 w-full"
              type="number"
            />
          </div>

          <p>
            {amount} {user?.currency} is Equivalent to {coin} coins
          </p>
        </div>

        <FlutterWaveButton
          className="text-center hover:bg-[#ffdc4e] duration-500  bg-[#E9CB50] w-[100%] py-3 md:py-4  font-semibold mt-12 rounded-xl"
          {...fwConfig}
        />
      </div>
    </div>
  );
};

export default Purchase;
