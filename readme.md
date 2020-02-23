# shout-success [![Build Status](https://travis-ci.org/bukinoshita/shout-success.svg?branch=master)](https://travis-ci.org/bukinoshita/shout-success)

> An opinionated success message

## Install

```
$ yarn add shout-success
```


## Usage
```js
const shoutSuccess = require('shout-success')

shoutSuccess('This is a success message')
//=> > Success! This is a success message
```

_Uses [chalk](https://github.com/chalk/chalk), will return a success message with a nice color._

## API

### shoutSuccess(message)

Returns a `console.log`.

#### message

Type: `string`<br>
Required


## Related
- [shout-message](https://github.com/bukinoshita/shout-message) — An opinionated message
- [shout-error](https://github.com/bukinoshita/shout-error) — An opinionated error message  


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
