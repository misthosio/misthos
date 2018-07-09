// Generated by BUCKLESCRIPT VERSION 4.0.0, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Utils = require("../../src/utils/Utils.bs.js");
var Bip39 = require("bip39");
var $$String = require("bs-platform/lib/js/string.js");
var BitcoinjsLib = require("bitcoinjs-lib");

Jest.test("Mnemonic from pubKey", (function () {
        var keyPair = BitcoinjsLib.ECPair.fromWIF("cPfdeLvhwvAVRRM5wiEWopWviGG65gbxQCHdtFL56PYUJXsTYixf", BitcoinjsLib.networks.testnet);
        var pubKey = Utils.bufFromHex($$String.sub(Utils.publicKeyFromKeyPair(keyPair), 0, 64));
        var wordList = Bip39.entropyToMnemonic(pubKey, Bip39.wordlists.english);
        return Jest.Expect[/* toEqual */12]("acoustic fuel evolve talk wine steak pool wrist heavy april refuse include material crane bargain rigid type carbon image spike sword tissue wrong pottery", Jest.Expect[/* expect */0](wordList));
      }));

/*  Not a pure module */
