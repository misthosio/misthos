// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Js_primitive = require("bs-platform/lib/js/js_primitive.js");

function getItem(key) {
  return Js_primitive.null_undefined_to_opt(localStorage.getItem(key));
}

function setItem(key, value) {
  localStorage.setItem(key, value);
  return /* () */0;
}

function removeItem(key) {
  localStorage.removeItem(key);
  return /* () */0;
}

exports.getItem = getItem;
exports.setItem = setItem;
exports.removeItem = removeItem;
/* No side effect */