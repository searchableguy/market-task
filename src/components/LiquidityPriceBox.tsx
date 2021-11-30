import { useMemo } from "react";
import { ASSETS } from "../_mock_data/assets";
import { TOKENS } from "../_mock_data/tokens";
import { DashboardBox } from "./DashboardBox";

interface Props {
  assets: typeof ASSETS;
}

export function LiquidityPriceBox({ assets }: Props) {
  const borrowed = assets.filter((asset) => asset.type === "borrowed");
  const supplied = assets.filter((asset) => asset.type === "supplied");

  const borrowLimit = useMemo(
    () =>
      supplied.reduce((total, asset) => {
        const { ltv } = TOKENS[asset.token];
        const ratio = ltv / 100;
        const value = asset.value * ratio;
        return total + value;
      }, 0),
    [JSON.stringify(supplied)]
  );

  const borrowedAmount = useMemo(
    () =>
      borrowed.reduce((total, asset) => {
        return total + asset.value;
      }, 0),
    [JSON.stringify(borrowed)]
  );

  return (
    <DashboardBox title="Your Assets">
      <div className="py-5 overflow-x-auto">
        <table>
          <TableHead
            columns={["Assets", "Supplied", "Unit.Price", "Liq.price"]}
          />
          <tbody>
            {borrowed.map((asset) => (
              <TableRow
                borrowedAmount={borrowedAmount}
                borrowLimit={borrowLimit}
                asset={asset}
              />
            ))}
          </tbody>
          <tbody>
            {supplied.map((asset) => (
              <TableRow
                borrowedAmount={borrowedAmount}
                borrowLimit={borrowLimit}
                asset={asset}
              />
            ))}
          </tbody>
        </table>
      </div>
    </DashboardBox>
  );
}

interface TableHeadProps {
  columns: string[];
}

function TableHead({ columns }: TableHeadProps) {
  return (
    <thead className="text-[#130b15] w-full text-opacity-75 font-medium uppercase text-xs">
      <tr>
        {columns.map((col) => (
          <th
            key={col}
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            {col}
          </th>
        ))}
      </tr>
    </thead>
  );
}

interface TableRowProps {
  asset: typeof ASSETS[number];
  borrowLimit: number;
  borrowedAmount: number;
}

function TableRow({ asset, borrowLimit, borrowedAmount }: TableRowProps) {
  const token = TOKENS[asset.token];
  let liqPrice = 0;

  if (asset.type === "supplied") {
    const { ltv } = token;
    const value = (100 * borrowedAmount) / ltv;
    liqPrice = value / asset.amount;
  }

  if (asset.type === "borrowed") {
    const { value: TokenUnitValue } = token;
    const ratio = borrowLimit / asset.value;
    const value = TokenUnitValue * ratio;
    liqPrice = value;
  }

  return (
    <tr>
      <td className="px-4 py-2 whitespace-nowrap">
        <div className="flex items-center gap-2">
          <img className="h-8 rounded-full" src={token.logoURL} />
          <span className="text-[#130b15]">{token.symbol}</span>
        </div>
      </td>
      <td className="px-6 py-2 whitespace-nowrap">
        <div className="grid">
          <span className="text-[#130b15] font-medium">
            ${asset.value.toFixed(2)}
          </span>
          <span className="text-[#981d7e]">
            {asset.amount} {token.symbol}
          </span>
        </div>
      </td>
      <td className="px-6 py-2 whitespace-nowrap">
        <div className="grid">
          <span className="text-[#130b15] font-medium">
            ${token.value.toFixed(2)}
          </span>
        </div>
      </td>
      <td className="px-6 py-2 whitespace-nowrap">
        <div className="grid">
          <span className="text-[#130b15] font-medium">
            ${liqPrice.toFixed(2)}
          </span>
        </div>
      </td>
    </tr>
  );
}
