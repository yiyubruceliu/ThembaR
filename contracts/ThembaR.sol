pragma solidity ^0.4.16;
import ".././node_modules/zeppelin-solidity/contracts/token/ERC20/BasicToken.sol";
import "./Agreement.sol";

contract ThembaR is BasicToken {
    address owner;
    address[] private agreements;
    string public name; 
    string public symbol;
    uint public INITIAL_SUPPLY = 533444344343;

    function getOwner() public view returns (address) {
        return owner;
    }
    function getBalanceReloaded(address accountHolder) public view returns (uint) {
        return balances[accountHolder];
  }
   function addAgreement(address _arrangee, uint _direction, uint _left, uint _right, bool _canPort) public {
           // require(owner == msg.sender);
             address a = new Agreement(owner, _arrangee,this, _direction,  _left, _right, _canPort);
             agreements.push(a);
    }

    function getAgreementList() public view returns (address[]) {
        return agreements;
    }
   function transferFrom(address _from, address _to, uint256 _value) public returns (bool) {
    //require(_to != address(0));
    balances[_from] = balances[_from].sub(_value);
    balances[_to] = balances[_to].add(_value);
    Transfer(_from, _to, _value);
    return true;
  }
    function signAgreement(address _agreementAddress) public returns(bool) {
             //if (msg.sender == signer) {
                Agreement toSign = Agreement(_agreementAddress);
                toSign.signAgreement(this);
                agreements.push(toSign);
            // }
             //return false;    
        }
   function ThembaR(address _owner, string _name, string _symbol) {
        owner = _owner;
        name = _name;
        symbol = _symbol;
        totalSupply_ = INITIAL_SUPPLY;
        balances[_owner] = INITIAL_SUPPLY;
    }
     function specialTransfer(address _to, uint amount, address _from, address agreement) public {
            for (uint i = 0; i < agreements.length; i++) {
                if (agreements[i] == agreement) {
                    transferFrom(_from, _to, amount);
                }
              }
        }      
    }