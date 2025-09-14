

const messagesMock = [
  {
    content: JSON.stringify("I'm testing so hard!!!"),
    id: '1',
    tags: [['u', 'bitcoincash:qzy97glp47ut7tstm5g0tlrmkhk742795gkmyc7477']],
    npub: 'npub1234567890',
    pubkey: '1234567890',
  }
]
const smAccountsMock = [
  {
    npub: 'npub1234567890',
    bchAddr: 'bitcoincash:qzy97glp47ut7tstm5g0tlrmkhk742795gkmyc7477',
    pubkey: '1234567890',
    pfp: '',
    createdAt: new Date(),
    updatedAt: new Date(),
    followerCnt: 0,
    followingCnt: 0,
    posts: 0,
    likes: 0,
    comments: 0,
    reposts: 0
  },
  {
    npub: 'npub1234567891',
    bchAddr: 'bitcoincash:qzy97glp47ut7tstm5g0tlrmkhk742795gkmyc7478',
    pubkey: '1234567891',
    pfp: '',
    createdAt: new Date(),
    updatedAt: new Date(),
    followerCnt: 0,
    followingCnt: 0,
    posts: 0,
    likes: 0,
    comments: 0,
    reposts: 0
  }
]
export default {  messagesMock, smAccountsMock }