var dogeChainAPI = require('../../src/index.js');
var address;
describe('Doge API', function () {
	beforeEach(function () {
		address = 'DPqk8xpFejADzCbGqNbyR9kirLXfA3JKwC'; // Test123 wallet
	});
	it('verifies the API object', function () {
		expect(dogeChainAPI).not.toBe(null);
	});
	it('gets the balance of an account', function () {
		dogeChainAPI.addressbalance(address, function (error, balance) {
			expect(error).toBe(null);
			expect(balance).toBeGreaterThan(0);
		});
	});
	it('returns the hash from the wallet address provided', function () {
		expect(address).not.toBe(null);
		dogeChainAPI.addresstohash(address, function (error, hash) {
			expect(error).toBe(null);
			expect(hash).toBe('CD2249C166FF7B425551941E5C59F715C1ECAFEB');
		});
	});
	it('checks the address for validity', function () {
		expect(address).not.toBe(null);
		dogeChainAPI.checkaddress(address, function (error, addressType) {
			expect(error).toBe(null);
			expect(addressType).toBe('1E');
		});
		var address = 'test';
		dogeChainAPI.checkaddress(address, function (error, addressType) {
			expect(error).toBe(null);
			expect(addressType).toBe('SZ');
		});
	});
	it('returns the version prefix and hash encoded in an address', function () {
		expect(address).not.toBe(null);
		dogeChainAPI.decodeAddress(address, function (error, decodedAddress) {
			expect(error).toBe(null);
			expect(decodedAddress).toBe('1e:CD2249C166FF7B425551941E5C59F715C1ECAFEB');
		});
	});
	it('returns the current block on the network', function () {
		expect(address).not.toBe(null);
		dogeChainAPI.getCurrentBlock(function (error, currentBlock) {
			expect(error).toBe(null);
			expect(difficulty).toBeGreaterThan(0);
		});
	});
	it('returns the current difficulty of the network', function () {
		expect(address).not.toBe(null);
		dogeChainAPI.getDifficulty(function (error, difficulty) {
			expect(error).toBe(null);
			expect(difficulty).toBeGreaterThan(0);
		});
	});
	it('returns the total received by address', function () {
		expect(address).not.toBe(null);
		dogeChainAPI.getReceived(address, function (error, received) {
			expect(error).toBe(null);
			expect(received).toBe(0); // This will hold true as long as no one sends coins to this address.. <_<
		});
	});
	it('returns the total sent by address', function () {
		expect(address).not.toBe(null);
		dogeChainAPI.getSent(address, function (error, sent) {
			expect(error).toBe(null);
			expect(sent).toBe(0);
		});
	});
	it('returns the address from the wallet hash provided', function () {
		expect(address).not.toBe(null);
		var hash = 'CD2249C166FF7B425551941E5C59F715C1ECAFEB';
		dogeChainAPI.hashtoaddress(hash, function (error, newAddress) {
			expect(error).toBe(null);
			expect(newAddress).toBe(address);
		});
	});
	it('returns the statistics about difficulty and network power', function () {
		dogeChainAPI.nethash(function (error, statistics) {
			expect(error).toBe(null);
			expect(statistics).not.toBe(null);
		});
	});
	it('returns the current total currency ever mined', function () {
		dogeChainAPI.totalbc(function (error, total) {
			expect(error).toBe(null);
			expect(total).toBeGreaterThan(0);
		});
	});
	it('returns the amount transactions of the last blocks', function () {
		dogeChainAPI.transactions(function (error, transactions) {
			expect(error).toBe(null);
			expect(transactions).not.toBe(null);
		});
	});
});