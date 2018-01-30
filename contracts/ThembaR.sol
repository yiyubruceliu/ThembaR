pragma solidity ^0.4.16;

import "./../node_modules/minimetoken/contracts/MiniMeToken.sol";
import "./Agreement.sol";

contract ThembaR is MiniMeToken {
    address _owner;
    function ThembaR(address _blaToken, address _parentToken,
        uint _snapshotBlock,
        string _tokenName,
        uint8 _decimalUnits,
        string _tokenSymbol,
        bool _transfersEnabled) MiniMeToken(_blaToken, _parentToken, _snapshotBlock,
         _tokenName,
         _decimalUnits,
         _tokenSymbol,
         _transfersEnabled) public {
             _owner = msg.sender;
        }
         address[] private agreements;
        // function addAgreement(address _arrangee, uint _direction, uint _left, uint __right, bool _canPort ) public {
        //     require(_owner == msg.sender);
        //     Agreement a = new Agreement( _arrangee, this, _direction,  _left, __right, _canPort);
        //     agreements.push(a);
        // }
       
        function specialTransfer(address _to, uint amount, address _from, address agreement) public {
            for (uint i = 0; i < agreements.length; i++) {
                if (agreements[i] == agreement) {
                    transferFrom(_from, _to, amount);
                }
              }
        }
    }