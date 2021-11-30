// Mock data about borrowed or supplied tokens.

export const ASSETS = [
  {
    token: "MAI",
    type: "borrowed",
    amount: 1000,
    value: 1000
  },
  {
    token: "WMATIC",
    type: "supplied",
    amount: 1000,
    value: 1810
  },
  {
    token: "USDC",
    type: "borrowed",
    amount: 50,
    value: 50
  }
] as const