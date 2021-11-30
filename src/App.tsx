import { LiquidityPriceBox } from "./components/LiquidityPriceBox";
import { ASSETS } from "./_mock_data/assets";
import "./style.css"

function App() {
  return (
      <div className="h-screen flex justify-center items-center">
        <LiquidityPriceBox assets={ASSETS} />
      </div>
  );
}

export default App;
