import { useState, useEffect } from "react";
import { connectWallet, getAccount } from "../utils/wallet";
const Navbar = () => {
  const [account, setAccount] = useState<string>("");

  const onConnectWallet = async () => {
    console.log("onConnectWallet");
    const res = await connectWallet();
    console.log(res);
    const activeAccount = await getAccount();
    setAccount(activeAccount);
  };

  useEffect(() => {
    async () => {
      const activeAccount = await getAccount();
      setAccount(activeAccount);
    };
  }, []);

  return (
    <nav>
      <h2>Person Dapp </h2>
      <button onClick={onConnectWallet}>
        {account ? account : "Connect wallet"}
      </button>
    </nav>
  );
};

export default Navbar;
