"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const fs_1 = require("fs");
/**
 * creates a Config Manager
 * @param path Path to Config File
 */
let config = (path) => { return new ConfigManager(path); };
exports.config = config;
class ConfigManager {
    /**
     * Creates a Config Manager
     * @param path Path of the Config File
     */
    constructor(path) {
        this.path = path;
        if (path == undefined)
            throw new Error("Config Path is not defined");
        this.json = this.readFile();
    }
    /**
     * gets the Value out of the Config File with the correct key
     */
    get(key) {
        let json = this.json;
        return (json[0][key] != undefined) ? json[0][key] : undefined;
    }
    /**
     * Sets or Adds an Config Paramater
     */
    set(key, val) {
        this.json[0][key] = val;
        this.writeFile();
    }
    /**
     * Reads the Config File and returns JSON Array
     */
    readFile() {
        if (!fs_1.existsSync(this.path) || fs_1.readFileSync(this.path, "utf-8") == "")
            fs_1.writeFileSync(this.path, JSON.stringify([{}]));
        return JSON.parse(fs_1.readFileSync(this.path, "utf-8"));
    }
    /**
     * writes into the Config file
     */
    writeFile() {
        this.readFile();
        fs_1.writeFileSync(this.path, JSON.stringify(this.json));
    }
}
