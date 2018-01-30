pragma solidity ^0.4.16;
import ".././node_modules/zeppelin-solidity/contracts/token/ERC20/BasicToken.sol";
import "./Agreement.sol";

contract ThembaR is BasicToken {
    address _owner;
    address[] private agreements;
    string public name = "ExampleToken"; 
    string public symbol = "EGT";
    uint public decimals = 18;
    uint public INITIAL_SUPPLY = 10000 * (10 ** decimals);
   function ThembaR() public {
        totalSupply_ = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
    }
         
        // function addAgreement(address _arrangee, uint _direction, uint _left, uint __right, bool _canPort ) public {
        //     require(_owner == msg.sender);
        //     Agreement a = new Agreement( _arrangee, this, _direction,  _left, __right, _canPort);
        //     agreements.push(a);
        // }
       
        // function specialTransfer(address _to, uint amount, address _from, address agreement) public {
        //     for (uint i = 0; i < agreements.length; i++) {
        //         if (agreements[i] == agreement) {
        //             transferFrom(_from, _to, amount);
        //         }
        //       }
        // }
    }