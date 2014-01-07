var dogeChainAPI = require('../../src/index.js');

// Get balance
dogeChainAPI.addressbalance(address, function (error, balance) {
	if(error) {
		// Handle error
	}
	console.log(balance);
});

// Get hash from address
dogeChainAPI.addresstohash(address, function (error, hash) {
	if(error) {
		// Handle error
	}
	console.log(hash);
});

// Check address for validity
dogeChainAPI.checkaddress(address, function (error, response) {
	if(error) {
		// Handle error
	}
	console.log(response);
});

// Get version prefix and hash encoded in an address
dogeChainAPI.decodeAddress(address, function (error, decodedAddress) {
	if(error) {
		// Handle error
	}
	console.log(decodedAddress);
});

// Get current block
dogeChainAPI.getCurrentBlock(function (error, currentBlock) {
	if(error) {
		// Handle error
	}
	console.log(currentBlock);
});

// Get current difficulty
dogeChainAPI.getDifficulty(function (error, difficulty) {
	if(error) {
		// Handle error
	}
	console.log(difficulty);
});

// Get total received by address
dogeChainAPI.getReceived(address, function (error, received) {
	if(error) {
		// Handle error
	}
	console.log(received);
});

// Get total sent by address
dogeChainAPI.getSent(address, function (error, sent) {
	if(error) {
		// Handle error
	}
	console.log(sent);
});

// Get address from hash
dogeChainAPI.hashtoaddress(hash, function (error, address) {
	if(error) {
		// Handle error
	}
	console.log(address);
});

// Get statistics about difficulty and network power
dogeChainAPI.nethash(function (error, statistics) {
	if(error) {
		// Handle error
	}
	console.log(statistics);
});

// Get the current total currency ever mined
dogeChainAPI.totalbc(function (error, total) {
	if(error) {
		// Handle error
	}
	console.log(total);
});

// Get the amount transactions of the last blocks
dogeChainAPI.transactions(function (error, transactions) {
	if(error) {
		// Handle error
	}
	console.log(transactions);
});