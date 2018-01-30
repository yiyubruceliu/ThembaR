pragma solidity ^0.4.16;
import "./ThembaR.sol";

contract ThembaRController {
    address[] private tokens;
    address _owner;
    function ThembaRController() public {
        _owner = msg.sender;
    }
    function createNewToken(string _name, string _symbol) public { //business should call this
        ThembaR newToken = new ThembaR(msg.sender, _name, _symbol);
        tokens.push(newToken);
    }
    function getCustomerTokens() external returns (address[], uint[]) {
        address[] tokenOwners;
        uint[] balances;
        for (uint i = 0; i < tokens.length;i++) {
            ThembaR temp = ThembaR(tokens[i]);
            if (temp.balanceOf(msg.sender) >= 0) {
                tokenOwners.push(temp.getOwner());
                balances.push(temp.balanceOf(msg.sender));
            }
        }
        return (tokenOwners, balances);
    }
}

