# net.dapla.research.oauth_spa
Oauth2 as a service POC with static single page application


## Usage

### automated
```
make
```

### manual
```
source .env
docker stack deploy -c docker-compose.yml $(basename "$(pwd)")
```

### Access
```
$ open https://app.testnet.dapla.net/     || \
  start https://app.testnet.dapla.net/    || \
  xdg-open https://app.testnet.dapla.net/
```

## Endpoints

| | |
|-|-|
| / | static site - ctf flag |
| /ping | Heartbeat |
| /robots.txt | RFC 1808 |
| /oauth2/callback | IdP Oauth2 callback endpoint |
| /oauth2/sign_in | Initiates Application Session (prompts user interaction) |
| /oauth2/sign_out | Terminates Application session |
| /oauth2/auth | AuthOnly endpoint |
| /oauth2/start | OAuth2 Start endpoint |
| /* | everything else behind Oauth2_proxy (ie ones application/files) |
