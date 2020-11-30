"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var fs = require("fs");
var config = /** @class */ (function () {
    /**
     * Creates a Config Manager
     * @param path Path of the Config File
     */
    function config(path) {
        this.path = path;
        if (path == undefined)
            throw new Error("Config Path is not defined");
        this.json = this.readFile();
    }
    /**
     * gets the Value out of the Config File with the correct key
     */
    config.prototype.get = function (key) {
        var json = this.json;
        return (json[0][key] != undefined) ? json[0][key] : "";
    };
    /**
     * Sets or Adds an Config Paramater
     */
    config.prototype.set = function (key, val) {
        this.json[0][key] = val;
        this.writeFile();
    };
    /**
     * Reads the Config File and returns JSON Array
     */
    config.prototype.readFile = function () {
        if (!fs.existsSync(this.path) || fs.readFileSync(this.path, "utf-8") == "")
            fs.writeFileSync(this.path, JSON.stringify([{}]));
        return JSON.parse(fs.readFileSync(this.path, "utf-8"));
    };
    /**
     * writes into the Config file
     */
    config.prototype.writeFile = function () {
        this.readFile();
        fs.writeFileSync(this.path, JSON.stringify(this.json));
    };
    return config;
}());
exports.config = config;
