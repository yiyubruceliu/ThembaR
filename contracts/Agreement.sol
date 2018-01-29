pragma solidity ^0.4.16;

import "./ThembaR.sol";

    contract Agreement {
        address owner;
        address ownerToken;
        address signer;
        address signerToken;
        uint  direction;
        uint left;
        uint right;
        bool  signed;

        function Agreement(address _signer, address _ownerToken, uint _direction, uint _left, uint _right) public {
            owner = msg.sender;
            signer = _signer;
            ownerToken = _ownerToken;
            direction = _direction;
            left = _left;
            right = _right;
            signed = false;
        }
        function signArrangement(address _signerToken) public returns (bool) {
             if (msg.sender == signer) {
                     signerToken = _signerToken;
                     signed = true;
                     return true;
             }
             return false;    
        }
        function checkCredential(address _from) private view returns (bool) {
            return (direction == 2 || (direction == 0 && _from == owner) || (direction == 1 && _from == signer));
        }
        function port(address _fromToken, uint amount) external returns (bool) {
            require((_fromToken == ownerToken) || (_fromToken == signerToken));
            ThembaR tr = ThembaR(_fromToken);
            require(tr.balanceOf(msg.sender) >= amount);
            uint otherAmount;
            ThembaR otherAddress;
            if (_fromToken == ownerToken && checkCredential(_fromToken)) {
                 otherAmount = amount*(right/left);
                 otherAddress = ThembaR(signerToken);
                tr.specialTransfer(signer, amount, msg.sender, this);
                otherAddress.specialTransfer(msg.sender, otherAmount,signer,this);
            } else if (checkCredential(_fromToken)) {
                 otherAmount = amount*(left/right);
                 otherAddress = ThembaR(ownerToken);
                tr.specialTransfer(msg.sender, amount, owner, this);
                otherAddress.specialTransfer(owner, otherAmount,msg.sender,this);
            } 

        }
         function portAndPay(address _fromToken, uint amount) external returns (bool) {
            require((_fromToken == ownerToken) || (_fromToken == signerToken));
            ThembaR tr = ThembaR(_fromToken);
            require(tr.balanceOf(msg.sender) >= amount);
            uint otherAmount;
            ThembaR otherAddress;
            if (_fromToken == ownerToken && checkCredential(_fromToken)) {
                 otherAmount = amount*(right/left);
                 otherAddress = ThembaR(signerToken);
                tr.specialTransfer(signer, amount, msg.sender, this);
                otherAddress.specialTransfer(msg.sender, otherAmount,signer,this);
            } else if (checkCredential(_fromToken)) {
                 otherAmount = amount*(left/right);
                 otherAddress = ThembaR(ownerToken);
                tr.specialTransfer(msg.sender, amount, owner, this);
                otherAddress.specialTransfer(owner, otherAmount,msg.sender,this);
            } 

        }
         
    }
