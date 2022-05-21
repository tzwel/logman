# logman
A simple logger for node

## Usage
Import
```js
import lmn from 'logman.js'
```

## Examples

Simple log to the default `log.txt` file
```js
lmn.log("Some stuff")
``` 

Logging with provided severity and time
```js
lmn.log({
    "data": "Some stuff",
    "prepend": lmn.get("time"),
    "severity": "log"
})
```
