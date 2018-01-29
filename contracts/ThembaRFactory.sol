pragma solidity ^0.4.16;
import "./ThembaR.sol";
import "./../node_modules/minimetoken/contracts/MiniMeToken.sol";

contract ThembaRFactory is MiniMeTokenFactory {

function createThembaRToken(
        address _parentToken,
        uint _snapshotBlock,
        string _tokenName,
        uint8 _decimalUnits,
        string _tokenSymbol,
        bool _transfersEnabled
    ) public returns (ThembaR) 
    {
        ThembaR newToken =new ThembaR(
            this,
            _parentToken,
            _snapshotBlock,
            _tokenName,
            _decimalUnits,
            _tokenSymbol,
            _transfersEnabled
            );

        newToken.changeController(msg.sender);
        return newToken;
    }
}