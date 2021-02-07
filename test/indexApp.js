const assert = require('assert');
const app = require('../dist/index');


describe('Config Value Read Int', () => {
    it('config sollte mit key "port" = "211" zurück gegeben', () => {
        let config = app.config("./test/config.json")
        assert.strictEqual(config.get("port"), 211)
    })
})
describe('Config Value Read String', () => {
    it('config sollte mit key "name" = "Hello World" zurück gegeben', () => {
        let config = app.config("./test/config.json")
        assert.strictEqual(config.get("name"), "Hello World")
    })
})
describe('Config Value Read boolean', () => {
    it('config sollte mit key "calling" = "true" zurück gegeben', () => {
        let config = app.config("./test/config.json")
        assert.strictEqual(config.get("calling"), true)
    })
})

describe('Config Value doesnt Exit', () => {
    it('config sollte mit key "gerge" = "undefined" zurück gegeben', () => {
        let config = app.config("./test/config.json")
        assert.strictEqual(config.get("gerge"), undefined)
    })
})