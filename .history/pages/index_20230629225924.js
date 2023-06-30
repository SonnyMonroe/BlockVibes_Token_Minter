import {
  useAddress,
  useDisconnect,
  useMetamask,
  useTokenDrop,
  useTokenSupply,
  useTokenBalance,
} from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();
  const tokenDrop = useTokenDrop("0xfeC314ae62B1b63F2126082d835193923956C47B");
  const { data: tokenSupply } = useTokenSupply(tokenDrop);
  const { data: tokenBalance } = useTokenBalance(tokenDrop, address);

  return (
    <div>
      {address ? (
        <>
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
          <p>Your Address {address}</p>
          <p>
            Token Supply: {tokenSupply?.displayValue} {tokenSupply?.symbol}{" "}
          </p>
          <p>
            Your Token Balance: {tokenBalance?.displayValue}{" "}
            {tokenBalance?.symbol}{" "}
          </p>
          <h1>Claim Tokens</h1>
          <input type="text" />
        </>
      ) : (
        <button onClick={connectWithMetamask}>Connect Metamask Wallet</button>
      )}
    </div>
  );
}
