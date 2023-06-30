import {
  useAddress,
  useDisconnect,
  useMetamask,
  useTokenDrop,
  useTokenSupply,
} from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();
  const tokenDrop = useTokenDrop("0xfeC314ae62B1b63F2126082d835193923956C47B");
  const { data: tokenSupply } = useTokenSupply(tokenDrop);

  return (
    <div>
      {address ? (
        <>
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
          <p>Your Address {address}</p>
          <p>
            Your Token Supply{tokenSupply?.displayValue} {tokenSupply?.symbol}{" "}
          </p>
        </>
      ) : (
        <button onClick={connectWithMetamask}>Connect Metamask Wallet</button>
      )}
    </div>
  );
}
