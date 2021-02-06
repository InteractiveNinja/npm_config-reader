# Config Reader

This is a simple Config reader that read Values out of a json File.

You can set and get Values out of the Config File



## Install

`npm i @interactiveninja/config-reader`

* Note requires Node and NPM


## Usage

Get an Instance of the Config Manager
```
const configManager = require("@interactiveninja/config-reader")
const config = configManager(path_from_config)
```

#### Example
```
const path = require('path')
const configManager = require("@interactiveninja/config-reader")
const config = configManager(path.join(__dirname + "/config.json")
```
This will create a config file in the root directory

The Constructor from Manager checks and creates an Config if the File is missing,

Please create your Config in this Simple Format:

```
[
    {
        "key":"helloworld",
        "key2":"value2",
        "key3":"value3"
    }
]
```

### Read Values out of Config

```
let value = config.get(key_name)
console.log(value)
```
#### Example
```
let value = config.get("key")
console.log(value)

------------------------------------------
Console Output 

helloworld
```

### Set/Update Value from Config

```
config.set(key_name,key_value)
```
#### Example
```
config.set("users_message","helloworld")
let value = conf.get("users_message")
console.log(value)

------------------------------------------
Console Output 

helloworld
```

## Bugs and Feature Request

Feel free to use Githubs Issue tool to suggest features or point out bugs
