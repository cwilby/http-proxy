## Installation

```
$ git clone https://github.com/cwilby/node-12-http-proxy

$ cd node-12-http-proxy

$ ./install.sh
```

## Examples

| Destination | Proxy URL |
|---|---|
| `http://192.168.0.1/health/` | `http://localhost:9001?ip=192.168.0.1&path=health/` |
| `http://192.168.0.1/health?service=web-01` | `http://localhost:9001?ip=192.168.0.1&path=health%3Fservice%3Dweb-01` |

## Parameter encoding

Parameters intended for the destination should be URL encoded using https://www.urlencoder.io/ to ensure they are passed along correctly.
