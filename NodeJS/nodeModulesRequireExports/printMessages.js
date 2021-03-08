"use strict";
//instantiating a module
const messageModule = require("../nodeModulesRequireExports/messages");

//attaching exported messages module to loaded module, messageModule
messageModule.messages.forEach((m) => console.log(m));
