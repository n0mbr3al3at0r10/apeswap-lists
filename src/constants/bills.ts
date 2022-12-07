import { ChainId } from '@ape.swap/sdk'
import tokens from './tokens'
import { BillsConfig } from './types'

// BNB Largest ID: 41
// Polygon Largest ID: 103
// Telos Largest ID: 210

const bills: BillsConfig[] = [
  {
    index: 32,
    contractAddress: {
      [ChainId.BSC]: '0xa45dc4b9743d489e9b91070b27e72094b697632d',
    },
    billType: 'BANANA Bill',
    token: tokens.banana,
    quoteToken: tokens.wbnb,
    lpToken: tokens.bananaBnb,
    earnToken: tokens.banana,
    billNnftAddress: {
      [ChainId.BSC]: '0x7FD203888661d1F0AE625eD599909f8F97698670',
    },
    projectLink: 'https://apeswap.finance/',
    twitter: 'https://twitter.com/ape_swap',
  },
  {
    index: 33,
    contractAddress: {
      [ChainId.BSC]: '0x3a4de56b96d5befd0c9f3fb214372699f2d58947',
    },
    billType: 'BANANA Bill',
    token: tokens.busd,
    quoteToken: tokens.wbnb,
    lpToken: tokens.bnbBusd,
    earnToken: tokens.banana,
    billNnftAddress: {
      [ChainId.BSC]: '0x7FD203888661d1F0AE625eD599909f8F97698670',
    },
    projectLink: 'https://apeswap.finance/',
    twitter: 'https://twitter.com/ape_swap',
  },
  {
    index: 34,
    contractAddress: {
      [ChainId.BSC]: '0xb0992d86e7d4de0200c463e6451cce1f2775903b',
    },
    billType: 'BANANA Bill',
    token: tokens.busd,
    quoteToken: tokens.usdc,
    lpToken: tokens.usdcBusd,
    earnToken: tokens.banana,
    billNnftAddress: {
      [ChainId.BSC]: '0x7FD203888661d1F0AE625eD599909f8F97698670',
    },
    projectLink: 'https://apeswap.finance/',
    twitter: 'https://twitter.com/ape_swap',
  },
  {
    index: 35,
    contractAddress: {
      [ChainId.BSC]: '0x08dd5a43e5fc889f2100023f8296e14d9fd40064',
    },
    billType: 'BANANA Bill',
    token: tokens.eth,
    quoteToken: tokens.wbnb,
    lpToken: tokens.bnbEth,
    earnToken: tokens.banana,
    billNnftAddress: {
      [ChainId.BSC]: '0x7FD203888661d1F0AE625eD599909f8F97698670',
    },
    projectLink: 'https://apeswap.finance/',
    twitter: 'https://twitter.com/ape_swap',
  },
  {
    index: 36,
    contractAddress: {
      [ChainId.BSC]: '0x069002be4ec72333a3fa8a5730e8b84680a190a4',
    },
    billType: 'BANANA Bill',
    token: tokens.btc,
    quoteToken: tokens.wbnb,
    lpToken: tokens.bnbBtc,
    earnToken: tokens.banana,
    billNnftAddress: {
      [ChainId.BSC]: '0x7FD203888661d1F0AE625eD599909f8F97698670',
    },
    projectLink: 'https://apeswap.finance/',
    twitter: 'https://twitter.com/ape_swap',
  },
  {
    index: 37,
    contractAddress: {
      [ChainId.BSC]: '0x2e9bdb018850747dc557d13046b8259ab24c674a',
    },
    billType: 'JUNGLE Bill',
    token: tokens.radar,
    quoteToken: tokens.wbnb,
    lpToken: tokens.radarBnb,
    earnToken: tokens.radar,
    billNnftAddress: {
      [ChainId.BSC]: '0x7FD203888661d1F0AE625eD599909f8F97698670',
    },
    projectLink: 'https://dappradar.com/',
    twitter: 'https://twitter.com/DappRadar/',
  },
  {
    index: 38,
    contractAddress: {
      [ChainId.BSC]: '0x5aabc088b42c197c8da69af5471aa06c3852912b',
    },
    billType: 'JUNGLE Bill',
    token: tokens.ihc,
    quoteToken: tokens.wbnb,
    lpToken: tokens.ihcBnb,
    earnToken: tokens.ihc,
    billNnftAddress: {
      [ChainId.BSC]: '0x7FD203888661d1F0AE625eD599909f8F97698670',
    },
    projectLink: 'https://www.ihcoin.io/',
    twitter: 'https://twitter.com/IHCoinofficial',
  },
  {
    index: 39,
    contractAddress: {
      [ChainId.BSC]: '0xfe69f6f456fdc5535e7a7a03bb78f739400bc8e0',
    },
    billType: 'JUNGLE Bill',
    token: tokens.liq,
    quoteToken: tokens.busd,
    lpToken: tokens.liqBusd,
    earnToken: tokens.liq,
    billNnftAddress: {
      [ChainId.BSC]: '0x7FD203888661d1F0AE625eD599909f8F97698670',
    },
    projectLink: 'https://liquidus.finance/',
    twitter: 'https://twitter.com/LiquidusFinance',
  },
  {
    index: 40,
    contractAddress: {
      [ChainId.BSC]: '0x74dab17e30b974a3590796a8ba2223a50da6a32c',
    },
    billType: 'JUNGLE Bill',
    token: tokens.pstn,
    quoteToken: tokens.busd,
    lpToken: tokens.pstnBusd,
    earnToken: tokens.pstn,
    billNnftAddress: {
      [ChainId.BSC]: '0x7FD203888661d1F0AE625eD599909f8F97698670',
    },
    projectLink: 'https://piston-token.com/',
    twitter: 'https://mobile.twitter.com/pistontoken',
  },
  {
    index: 41,
    contractAddress: {
      [ChainId.BSC]: '0x7874c6deabf189aa45344040ad3e0d3b9ab984dd',
    },
    billType: 'JUNGLE Bill',
    token: tokens.gq,
    quoteToken: tokens.busd,
    lpToken: tokens.gqBusd,
    earnToken: tokens.gq,
    billNnftAddress: {
      [ChainId.BSC]: '0x7FD203888661d1F0AE625eD599909f8F97698670',
    },
    projectLink: 'https://outerringmmo.com/',
    twitter: 'https://twitter.com/OuterRingMMO',
  },
  {
    index: 30,
    contractAddress: {
      [ChainId.BSC]: '0xced994206cd4c364d7bda2b66b48fcaef9b6bb5b',
    },
    billType: 'JUNGLE Bill',
    token: tokens.nfty,
    quoteToken: tokens.busd,
    lpToken: tokens.nftyBusd,
    earnToken: tokens.nfty,
    billNnftAddress: {
      [ChainId.BSC]: '0x7fd203888661d1f0ae625ed599909f8f97698670',
    },
    projectLink: 'https://nftynetwork.io/',
    twitter: 'https://twitter.com/NFTYFinance',
  },
  {
    index: 29,
    contractAddress: {
      [ChainId.BSC]: '0x7aa1939b8284a2defdcb5e983de55da2ad61f607',
    },
    billType: 'JUNGLE Bill',
    token: tokens.threeair,
    quoteToken: tokens.wbnb,
    lpToken: tokens.threeairBnb,
    earnToken: tokens.threeair,
    billNnftAddress: {
      [ChainId.BSC]: '0x7fd203888661d1f0ae625ed599909f8f97698670',
    },
    projectLink: 'https://3air.io/',
    twitter: 'https://twitter.com/3aircrypto',
  },
  {
    index: 27,
    contractAddress: {
      [ChainId.BSC]: '0x626b5c18a2b702a189ea022df897a4f0f3566785',
    },
    billType: 'JUNGLE Bill',
    token: tokens.coc,
    quoteToken: tokens.wbnb,
    lpToken: tokens.cocBnb,
    earnToken: tokens.coc,
    billNnftAddress: {
      [ChainId.BSC]: '0x7fd203888661d1f0ae625ed599909f8f97698670',
    },
    projectLink: 'https://www.coinofchampions.com/',
    twitter: 'https://twitter.com/coinofchampions',
  },
  {
    index: 22,
    contractAddress: {
      [ChainId.BSC]: '0x7b1dfe9ca71ffeac5ed4d1beb592771e3672a2de',
    },
    billType: 'JUNGLE Bill',
    token: tokens.chrp,
    quoteToken: tokens.wbnb,
    lpToken: tokens.chrpBnb,
    earnToken: tokens.chrp,
    billNnftAddress: {
      [ChainId.BSC]: '0x7fd203888661d1f0ae625ed599909f8f97698670',
    },
    projectLink: 'https://chirpley.ai',
    twitter: 'https://twitter.com/chirpley',
  },
  {
    index: 20,
    contractAddress: {
      [ChainId.BSC]: '0xb646c4a51365598433ba4765b890ad3075e4e21e',
    },
    billType: 'JUNGLE Bill',
    token: tokens.gmr,
    quoteToken: tokens.wbnb,
    lpToken: tokens.gmrBnb,
    earnToken: tokens.gmr,
    billNnftAddress: {
      [ChainId.BSC]: '0x7fd203888661d1f0ae625ed599909f8f97698670',
    },
    projectLink: 'https://gmr.center/',
    twitter: 'https://twitter.com/GMRCenter',
  },
  {
    index: 31,
    contractAddress: {
      [ChainId.BSC]: '0x63571f457f246124c6968579E8797B91613dED20',
    },
    billType: 'JUNGLE Bill',
    token: tokens.xcur,
    quoteToken: tokens.busd,
    lpToken: tokens.xcurBusd,
    earnToken: tokens.xcur,
    billNnftAddress: {
      [ChainId.BSC]: '0x7fd203888661d1f0ae625ed599909f8f97698670',
    },
    projectLink: 'https://web.curate.style/',
    twitter: 'https://twitter.com/curateproject',
  },
  {
    index: 28,
    contractAddress: {
      [ChainId.BSC]: '0x7fdb62f681d7aad8c08a1d6af350e2fb7f265336',
    },
    billType: 'JUNGLE Bill',
    token: tokens.gq,
    quoteToken: tokens.busd,
    lpToken: tokens.gqBusd,
    earnToken: tokens.gq,
    billNnftAddress: {
      [ChainId.BSC]: '0x7fd203888661d1f0ae625ed599909f8f97698670',
    },
    projectLink: 'https://outerringmmo.com/',
    twitter: 'https://twitter.com/OuterRingMMO',
    inactive: true,
  },
  {
    index: 26,
    contractAddress: {
      [ChainId.BSC]: '0x07968648273e29f5e2fe07aabf5fbc3b40892592',
    },
    billType: 'JUNGLE Bill',
    token: tokens.pstn,
    quoteToken: tokens.busd,
    lpToken: tokens.pstnBusd,
    earnToken: tokens.pstn,
    billNnftAddress: {
      [ChainId.BSC]: '0x7fd203888661d1f0ae625ed599909f8f97698670',
    },
    projectLink: 'https://piston-token.com/',
    twitter: 'https://twitter.com/MyDefi_team',
    inactive: true,
  },
  {
    index: 25,
    contractAddress: {
      [ChainId.BSC]: '0xff674209beeb493f9e8c44898848c6cfd710e98f',
    },
    billType: 'JUNGLE Bill',
    token: tokens.xwin,
    quoteToken: tokens.wbnb,
    lpToken: tokens.xwinBnb,
    earnToken: tokens.xwin,
    billNnftAddress: {
      [ChainId.BSC]: '0x7fd203888661d1f0ae625ed599909f8f97698670',
    },
    projectLink: 'https://xwin.finance/',
    twitter: 'https://twitter.com/xwinfinance',
  },
  {
    index: 24,
    contractAddress: {
      [ChainId.BSC]: '0x2f8042167b0549ef56e55b9c1ace661b10ad93ea',
    },
    billType: 'JUNGLE Bill',
    token: tokens.froyo,
    quoteToken: tokens.wbnb,
    lpToken: tokens.froyoBnb,
    earnToken: tokens.froyo,
    billNnftAddress: {
      [ChainId.BSC]: '0x7fd203888661d1f0ae625ed599909f8f97698670',
    },
    projectLink: 'https://froyo.games/',
    twitter: 'https://twitter.com/realfroyogames',
  },
  {
    index: 23,
    contractAddress: {
      [ChainId.BSC]: '0xc117e57f4fa2fc1c2759228e0f85bc6d1c89be36',
    },
    billType: 'JUNGLE Bill',
    token: tokens.froyo,
    quoteToken: tokens.wbnb,
    lpToken: tokens.froyoBnb,
    earnToken: tokens.froyo,
    billNnftAddress: {
      [ChainId.BSC]: '0x7fd203888661d1f0ae625ed599909f8f97698670',
    },
    inactive: true,
    projectLink: 'https://froyo.games/',
    twitter: 'https://twitter.com/realfroyogames',
  },
  {
    index: 21,
    contractAddress: {
      [ChainId.BSC]: '0x7e7842f762b27a024f7c3b95495f1d132c554d6b',
    },
    billType: 'JUNGLE Bill',
    token: tokens.blid,
    quoteToken: tokens.usdt,
    lpToken: tokens.blidUsdt,
    earnToken: tokens.blid,
    billNnftAddress: {
      [ChainId.BSC]: '0x7fd203888661d1f0ae625ed599909f8f97698670',
    },
    projectLink: 'https://bolide.fi/',
    twitter: 'https://twitter.com/Bolide_fi',
  },
  {
    index: 19,
    contractAddress: {
      [ChainId.BSC]: '0x99eea57cdc8983992a3c1505dbf7181467daa22f',
    },
    billType: 'JUNGLE Bill',
    token: tokens.hec,
    quoteToken: tokens.wbnb,
    lpToken: tokens.hecBnb,
    earnToken: tokens.hec,
    billNnftAddress: {
      [ChainId.BSC]: '0x7fd203888661d1f0ae625ed599909f8f97698670',
    },
    projectLink: 'https://hector.network/',
    twitter: 'https://twitter.com/Hector_Network',
  },
  {
    index: 18,
    contractAddress: {
      [ChainId.BSC]: '0x80ef5c5215ff56a12b5e59c2acfc279c763ae34b',
    },
    billType: 'JUNGLE Bill',
    token: tokens.floki,
    quoteToken: tokens.wbnb,
    lpToken: tokens.flokiBnb,
    earnToken: tokens.floki,
    billNnftAddress: {
      [ChainId.BSC]: '0x7fd203888661d1f0ae625ed599909f8f97698670',
    },
    projectLink: 'https://www.floki.com/',
    twitter: 'https://twitter.com/realflokiinu',
  },
  {
    index: 12,
    contractAddress: {
      [ChainId.BSC]: '0x3f02ce456b9da36352439fbd1897c2233a77e46f',
    },
    billType: 'JUNGLE Bill',
    token: tokens.radar,
    quoteToken: tokens.wbnb,
    lpToken: tokens.radarBnb,
    earnToken: tokens.radar,
    billNnftAddress: {
      [ChainId.BSC]: '0xb0278e43DbD744327FE0d5D0ABa4A77CBFC7fad8',
    },
    projectLink: 'https://dappradar.com/',
    twitter: 'https://twitter.com/DappRadar/',
    inactive: true,
  },
  {
    index: 5,
    contractAddress: {
      [ChainId.BSC]: '0x1c36913ca7c64365a54694cd91dde9c7cf5e44ec',
    },
    billType: 'JUNGLE Bill',
    token: tokens.ceek,
    quoteToken: tokens.wbnb,
    lpToken: tokens.ceekBnb,
    earnToken: tokens.ceek,
    billNnftAddress: {
      [ChainId.BSC]: '0xb0278e43DbD744327FE0d5D0ABa4A77CBFC7fad8',
    },
    projectLink: 'https://ceek.com/',
    twitter: 'https://twitter.com/CEEK/',
  },
  {
    index: 6,
    contractAddress: {
      [ChainId.BSC]: '0xd9e18fae215f10f4ce35a24fcbfe944fbfb96643',
    },
    billType: 'JUNGLE Bill',
    token: tokens.nfty,
    quoteToken: tokens.wbnb,
    lpToken: tokens.nftyBnb,
    earnToken: tokens.nfty,
    billNnftAddress: {
      [ChainId.BSC]: '0xb0278e43DbD744327FE0d5D0ABa4A77CBFC7fad8',
    },
    projectLink: 'https://nftynetwork.io/',
    twitter: 'https://twitter.com/NFTYLab',
    inactive: true,
  },
  {
    index: 7,
    contractAddress: {
      [ChainId.BSC]: '0xda0149da023cb204b3ffba33a88d9dd19393c6fc',
    },
    billType: 'JUNGLE Bill',
    token: tokens.tlos,
    quoteToken: tokens.busd,
    lpToken: tokens.tlosBusd,
    earnToken: tokens.tlos,
    billNnftAddress: {
      [ChainId.BSC]: '0xb0278e43DbD744327FE0d5D0ABa4A77CBFC7fad8',
    },
    inactive: true,
    projectLink: 'https://www.telos.net/',
    twitter: 'https://twitter.com/HelloTelos',
  },
  {
    index: 8,
    contractAddress: {
      [ChainId.BSC]: '0xaf3016100f67c66af15c973cb8da94962653a726',
    },
    billType: 'JUNGLE Bill',
    token: tokens.stars,
    quoteToken: tokens.wbnb,
    lpToken: tokens.starsBnb,
    earnToken: tokens.stars,
    billNnftAddress: {
      [ChainId.BSC]: '0xb0278e43DbD744327FE0d5D0ABa4A77CBFC7fad8',
    },
    projectLink: 'https://www.mogulproductions.com/',
    twitter: 'https://twitter.com/mogulofficial_',
  },
  {
    index: 9,
    contractAddress: {
      [ChainId.BSC]: '0x6a5be77e3fc1c99ef4aae2846432d61fa78a564c',
    },
    billType: 'JUNGLE Bill',
    token: tokens.hotcross,
    quoteToken: tokens.busd,
    lpToken: tokens.hotcrossBusd,
    earnToken: tokens.hotcross,
    billNnftAddress: {
      [ChainId.BSC]: '0xb0278e43DbD744327FE0d5D0ABa4A77CBFC7fad8',
    },
    projectLink: 'https://hotcross.com/',
    twitter: 'https://twitter.com/hotcrosscom',
  },
  {
    index: 10,
    contractAddress: {
      [ChainId.BSC]: '0xb5fd0ac23267da501fc6c59c6e12ae32831e72bb',
    },
    billType: 'JUNGLE Bill',
    token: tokens.hotcross,
    quoteToken: tokens.busd,
    lpToken: tokens.hotcrossBusd,
    earnToken: tokens.hotcross,
    billNnftAddress: {
      [ChainId.BSC]: '0xb0278e43DbD744327FE0d5D0ABa4A77CBFC7fad8',
    },
    projectLink: 'https://hotcross.com/',
    twitter: 'https://twitter.com/hotcrosscom',
  },
  {
    index: 11,
    contractAddress: {
      [ChainId.BSC]: '0x4a3adf34b1f8830fb8d673477d52fa5cb91a2531',
    },
    billType: 'JUNGLE Bill',
    token: tokens.tlos,
    quoteToken: tokens.busd,
    lpToken: tokens.tlosBusd,
    earnToken: tokens.tlos,
    billNnftAddress: {
      [ChainId.BSC]: '0xb0278e43DbD744327FE0d5D0ABa4A77CBFC7fad8',
    },
    projectLink: 'https://www.telos.net/',
    twitter: 'https://twitter.com/HelloTelos',
  },
  // Old BANANA Bills
  {
    index: 0,
    contractAddress: {
      [ChainId.BSC]: '0x8b57Fc5BE65118188D50d42fcD5614e447F7FAbE',
    },
    billType: 'BANANA Bill',
    token: tokens.banana,
    quoteToken: tokens.wbnb,
    lpToken: tokens.bananaBnb,
    earnToken: tokens.banana,
    billNnftAddress: {
      [ChainId.BSC]: '0xb0278e43DbD744327FE0d5D0ABa4A77CBFC7fad8',
    },
    inactive: true,
    projectLink: 'https://apeswap.finance/',
    twitter: 'https://twitter.com/ape_swap',
  },
  {
    index: 1,
    contractAddress: {
      [ChainId.BSC]: '0x4925AcdE0E885170801A74DEBcC8fbA91F3aE29b',
    },
    billType: 'BANANA Bill',
    token: tokens.busd,
    quoteToken: tokens.wbnb,
    lpToken: tokens.bnbBusd,
    earnToken: tokens.banana,
    billNnftAddress: {
      [ChainId.BSC]: '0xb0278e43DbD744327FE0d5D0ABa4A77CBFC7fad8',
    },
    inactive: true,
    projectLink: 'https://apeswap.finance/',
    twitter: 'https://twitter.com/ape_swap',
  },
  {
    index: 2,
    contractAddress: {
      [ChainId.BSC]: '0xca1612f66292398a5df0ecadd98bb81dc264349d',
    },
    billType: 'BANANA Bill',
    token: tokens.busd,
    quoteToken: tokens.usdc,
    lpToken: tokens.usdcBusd,
    earnToken: tokens.banana,
    billNnftAddress: {
      [ChainId.BSC]: '0xb0278e43DbD744327FE0d5D0ABa4A77CBFC7fad8',
    },
    inactive: true,
    projectLink: 'https://apeswap.finance/',
    twitter: 'https://twitter.com/ape_swap',
  },
  {
    index: 3,
    contractAddress: {
      [ChainId.BSC]: '0xb2d516086BFc978950e40D2739c72125415441a8',
    },
    billType: 'BANANA Bill',
    token: tokens.eth,
    quoteToken: tokens.wbnb,
    lpToken: tokens.bnbEth,
    earnToken: tokens.banana,
    billNnftAddress: {
      [ChainId.BSC]: '0xb0278e43DbD744327FE0d5D0ABa4A77CBFC7fad8',
    },
    inactive: true,
    projectLink: 'https://apeswap.finance/',
    twitter: 'https://twitter.com/ape_swap',
  },
  {
    index: 4,
    contractAddress: {
      [ChainId.BSC]: '0xBD9959320cbbC69b2eF7d07fb3f9870cceaeB44f',
    },
    billType: 'BANANA Bill',
    token: tokens.btc,
    quoteToken: tokens.wbnb,
    lpToken: tokens.bnbBtc,
    earnToken: tokens.banana,
    billNnftAddress: {
      [ChainId.BSC]: '0xb0278e43DbD744327FE0d5D0ABa4A77CBFC7fad8',
    },
    inactive: true,
    projectLink: 'https://apeswap.finance/',
    twitter: 'https://twitter.com/ape_swap',
  },
  {
    index: 13,
    contractAddress: {
      [ChainId.BSC]: '0xE325439439D692DC858Ba887601999D57d35688F',
    },
    billType: 'BANANA Bill',
    token: tokens.banana,
    quoteToken: tokens.wbnb,
    lpToken: tokens.bananaBnb,
    earnToken: tokens.banana,
    billNnftAddress: {
      [ChainId.BSC]: '0x7FD203888661d1F0AE625eD599909f8F97698670',
    },
    projectLink: 'https://apeswap.finance/',
    twitter: 'https://twitter.com/ape_swap',
    inactive: true,
  },
  {
    index: 14,
    contractAddress: {
      [ChainId.BSC]: '0xf297F71f4664cF7F1Cd5d90720967998A1163cC3',
    },
    billType: 'BANANA Bill',
    token: tokens.busd,
    quoteToken: tokens.wbnb,
    lpToken: tokens.bnbBusd,
    earnToken: tokens.banana,
    billNnftAddress: {
      [ChainId.BSC]: '0x7FD203888661d1F0AE625eD599909f8F97698670',
    },
    projectLink: 'https://apeswap.finance/',
    twitter: 'https://twitter.com/ape_swap',
    inactive: true,
  },
  {
    index: 15,
    contractAddress: {
      [ChainId.BSC]: '0x937A30Fd88f48B23DeABf4fD43c42cc9d3f3F9Dd',
    },
    billType: 'BANANA Bill',
    token: tokens.busd,
    quoteToken: tokens.usdc,
    lpToken: tokens.usdcBusd,
    earnToken: tokens.banana,
    billNnftAddress: {
      [ChainId.BSC]: '0x7FD203888661d1F0AE625eD599909f8F97698670',
    },
    projectLink: 'https://apeswap.finance/',
    twitter: 'https://twitter.com/ape_swap',
    inactive: true,
  },
  {
    index: 16,
    contractAddress: {
      [ChainId.BSC]: '0x2D375a67366eDFB92F520aE428E8E08451D638d2',
    },
    billType: 'BANANA Bill',
    token: tokens.eth,
    quoteToken: tokens.wbnb,
    lpToken: tokens.bnbEth,
    earnToken: tokens.banana,
    billNnftAddress: {
      [ChainId.BSC]: '0x7FD203888661d1F0AE625eD599909f8F97698670',
    },
    projectLink: 'https://apeswap.finance/',
    twitter: 'https://twitter.com/ape_swap',
    inactive: true,
  },
  {
    index: 17,
    contractAddress: {
      [ChainId.BSC]: '0x44921f493887ab8a8b9db54db335f65c1ef8d51a',
    },
    billType: 'BANANA Bill',
    token: tokens.btc,
    quoteToken: tokens.wbnb,
    lpToken: tokens.bnbBtc,
    earnToken: tokens.banana,
    billNnftAddress: {
      [ChainId.BSC]: '0x7FD203888661d1F0AE625eD599909f8F97698670',
    },
    projectLink: 'https://apeswap.finance/',
    twitter: 'https://twitter.com/ape_swap',
    inactive: true,
  },

  /*
    Polygon Bills
  */
  {
    index: 103,
    contractAddress: {
      [ChainId.MATIC]: '0xb53b2706897a26fec9113f3e2371ac5b2b88970a',
    },
    billType: 'Jungle Bill',
    token: tokens.axn,
    quoteToken: tokens.usdc,
    lpToken: tokens.axnUsdc,
    earnToken: tokens.axn,
    billNnftAddress: {
      [ChainId.MATIC]: '0xa35c3fcd306cf69fed19e8c7b15c8b3904ea609d',
    },
    inactive: false,
    projectLink: 'https://axion.network/',
    twitter: 'https://twitter.com/axion_network',
  },
  {
    index: 100,
    contractAddress: {
      [ChainId.MATIC]: '0x643a6848a3906182a94ec857a41c1735664c677f',
    },
    billType: 'Jungle Bill',
    token: tokens.dogira,
    quoteToken: tokens.wmatic,
    lpToken: tokens.dogiraMatic,
    earnToken: tokens.dogira,
    billNnftAddress: {
      [ChainId.MATIC]: '0xa35c3fcd306cf69fed19e8c7b15c8b3904ea609d',
    },
    inactive: true,
    projectLink: 'https://www.dogira.net/',
    twitter: 'https://twitter.com/DogiraOfficial',
  },
  {
    index: 101,
    contractAddress: {
      [ChainId.MATIC]: '0xca48704b19a053ebb5a077c215dcb4be745c9fe5',
    },
    billType: 'Jungle Bill',
    token: tokens.traxx,
    quoteToken: tokens.wmatic,
    lpToken: tokens.traxxMatic,
    earnToken: tokens.traxx,
    billNnftAddress: {
      [ChainId.MATIC]: '0xa35c3fcd306cf69fed19e8c7b15c8b3904ea609d',
    },
    inactive: false,
    projectLink: 'https://www.tokentraxx.com/',
    twitter: 'https://twitter.com/TokenTraxx',
  },
  {
    index: 102,
    contractAddress: {
      [ChainId.MATIC]: '0xc16cf0e4c090409765757e5b13afdfc500148678',
    },
    billType: 'Jungle Bill',
    token: tokens.dogira,
    quoteToken: tokens.wmatic,
    lpToken: tokens.dogiraMatic,
    earnToken: tokens.dogira,
    billNnftAddress: {
      [ChainId.MATIC]: '0xa35c3fcd306cf69fed19e8c7b15c8b3904ea609d',
    },
    inactive: false,
    projectLink: 'https://www.dogira.net/',
    twitter: 'https://twitter.com/DogiraOfficial',
  },

  /*
    Telos Bills
  */
  {
    index: 206,
    contractAddress: {
      [ChainId.TLOS]: '0x1Bb2Eb63c2B2CD1cE5887B4628694276E637BeD7',
    },
    billType: 'Jungle Bill',
    token: tokens.banana,
    quoteToken: tokens.tlos,
    lpToken: tokens.bananaTlos,
    earnToken: tokens.tlos,
    billNnftAddress: {
      [ChainId.TLOS]: '0x9084C442286E23617694101d5575bEA48C2cf621',
    },
    inactive: false,
    projectLink: 'https://www.telos.net/',
    twitter: 'https://twitter.com/HelloTelos',
  },
  {
    index: 207,
    contractAddress: {
      [ChainId.TLOS]: '0xe3725Eccd93bb544b360BB572893eF17E42219c4',
    },
    billType: 'Jungle Bill',
    token: tokens.eth,
    quoteToken: tokens.tlos,
    lpToken: tokens.ethTlos,
    earnToken: tokens.tlos,
    billNnftAddress: {
      [ChainId.TLOS]: '0x9084C442286E23617694101d5575bEA48C2cf621',
    },
    inactive: false,
    projectLink: 'https://www.telos.net/',
    twitter: 'https://twitter.com/HelloTelos',
  },
  {
    index: 208,
    contractAddress: {
      [ChainId.TLOS]: '0x81f2BA390934df655eABcc3787F4f5f694e722ED',
    },
    billType: 'Jungle Bill',
    token: tokens.btc,
    quoteToken: tokens.tlos,
    lpToken: tokens.btcTlos,
    earnToken: tokens.tlos,
    billNnftAddress: {
      [ChainId.TLOS]: '0x9084C442286E23617694101d5575bEA48C2cf621',
    },
    inactive: false,
    projectLink: 'https://www.telos.net/',
    twitter: 'https://twitter.com/HelloTelos',
  },
  {
    index: 209,
    contractAddress: {
      [ChainId.TLOS]: '0x68aEaAbE6EbBd2b5Cf0130d0BAAef1Ec5E0539Aa',
    },
    billType: 'Jungle Bill',
    token: tokens.usdt,
    quoteToken: tokens.tlos,
    lpToken: tokens.usdtTlos,
    earnToken: tokens.tlos,
    billNnftAddress: {
      [ChainId.TLOS]: '0x9084C442286E23617694101d5575bEA48C2cf621',
    },
    inactive: false,
    projectLink: 'https://www.telos.net/',
    twitter: 'https://twitter.com/HelloTelos',
  },
  {
    index: 210,
    contractAddress: {
      [ChainId.TLOS]: '0xb3a0b38E5C07db5238538a640155562085F22bCe',
    },
    billType: 'Jungle Bill',
    token: tokens.usdc,
    quoteToken: tokens.tlos,
    lpToken: tokens.usdcTlos,
    earnToken: tokens.tlos,
    billNnftAddress: {
      [ChainId.TLOS]: '0x9084C442286E23617694101d5575bEA48C2cf621',
    },
    inactive: false,
    projectLink: 'https://www.telos.net/',
    twitter: 'https://twitter.com/HelloTelos',
  },
  {
    index: 201,
    contractAddress: {
      [ChainId.TLOS]: '0x7C02E197BC2644FE0E9834641F80aC0A15055ad7',
    },
    billType: 'Jungle Bill',
    token: tokens.banana,
    quoteToken: tokens.tlos,
    lpToken: tokens.bananaTlos,
    earnToken: tokens.tlos,
    billNnftAddress: {
      [ChainId.TLOS]: '0x9084C442286E23617694101d5575bEA48C2cf621',
    },
    inactive: true,
    projectLink: 'https://www.telos.net/',
    twitter: 'https://twitter.com/HelloTelos',
  },
  {
    index: 202,
    contractAddress: {
      [ChainId.TLOS]: '0x76a33a5d002C711A3F353cB4Ee2B112B579c317a',
    },
    billType: 'Jungle Bill',
    token: tokens.eth,
    quoteToken: tokens.tlos,
    lpToken: tokens.ethTlos,
    earnToken: tokens.tlos,
    billNnftAddress: {
      [ChainId.TLOS]: '0x9084C442286E23617694101d5575bEA48C2cf621',
    },
    inactive: true,
    projectLink: 'https://www.telos.net/',
    twitter: 'https://twitter.com/HelloTelos',
  },
  {
    index: 203,
    contractAddress: {
      [ChainId.TLOS]: '0xa08A0125F4B85320e2357174EDC9E262098BF850',
    },
    billType: 'Jungle Bill',
    token: tokens.btc,
    quoteToken: tokens.tlos,
    lpToken: tokens.btcTlos,
    earnToken: tokens.tlos,
    billNnftAddress: {
      [ChainId.TLOS]: '0x9084C442286E23617694101d5575bEA48C2cf621',
    },
    inactive: true,
    projectLink: 'https://www.telos.net/',
    twitter: 'https://twitter.com/HelloTelos',
  },
  {
    index: 204,
    contractAddress: {
      [ChainId.TLOS]: '0xD1FbE4EAFAcB7FdC56F7Aa8dA24198b01942C677',
    },
    billType: 'Jungle Bill',
    token: tokens.usdt,
    quoteToken: tokens.tlos,
    lpToken: tokens.usdtTlos,
    earnToken: tokens.tlos,
    billNnftAddress: {
      [ChainId.TLOS]: '0x9084C442286E23617694101d5575bEA48C2cf621',
    },
    inactive: true,
    projectLink: 'https://www.telos.net/',
    twitter: 'https://twitter.com/HelloTelos',
  },
  {
    index: 205,
    contractAddress: {
      [ChainId.TLOS]: '0xc17a1ea1Da9975A2fad85eC7C39AEBA2B4BfEA11',
    },
    billType: 'Jungle Bill',
    token: tokens.usdc,
    quoteToken: tokens.tlos,
    lpToken: tokens.usdcTlos,
    earnToken: tokens.tlos,
    billNnftAddress: {
      [ChainId.TLOS]: '0x9084C442286E23617694101d5575bEA48C2cf621',
    },
    inactive: true,
    projectLink: 'https://www.telos.net/',
    twitter: 'https://twitter.com/HelloTelos',
  },
]

export default bills
