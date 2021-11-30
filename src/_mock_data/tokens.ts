// Some mock token data

export const TOKENS = {
  WMATIC: {
    symbol: "WMATIC",
    name: "Wrapped Matic",
    ltv: 60,
    value: 1.81,
    decimals: 18,
    extraData: { hasAPY: false },
    color: "#9c4cfc",
    overlayTextColor: "#fff",
    logoURL:
      "https://raw.githubusercontent.com/sushiswap/icons/master/token/polygon.jpg",
    address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
  },

  USDC: {
    symbol: "USDC",
    name: "USD Coin (PoS)",
    ltv: 75,
    value: 1,
    decimals: 6,
    extraData: { hasAPY: false },
    color: "#048cec",
    overlayTextColor: "#fff",
    logoURL:
      "https://raw.githubusercontent.com/sushiswap/icons/master/token/usdc.jpg",
    address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
  },

  MAI: {
    symbol: "MAI",
    name: "MAI",
    ltv: 65,
    value: 1,
    decimals: 18,
    extraData: { hasAPY: false },
    color: "#dc3434",
    overlayTextColor: "#fff",
    logoURL:
      "https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0xa3Fa99A148fA48D14Ed51d610c367C61876997F1/logo.png",
    address: "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
  },
} as const
