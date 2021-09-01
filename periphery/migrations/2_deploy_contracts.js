const Router = artifacts.require("UniswapV2Router02.sol");
const WETH = artifacts.require("WETH.sol");



module.exports = async function (deployer, network, addresses) {
  let weth; 
  const FACTORY_ADDRESS = '0xCfEB869F69431e42cdB54A4F4f105C19C080A601'; //TODO: gotten from Uniswap factory deployed to the network, 
                                                                      //make you change on deploying to another network
                                                            
  if(network === 'mainnet'){
    weth = WETH.at('0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2') // WETH address on mainnet. Do these if such exist on other network you are testing with 
  }else{
    await deployer.deploy(WETH);
    weth = await WETH.deployed()
  }
  
  await deployer.deploy(Router, FACTORY_ADDRESS, weth.address)
};
