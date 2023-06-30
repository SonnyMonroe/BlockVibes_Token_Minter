import {
  useAddress,
  useDisconnect,
  useMetamask,
  useTokenDrop,
  useTokenSupply,
  useTokenBalance,
  useClaimToken,
} from "@thirdweb-dev/react";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [amount, setAmount] = useState("");
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();
  const tokenDrop = useTokenDrop("0xfeC314ae62B1b63F2126082d835193923956C47B");
  const { data: tokenSupply } = useTokenSupply(tokenDrop);
  const { data: tokenBalance } = useTokenBalance(tokenDrop, address);
  const { mutate: claimTokens, isLoading } = useClaimToken(tokenDrop);

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
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button
            onClick={() =>
              claimTokens(
                { amount, to: address },
                { onSuccess: () => setAmount("") }
              )
            }
            disabled={isLoading}
          >
            Claim{amount} {tokenBalance?.symbol}
          </button>
        </>
      ) : (
        <button onClick={connectWithMetamask}>Connect Metamask Wallet</button>
      )}
    </div>
  );
}
