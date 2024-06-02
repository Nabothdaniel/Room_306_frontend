import React, { useEffect, useState } from "react";
import axios from "axios";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";

const Purchase = ({ purchaseClass, handleWallet }) => {
  const user = JSON.parse(localStorage.getItem("details"));
  const [coin, setCoin] = useState("");
  const [amount, setAmount] = useState(0);
  const [mainAmount, setMainAmount] = useState(0);
  const [amountCoin, setAmountCoin] = useState(0);
  const [payment, setPayment] = useState([]);

  const coinPer = 1;
  const coinAmount = 100;

  const PurchaseAmount = {
    method: "GET",
    url: "https://currency-converter18.p.rapidapi.com/api/v1/convert",
    params: {
      from: user?.currency,
      to: "USD",
      amount,
    },
    headers: {
      "X-RapidAPI-Key": "10fdec6f57msh54fc45c2a1b0635p1c25fbjsnb9d4f9d8b135",
      "X-RapidAPI-Host": "currency-converter18.p.rapidapi.com",
    },
  };


  const option = {
    method: "GET",
    url: "https://currency-exchange.p.rapidapi.com/listquotes",
    headers: {
      "X-RapidAPI-Key": "10fdec6f57msh54fc45c2a1b0635p1c25fbjsnb9d4f9d8b135",
      "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
    },
  };


  const options = {
    method: "GET",
    url: "https://currency-converter18.p.rapidapi.com/api/v1/convert",
    params: {
      from: user?.currency,
      to: "NGN",
      amount,
    },
    headers: {
      "X-RapidAPI-Key": "10fdec6f57msh54fc45c2a1b0635p1c25fbjsnb9d4f9d8b135",
      "X-RapidAPI-Host": "currency-converter18.p.rapidapi.com",
    },
  };

  const available = {
    method: "GET",
    url: "https://currency-converter18.p.rapidapi.com/api/v1/supportedCurrencies",
    headers: {
      "X-RapidAPI-Key": "10fdec6f57msh54fc45c2a1b0635p1c25fbjsnb9d4f9d8b135",
      "X-RapidAPI-Host": "currency-converter18.p.rapidapi.com",
    },
  };

  const availableCurrency = async () => {
    try {
      const response = await axios.request(option);
      setPayment(response.data);
      console.log(response)
    } catch (error) {
      console.error(error);
    }
  };

  const currency = async () => {
    try {
      const response = await axios.request(options);
      setAmountCoin(response?.data?.result?.convertedAmount);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePurchaseAmount = async () => {
    try {
      const response = await axios.request(PurchaseAmount);
      setMainAmount(response?.data?.result?.convertedAmount);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    availableCurrency();
  }, []);

  useEffect(() => {
    const result = amountCoin / coinAmount;
    setCoin(Math.round(result * coinPer));
  }, [amountCoin]);

  useEffect(() => {
    currency();
  }, [amount]);

  useEffect(() => {
    handlePurchaseAmount();
  }, [amount]);

  const config = {
    public_key: "FLWPUBK_TEST-c0b57df8f3e8c9ce075538ebe6565d91-X",
    tx_ref: Date.now(),
    amount: mainAmount,
    currency: "USD",
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
          <select name="currency" id="">
            <option value="">Select your payment currency</option>

            {payment.map((item, index) => {
              return <option>{item.symbol}</option>;
            })}
          </select>
          <h2 className="font-medium text-[20px] pb-3">Input Amount</h2>
          <div className="flex items-center border-2 px-3 py-2 rounded-xl">
            {/* <p>{user?.currency}</p> */}

            <input
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              className="px-2 w-full"
              type="number"
            />
          </div>

          <p>
            {amount} {user?.currency} is Equivalent to {coin} coins
          </p>

          <div></div>
        </div>

        <FlutterWaveButton
          className="text-center hover:bg-[#ffdc4e] duration-500  bg-[#E9CB50] w-[100%] py-3 md:py-4  font-semibold mt-12 rounded-xl"
          {...fwConfig}
        />

        <button
          onClick={handleWallet}
          className="text-center hover:bg-red-500/80 duration-500  bg-red-500 w-[100%] py-3 md:py-4  font-semibold mt-4 rounded-xl"
        >
          Cancel Purchase
        </button>
      </div>
    </div>
  );
};

export default Purchase;
