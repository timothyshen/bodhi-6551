import WalletConnectComponent from "@/components/WalletConnect";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>This is page</p>
      <WalletConnectComponent />
    </main>
  );
}
