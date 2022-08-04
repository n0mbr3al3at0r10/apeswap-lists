import { ChainId } from '@apeswapfinance/sdk'
import tokens from './tokens'
import { BillsConfig } from './types'

const bills: BillsConfig[] = [
  {
    index: 13,
    contractAddress: {
      [ChainId.BSC]: '0xE325439439D692DC858Ba887601999D57d35688F',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    billType: 'BANANA Bill',
    token: tokens.banana,
    quoteToken: tokens.wbnb,
    lpToken: tokens.bananaBnb,
    earnToken: tokens.banana,
    billNnftAddress: {
      [ChainId.BSC]: '0x7FD203888661d1F0AE625eD599909f8F97698670',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    projectLink: 'https://apeswap.finance/',
    twitter: 'https://twitter.com/ape_swap',
  },
  {
    index: 14,
    contractAddress: {
      [ChainId.BSC]: '0xf297F71f4664cF7F1Cd5d90720967998A1163cC3',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    billType: 'BANANA Bill',
    token: tokens.busd,
    quoteToken: tokens.wbnb,
    lpToken: tokens.bnbBusd,
    earnToken: tokens.banana,
    billNnftAddress: {
      [ChainId.BSC]: '0x7FD203888661d1F0AE625eD599909f8F97698670',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    projectLink: 'https://apeswap.finance/',
    twitter: 'https://twitter.com/ape_swap',
  },
  {
    index: 15,
    contractAddress: {
      [ChainId.BSC]: '0x937A30Fd88f48B23DeABf4fD43c42cc9d3f3F9Dd',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    billType: 'BANANA Bill',
    token: tokens.busd,
    quoteToken: tokens.usdc,
    lpToken: tokens.usdcBusd,
    earnToken: tokens.banana,
    billNnftAddress: {
      [ChainId.BSC]: '0x7FD203888661d1F0AE625eD599909f8F97698670',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    projectLink: 'https://apeswap.finance/',
    twitter: 'https://twitter.com/ape_swap',
  },
  {
    index: 16,
    contractAddress: {
      [ChainId.BSC]: '0x2D375a67366eDFB92F520aE428E8E08451D638d2',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    billType: 'BANANA Bill',
    token: tokens.eth,
    quoteToken: tokens.wbnb,
    lpToken: tokens.bnbEth,
    earnToken: tokens.banana,
    billNnftAddress: {
      [ChainId.BSC]: '0x7FD203888661d1F0AE625eD599909f8F97698670',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    projectLink: 'https://apeswap.finance/',
    twitter: 'https://twitter.com/ape_swap',
  },
  {
    index: 17,
    contractAddress: {
      [ChainId.BSC]: '0x44921f493887ab8a8b9db54db335f65c1ef8d51a',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    billType: 'BANANA Bill',
    token: tokens.btc,
    quoteToken: tokens.wbnb,
    lpToken: tokens.bnbBtc,
    earnToken: tokens.banana,
    billNnftAddress: {
      [ChainId.BSC]: '0x7FD203888661d1F0AE625eD599909f8F97698670',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    projectLink: 'https://apeswap.finance/',
    twitter: 'https://twitter.com/ape_swap',
  },
  {
    index: 12,
    contractAddress: {
      [ChainId.BSC]: '0x3f02ce456b9da36352439fbd1897c2233a77e46f',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    billType: 'JUNGLE Bill',
    token: tokens.radar,
    quoteToken: tokens.wbnb,
    lpToken: tokens.radarBnb,
    earnToken: tokens.radar,
    billNnftAddress: {
      [ChainId.BSC]: '0xb0278e43DbD744327FE0d5D0ABa4A77CBFC7fad8',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    projectLink: 'https://dappradar.com/',
    twitter: 'https://twitter.com/DappRadar/',
  },
  {
    index: 5,
    contractAddress: {
      [ChainId.BSC]: '0x1c36913ca7c64365a54694cd91dde9c7cf5e44ec',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    billType: 'JUNGLE Bill',
    token: tokens.ceek,
    quoteToken: tokens.wbnb,
    lpToken: tokens.ceekBnb,
    earnToken: tokens.ceek,
    billNnftAddress: {
      [ChainId.BSC]: '0xb0278e43DbD744327FE0d5D0ABa4A77CBFC7fad8',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    projectLink: 'https://ceek.com/',
    twitter: 'https://twitter.com/CEEK/',
  },
  {
    index: 6,
    contractAddress: {
      [ChainId.BSC]: '0xd9e18fae215f10f4ce35a24fcbfe944fbfb96643',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    billType: 'JUNGLE Bill',
    token: tokens.nfty,
    quoteToken: tokens.wbnb,
    lpToken: tokens.nftyBnb,
    earnToken: tokens.nfty,
    billNnftAddress: {
      [ChainId.BSC]: '0xb0278e43DbD744327FE0d5D0ABa4A77CBFC7fad8',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    projectLink: 'https://nftynetwork.io/',
    twitter: 'https://twitter.com/NFTYLab',
  },
  {
    index: 7,
    contractAddress: {
      [ChainId.BSC]: '0xda0149da023cb204b3ffba33a88d9dd19393c6fc',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    billType: 'JUNGLE Bill',
    token: tokens.tlos,
    quoteToken: tokens.busd,
    lpToken: tokens.tlosBusd,
    earnToken: tokens.tlos,
    billNnftAddress: {
      [ChainId.BSC]: '0xb0278e43DbD744327FE0d5D0ABa4A77CBFC7fad8',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    inactive: true,
    projectLink: 'https://www.telos.net/',
    twitter: 'https://twitter.com/HelloTelos',
  },
  {
    index: 8,
    contractAddress: {
      [ChainId.BSC]: '0xaf3016100f67c66af15c973cb8da94962653a726',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    billType: 'JUNGLE Bill',
    token: tokens.stars,
    quoteToken: tokens.wbnb,
    lpToken: tokens.starsBnb,
    earnToken: tokens.stars,
    billNnftAddress: {
      [ChainId.BSC]: '0xb0278e43DbD744327FE0d5D0ABa4A77CBFC7fad8',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    projectLink: 'https://www.mogulproductions.com/',
    twitter: 'https://twitter.com/mogulofficial_',
  },
  {
    index: 9,
    contractAddress: {
      [ChainId.BSC]: '0x6a5be77e3fc1c99ef4aae2846432d61fa78a564c',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    billType: 'JUNGLE Bill',
    token: tokens.hotcross,
    quoteToken: tokens.busd,
    lpToken: tokens.hotcrossBusd,
    earnToken: tokens.hotcross,
    billNnftAddress: {
      [ChainId.BSC]: '0xb0278e43DbD744327FE0d5D0ABa4A77CBFC7fad8',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    projectLink: 'https://hotcross.com/',
    twitter: 'https://twitter.com/hotcrosscom',
  },
  {
    index: 10,
    contractAddress: {
      [ChainId.BSC]: '0xb5fd0ac23267da501fc6c59c6e12ae32831e72bb',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    billType: 'JUNGLE Bill',
    token: tokens.hotcross,
    quoteToken: tokens.busd,
    lpToken: tokens.hotcrossBusd,
    earnToken: tokens.hotcross,
    billNnftAddress: {
      [ChainId.BSC]: '0xb0278e43DbD744327FE0d5D0ABa4A77CBFC7fad8',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    projectLink: 'https://hotcross.com/',
    twitter: 'https://twitter.com/hotcrosscom',
  },
  {
    index: 11,
    contractAddress: {
      [ChainId.BSC]: '0x4a3adf34b1f8830fb8d673477d52fa5cb91a2531',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    billType: 'JUNGLE Bill',
    token: tokens.tlos,
    quoteToken: tokens.busd,
    lpToken: tokens.tlosBusd,
    earnToken: tokens.tlos,
    billNnftAddress: {
      [ChainId.BSC]: '0xb0278e43DbD744327FE0d5D0ABa4A77CBFC7fad8',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    projectLink: 'https://www.telos.net/',
    twitter: 'https://twitter.com/HelloTelos',
  },
  {
    index: 0,
    contractAddress: {
      [ChainId.BSC]: '0x8b57Fc5BE65118188D50d42fcD5614e447F7FAbE',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    billType: 'BANANA Bill',
    token: tokens.banana,
    quoteToken: tokens.wbnb,
    lpToken: tokens.bananaBnb,
    earnToken: tokens.banana,
    billNnftAddress: {
      [ChainId.BSC]: '0xb0278e43DbD744327FE0d5D0ABa4A77CBFC7fad8',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    inactive: true,
    projectLink: 'https://apeswap.finance/',
    twitter: 'https://twitter.com/ape_swap',
  },
  {
    index: 1,
    contractAddress: {
      [ChainId.BSC]: '0x4925AcdE0E885170801A74DEBcC8fbA91F3aE29b',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    billType: 'BANANA Bill',
    token: tokens.busd,
    quoteToken: tokens.wbnb,
    lpToken: tokens.bnbBusd,
    earnToken: tokens.banana,
    billNnftAddress: {
      [ChainId.BSC]: '0xb0278e43DbD744327FE0d5D0ABa4A77CBFC7fad8',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    inactive: true,
    projectLink: 'https://apeswap.finance/',
    twitter: 'https://twitter.com/ape_swap',
  },
  {
    index: 2,
    contractAddress: {
      [ChainId.BSC]: '0xca1612f66292398a5df0ecadd98bb81dc264349d',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    billType: 'BANANA Bill',
    token: tokens.busd,
    quoteToken: tokens.usdc,
    lpToken: tokens.usdcBusd,
    earnToken: tokens.banana,
    billNnftAddress: {
      [ChainId.BSC]: '0xb0278e43DbD744327FE0d5D0ABa4A77CBFC7fad8',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    inactive: true,
    projectLink: 'https://apeswap.finance/',
    twitter: 'https://twitter.com/ape_swap',
  },
  {
    index: 3,
    contractAddress: {
      [ChainId.BSC]: '0xb2d516086BFc978950e40D2739c72125415441a8',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    billType: 'BANANA Bill',
    token: tokens.eth,
    quoteToken: tokens.wbnb,
    lpToken: tokens.bnbEth,
    earnToken: tokens.banana,
    billNnftAddress: {
      [ChainId.BSC]: '0xb0278e43DbD744327FE0d5D0ABa4A77CBFC7fad8',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    inactive: true,
    projectLink: 'https://apeswap.finance/',
    twitter: 'https://twitter.com/ape_swap',
  },
  {
    index: 4,
    contractAddress: {
      [ChainId.BSC]: '0xBD9959320cbbC69b2eF7d07fb3f9870cceaeB44f',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    billType: 'BANANA Bill',
    token: tokens.btc,
    quoteToken: tokens.wbnb,
    lpToken: tokens.bnbBtc,
    earnToken: tokens.banana,
    billNnftAddress: {
      [ChainId.BSC]: '0xb0278e43DbD744327FE0d5D0ABa4A77CBFC7fad8',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    inactive: true,
    projectLink: 'https://apeswap.finance/',
    twitter: 'https://twitter.com/ape_swap',
  },
]

export default bills
