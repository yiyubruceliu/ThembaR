const ThembaR = artifacts.require("./ThembaR.sol");

contract('ThembaR', function ([owner]) {
  let thembaR
  beforeEach('setup contract for each test', async function () {
    thembaR = await ThembaR.new(owner, "ddf", "dsd")
})

it('has an owner', async function () {
  console.log(owner)
  assert.equal(await thembaR.getOwner(), owner)
})
})