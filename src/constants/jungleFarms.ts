import { JungleFarmConfig } from '../types'
import tokens from './tokens'
import { ChainId } from '@ape.swap/sdk'

const jungleFarms: JungleFarmConfig[] = [
  /*
    CHAIN ID 40 - TLOS Jungle Farms
    Current Jungle ID = 16
  */
  {
    jungleId: 1,
    tokenName: 'BANANA-TLOS',
    image: 'BANANA.svg',
    stakingToken: tokens.bananaTlos,
    rewardToken: tokens.tlos,
    lpTokens: {
      token: tokens.tlos,
      quoteToken: tokens.banana,
    },
    contractAddress: {
      [ChainId.TLOS]: '0x5B7d49806709Fa0B3CdA23232cc2D609bCA2B2d0',
    },
    projectLink: 'https://telos.net',
    twitter: 'https://twitter.com/HelloTelos',
    harvest: true,
    rewardsPerSecond: '0.004172453704',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    lpStaking: true,
    isEarnTokenLp: false,
    network: ChainId.TLOS,
  },
  {
    jungleId: 2,
    tokenName: 'ETH-TLOS',
    image: 'ETH.svg',
    stakingToken: tokens.ethTlos,
    rewardToken: tokens.tlos,
    lpTokens: {
      token: tokens.tlos,
      quoteToken: tokens.eth,
    },
    contractAddress: {
      [ChainId.TLOS]: '0xA3c3A929Ae19Bfc56E2A9B0f23e99bae8Bf6F11A',
    },
    projectLink: 'https://telos.net',
    twitter: 'https://twitter.com/HelloTelos',
    harvest: true,
    rewardsPerSecond: '0.006956404321',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    lpStaking: true,
    isEarnTokenLp: false,
    network: ChainId.TLOS,
  },
  {
    jungleId: 3,
    tokenName: 'BTC-TLOS',
    image: 'BTC.svg',
    stakingToken: tokens.btcTlos,
    rewardToken: tokens.tlos,
    lpTokens: {
      token: tokens.tlos,
      quoteToken: tokens.btc,
    },
    contractAddress: {
      [ChainId.TLOS]: '0x96de2679e2d34cfC7cA3245D2d1e55f7dCdF88Bc',
    },
    projectLink: 'https://telos.net',
    twitter: 'https://twitter.com/HelloTelos',
    harvest: true,
    rewardsPerSecond: '0.004172453704',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    lpStaking: true,
    isEarnTokenLp: false,
    network: ChainId.TLOS,
  },
  {
    jungleId: 4,
    tokenName: 'USDT-TLOS',
    image: 'USDT.svg',
    stakingToken: tokens.usdtTlos,
    rewardToken: tokens.tlos,
    lpTokens: {
      token: tokens.tlos,
      quoteToken: tokens.usdt,
    },
    contractAddress: {
      [ChainId.TLOS]: '0xffd6a576dCa8742D7afED1538ad6EF8b0022dDbb',
    },
    projectLink: 'https://telos.net',
    twitter: 'https://twitter.com/HelloTelos',
    harvest: true,
    rewardsPerSecond: '0.005564429012',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    lpStaking: true,
    isEarnTokenLp: false,
    network: ChainId.TLOS,
  },
  {
    jungleId: 5,
    tokenName: 'USDC-TLOS',
    image: 'USDC.svg',
    stakingToken: tokens.usdcTlos,
    rewardToken: tokens.tlos,
    lpTokens: {
      token: tokens.tlos,
      quoteToken: tokens.usdc,
    },
    contractAddress: {
      [ChainId.TLOS]: '0xE874E1EF5622aeb65b2394105E5051d265D3cFe6',
    },
    projectLink: 'https://telos.net',
    twitter: 'https://twitter.com/HelloTelos',
    harvest: true,
    rewardsPerSecond: '0.006956404321',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    lpStaking: true,
    isEarnTokenLp: false,
    network: ChainId.TLOS,
  },
  {
    jungleId: 6,
    tokenName: 'STLOS-TLOS',
    image: 'STLOS.png',
    stakingToken: tokens.stlosTlos,
    rewardToken: tokens.tlos,
    lpTokens: {
      token: tokens.tlos,
      quoteToken: tokens.stlos,
    },
    contractAddress: {
      [ChainId.TLOS]: '0x1FF8523D0Dc486fe6467826A321faD6521Ce8F8e',
    },
    projectLink: 'https://telos.net',
    twitter: 'https://twitter.com/HelloTelos',
    harvest: true,
    rewardsPerSecond: '0.02819328704',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    lpStaking: true,
    isEarnTokenLp: false,
    network: ChainId.TLOS,
  },
  {
    jungleId: 7,
    tokenName: 'STLOS-USDC',
    image: 'STLOS.svg',
    stakingToken: tokens.stlosUsdc,
    rewardToken: tokens.tlos,
    lpTokens: {
      token: tokens.stlos,
      quoteToken: tokens.usdc,
    },
    contractAddress: {
      [ChainId.TLOS]: '0x4c33A9cdBFC39DF0F17ec0d64170a23e3703E0a0',
    },
    projectLink: 'https://telos.net',
    twitter: 'https://twitter.com/HelloTelos',
    harvest: true,
    rewardsPerSecond: '0.02967708333',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    lpStaking: true,
    isEarnTokenLp: false,
    network: ChainId.TLOS,
  },
  {
    jungleId: 8,
    tokenName: 'USDT-USDC',
    image: 'USDT.svg',
    stakingToken: tokens.usdtUsdc,
    rewardToken: tokens.tlos,
    lpTokens: {
      token: tokens.usdt,
      quoteToken: tokens.usdc,
    },
    contractAddress: {
      [ChainId.TLOS]: '0xCc51745C55B1826A276F801bCe4DdFfad566Be16',
    },
    projectLink: 'https://telos.net',
    twitter: 'https://twitter.com/HelloTelos',
    harvest: true,
    rewardsPerSecond: '0.02374151235',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    lpStaking: true,
    isEarnTokenLp: false,
    network: ChainId.TLOS,
  },

  /*
    CHAIN ID 56 - BNB Jungle Farms
    Current Jungle ID = 15
  */
  {
    jungleId: 8,
    tokenName: 'PXP-BNB',
    image: 'PXP.png',
    stakingToken: tokens.pxpBnb,
    rewardToken: tokens.pxp,
    lpTokens: {
      token: tokens.pxp,
      quoteToken: tokens.wbnb,
    },
    contractAddress: {
      [ChainId.BSC]: '0xBE36303aeCc8F1A71fa1076349117BE2fb94f7cD',
    },
    projectLink: 'https://piratexpirate.io/',
    twitter: 'https://twitter.com/PXPNFTsGame',
    harvest: true,
    tokenPerBlock: '15.659722222222222222',
    sortOrder: 1,
    isFinished: true,
    tokenDecimals: 18,
    lpStaking: true,
    isEarnTokenLp: false,
    network: ChainId.BSC,
    unZapable: true,
  },
  {
    jungleId: 9,
    tokenName: 'BNBx-BNB',
    image: 'BNBX.svg',
    stakingToken: tokens.bnbxBnb,
    rewardToken: tokens.sd,
    lpTokens: {
      token: tokens.bnbx,
      quoteToken: tokens.wbnb,
    },
    contractAddress: {
      [ChainId.BSC]: '0x20589C5cC1907023BecA7E4E9A2325e1Ef5F30eF',
    },
    projectLink: 'https://staderlabs.com/',
    twitter: 'https://twitter.com/stader_bnb',
    audit: 'https://www.certik.com/projects/Stader',
    harvest: true,
    tokenPerBlock: '0.00616030594',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    lpStaking: true,
    isEarnTokenLp: false,
    network: ChainId.BSC,
    unZapable: true,
  },
  {
    jungleId: 10,
    tokenName: 'BRZ-BUSD',
    image: 'BRZ.svg',
    stakingToken: tokens.brzBusd,
    rewardToken: tokens.brz,
    lpTokens: {
      token: tokens.brz,
      quoteToken: tokens.busd,
    },
    contractAddress: {
      [ChainId.BSC]: '0xdffcb3f3a64b8c7d722b33d098349417136585f8',
    },
    projectLink: 'https://www.transfero.com/transfero-crypto?lang=en',
    twitter: 'https://twitter.com/transferogroup',
    harvest: true,
    tokenPerBlock: '0.0171',
    sortOrder: 1,
    isFinished: true,
    tokenDecimals: 4,
    lpStaking: true,
    isEarnTokenLp: false,
    network: ChainId.BSC,
  },
  {
    jungleId: 206,
    tokenName: 'LGX-BUSD',
    image: 'LGX.svg',
    stakingToken: tokens.lgxBusd,
    rewardToken: tokens.lgx,
    lpTokens: {
      token: tokens.lgx,
      quoteToken: tokens.busd,
    },
    contractAddress: {
      [ChainId.BSC]: '0xc81af2222ac6ec0f3ec08b875df25326b40e7a76',
    },
    projectLink: 'https://solo.to/legionnetwork',
    twitter: 'https://twitter.com/LegionNetwork__',
    harvest: true,
    tokenPerBlock: '0.507454668209876543',
    sortOrder: 1,
    isFinished: true,
    tokenDecimals: 18,
    lpStaking: true,
    isEarnTokenLp: false,
    network: ChainId.BSC,
    unZapable: true,
  },
  {
    jungleId: 1,
    tokenName: 'COC-BNB',
    image: 'COC.svg',
    stakingToken: tokens.cocBnb,
    rewardToken: tokens.coc,
    lpTokens: {
      token: tokens.coc,
      quoteToken: tokens.wbnb,
    },
    contractAddress: {
      [ChainId.BSC]: '0xf4195c4ddb10db3df27816bb70dc342d861a7561',
    },
    projectLink: 'https://www.coinofchampions.com/',
    twitter: 'https://twitter.com/coinofchampions',
    harvest: true,
    tokenPerBlock: '96250',
    sortOrder: 1,
    isFinished: true,
    tokenDecimals: 18,
    lpStaking: true,
    isEarnTokenLp: false,
    network: ChainId.BSC,
    unZapable: true,
  },
  {
    jungleId: 2,
    tokenName: 'WGICT-USDT',
    image: 'WGICT.svg',
    stakingToken: tokens.wgictUsdt,
    lpTokens: {
      token: tokens.wgict,
      quoteToken: tokens.usdt,
    },
    rewardToken: tokens.wgict,
    contractAddress: {
      [ChainId.BSC]: '0xe4417357b022224736ca845856917aaae912c0bd',
    },
    projectLink: 'https://gictrade.io/',
    twitter: 'https://twitter.com/GICTraders/ ',
    harvest: true,
    tokenPerBlock: '0.01437847',
    sortOrder: 1,
    isFinished: true,
    tokenDecimals: 8,
    lpStaking: true,
    isEarnTokenLp: false,
    network: ChainId.BSC,
    unZapable: true,
  },
  {
    jungleId: 3,
    tokenName: 'NFT11-BUSD',
    image: 'NFT11.png',
    stakingToken: tokens.nft11Busd,
    rewardToken: tokens.nft11,
    lpTokens: {
      token: tokens.nft11,
      quoteToken: tokens.busd,
    },
    contractAddress: {
      [ChainId.BSC]: '0x420B9baD20d43D561377615325E60d5B7CdB1B35',
    },
    projectLink: 'https://nft11.io/',
    twitter: 'https://twitter.com/NFT11_Official',
    harvest: true,
    tokenPerBlock: '0.059799768518518518',
    sortOrder: 1,
    isFinished: true,
    tokenDecimals: 18,
    lpStaking: true,
    isEarnTokenLp: false,
    network: ChainId.BSC,
    unZapable: true,
  },
  {
    jungleId: 4,
    tokenName: 'RUBY-BNB',
    image: 'RUBY.svg',
    stakingToken: tokens.rubyBnb,
    rewardToken: tokens.ruby,
    lpTokens: {
      token: tokens.ruby,
      quoteToken: tokens.wbnb,
    },
    contractAddress: {
      [ChainId.BSC]: '0xbc3f5571fc3338d0b9216a2c5c2e6f338531e3f8',
    },
    projectLink: 'https://www.rubyplaynet.com/',
    harvest: true,
    tokenPerBlock: '2.864583333333',
    sortOrder: 1,
    isFinished: true,
    tokenDecimals: 12,
    lpStaking: true,
    isEarnTokenLp: false,
    network: ChainId.BSC,
    unZapable: true,
  },
  {
    jungleId: 5,
    tokenName: 'DRF-BUSD',
    image: 'DRF.svg',
    stakingToken: tokens.drfBusd,
    rewardToken: tokens.drf,
    lpTokens: {
      token: tokens.drf,
      quoteToken: tokens.busd,
    },
    contractAddress: {
      [ChainId.BSC]: '0xc8519d981a99c9a56364895c6d37eea686d70540',
    },
    projectLink: 'https://derify.finance/',
    twitter: 'https://twitter.com/DerifyProtocol',
    harvest: true,
    tokenPerBlock: '0.06875',
    sortOrder: 1,
    isFinished: true,
    tokenDecimals: 18,
    lpStaking: true,
    isEarnTokenLp: false,
    network: ChainId.BSC,
    unZapable: true,
  },
  {
    jungleId: 6,
    tokenName: 'BONES-BNB',
    image: 'BONES.png',
    stakingToken: tokens.bonesBnb,
    rewardToken: tokens.bones,
    lpTokens: {
      token: tokens.bones,
      quoteToken: tokens.wbnb,
    },
    contractAddress: {
      [ChainId.BSC]: '0x84291c0e6b19cc833afc491561aacfbdd6885d63',
    },
    projectLink: 'https://moonshots.farm/',
    twitter: 'https://twitter.com/MoonshotsFarm',
    harvest: true,
    tokenPerBlock: '0.224606095679012345',
    sortOrder: 1,
    isFinished: true,
    tokenDecimals: 18,
    lpStaking: true,
    isEarnTokenLp: false,
    network: ChainId.BSC,
    unZapable: true,
  },
  {
    jungleId: 7,
    tokenName: 'GENv3-BNB',
    image: 'GENV3.svg',
    stakingToken: tokens.genv3Bnb,
    rewardToken: tokens.genv3,
    lpTokens: {
      token: tokens.genv3,
      quoteToken: tokens.wbnb,
    },
    contractAddress: {
      [ChainId.BSC_TESTNET]: '0xb1108939748A635C5ed982a17FF5C6E7D79ECF62',
      [ChainId.BSC]: '0xc3a5dbb5121772628956b9ce709ec1dda6a94b4d',
    },
    projectLink: 'https://www.generic.money/',
    twitter: 'https://twitter.com/thegenericcoin',
    harvest: true,
    tokenPerBlock: '19097.222222222222222222',
    sortOrder: 1,
    isFinished: true,
    tokenDecimals: 18,
    lpStaking: true,
    isEarnTokenLp: false,
    network: ChainId.BSC,
    unZapable: true,
  },
  {
    jungleId: 0,
    tokenName: 'LC-BNB',
    image: 'LC.svg',
    stakingToken: tokens.lcBnb,
    rewardToken: tokens.lc,
    lpTokens: {
      token: tokens.lc,
      quoteToken: tokens.wbnb,
    },
    contractAddress: {
      [ChainId.BSC]: '0x1e7133e05d1b4bdab44cb5503fa4a801000c963a',
    },
    projectLink: 'https://www.luckychip.io/',
    twitter: 'https://twitter.com/luckychip_io',
    harvest: true,
    tokenPerBlock: '0',
    sortOrder: 1,
    isFinished: true,
    tokenDecimals: 18,
    lpStaking: true,
    isEarnTokenLp: false,
    network: ChainId.BSC,
    unZapable: true,
  },
  {
    jungleId: 11,
    tokenName: 'GENv3-BNB',
    image: 'GENV3.svg',
    stakingToken: tokens.genv3Bnb,
    rewardToken: tokens.genv3,
    lpTokens: {
      token: tokens.genv3,
      quoteToken: tokens.wbnb,
    },
    contractAddress: {
      [ChainId.BSC_TESTNET]: '0xb1108939748A635C5ed982a17FF5C6E7D79ECF62',
      [ChainId.BSC]: '0xe406371a7e43f992cb3bc70118f9664cd37e3489',
    },
    projectLink: 'https://www.generic.money/',
    twitter: 'https://twitter.com/thegenericcoin',
    harvest: true,
    tokenPerBlock: '11574.074074074074074074',
    sortOrder: 1,
    isFinished: true,
    tokenDecimals: 18,
    lpStaking: true,
    isEarnTokenLp: false,
    network: ChainId.BSC,
  },
  {
    jungleId: 12,
    tokenName: 'SWT-BNB',
    image: 'SWT.svg',
    stakingToken: tokens.swtBnb,
    rewardToken: tokens.swt,
    lpTokens: {
      token: tokens.swt,
      quoteToken: tokens.wbnb,
    },
    contractAddress: {
      [ChainId.BSC]: '0x6d986e76745fa4f99bad44dd2792351bf2d0800f',
    },
    projectLink: 'https://sweetpad.io/',
    twitter: 'https://twitter.com/SweetPad_',
    audit: 'https://irp.cdn-website.com/1b45ecb9/files/uploaded/SweetPad_AuditReport_InterFi.pdf',
    harvest: true,
    tokenPerBlock: '0.07398535704',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    lpStaking: true,
    isEarnTokenLp: false,
    network: ChainId.BSC,
  },
  {
    jungleId: 13,
    tokenName: 'LEAP-BNB',
    image: 'LEAP.svg',
    stakingToken: tokens.leapBnb,
    rewardToken: tokens.leap,
    lpTokens: {
      token: tokens.leap,
      quoteToken: tokens.wbnb,
    },
    contractAddress: {
      [ChainId.BSC]: '0x60d0926F7669d2F36845eAf672e57366c0c2bD7B',
    },
    projectLink: 'https://www.leaptoken.io/',
    twitter: 'https://twitter.com/Play_Leap',
    audit: 'https://github.com/HashEx/public_audits/blob/master/PlayLeap/PlayLeap.pdf',
    harvest: true,
    tokenPerBlock: '0.403084201388888888',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    lpStaking: true,
    isEarnTokenLp: false,
    network: ChainId.BSC,
  },
  {
    jungleId: 14,
    tokenName: 'AVAN-BNB',
    image: 'AVAN.svg',
    stakingToken: tokens.avanBnb,
    rewardToken: tokens.avan,
    lpTokens: {
      token: tokens.avan,
      quoteToken: tokens.wbnb,
    },
    contractAddress: {
      [ChainId.BSC]: '0x822558FCE9D9F98cB59953F4841e5e43cEba5173',
    },
    projectLink: 'https://avanatoken.com/',
    twitter: 'https://twitter.com/AvanaProject',
    audit: 'https://hashex.org/audits/avana-token/',
    harvest: true,
    tokenPerBlock: '1.491898148148148148',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    lpStaking: true,
    isEarnTokenLp: false,
    network: ChainId.BSC,
  },
  {
    jungleId: 15,
    tokenName: 'WCFLT-BNB',
    image: 'WCFLT.svg',
    stakingToken: tokens.wcfltBnb,
    rewardToken: tokens.wcflt,
    lpTokens: {
      token: tokens.wcflt,
      quoteToken: tokens.wbnb,
    },
    contractAddress: {
      [ChainId.BSC]: '0x0d665613d47C7eCC1B126bF56D5fa6373E3000b6',
    },
    projectLink: 'https://www.coinflect.com/',
    twitter: 'https://twitter.com/coinflect?lang=en',
    audit:
      'https://github.com/coinflect/wrapped-coinflect-audit/blob/main/Wrapped%20Coinflect%20Smart%20Contract%20Security%20Audit.pdf',
    harvest: true,
    tokenPerBlock: '108.140734953703703703',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    lpStaking: true,
    isEarnTokenLp: false,
    network: ChainId.BSC,
  },
  {
    jungleId: 16,
    tokenName: tokens.xtalBusd.symbol,
    image: 'XTAL.png',
    stakingToken: tokens.xtalBusd,
    rewardToken: tokens.xtal,
    lpTokens: {
      token: tokens.xtal,
      quoteToken: tokens.busd,
    },
    contractAddress: {
      [ChainId.BSC]: '0x2b8874CA3C7BD88e31b4b7938C56963c5121f914',
    },
    projectLink: 'https://talesofxtalnia.com/',
    twitter: 'https://twitter.com/xtalnia',
    audit: 'https://hashex.org/audits/xtal-token/',
    harvest: true,
    tokenPerBlock: '0.09352199074074074',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    lpStaking: true,
    isEarnTokenLp: false,
    network: ChainId.BSC,
  },
]

export default jungleFarms
