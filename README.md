# net.dapla.research.oauth_spa

Oauth2 as a service POC with static single page application

[![Build Status](https://travis-ci.org/Daplanet/net.dapla.research.oauth_spa.svg?branch=master)](https://travis-ci.org/Daplanet/net.dapla.research.oauth_spa) [![Docker Build Status](https://img.shields.io/docker/build/denzuko/net.dapla.research.oauth_spa.svg)](https://hub.docker.com/r/denzuko/net.dapla.research.oauth_spa) [![License](https://img.shields.io/github/license/Daplanet/net.dapla.research.oauth_spa/calendar.svg?style=flat-square)](https://github.com/Daplanet/net.dapla.research.oauth_spa/blob/master/LICENCE) [![Coverage Status](https://coveralls.io/repos/github/Daplanet/net.dapla.research.oauth_spa/badge.svg?branch=master)](https://coveralls.io/github/Dallas-Makerspace/calendar?branch=master)
[![Release](https://img.shields.io/github/tag/Daplanet/net.dapla.research.oauth_spa.svg?style=flat-square)](https://github.com/Daplanet/net.dapla.research.oauth_spa/tags) 

Find a copy of the latest build at [Docker Hub](https://hub.docker.com/r/denzuko/net.dapla.research.oauth_spa/).


## Prerequisities

In order to run this container you'll need docker installed.

* [Windows](https://docs.docker.com/windows/started)
* [OS X](https://docs.docker.com/mac/started/)
* [Linux](https://docs.docker.com/linux/started/)


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


## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the 
[tags on this repository](https://github.com/your/repository/tags). 

## Authors

* **Da Planet Security** - *Initial work* - [Da Planet Security](https://github.com/Daplanet)

See also the list of [contributors](https://github.com/Daplanet/net.dapla.research.oauth_spa/contributors) who 
participated in this project.

## License

This project is licensed under the BSD 2 Clause License - see the [LICENSE](LICENSE) file for details.
