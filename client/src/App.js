import "./App.css";
import { TradingViewChart } from "./views/dashboard/TradingViewChart";
import { io } from "socket.io-client";

function App() {
  const socket = io("http://localhost:8080");

  socket.on("connect", () => {
    console.log("Connected to server");
  });

  socket.on("disconnect", () => {
    console.log("Disconnected from server");
  });

  socket.on("new user", () => {
    console.log("connected new user.");
  });

  // const tradingViewData = {
  //   container_id: "exampleContainer",
  //   jquery: true,
  //   script: true,
  //   width: "1000", // Set your desired width
  //   height: "500", // Set your desired height
  //   theme: "light",
  //   pair: "BTC/USD",
  //   exchange: "binance",
  //   // ... other data properties
  // };
  return (
    <>
      <p className="text-green-400 text-2xl text-center">Crypto bot</p>
      <TradingViewChart />
    </>
  );
}

export default App;
