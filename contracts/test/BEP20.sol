pragma solidity =0.5.16;

import '../CrosswiseBEP20.sol';

contract BEP20 is CrosswiseBEP20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
