<div align="center">
  <table>
    <tr>
      <td>
        <a href="https://ondewo.com/en/products/natural-language-understanding/">
            <img width="400px" src="https://raw.githubusercontent.com/ondewo/ondewo-logos/master/ondewo_we_automate_your_phone_calls.png"/>
        </a>
      </td>
    </tr>
    <tr>
       <td align="center">
          <a href="https://www.linkedin.com/company/ondewo "><img width="40px" src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"></a>
          <a href="https://www.facebook.com/ondewo"><img width="40px" src="https://cdn-icons-png.flaticon.com/512/733/733547.png"></a>
          <a href="https://twitter.com/ondewo"><img width="40px" src="https://cdn-icons-png.flaticon.com/512/733/733579.png"> </a>
          <a href="https://www.instagram.com/ondewo.ai/"><img width="40px" src="https://cdn-icons-png.flaticon.com/512/174/174855.png"></a>
          <a href="https://badge.fury.io/js/%40ondewo%2Fvtsi-client-angular"><img src="https://badge.fury.io/js/%40ondewo%2Fvtsi-client-angular.svg" alt="npm version" height="32"></a>
       </td>
    </tr>
  </table>
  <h1 align="center">
    ONDEWO VTSI Client Angular
  </h1>
</div>

## Overview

