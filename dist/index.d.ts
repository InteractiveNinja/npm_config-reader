/**
 * creates a Config Manager
 * @param path Path to Config File
 */
export declare let config: (path: string) => ConfigManager;
export declare class ConfigManager {
    private path;
    private json;
    /**
     * Creates a Config Manager
     * @param path Path of the Config File
     */
    constructor(path: string);
    /**
     * gets the Value out of the Config File with the correct key
     */
    get(key: string): any;
    /**
     * Sets or Adds an Config Paramater
     */
    set(key: string, val: any): void;
    /**
     * Reads the Config File and returns JSON Array
     */
    private readFile;
    /**
     * writes into the Config file
     */
    private writeFile;
}
export {};
