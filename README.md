# logman <img src="https://shields.io/github/license/tzwel/logman" alt="license" />
A simple logger for node I made for my personal projects

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

## API
| API | Returns | Type of response |
| ---- | --- | --- |
| lmn.get("unix") | Returns unix time stamp | Date object |
| lmn.get("today") | Returns formatted date string | String |
| lmn.get("time") | Returns current hour | String |
