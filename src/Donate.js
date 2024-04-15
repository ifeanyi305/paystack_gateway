import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack'

const Donate = () => {
  const publicKey = "pk_test_ffce520dcbd6b2f4cf9fbba917581c49e88d67de";
  const [ email, setEmail ] = useState("");
  const [ amount, setAmount ] = useState("");
  const [ name, setName ] = useState("");
  const [ phone, setPhone ] = useState("");

  const componentProps = {
    email,
    amount: amount * 100,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for donating to us! we do not take it for granted!!"),
    onClose: () => alert("Wait! You need to donate, don't go!!!!"),
  }

  const style = {
    input: "block w-full px-4 py-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-primary-500",
    button: "block w-full px-4 py-2 bg-[#1369A1] text-white rounded-md"
  }

  return (
    <div className="px-4">
      <h1 className="text-center text-[25px] my-4 font-[600]">Make your payment here</h1>
      <div className="max-w-md mx-auto my-4">
        <input type="email" placeholder="Email" className={style.input} value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="number" placeholder="Amount" className={style.input} value={amount} onChange={(e) => setAmount(e.target.value)} />
        <input type="text" placeholder="Name" className={style.input} value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="Phone number" className={style.input} value={phone} onChange={(e) => setPhone(e.target.value)} />
        <PaystackButton className={style.button} {...componentProps} />
      </div>
    </div>
  );
};

export default Donate;
