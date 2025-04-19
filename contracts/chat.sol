// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Chat {
    struct Message {
        address sender;
        string text;
        uint256 timestamp;
    }

    mapping(address => mapping(address => Message[])) private chats;

    event MessageSent(address indexed from, address indexed to, string text);

    function sendMessage(address _to, string memory _text) public {
        require(bytes(_text).length > 0, "Message cannot be empty");
        
        chats[msg.sender][_to].push(Message(msg.sender, _text, block.timestamp));
        chats[_to][msg.sender].push(Message(msg.sender, _text, block.timestamp));

        emit MessageSent(msg.sender, _to, _text);
    }

    function getMessages(address _user) public view returns (Message[] memory) {
        return chats[msg.sender][_user];
    }
}
