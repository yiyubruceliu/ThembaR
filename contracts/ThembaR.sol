pragma solidity ^0.4.16;
import ".././node_modules/zeppelin-solidity/contracts/token/ERC20/BasicToken.sol";
import "./Agreement.sol";

contract ThembaR is BasicToken {
    address owner;
    address[] private agreements;
    string public name; 
    string public symbol;
    uint public INITIAL_SUPPLY = 1000000000;

    function getOwner() public view returns (address) {
    return owner;
  }
   function transferFrom(address _from, address _to, uint256 _value) public returns (bool) {
    require(_to != address(0));
    require(_value <= balances[msg.sender]);

    // SafeMath.sub will throw if there is not enough balance.
    balances[_from] = balances[_from].sub(_value);
    balances[_to] = balances[_to].add(_value);
    Transfer(_from, _to, _value);
    return true;
  }
   function ThembaR(address _owner, string _name, string _symbol) public {
        owner = _owner;
        name = _name;
        symbol = _symbol;
        totalSupply_ = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
    }
         
        function addAgreement(address _arrangee, uint _direction, uint _left, uint _right, bool _canPort ) public {
            require(owner == msg.sender);
            Agreement a = new Agreement( _arrangee, this, _direction,  _left, _right, _canPort);
            agreements.push(a);
        }
       
        function specialTransfer(address _to, uint amount, address _from, address agreement) public {
            for (uint i = 0; i < agreements.length; i++) {
                if (agreements[i] == agreement) {
                    transferFrom(_from, _to, amount);
                }
              }
        }
    }