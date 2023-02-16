## Installation

```bash
# First, clone the repository to /home/{user}/http-proxy.
git clone https://github.com/cwilby/http-proxy ~/http-proxy
cd node-12-http-proxy

# Then, run the install script to setup a systemctl service.
./install.sh
```

## Examples

| Destination | Proxy URL |
|---|---|
| `http://192.168.0.1/health/` | `http://localhost:9001?ip=192.168.0.1&path=health/` |
| `http://192.168.0.1/health?service=web-01` | `http://localhost:9001?ip=192.168.0.1&path=health&service=web-01` |
| `http://192.168.0.1/health?a=1&b=2&c=3` | `http://localhost:9001?ip=192.168.0.1&path=health&a=1&b=2&c=3` |
