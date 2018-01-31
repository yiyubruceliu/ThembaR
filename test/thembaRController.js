const ThembaRController = artifacts.require("./ThembaRController.sol");
const ThembaR = artifacts.require("./ThembaR.sol");
const Agreement = artifacts.require("./Agreement.sol");
contract('ThembaRController', function ([owner, discovery, mnb]) {
  let thembaRController
  beforeEach('setup contract for each test', async function () {
    thembaRController = await ThembaRController.new()
})

    // it('added a new token to the list1', async function () {
    //     assert.notEqual("The array is not empty and it should be",(await thembaRController.getAllTokens() == []), false)
    //     await thembaRController.createBizToken(discovery, "Vatality","VP")
    //     await thembaRController.createBizToken(0xab4f170172a333d4e1fe7dc5d1a5f8a9e2d6671c, "Mugg and bean","MB")
    //     var tokenArray = await thembaRController.getAllTokens();
    //     console.log(tokenArray[0]);
    //     thembaR = await new ThembaR(tokenArray[0]);
    //     console.log("Token target", thembaR)
    //     console.log(discovery)
    //     console.log(await thembaR.getBalanceReloaded(discovery))

    //    await thembaR.transferFrom(discovery,owner, 500, {from: discovery})
    //     console.log(await thembaR.getBalanceReloaded(owner))
    //    // console.log(await thembaR.balanceOf(owner).valueOf())
    //     assert.notEqual((await thembaRController.getAllTokens() == []), true)
    // })
    // it('Get signed partners', async function () {//getSignedPartners
    //     await thembaRController.createBizToken(discovery, "Vatality","VP")//Create vitality token
    //     await thembaRController.createBizToken(mnb, "Mugg and bean","MB")//Create MnB token
    //     var tokenArray = await thembaRController.getAllTokens.call();//Get token array
    //     console.log(tokenArray);
    //     vatalityToken = await ThembaR.at(tokenArray[0]);//Get vitality token JS abstraction
    //     mnrToken = await ThembaR.at(tokenArray[1]);//Get MnB token JS abstraction

    //    console.log("before signing",await vatalityToken.getSignedPartners()); 

    //     await vatalityToken.addAgreement(mnb, 2, 1, 3, true);//Create new agreement
    //     list = await vatalityToken.getAgreementList.call(); 
    //     agreementAddress = list[list.length-1];//Get new agreement's address
    //     agreementContract = await Agreement.at(agreementAddress);//Get JS abstraction of agreement
    //     console.log(await agreementContract.getInfo.call());//Print agreement state

    //     mnrToken.signAgreement(agreementAddress);//MnB signs agreement
    //     console.log(await agreementContract.getInfo.call());//Print post signature state

    //     console.log("after signing",await vatalityToken.getSignedPartners()); 

    // })
    
    it('Get getPendingAgreements', async function () {//getSignedPartners
        await thembaRController.createBizToken(discovery, "Vatality","VP")//Create vitality token
        await thembaRController.createBizToken(mnb, "Mugg and bean","MB")//Create MnB token
        var tokenArray = await thembaRController.getAllTokens.call();//Get token array
        console.log(tokenArray);
        vatalityToken = await ThembaR.at(tokenArray[0]);//Get vitality token JS abstraction
        mnrToken = await ThembaR.at(tokenArray[1]);//Get MnB token JS abstraction

        await vatalityToken.addAgreement(mnb, 2, 1, 3, true);//Create new agreement
        list = await vatalityToken.getAgreementList.call(); 
        agreementAddress = list[list.length-1];//Get new agreement's address
        agreementContract = await Agreement.at(agreementAddress);//Get JS abstraction of agreement
        console.log("before signing",await vatalityToken.getSignerUnSignedAgreements.call(mnb)); 
        console.log(await agreementContract.getInfo.call());//Print agreement state

        mnrToken.signAgreement(agreementAddress);//MnB signs agreement
        console.log(await agreementContract.getInfo.call());//Print post signature state

        console.log("after signing",await vatalityToken.getSignerUnSignedAgreements.call(mnb));  

    })
    // it('create agreement and port from customer vitality to mnb', async function () {
    //     await thembaRController.createBizToken(discovery, "Vatality","VP")//Create vitality token
    //     await thembaRController.createBizToken(mnb, "Mugg and bean","MB")//Create MnB token
    //     var tokenArray = await thembaRController.getAllTokens();//Get token array

    //      vatalityToken = await ThembaR.at(tokenArray[0]);//Get vitality token JS abstraction
    //      mnrToken = await ThembaR.at(tokenArray[1]);//Get MnB token JS abstraction

    //     // Print out state of token accounts
    //      console.log("Discovery balance of VP: ",await vatalityToken.getBalanceReloaded(discovery));//Discovery balance of VP
    //      console.log("MnB balance of VP",await vatalityToken.getBalanceReloaded(mnb));//MnB balance of VP
    //      console.log("Customer balance of VP",await vatalityToken.getBalanceReloaded(owner)); //Customer balance of VP
 
    //      console.log("MnB balance of MB",await mnrToken.getBalanceReloaded(mnb));//MnB balance of MB
    //      console.log("Discovery balance of MB",await mnrToken.getBalanceReloaded(discovery));//Discovery balance of MB
    //      console.log("Customer balance of MB",await mnrToken.getBalanceReloaded(owner));//Customer balance of MB
         
    //     await vatalityToken.transferFrom(discovery,owner, 500, {from: discovery})
    //     await mnrToken.transferFrom(mnb,owner, 900, {from: discovery})

    //     // Print out state of token accounts
    //      console.log("Discovery balance of VP: ",await vatalityToken.getBalanceReloaded(discovery));//Discovery balance of VP
    //      console.log("MnB balance of VP",await vatalityToken.getBalanceReloaded(mnb));//MnB balance of VP
    //      console.log("Customer balance of VP",await vatalityToken.getBalanceReloaded(owner)); //Customer balance of VP
 
    //      console.log("MnB balance of MB",await mnrToken.getBalanceReloaded(mnb));//MnB balance of MB
    //      console.log("Discovery balance of MB",await mnrToken.getBalanceReloaded(discovery));//Discovery balance of MB
    //      console.log("Customer balance of MB",await mnrToken.getBalanceReloaded(owner));//Customer balance of MB

        

    //     await vatalityToken.addAgreement(mnb, 2, 1, 3, true);//Create new agreement
    //     list = await vatalityToken.getAgreementList.call(); 
    //     agreementAddress = list[list.length-1];//Get new agreement's address
    //     agreementContract = await Agreement.at(agreementAddress);//Get JS abstraction of agreement
    //     console.log(await agreementContract.getInfo.call());//Print agreement state

    
    //     mnrToken.signAgreement(agreementAddress);//MnB signs agreement
    //     console.log(await agreementContract.getInfo.call());//Print post signature state

    //     console.log("Before the big moment")

    //     // Print out state of token accounts
    //     console.log("Discovery balance of VP: ",await vatalityToken.getBalanceReloaded(discovery));//Discovery balance of VP
    //     console.log("MnB balance of VP",await vatalityToken.getBalanceReloaded(mnb));//MnB balance of VP
    //     console.log("Customer balance of VP",await vatalityToken.getBalanceReloaded(owner)); //Customer balance of VP

    //     console.log("MnB balance of MB",await mnrToken.getBalanceReloaded(mnb));//MnB balance of MB
    //     console.log("Discovery balance of MB",await mnrToken.getBalanceReloaded(discovery));//Discovery balance of MB
    //     console.log("Customer balance of MB",await mnrToken.getBalanceReloaded(owner));//Customer balance of MB
    
    //     console.log("herer comes the big moment")
    //     await agreementContract.port(owner, tokenArray[0], 400, agreementAddress);

    //     // Print out state of token accounts
    //     console.log("Discovery balance of VP: ",await vatalityToken.getBalanceReloaded(discovery));//Discovery balance of VP
    //     console.log("MnB balance of VP",await vatalityToken.getBalanceReloaded(mnb));//MnB balance of VP
    //     console.log("Customer balance of VP",await vatalityToken.getBalanceReloaded(owner)); //Customer balance of VP

    //     console.log("MnB balance of MB",await mnrToken.getBalanceReloaded(mnb));//MnB balance of MB
    //     console.log("Discovery balance of MB",await mnrToken.getBalanceReloaded(discovery));//Discovery balance of MB
    //     console.log("Customer balance of MB",await mnrToken.getBalanceReloaded(owner));//Customer balance of MB

    // //     assert.notEqual((await thembaRController.getAllTokens() == []), true)
    // })
  
})