`@ondewo/vtsi-client-angular` is a compiled version of the [ONDEWO VTSI API](https://github.com/ondewo/ondewo-vtsi-api) using the [ONDEWO PROTO COMPILER](https://github.com/ondewo/ondewo-proto-compiler). Here you can find the VTSI API [documentation](https://ondewo.github.io).

ONDEWO APIs use [Protocol Buffers](https://github.com/google/protobuf) version 3 (proto3) as their Interface Definition Language (IDL) to define the API interface and the structure of the payload messages. The same interface definition is used for gRPC versions of the API in all languages.

## Setup

Using NPM:

```shell
npm i --save @ondewo/vtsi-client-angular
```

Using GitHub:

```shell
git clone https://github.com/ondewo/ondewo-vtsi-client-angular.git ## Clone repository
cd ondewo-vtsi-client-angular                                      ## Change into repo-directoy
make setup_developer_environment_locally                          ## Install dependencies
```

## Package structure

```
npm
├── api
│   ├── google
│   │   ├── api
│   │   │   ├── annotations.pb.d.ts
│   │   │   └── http.pb.d.ts
│   │   ├── rpc
│   │   │   └── status.pb.d.ts
│   │   └── type
│   │       └── latlng.pb.d.ts
│   └── ondewo
│       ├── nlu
│       │   ├── agent.pbconf.d.ts
│       │   ├── agent.pb.d.ts
│       │   ├── agent.pbsc.d.ts
│       │   ├── aiservices.pbconf.d.ts
│       │   ├── aiservices.pb.d.ts
│       │   ├── aiservices.pbsc.d.ts
│       │   ├── common.pb.d.ts
│       │   ├── context.pbconf.d.ts
│       │   ├── context.pb.d.ts
│       │   ├── context.pbsc.d.ts
│       │   ├── entity-type.pbconf.d.ts
│       │   ├── entity-type.pb.d.ts
│       │   ├── entity-type.pbsc.d.ts
│       │   ├── intent.pbconf.d.ts
│       │   ├── intent.pb.d.ts
│       │   ├── intent.pbsc.d.ts
│       │   ├── operation-metadata.pb.d.ts
│       │   ├── operations.pbconf.d.ts
│       │   ├── operations.pb.d.ts
│       │   ├── operations.pbsc.d.ts
│       │   ├── project-role.pbconf.d.ts
│       │   ├── project-role.pb.d.ts
│       │   ├── project-role.pbsc.d.ts
│       │   ├── project-statistics.pbconf.d.ts
│       │   ├── project-statistics.pb.d.ts
│       │   ├── project-statistics.pbsc.d.ts
│       │   ├── server-statistics.pbconf.d.ts
│       │   ├── server-statistics.pb.d.ts
│       │   ├── server-statistics.pbsc.d.ts
│       │   ├── session.pbconf.d.ts
│       │   ├── session.pb.d.ts
│       │   ├── session.pbsc.d.ts
│       │   ├── user.pbconf.d.ts
│       │   ├── user.pb.d.ts
│       │   ├── user.pbsc.d.ts
│       │   ├── utility.pbconf.d.ts
│       │   ├── utility.pb.d.ts
│       │   ├── utility.pbsc.d.ts
│       │   ├── webhook.pbconf.d.ts
│       │   ├── webhook.pb.d.ts
│       │   └── webhook.pbsc.d.ts
│       ├── qa
│       │   ├── qa.pbconf.d.ts
│       │   ├── qa.pb.d.ts
│       │   └── qa.pbsc.d.ts
│       ├── s2t
│       │   ├── speech-to-text.pbconf.d.ts
│       │   ├── speech-to-text.pb.d.ts
│       │   └── speech-to-text.pbsc.d.ts
│       ├── sip
│       │   ├── sip.pbconf.d.ts
│       │   ├── sip.pb.d.ts
│       │   └── sip.pbsc.d.ts
│       ├── t2s
│       │   ├── text-to-speech.pbconf.d.ts
│       │   ├── text-to-speech.pb.d.ts
│       │   └── text-to-speech.pbsc.d.ts
│       └── vtsi
│           ├── voip.pbconf.d.ts
│           ├── voip.pb.d.ts
│           └── voip.pbsc.d.ts
├── esm2022
│   ├── api
│   │   ├── google
│   │   │   ├── api
│   │   │   │   ├── annotations.pb.mjs
│   │   │   │   └── http.pb.mjs
│   │   │   ├── rpc
│   │   │   │   └── status.pb.mjs
│   │   │   └── type
│   │   │       └── latlng.pb.mjs
│   │   └── ondewo
│   │       ├── nlu
│   │       │   ├── agent.pbconf.mjs
│   │       │   ├── agent.pb.mjs
│   │       │   ├── agent.pbsc.mjs
│   │       │   ├── aiservices.pbconf.mjs
│   │       │   ├── aiservices.pb.mjs
│   │       │   ├── aiservices.pbsc.mjs
│   │       │   ├── ...
│   │       ├── qa
│   │       │   ├── qa.pbconf.mjs
│   │       │   ├── qa.pb.mjs
│   │       │   └── qa.pbsc.mjs
│   │       ├── s2t
│   │       │   ├── speech-to-text.pbconf.mjs
│   │       │   ├── speech-to-text.pb.mjs
│   │       │   └── speech-to-text.pbsc.mjs
│   │       ├── sip
│   │       │   ├── sip.pbconf.mjs
│   │       │   ├── sip.pb.mjs
│   │       │   └── sip.pbsc.mjs
│   │       ├── t2s
│   │       │   ├── text-to-speech.pbconf.mjs
│   │       │   ├── text-to-speech.pb.mjs
│   │       │   └── text-to-speech.pbsc.mjs
│   │       └── vtsi
│   │           ├── voip.pbconf.mjs
│   │           ├── voip.pb.mjs
│   │           └── voip.pbsc.mjs
│   ├── ondewo-vtsi-client-angular.mjs
│   └── public-api.mjs
├── fesm2022
│   ├── ondewo-vtsi-client-angular.mjs
│   └── ondewo-vtsi-client-angular.mjs.map
├── index.d.ts
├── LICENSE
├── package.json
├── public-api.d.ts
└── README.md
```

## Build

The `make build` command is dependent on 2 `repositories` and their speciefied `version`:

- [ondewo-vtsi-api](https://github.com/ondewo/ondewo-vtsi-api) -- `VTSI_API_GIT_BRANCH` in `Makefile`
- [ondewo-proto-compiler](https://github.com/ondewo/ondewo-proto-compiler) -- `ONDEWO_PROTO_COMPILER_GIT_BRANCH` in `Makefile`

Other than creating the proto-code, `build` also installs the `dev-dependencies` and changes the owner of the proto-files from `root` to the `current user`.

## GitHub Repository - Release Automation

The repository is published to GitHub and NPM by the Automated Release Process of ONDEWO.

TODO after PR merge:

- Checkout master

  ```shell
  git checkout master
  ```

- Pull newest state

  ```shell

  git pull
  ```

- Adjust `ONDEWO_VTSI_VERSION` in the `Makefile` <br><br>
- Add new Release Notes to `src/RELEASE.md` in following format:

  ```
  ## Release ONDEWO VTSI Angular Client X.X.X    <----- Beginning of Notes

  ...<NOTES>...

  *****************                             <----- End of Notes

  ```

- Release

  ```shell
  make ondewo_release
  ```

  <br>
  The release process can be divided into 6 Steps:

1. `build` specified version of the `ondewo-vtsi-api`
2. `commit and push` all changes in code resulting from the `build`
3. Publish the created `npm` folder to `npmjs.com`
4. Create and push the `release branch` e.g. `release/1.3.20`
5. Create a new `Release` on GitHub

> :warning: The Release Automation checks if the build has created all the proto-code files, but it does not check the code-integrity. Please build and test the generated code prior to starting the release process.
