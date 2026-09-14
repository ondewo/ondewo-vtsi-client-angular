# Release History

*****************

## Release ONDEWO VTSI Angular Client 9.0.0

### Improvements

* **Correction, carried forward rather than back-edited: an Angular caller CAN send the empty string, and has
  been able to since 8.6.0.** The 8.3.0 entry below records the opposite -- that ngx-grpc flattens
  `AsteriskConfigs.asterisk_version`'s explicit presence and that a caller "cannot send the empty string". That
  was accurate for the stubs 8.3.0 through 8.5.0 shipped, so it is left exactly as published; it has been false
  of every release from 8.6.0 onwards and should not be relied on
* **8.6.0 changed the wire behaviour of every `optional` scalar and enum field and said nothing about it.** Its
  entry reads only "Tracking API Version 8.6.0", but that release also moved
  `ONDEWO_PROTO_COMPILER_GIT_BRANCH` from `tags/5.13.0` to `tags/5.14.0`. The angular pipeline strips the
  `optional` keyword from every `.proto` before `protoc-gen-ng` runs, so the plugin cannot see it; 5.14.0 added
  `fix-proto3-optional-presence.ts`, which replays the `proto3_optional` flags out of a descriptor set taken
  before that strip and rewrites exactly those fields
* What that changed, measured on the committed stubs rather than assumed: **194 fields across 74 messages** in
  the re-exported surface, **52 of them in `ondewo/vtsi` itself** (`calls` 36, `logs` 12, `projects` 4), the rest
  in the vendored `ondewo/nlu`, `ondewo/s2t` and `ondewo/t2s` copies. For each, `refineValues` no longer coerces
  the field to its type's zero value, and the writer guards on presence
  (`!== undefined && !== null`) instead of on truthiness. So a caller who explicitly sends `0`, `''`, `false` or
  `'0'` now has that reach the server as an instruction, where before it was dropped and the server applied its
  own default. For `asterisk_version` that is the whole point: an empty tag is now transmitted and ondewo-vtsi
  refuses it with `INVALID_ARGUMENT`, instead of the caller's error being silently served as
  `ONDEWO_VTSI_ASTERISK_IMAGE_TAG`
* **What did NOT change is the declared TypeScript surface, and that half of the old note still stands.** There
  is no `hasAsteriskVersion()` / `clearAsteriskVersion()` pair, and the declared type of the getter, of
  `AsObject` and of `AsProtobufJSON` is non-nullable -- which the runtime contradicts for an unset field, where
  it reads `undefined`. Presence is expressible over the wire but not in the types, so consumer code that must
  branch on it cannot do so from the declaration alone
* Guarded from here on, because none of the above is visible in a build that succeeds:
  `tests/build-config.spec.ts` fails a proto-compiler pin below `tags/5.14.0` (a branch pin is refused unless
  `ONDEWO_ALLOW_UNRELEASED_PROTO_COMPILER_PIN` is set, which neither the release nor CI sets),
  `tests/asterisk-version.spec.ts` and `tests/proto3-presence.spec.ts` assert the encoding byte for byte across
  `int32`, `int64`, `string` and `bool`, and `make release` now runs `make test` before it commits, pushes or
  publishes anything

*****************

## Release ONDEWO VTSI Angular Client 8.7.0

### Improvements

* Built against [ondewo-vtsi-api 8.7.0](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/8.7.0),
  which re-vendors [ondewo-nlu-api 7.1.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/7.1.0)
  (was 7.0.0) and [ondewo-s2t-api 7.5.0](https://github.com/ondewo/ondewo-s2t-api/releases/tag/7.5.0)
  (was 7.4.0). `ondewo/vtsi/**` is unchanged in that API release, so the VTSI service surface is
  identical and this client stays wire-compatible with 8.6.0.
* What the re-exported surface gains: `speech-to-text.proto` adds the `VadMethod` and `TsdMethod`
  enums and the `Silero` and `WespeakerTsd` messages (voice-activity and turn-shift detection
  configuration); `rag.proto` adds `RagCrawlerIncrementalConfig`.
* `RagCrawlerFilters` re-declares four fields as `[deprecated = true]` -- `allow_internal_links`,
  `allow_social_media_links`, `allowed_paths` and `disallowed_paths`. Every field number, name and
  type is preserved and no number is reused, so nothing on the wire changes; the two path lists are
  superseded by `allowed_regex` / `disallowed_regex`.

*****************

## Release ONDEWO VTSI Angular Client 8.6.0

### Improvements

* Tracking API Version [8.6.0](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/8.6.0) ( [Documentation](https://ondewo.github.io/ondewo-vtsi-api/) )

*****************

## Release ONDEWO VTSI Angular Client 8.5.0

### Improvements

* Tracking API Version [8.5.0](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/8.5.0) ( [Documentation](https://ondewo.github.io/ondewo-vtsi-api/) )

*****************

## Release ONDEWO VTSI Angular Client 8.4.0

### Improvements

* Tracking API Version [8.4.0](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/8.4.0)
  ( [Documentation](https://ondewo.github.io/ondewo-vtsi-api/) )
* Added the field `next_page_token` to `ListCallersResponse`, exposed as `nextPageToken`. It carries the token
  that fetches the next page of callers and is empty when the list has no further results, matching
  `ListListenersResponse` and `ListCallsResponse`
* The hand-written Keycloak auth surface (`provideOndewoVtsiAuth`, `AuthGrpcInterceptor`, `authHttpInterceptor`,
  `KeycloakTokenProvider`, `TOKEN_PROVIDER`, `resolveToken`) is now exported from the package entry point and is
  part of the published bundle and typings. It was added to the repository for 8.3.0 but no release before this
  one shipped an importable auth symbol

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

## Release ONDEWO VTSI Angular Client 8.2.0

### Improvements

* Tracking API Version [8.2.0](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/8.2.0) ( [Documentation](https://ondewo.github.io/ondewo-vtsi-api/) )

*****************

## Release ONDEWO VTSI Angular Client 8.1.0

### Improvements

* Tracking API Version [8.1.0](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/8.1.0) ( [Documentation](https://ondewo.github.io/ondewo-vtsi-api/) )

*****************

## Release ONDEWO VTSI Angular Client 8.0.0

### Improvements

* Tracking API Version [8.0.0](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/8.0.0) ( [Documentation](https://ondewo.github.io/ondewo-vtsi-api/) )

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
