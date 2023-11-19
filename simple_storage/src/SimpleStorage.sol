// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

contract SimpleStorage {
    uint256 myFavouriteNumber;

    struct Person {
        uint256 favoriteNumber;
        string name;
    }

    Person[] public listOfPeople;

    mapping(string name => uint256 favoriteNumber) public nameToFavoriteNumber;

    function store(uint256 _favoriteNumber) public {
        myFavouriteNumber = _favoriteNumber;
    }

    function retrieve() public view returns (uint256) {
        return myFavouriteNumber;
    }

    function addPerson(string memory _name, uint256 _favoriteNumber) public {
        listOfPeople.push(Person({
            name: _name,
            favoriteNumber: _favoriteNumber
        }));    
    }
}