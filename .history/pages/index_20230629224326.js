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
  const useDisconnectWallet = useDisconnect();
  const tokenDrop = useTokenDrop("0xfeC314ae62B1b63F2126082d835193923956C47B");
  const { data: tokenSupply } = useTokenSupply(tokenDrop);

  return (
    <div>
      {address ? (
        <>
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
          <p>Your Address {address}</p>
          <p>Your Token Supply{tokenSupply?.displayValue}</p>
        </>
      ) : (
        <button onClick={connectWithMetamask}>Connect Metamask Wallet</button>
      )}
    </div>
  );
}


  /* <div className={styles.container}>
<main className={styles.main}>
  <h1 className={styles.title}>
    Welcome to <a href="https://thirdweb.com/">thirdweb</a>!
  </h1>

  <p className={styles.description}>
    Get started by configuring your desired network in{" "}
    <code className={styles.code}>pages/_app.js</code>, then modify the{" "}
    <code className={styles.code}>pages/index.js</code> file!
  </p>

  <div className={styles.connect}>
    <ConnectWallet />
  </div>

  <div className={styles.grid}>
    <a href="https://portal.thirdweb.com/" className={styles.card}>
      <h2>Portal &rarr;</h2>
      <p>
        Guides, references and resources that will help you build with
        thirdweb.
      </p>
    </a>

    <a href="https://thirdweb.com/dashboard" className={styles.card}>
      <h2>Dashboard &rarr;</h2>
      <p>
        Deploy, configure and manage your smart contracts from the
        dashboard.
      </p>
    </a>

    <a
      href="https://portal.thirdweb.com/templates"
      className={styles.card}
    >
      <h2>Templates &rarr;</h2>
      <p>
        Discover and clone template projects showcasing thirdweb features.
      </p>
    </a>
  </div>
</main>

