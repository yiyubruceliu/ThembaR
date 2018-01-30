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
        bool canPort;

        function Agreement(address me, address _signer, address _ownerToken, uint _direction, uint _left, uint _right, bool _canPort) public {
            owner = me;//should be msg.sender;
            signer = _signer;
            ownerToken = _ownerToken;
            direction = _direction;
            left = _left;
            right = _right;
            signed = false;
            canPort = _canPort;
        }
        function signAgreement(address _signerToken) public returns(bool) {
             //if (msg.sender == signer) {
                     signerToken = _signerToken;
                     signed = true;
                    return true;
            // }
             //return false;    
        }
        function checkCredential(address _from) private view returns (bool) {
            return (direction == 2 || (direction == 0 && _from == owner) || (direction == 1 && _from == signer));
        }
        function checkThis() public view returns (address) {
            return address(this);
        }

        function getInfo() public view returns (address,address,address,address,uint,uint,uint,bool,bool) {
             
            return (owner,ownerToken,signer,signerToken,left,right,direction,signed,canPort);
        }

        function port(address _replaceMeWithMsgSender, address _fromToken, uint amount, address me) external returns (bool) {
            //require(canPort);
            //require((_fromToken == ownerToken) || (_fromToken == signerToken));
             ThembaR tr = ThembaR(_fromToken);
            // require(tr.balanceOf(_replaceMeWithMsgSender) >= amount);
             uint otherAmount;
             ThembaR otherAddress;
             bool blockUno = false;
             bool blockTwo = false;
            if (_fromToken == ownerToken && checkCredential(_fromToken)) {
                blockUno = true;
                  otherAmount = amount*(right/left);
                  otherAddress = ThembaR(signerToken);
                 tr.specialTransfer(signer, amount, _replaceMeWithMsgSender, me);
                 otherAddress.specialTransfer(_replaceMeWithMsgSender, otherAmount,signer,me);
            } else if (checkCredential(_fromToken)) {
                blockTwo = true;
                  otherAmount = amount*(left/right);
                  otherAddress = ThembaR(ownerToken);
                 tr.specialTransfer(owner, amount, _replaceMeWithMsgSender, me);
                 otherAddress.specialTransfer(_replaceMeWithMsgSender, otherAmount,owner, me);
            } 
            return true;
        }
          function portAndPay(address _fromToken, uint amount) external returns (bool) {
            require((_fromToken == ownerToken) || (_fromToken == signerToken));
            ThembaR tr = ThembaR(_fromToken);
            require(tr.balanceOf(msg.sender) >= amount);
            if (_fromToken == ownerToken && checkCredential(_fromToken)) {
                tr.specialTransfer(signer, amount, msg.sender, this);          
            } else if (checkCredential(_fromToken)) {
                tr.specialTransfer(owner, amount, msg.sender, this);
            } 

        }
    }
