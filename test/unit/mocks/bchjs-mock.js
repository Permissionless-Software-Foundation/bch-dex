// Mocks for bch unit test

// Tokens array containing some psf tokens
const psfBalances = [
    {
      tokenId:
              '38e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b0',
      balance: 1,
      slpAddress: 'simpleledger:qr5agtachyxvrwxu76vzszan5pnvuzy8duhv4lxrsk',
      decimalCount: 9
    },
    {
      tokenId:
              'df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb',
      balance: 617,
      slpAddress: 'simpleledger:qr5agtachyxvrwxu76vzszan5pnvuzy8duhv4lxrsk',
      decimalCount: 8
    },
    {
      tokenId:
              '38e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b0',
      balance: 1,
      slpAddress: 'simpleledger:qr5agtachyxvrwxu76vzszan5pnvuzy8duhv4lxrsk',
      decimalCount: 0
    },
    {
      tokenId:
              'a436c8e1b6bee3d701c6044d190f76f774be83c36de8d34a988af4489e86dd37',
      balance: 776,
      slpAddress: 'simpleledger:qr5agtachyxvrwxu76vzszan5pnvuzy8duhv4lxrsk',
      decimalCount: 7
    }
  ]

// Token array without psf tokens
const noPsfBalances = [
  {
    tokenId:
            'df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb',
    balance: 617,
    slpAddress: 'simpleledger:qr5agtachyxvrwxu76vzszan5pnvuzy8duhv4lxrsk',
    decimalCount: 8
  },
  {
    tokenId:
            'a436c8e1b6bee3d701c6044d190f76f774be83c36de8d34a988af4489e86dd37',
    balance: 776,
    slpAddress: 'simpleledger:qr5agtachyxvrwxu76vzszan5pnvuzy8duhv4lxrsk',
    decimalCount: 7
  },
  {
    tokenId:
            'df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb',
    balance: 617,
    slpAddress: 'simpleledger:qr5agtachyxvrwxu76vzszan5pnvuzy8duhv4lxrsk',
    decimalCount: 8
  }
]

export default {
  psfBalances,
  noPsfBalances
};