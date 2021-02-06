import { existsSync, readFileSync, writeFileSync } from "fs";

/**
 * creates a Config Manager
 * @param path Path to Config File
 */
export let config = (path: string) : ConfigManager => {return new ConfigManager(path)}

class ConfigManager {
    private path: string;
    private json: any;
    /**
     * Creates a Config Manager
     * @param path Path of the Config File
     */
    constructor(path: string) {
        this.path = path;
        if (path == undefined) throw new Error("Config Path is not defined");
        this.json = this.readFile()
    }

    /**
     * gets the Value out of the Config File with the correct key
     */
    public get(key: string): any {
        let json: any = this.json;
        return (json[0][key] != undefined) ? json[0][key] : undefined;
    }

    /**
     * Sets or Adds an Config Paramater
     */
    public set(key: string, val: any): void {
        this.json[0][key] = val;
        this.writeFile();
    }


    /**
     * Reads the Config File and returns JSON Array
     */
    private readFile(): [] {
        if (!existsSync(this.path) || readFileSync(this.path, "utf-8") == "") writeFileSync(this.path, JSON.stringify([{}]))
        return JSON.parse(readFileSync(this.path, "utf-8"))
    }

    /**
     * writes into the Config file
     */
    private writeFile(): void {
        this.readFile()
        writeFileSync(this.path, JSON.stringify(this.json))
    }

}