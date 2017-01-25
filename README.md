# message-bot [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
>

## Installation

Clone this repository, and run:
```sh
$ npm install
```
Change api_key,token and port in config.js

## Usage

```js
$ npm run bot
```

## Webapp
The bot is now listening to http post requests to http://0.0.0.0:#{port}/messages/send
Content-Type: application/x-www-form-urlencoded;

## Parameters
users
-> An array of user ids
message
-> The Message that should be sent to all users
--> Any Occurence of %?username?% will be replaced with the User name
api_key
-> obv

## Response:
Json Format
Array of all users with the job status (success/error)
[["176412791010230283","success"],["109844143798255616","error"]]



## License

Apache-2.0 © [Daniel Samer](rltracker.pro)


[npm-image]: https://badge.fury.io/js/message-bot.svg
[npm-url]: https://npmjs.org/package/message-bot
[travis-image]: https://travis-ci.org/Yixn/message-bot.svg?branch=master
[travis-url]: https://travis-ci.org/Yixn/message-bot
[daviddm-image]: https://david-dm.org/Yixn/message-bot.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Yixn/message-bot
