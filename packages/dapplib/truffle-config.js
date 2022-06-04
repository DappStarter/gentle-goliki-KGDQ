require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan recipe sad minor hidden end army genre'; 
let testAccounts = [
"0x9a65ce328472ff8ae7a41ddcf3b7218e671a254c7ceca5b5572a196962c613fd",
"0x208aecd72bc119882a03d6698705c9d592eacba6745d4018ce83a792d40fb5dd",
"0xa216bdcb3da66f0efdb3dddfe17bafc266b171cda4933495a0fed09ebdf821c7",
"0x0f2747f8df9ac097913eae019b7504ff2e7aed11f6c203166a7d22a7d50d7ee2",
"0x55a488f2b1cddc63edc86002ac1b59d8b79dc111a917096b50790fe265f6e920",
"0xab9693a767613f9813fde82be53a3f8a720cd4459e5701e4f4c31192d4384660",
"0xf1ee2316137d7068cbec25ee245184fa291fa538a6ae77c0ae344030642b869b",
"0x19a3e5e9718b58c51cd0b9935f533067b680a6c653e4117ffd9e6dd4c18ad605",
"0x0402238df030ad1c36f58ecaf92dde60f3e2bfaf4e06cb904bc8b129d43be175",
"0xdbb50c88e325262596601f9509fdab14a8c164b3a6765f72a3e741b1bcc5111d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

