# Release History

*****************

## Release ONDEWO VTSI Angular Client 9.0.0

### Breaking Changes

* Tracking API Version [9.0.0](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/9.0.0) ( [Documentation](https://ondewo.github.io/ondewo-vtsi-api/) ), a major release: binary wire-compatible in both directions, source-breaking.
* `AsteriskConfigsFiles.sipConfFileString` is renamed to `pjsipConfFileString` (same field number and type; the JSON key moves from `sipConfFileString` to `pjsipConfFileString`).
  **Migration:** rename every `sipConfFileString` property access, constructor key and `toObject()` / `toJSON()` key in your code to `pjsipConfFileString`.
* Eleven scalars in `ondewo/vtsi/calls.proto` gained explicit presence (`optional`):
  `InterruptionHandlingConfig.transcribeOnDisabledInterruptions`, `TurnDetectionConfig.turnDetectionSystemPrompt` and
  `.turnDetectionUserPrompt`, `AudioObjectStorageConfig.activateAudioObjectStorage`,
  `AudioObjectStorageServicesActivationConfig.activateS2t` / `.activateT2s`, `MessageBrokerConfig.activateMessageBroker`
  and `MessageBrokerServicesActivationConfig.activateS2t` / `.activateNlu` / `.activateT2s` / `.activateSip`.
  The TypeScript types do not change, but the generated messages no longer default these fields to `false` / `""`:
  an unset field now reads as `undefined`, and a value you set explicitly, including `false` or `""`, is now sent.
  **Migration:** compare with `=== true` / `=== false` (or check `=== undefined`) instead of relying on a falsy
  default, and set a field only when you mean to send that value.

### New Features

* New services, each with its injectable client and settings token exported from the package entry point:
  * `Softphones` (`SoftphonesClient`, `GRPC_SOFTPHONES_CLIENT_SETTINGS`, `ondewo/vtsi/softphones.proto`): SIP accounts for humans on a softphone - `createSoftphoneAccount`, `getSoftphoneAccount`, `updateSoftphoneAccount`, `deleteSoftphoneAccount`, `listSoftphoneAccounts`, `rotateSoftphoneCredentials`, `listSoftphoneCertificates`, `getSoftphoneCertificate`, `revokeSoftphoneCertificate`, `getSoftphoneProvisioning`. Secrets are returned only by create and rotate.
  * `Campaigns` (`CampaignsClient`, `GRPC_CAMPAIGNS_CLIENT_SETTINGS`, `ondewo/vtsi/campaigns.proto`): outbound call campaigns with a parallel-call limit and retries - CRUD, `startCampaign` / `stopCampaign` / `hardStopCampaign` / `resumeCampaign`, `getCampaignStatistics`, `listCampaignCalls` and the server stream `streamCampaignStatus`.
  * `Events` (`EventsClient`, `GRPC_EVENTS_CLIENT_SETTINGS`, `ondewo/vtsi/events.proto`): VTSI event subscriptions and webhooks (CRUD, `testWebhook`) and the server stream `subscribeVtsiEvents`.
* `CallsClient` gains `addCallersToCampaign`, `addScheduledCallersToCampaign`, the status streams `streamCallerStatus` / `streamListenerStatus` / `streamScheduledCallerStatus`, and call control: `inviteToCall`, `removeCallParticipant`, `setCallMediaControl`, `listenCallAudio` (server stream) and `streamCallAudio` (bidirectional; the gRPC-web protocol a browser speaks carries no client or bidirectional streams, so browsers use `listenCallAudio`).
* Calls: answering machine detection config (`AnsweringMachineDetectionConfig`, `AmdAction`, `AmdSensitivity`), `Call.redialRecommended` / `redialReason` / `answeringMachineDetectionEndDescription` / `mediaControl` / `participants` / `lastTransfer` / `sipCallId`, client `idempotencyKey` on the five batch-creating requests, typed transfers (`TransferCallRequest.target` / `mode` / `headers` / `ringTimeoutS`, `TransferCallResponse.outcome`).
* Projects: `AsteriskConfigsVariables.sipTrunkTransport`, `sipTrunkSourceCidr`, `sipTrunkCaCertificatesPem`, `sipTrunkVerifyServer` and `softphonePermitCidrs`; `VtsiProject.transferPhoneNumberAllowlist`.
* The vendored `ondewo/sip` protos move to sip-api 5.5.0 (answering machine detection, call id, media control and call audio on `SipClient`); nlu, s2t and t2s are unchanged.

### Tests

* `tests/build-config.spec.ts` pins that `SoftphonesClient`, `CampaignsClient` and `EventsClient` and their settings tokens are declared and exported by `index.d.ts`, and covers 9.0.x against API 9.0.0 in the major.minor comparison.

### Build

* Generated with ondewo-proto-compiler 5.15.5 (8.7.1 was generated with 5.15.2).

*****************

## Release ONDEWO VTSI Angular Client 8.7.1

### Improvements

* **TLS endpoint builder for the browser gRPC-web client.** `buildGrpcWebHost(config)` turns the `host` / `port` /
  `useSecureChannel` fields every ONDEWO SDK takes into the gRPC-web base URL (the `host` setting of
  `@ngx-grpc/grpc-web-client`): `https://` by default; `http://` only with `useSecureChannel: false`, and then a
  `console.warn` naming `host:port`. A bare IPv6 literal is bracketed (`https://[::1]:8443`); a host that already
  carries an `http(s)://` scheme is used as given, and an `http://` URL together with `useSecureChannel: true` is
  refused.
* **Certificate and key fields are refused instead of being silently dropped.** In a browser the user agent owns the
  TLS handshake: it trusts its own certificate store and presents a client certificate only from the browser / OS
  store, so application code can neither add a CA nor attach a client identity. A non-empty `grpcCert`,
  `grpcClientCert` or `grpcClientKey` (or their snake_case spellings, listed in `BROWSER_UNSUPPORTED_TLS_FIELDS`)
  throws a `GrpcWebEndpointError`; a private key is never shipped to a browser. An empty host, a `host:port` string,
  and a port outside 1-65535 are refused as well. Error messages name the field, never its value.
* Mutual TLS works through the browser's certificate store, or by letting the gRPC-web proxy (Envoy) terminate the
  browser's TLS and use mutual TLS upstream. Node.js callers that need certificates in code use the nodejs client.
* README: new section "TLS, mutual TLS and certificates" (modes table, Angular example, openssl test PKI, security
  notes, troubleshooting of the browser's handshake errors).

### Tests

* Unit tests for every rule above; real-handshake tests run the built URL against an HTTPS server with an in-test
  openssl PKI (trusted CA, CRLF-encoded CA, unrelated CA, client certificate required, `[::1]`).
* A jest spec pins the release-notes slice: the Makefile's slice command, the spelling of every heading, the closing
  `*****` separators, one section per version, non-empty notes for the released version, and `src/RELEASE.md`
  identical to `RELEASE.md`.
* The build-config spec compares the client version with the `ondewo-vtsi-api` version on major.minor only (SDK
  major.minor == API major.minor; client-only changes ship as patch releases): 8.7.1 on API 8.7.0 passes, a
  different major or minor still fails. It used to require the exact API version.

### Documentation

* RELEASE.md regains the sections and bullets that only the GitHub release bodies or the tags carried, and
  misspelled headings now match the Makefile's slice.

### Build

* Generated with ondewo-proto-compiler 5.15.2 (8.7.0 was generated with 5.14.0).
* The `asteriskVersion` tests assert the behaviour the generated client has had since 8.6.0: an unset field is
  `undefined`, and `''` is encoded as an empty field 5.
* The release recipes hand the GitHub and npm tokens to docker, npm and the release sub-make through the
  environment only, never on a process command line (`docker run -e NAME`, `${NPM_AUTOMATION_TOKEN}` in `.npmrc`,
  anchored loading from the devops-accounts files); a jest spec pins it.

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

## Release ONDEWO VTSI Angular Client 6.4.1

### Bug fixes

* Library generation with new ondewo-proto-compiler 4.5.0 fixes typescript optional value import issue on setters

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
* [[OND233-323]](https://ondewo.atlassian.net/browse/OND233-323) - Updated Sip API 5.0.0

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

* First Release
* Release on [NPM](https://www.npmjs.com/package/@ondewo/vtsi-client-angular)
* Track version 0.3.0 of [ONDEWO VTSI API](https://github.com/ondewo/ondewo-vtsi-api/releases/0.3.0)

*****************
