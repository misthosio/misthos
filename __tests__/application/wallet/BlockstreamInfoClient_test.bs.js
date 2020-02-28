// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Helpers = require("../../helpers/Helpers.bs.js");
var Belt_Set = require("bs-platform/lib/js/belt_Set.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Belt_SetString = require("bs-platform/lib/js/belt_SetString.js");
var BlockstreamInfoClient = require("../../../src/application/wallet/BlockstreamInfoClient.bs.js");

Helpers.enableHttpRequests(/* () */0);

Jest.describe("BlockstreamInfoClient", (function (param) {
        Jest.testPromise("getUTXOs", 50000, (function (param) {
                return BlockstreamInfoClient.getUTXOs(BlockstreamInfoClient.mainnetConfig, /* :: */[
                              "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
                              /* [] */0
                            ]).then((function (res) {
                              return Promise.resolve(Jest.Expect[/* toBeGreaterThan */5](200, Jest.Expect[/* expect */0](Belt_Set.size(res))));
                            }));
              }));
        Jest.testPromise("blockheight", 50000, (function (param) {
                return BlockstreamInfoClient.getCurrentBlockHeight(BlockstreamInfoClient.testnetConfig, /* () */0).then((function (res) {
                              return Promise.resolve(Jest.Expect[/* toBeGreaterThan */5](530440, Jest.Expect[/* expect */0](res)));
                            }));
              }));
        Jest.testPromise("getTransactionHex", 50000, (function (param) {
                return BlockstreamInfoClient.getTransactionHex(BlockstreamInfoClient.mainnetConfig, /* array */["b6f6991d03df0e2e04dafffcd6bc418aac66049e2cd74b80f14ac86db1e3f0da"]).then((function (res) {
                              return Promise.resolve(Jest.Expect[/* toEqual */12](/* array */[/* tuple */[
                                                "b6f6991d03df0e2e04dafffcd6bc418aac66049e2cd74b80f14ac86db1e3f0da",
                                                "010000000101820e2169131a77976cf204ce28685e49a6d2278861c33b6241ba3ae3e0a49f020000008b48304502210098a2851420e4daba656fd79cb60cb565bd7218b6b117fda9a512ffbf17f8f178022005c61f31fef3ce3f906eb672e05b65f506045a65a80431b5eaf28e0999266993014104f0f86fa57c424deb160d0fc7693f13fce5ed6542c29483c51953e4fa87ebf247487ed79b1ddcf3de66b182217fcaf3fcef3fcb44737eb93b1fcb8927ebecea26ffffffff02805cd705000000001976a91429d6a3540acfa0a950bef2bfdc75cd51c24390fd88ac80841e00000000001976a91417b5038a413f5c5ee288caa64cfab35a0c01914e88ac00000000"
                                              ]], Jest.Expect[/* expect */0](res)));
                            }));
              }));
        return Jest.testPromise("getTransactionInfo", 50000, (function (param) {
                      return BlockstreamInfoClient.getTransactionInfo(BlockstreamInfoClient.mainnetConfig, Belt_SetString.fromArray(/* array */["a937d96ffed8be9c29291d45e54e00f1dc393439b9679cd10802b4d552a1b386"])).then((function (res) {
                                    return Promise.resolve(Jest.Expect[/* toEqual */12](0, Jest.Expect[/* expect */0](Belt_List.size(res))));
                                  }));
                    }));
      }));

/*  Not a pure module */
