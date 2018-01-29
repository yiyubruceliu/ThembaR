pragma solidity ^0.4.16;

import "./../node_modules/minimetoken/contracts/MiniMeToken.sol";

contract ThembaR is MiniMeToken {
    function ThembaR(address _blaToken, address _parentToken,
        uint _snapshotBlock,
        string _tokenName,
        uint8 _decimalUnits,
        string _tokenSymbol,
        bool _transfersEnabled) MiniMeToken(_blaToken, _parentToken, _snapshotBlock,
         _tokenName,
         _decimalUnits,
         _tokenSymbol,
         _transfersEnabled){
        
        }
}