# Release History

*****************

## Release ONDEWO VTSI Angular Client 8.3.1

### Bug Fixes

* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) Regenerated with [ondewo-proto-compiler 5.13.0](https://github.com/ondewo/ondewo-proto-compiler/releases/tag/5.13.0).
* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) The hand-written `auth/` surface is now re-exported from the generated public-api barrel. It was compiled and shipped inside the package but nothing re-exported it, so importing a symbol from the package root did not resolve and consumers could only deep-import the module. The re-export is emitted by the compiler, so it survives the regeneration that rewrites the barrel on every build.
* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) Tooling: `conventional-pre-commit` now runs before `giticket` at the commit-msg stage - with giticket first, its `[OND221-2830] fix: ...` rewrite was no longer valid Conventional Commits and every commit on a ticket branch failed. `README.md` is prettier-ignored where `.prettierrc` sets `useTabs` and markdownlint's MD010 de-tabs the same blocks, and the codegen `docker run` invocations no longer pass `-it`, which fails outside a TTY.

*****************

## Release ONDEWO VTSI Angular Client 8.3.0

### Improvements

* Tracking API Version [8.3.0](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/8.3.0)
  ( [Documentation](https://ondewo.github.io/ondewo-vtsi-api/) )
* Added the generated client for `ondewo/vtsi/logs.proto` (container log capture and streaming)
* Added Keycloak bearer authentication for the VTSI Angular SDK
* Added the optional field `asterisk_version` to `AsteriskConfigs`. It carries the docker image tag of the
  ONDEWO Asterisk image a VTSI project should start (e.g. `alpine-3.18-18.20.2`), so the Asterisk version is a
  per-project setting instead of a server-wide one. Leaving it unset keeps the server default
  (`ONDEWO_VTSI_ASTERISK_IMAGE_TAG`); an empty string is rejected
* Note that ngx-grpc flattens the field's explicit presence into a plain `asteriskVersion: string` that is
  written to the wire only when non-empty. An Angular caller can therefore send a tag or send nothing, and
  cannot send the empty string — which is harmless, because the empty string is the value the server rejects

*****************

## Release ONDEWO VTSI Angular Client 7.0.1

### Improvements

* Corrected Release notes and s2t version

*****************

## Release ONDEWO VTSI Angular Client 7.0.0

### Improvements

* Tracking API
  Version [7.0.0](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/7.0.0) ( [Documentation](https://ondewo.github.io/ondewo-vtsi-api/) )

*****************

## Release ONDEWO VTSI Angular Client 6.9.0

### Improvements

* Tracking API
  Version [6.9.0](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/6.9.0) ( [Documentation](https://ondewo.github.io/ondewo-vtsi-api/) )

*****************

## Release ONDEWO VTSI Angular Client 6.8.0

### Improvements

* Tracking API
  Version [6.8.0](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/6.8.0) ( [Documentation](https://ondewo.github.io/ondewo-vtsi-api/) )

*****************

## Release ONDEWO VTSI Angular Client 6.7.0

### Improvements

* Tracking API Version [6.7.0](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/6.7.0) ( [Documentation](https://ondewo.github.io/ondewo-vtsi-api/) )

*****************

## Release ONDEWO VTSI Angular Client 6.6.0

### Improvements

* Tracking API Version [6.6.0](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/6.6.0) ( [Documentation](https://ondewo.github.io/ondewo-vtsi-api/) )

*****************

## Release ONDEWO VTSI Angular Client 6.5.0

### Improvements

* Tracking API Version [6.5.0](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/6.5.0) ( [Documentation](https://ondewo.github.io/ondewo-vtsi-api/) )

*****************

## Release ONDEWO VTSI Angular Client 6.4.0

### Improvements

* Tracking API Version [6.4.0](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/6.4.0) ( [Documentation](https://ondewo.github.io/ondewo-vtsi-api/) )

*****************

## Release ONDEWO VTSI Angular Client 6.3.0

### Improvements

* Tracking API
  Version [6.3.0](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/6.3.0) ( [Documentation](https://ondewo.github.io/ondewo-vtsi-api/) )

*****************

## Release ONDEWO VTSI Angular Client 6.2.0

### Improvements

* Tracking API Version [6.2.0](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/6.2.0) ( [Documentation](https://ondewo.github.io/ondewo-vtsi-api/) )

*****************

## Release ONDEWO VTSI Angular Client 6.6.1

### Improvements

* Optimized for Angular 16 (esm2022 and fesm2022)
* Tracking API Version [6.6.0](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/6.6.0) ( [Documentation](https://ondewo.github.io/ondewo-vtsi-api/) )

*****************

## Release ONDEWO VTSI Angular Client 5.0.0

### Improvements

* Tracking API Version [5.0.0](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/5.0.0) ( [Documentation](https://ondewo.github.io/ondewo-vtsi-api/) )

*****************

## Release ONDEWO VTSI Angular Client 4.0.0

### Improvements

* Track version 4.0.0 of [ONDEWO VTSI API](https://github.com/ondewo/ondewo-vtsi-api/releases/4.0.0)
* [[OND211-2039]](https://ondewo.atlassian.net/browse/OND211-2039) - Implemented automated release for GitHub and NPM
* [[OND211-2039]](https://ondewo.atlassian.net/browse/OND211-2039) - Added pre-commit hooks and adjusted files to them

*****************

## Release ONDEWO VTSI Angular Client 2.4.0

### Improvements

* ONDEWO Natural Language Understanding (NLU) API
  Version [2.6.0](https://github.com/ondewo/ondewo-nlu-api/releases/2.6.0)
* ONDEWO SIP (SIP) API Version [1.2.0](https://github.com/ondewo/ondewo-sip-api/releases/1.2.0)
* ONDEWO Speech-2-Text (S2T) API Version [3.1.1](https://github.com/ondewo/ondewo-s2t-api/releases/3.1.1)
* ONDEWO Text-2-Speech (S2T) API Version [4.0.2](https://github.com/ondewo/ondewo-t2s-api/releases/4.0.2)
* ONDEWO VOIP Telephone Integration (VOIP) API Version [2.3.0](https://github.com/ondewo/ondewo-vtsi-api/releases/2.2.0)

*****************

## Release ONDEWO VTSI Angular Client 2.3.0

### Improvements

* ONDEWO Natural Language Understanding (NLU) API
  Version [2.6.0](https://github.com/ondewo/ondewo-nlu-api/releases/2.6.0)
* ONDEWO SIP (SIP) API Version [1.2.0](https://github.com/ondewo/ondewo-sip-api/releases/1.2.0)
* ONDEWO Speech-2-Text (S2T) API Version [3.1.1](https://github.com/ondewo/ondewo-s2t-api/releases/3.1.1)
* ONDEWO Text-2-Speech (S2T) API Version [3.0.0](https://github.com/ondewo/ondewo-t2s-api/releases/3.0.0)
* ONDEWO VOIP Telephone Integration (VOIP) API Version [2.3.0](https://github.com/ondewo/ondewo-vtsi-api/releases/2.2.0)

*****************

## Release ONDEWO VTSI Angular Client 2.2.1

### Improvements

* Upgraded to Angular >= 13.x.x and ngx-grpc >=3.0.0
* Dependencies
  * ONDEWO Natural Language Understanding (NLU) API
      Version [2.6.0](https://github.com/ondewo/ondewo-nlu-api/releases/2.6.0)
  * ONDEWO SIP (SIP) API Version [1.2.0](https://github.com/ondewo/ondewo-sip-api/releases/1.2.0)
  * ONDEWO Speech-2-Text (S2T) API Version [3.1.1](https://github.com/ondewo/ondewo-s2t-api/releases/3.1.1)
  * ONDEWO Text-2-Speech (S2T) API Version [3.0.0](https://github.com/ondewo/ondewo-t2s-api/releases/3.0.0)
  * ONDEWO VOIP Telephone Integration (VOIP) API
      Version [2.2.0](https://github.com/ondewo/ondewo-vtsi-api/releases/2.2.0)

*****************

## Release ONDEWO VTSI Angular Client 2.2.0

### Improvements

* Track version 2.2.0 of [ONDEWO VTSI API](https://github.com/ondewo/ondewo-vtsi-api/releases/2.2.0)
* Improved build process via make file
* Use only required protos required to build vtsi client
* Dependencies
  * ONDEWO Natural Language Understanding (NLU) API
      Version [2.4.0](https://github.com/ondewo/ondewo-nlu-api/releases/2.4.0)
  * ONDEWO SIP (SIP) API Version [1.2.0](https://github.com/ondewo/ondewo-sip-api/releases/1.2.0)
  * ONDEWO Speech-2-Text (S2T) API Version [3.0.0](https://github.com/ondewo/ondewo-s2t-api/releases/3.0.0)
  * ONDEWO Text-2-Speech (S2T) API Version [3.0.0](https://github.com/ondewo/ondewo-t2s-api/releases/3.0.0)
  * ONDEWO VOIP Telephone Integration (VOIP) API
      Version [2.2.0](https://github.com/ondewo/ondewo-vtsi-api/releases/2.2.0)

*****************

## Release ONDEWO VTSI Angular Client 2.0.0

### Improvements

* Track version 2.0.0 of [ONDEWO VTSI API](https://github.com/ondewo/ondewo-vtsi-api/releases/2.0.0)
* Build process workaround: copied files from S2T/T2S into voip.proto

*****************

## Release ONDEWO VTSI Angular Client 0.4.0

### Improvements

* Track version 0.4.0 of [ONDEWO VTSI API](https://github.com/ondewo/ondewo-vtsi-api/releases/0.4.0)

*****************

## Release ONDEWO VTSI Angular Client 0.3.0

### Improvements

* Track version 0.3.0 of [ONDEWO VTSI API](https://github.com/ondewo/ondewo-vtsi-api/releases/0.3.0)
