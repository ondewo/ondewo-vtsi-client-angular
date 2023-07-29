/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import { GrpcCallType, GrpcMetadata } from '@ngx-grpc/common';
import { GRPC_CLIENT_FACTORY, takeMessages, throwStatusErrors } from '@ngx-grpc/core';
import * as thisProto from './session.pb';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import { GRPC_SESSIONS_CLIENT_SETTINGS } from './session.pbconf';
import * as i0 from '@angular/core';
import * as i1 from '@ngx-grpc/core';
/**
 * Service client implementation for ondewo.nlu.Sessions
 */
class SessionsClient {
	handler;
	client;
	/**
	 * Raw RPC implementation for each service client method.
	 * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
	 * Attention: these methods do not throw errors when non-zero status codes are received.
	 */
	$raw = {
		/**
		 * Unary call: /ondewo.nlu.Sessions/DetectIntent
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.DetectIntentResponse>>
		 */
		detectIntent: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Sessions/DetectIntent',
				requestData,
				requestMetadata,
				requestClass: thisProto.DetectIntentRequest,
				responseClass: thisProto.DetectIntentResponse
			});
		},
		/**
		 * Bidirectional streaming: /ondewo.nlu.Sessions/StreamingDetectIntent
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.StreamingDetectIntentResponse>>
		 */
		streamingDetectIntent: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.bidiStream,
				client: this.client,
				path: '/ondewo.nlu.Sessions/StreamingDetectIntent',
				requestData,
				requestMetadata,
				requestClass: thisProto.StreamingDetectIntentRequest,
				responseClass: thisProto.StreamingDetectIntentResponse
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Sessions/ListSessions
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ListSessionsResponse>>
		 */
		listSessions: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Sessions/ListSessions',
				requestData,
				requestMetadata,
				requestClass: thisProto.ListSessionsRequest,
				responseClass: thisProto.ListSessionsResponse
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Sessions/GetSession
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.Session>>
		 */
		getSession: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Sessions/GetSession',
				requestData,
				requestMetadata,
				requestClass: thisProto.GetSessionRequest,
				responseClass: thisProto.Session
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Sessions/CreateSession
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.Session>>
		 */
		createSession: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Sessions/CreateSession',
				requestData,
				requestMetadata,
				requestClass: thisProto.CreateSessionRequest,
				responseClass: thisProto.Session
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Sessions/TrackSessionStep
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.Session>>
		 */
		trackSessionStep: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Sessions/TrackSessionStep',
				requestData,
				requestMetadata,
				requestClass: thisProto.TrackSessionStepRequest,
				responseClass: thisProto.Session
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Sessions/DeleteSession
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<googleProtobuf004.Empty>>
		 */
		deleteSession: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Sessions/DeleteSession',
				requestData,
				requestMetadata,
				requestClass: thisProto.DeleteSessionRequest,
				responseClass: googleProtobuf004.Empty
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Sessions/ListSessionLabels
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ListSessionLabelsResponse>>
		 */
		listSessionLabels: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Sessions/ListSessionLabels',
				requestData,
				requestMetadata,
				requestClass: thisProto.ListSessionLabelsRequest,
				responseClass: thisProto.ListSessionLabelsResponse
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Sessions/ListSessionLabelsOfAllSessions
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ListSessionLabelsResponse>>
		 */
		listSessionLabelsOfAllSessions: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Sessions/ListSessionLabelsOfAllSessions',
				requestData,
				requestMetadata,
				requestClass: thisProto.ListSessionLabelsOfAllSessionsRequest,
				responseClass: thisProto.ListSessionLabelsResponse
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Sessions/ListLanguageCodesOfAllSessions
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ListLanguageCodesResponse>>
		 */
		listLanguageCodesOfAllSessions: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Sessions/ListLanguageCodesOfAllSessions',
				requestData,
				requestMetadata,
				requestClass: thisProto.ListLanguageCodesOfAllSessionsRequest,
				responseClass: thisProto.ListLanguageCodesResponse
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Sessions/ListMatchedIntentsOfAllSessions
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ListMatchedIntentsResponse>>
		 */
		listMatchedIntentsOfAllSessions: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Sessions/ListMatchedIntentsOfAllSessions',
				requestData,
				requestMetadata,
				requestClass: thisProto.ListMatchedIntentsOfAllSessionsRequest,
				responseClass: thisProto.ListMatchedIntentsResponse
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Sessions/ListMatchedEntityTypesOfAllSessions
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ListMatchedEntityTypesResponse>>
		 */
		listMatchedEntityTypesOfAllSessions: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Sessions/ListMatchedEntityTypesOfAllSessions',
				requestData,
				requestMetadata,
				requestClass: thisProto.ListMatchedEntityTypesOfAllSessionsRequest,
				responseClass: thisProto.ListMatchedEntityTypesResponse
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Sessions/ListUserIdsOfAllSessions
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ListUserIdsResponse>>
		 */
		listUserIdsOfAllSessions: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Sessions/ListUserIdsOfAllSessions',
				requestData,
				requestMetadata,
				requestClass: thisProto.ListUserIdsOfAllSessionsRequest,
				responseClass: thisProto.ListUserIdsResponse
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Sessions/ListIdentifiedUserIdsOfAllSessions
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ListIdentifiedUserIdsResponse>>
		 */
		listIdentifiedUserIdsOfAllSessions: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Sessions/ListIdentifiedUserIdsOfAllSessions',
				requestData,
				requestMetadata,
				requestClass: thisProto.ListIdentifiedUserIdsOfAllSessionsRequest,
				responseClass: thisProto.ListIdentifiedUserIdsResponse
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Sessions/ListTagsOfAllSessions
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ListTagsResponse>>
		 */
		listTagsOfAllSessions: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Sessions/ListTagsOfAllSessions',
				requestData,
				requestMetadata,
				requestClass: thisProto.ListTagsOfAllSessionsRequest,
				responseClass: thisProto.ListTagsResponse
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Sessions/ListInputContextsOfAllSessions
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ListInputContextsResponse>>
		 */
		listInputContextsOfAllSessions: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Sessions/ListInputContextsOfAllSessions',
				requestData,
				requestMetadata,
				requestClass: thisProto.ListInputContextsOfAllSessionsRequest,
				responseClass: thisProto.ListInputContextsResponse
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Sessions/ListOutputContextsOfAllSessions
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ListOutputContextsResponse>>
		 */
		listOutputContextsOfAllSessions: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Sessions/ListOutputContextsOfAllSessions',
				requestData,
				requestMetadata,
				requestClass: thisProto.ListOutputContextsOfAllSessionsRequest,
				responseClass: thisProto.ListOutputContextsResponse
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Sessions/ListPlatformsOfAllSessions
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ListPlatformsResponse>>
		 */
		listPlatformsOfAllSessions: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Sessions/ListPlatformsOfAllSessions',
				requestData,
				requestMetadata,
				requestClass: thisProto.ListPlatformsOfAllSessionsRequest,
				responseClass: thisProto.ListPlatformsResponse
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Sessions/ListAccountIdsOfAllSessions
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ListAccountIdsResponse>>
		 */
		listAccountIdsOfAllSessions: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Sessions/ListAccountIdsOfAllSessions',
				requestData,
				requestMetadata,
				requestClass: thisProto.ListAccountIdsOfAllSessionsRequest,
				responseClass: thisProto.ListAccountIdsResponse
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Sessions/ListPropertyIdsOfAllSessions
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ListPropertyIdsResponse>>
		 */
		listPropertyIdsOfAllSessions: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Sessions/ListPropertyIdsOfAllSessions',
				requestData,
				requestMetadata,
				requestClass: thisProto.ListPropertyIdsOfAllSessionsRequest,
				responseClass: thisProto.ListPropertyIdsResponse
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Sessions/ListDatastreamIdsOfAllSessions
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ListDatastreamIdsResponse>>
		 */
		listDatastreamIdsOfAllSessions: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Sessions/ListDatastreamIdsOfAllSessions',
				requestData,
				requestMetadata,
				requestClass: thisProto.ListDatastreamIdsOfAllSessionsRequest,
				responseClass: thisProto.ListDatastreamIdsResponse
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Sessions/ListOriginIdsOfAllSessions
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ListOriginIdsResponse>>
		 */
		listOriginIdsOfAllSessions: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Sessions/ListOriginIdsOfAllSessions',
				requestData,
				requestMetadata,
				requestClass: thisProto.ListOriginIdsOfAllSessionsRequest,
				responseClass: thisProto.ListOriginIdsResponse
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Sessions/AddSessionLabels
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.Session>>
		 */
		addSessionLabels: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Sessions/AddSessionLabels',
				requestData,
				requestMetadata,
				requestClass: thisProto.AddSessionLabelsRequest,
				responseClass: thisProto.Session
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Sessions/DeleteSessionLabels
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.Session>>
		 */
		deleteSessionLabels: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Sessions/DeleteSessionLabels',
				requestData,
				requestMetadata,
				requestClass: thisProto.DeleteSessionLabelsRequest,
				responseClass: thisProto.Session
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Sessions/ListSessionReviews
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ListSessionReviewsResponse>>
		 */
		listSessionReviews: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Sessions/ListSessionReviews',
				requestData,
				requestMetadata,
				requestClass: thisProto.ListSessionReviewsRequest,
				responseClass: thisProto.ListSessionReviewsResponse
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Sessions/GetSessionReview
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.SessionReview>>
		 */
		getSessionReview: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Sessions/GetSessionReview',
				requestData,
				requestMetadata,
				requestClass: thisProto.GetSessionReviewRequest,
				responseClass: thisProto.SessionReview
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Sessions/GetLatestSessionReview
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.SessionReview>>
		 */
		getLatestSessionReview: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Sessions/GetLatestSessionReview',
				requestData,
				requestMetadata,
				requestClass: thisProto.GetLatestSessionReviewRequest,
				responseClass: thisProto.SessionReview
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Sessions/CreateSessionReview
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.SessionReview>>
		 */
		createSessionReview: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Sessions/CreateSessionReview',
				requestData,
				requestMetadata,
				requestClass: thisProto.CreateSessionReviewRequest,
				responseClass: thisProto.SessionReview
			});
		}
	};
	constructor(settings, clientFactory, handler) {
		this.handler = handler;
		this.client = clientFactory.createClient('ondewo.nlu.Sessions', settings);
	}
	/**
	 * Unary call @/ondewo.nlu.Sessions/DetectIntent
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.DetectIntentResponse>
	 */
	detectIntent(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.detectIntent(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Bidirectional streaming @/ondewo.nlu.Sessions/StreamingDetectIntent
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.StreamingDetectIntentResponse>
	 */
	streamingDetectIntent(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.streamingDetectIntent(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Sessions/ListSessions
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ListSessionsResponse>
	 */
	listSessions(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.listSessions(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Sessions/GetSession
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.Session>
	 */
	getSession(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.getSession(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Sessions/CreateSession
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.Session>
	 */
	createSession(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.createSession(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Sessions/TrackSessionStep
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.Session>
	 */
	trackSessionStep(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.trackSessionStep(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Sessions/DeleteSession
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<googleProtobuf004.Empty>
	 */
	deleteSession(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.deleteSession(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Sessions/ListSessionLabels
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ListSessionLabelsResponse>
	 */
	listSessionLabels(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.listSessionLabels(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Sessions/ListSessionLabelsOfAllSessions
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ListSessionLabelsResponse>
	 */
	listSessionLabelsOfAllSessions(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw
			.listSessionLabelsOfAllSessions(requestData, requestMetadata)
			.pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Sessions/ListLanguageCodesOfAllSessions
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ListLanguageCodesResponse>
	 */
	listLanguageCodesOfAllSessions(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw
			.listLanguageCodesOfAllSessions(requestData, requestMetadata)
			.pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Sessions/ListMatchedIntentsOfAllSessions
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ListMatchedIntentsResponse>
	 */
	listMatchedIntentsOfAllSessions(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw
			.listMatchedIntentsOfAllSessions(requestData, requestMetadata)
			.pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Sessions/ListMatchedEntityTypesOfAllSessions
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ListMatchedEntityTypesResponse>
	 */
	listMatchedEntityTypesOfAllSessions(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw
			.listMatchedEntityTypesOfAllSessions(requestData, requestMetadata)
			.pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Sessions/ListUserIdsOfAllSessions
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ListUserIdsResponse>
	 */
	listUserIdsOfAllSessions(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.listUserIdsOfAllSessions(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Sessions/ListIdentifiedUserIdsOfAllSessions
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ListIdentifiedUserIdsResponse>
	 */
	listIdentifiedUserIdsOfAllSessions(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw
			.listIdentifiedUserIdsOfAllSessions(requestData, requestMetadata)
			.pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Sessions/ListTagsOfAllSessions
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ListTagsResponse>
	 */
	listTagsOfAllSessions(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.listTagsOfAllSessions(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Sessions/ListInputContextsOfAllSessions
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ListInputContextsResponse>
	 */
	listInputContextsOfAllSessions(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw
			.listInputContextsOfAllSessions(requestData, requestMetadata)
			.pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Sessions/ListOutputContextsOfAllSessions
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ListOutputContextsResponse>
	 */
	listOutputContextsOfAllSessions(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw
			.listOutputContextsOfAllSessions(requestData, requestMetadata)
			.pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Sessions/ListPlatformsOfAllSessions
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ListPlatformsResponse>
	 */
	listPlatformsOfAllSessions(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.listPlatformsOfAllSessions(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Sessions/ListAccountIdsOfAllSessions
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ListAccountIdsResponse>
	 */
	listAccountIdsOfAllSessions(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw
			.listAccountIdsOfAllSessions(requestData, requestMetadata)
			.pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Sessions/ListPropertyIdsOfAllSessions
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ListPropertyIdsResponse>
	 */
	listPropertyIdsOfAllSessions(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw
			.listPropertyIdsOfAllSessions(requestData, requestMetadata)
			.pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Sessions/ListDatastreamIdsOfAllSessions
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ListDatastreamIdsResponse>
	 */
	listDatastreamIdsOfAllSessions(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw
			.listDatastreamIdsOfAllSessions(requestData, requestMetadata)
			.pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Sessions/ListOriginIdsOfAllSessions
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ListOriginIdsResponse>
	 */
	listOriginIdsOfAllSessions(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.listOriginIdsOfAllSessions(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Sessions/AddSessionLabels
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.Session>
	 */
	addSessionLabels(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.addSessionLabels(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Sessions/DeleteSessionLabels
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.Session>
	 */
	deleteSessionLabels(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.deleteSessionLabels(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Sessions/ListSessionReviews
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ListSessionReviewsResponse>
	 */
	listSessionReviews(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.listSessionReviews(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Sessions/GetSessionReview
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.SessionReview>
	 */
	getSessionReview(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.getSessionReview(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Sessions/GetLatestSessionReview
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.SessionReview>
	 */
	getLatestSessionReview(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.getLatestSessionReview(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Sessions/CreateSessionReview
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.SessionReview>
	 */
	createSessionReview(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.createSessionReview(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: '12.0.0',
		version: '16.0.2',
		ngImport: i0,
		type: SessionsClient,
		deps: [
			{ token: GRPC_SESSIONS_CLIENT_SETTINGS, optional: true },
			{ token: GRPC_CLIENT_FACTORY },
			{ token: i1.GrpcHandler }
		],
		target: i0.ɵɵFactoryTarget.Injectable
	});
	static ɵprov = i0.ɵɵngDeclareInjectable({
		minVersion: '12.0.0',
		version: '16.0.2',
		ngImport: i0,
		type: SessionsClient,
		providedIn: 'any'
	});
}
export { SessionsClient };
i0.ɵɵngDeclareClassMetadata({
	minVersion: '12.0.0',
	version: '16.0.2',
	ngImport: i0,
	type: SessionsClient,
	decorators: [
		{
			type: Injectable,
			args: [{ providedIn: 'any' }]
		}
	],
	ctorParameters: function () {
		return [
			{
				type: undefined,
				decorators: [
					{
						type: Optional
					},
					{
						type: Inject,
						args: [GRPC_SESSIONS_CLIENT_SETTINGS]
					}
				]
			},
			{
				type: undefined,
				decorators: [
					{
						type: Inject,
						args: [GRPC_CLIENT_FACTORY]
					}
				]
			},
			{ type: i1.GrpcHandler }
		];
	}
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5wYnNjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYXBpL29uZGV3by9ubHUvc2Vzc2lvbi5wYnNjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsY0FBYztBQUNkLEVBQUU7QUFDRiwyQkFBMkI7QUFDM0IsOENBQThDO0FBQzlDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsWUFBWSxFQUlaLFlBQVksRUFDYixNQUFNLGtCQUFrQixDQUFDO0FBQzFCLE9BQU8sRUFDTCxtQkFBbUIsRUFFbkIsWUFBWSxFQUNaLGlCQUFpQixFQUNsQixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sS0FBSyxTQUFTLE1BQU0sY0FBYyxDQUFDO0FBSzFDLE9BQU8sS0FBSyxpQkFBaUIsTUFBTSw0QkFBNEIsQ0FBQztBQVdoRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7O0FBQ2pFOztHQUVHO0FBQ0gsTUFDYSxjQUFjO0lBMGxCZjtJQXpsQkYsTUFBTSxDQUFrQjtJQUVoQzs7OztPQUlHO0lBQ0gsSUFBSSxHQUFHO1FBQ0w7Ozs7OztXQU1HO1FBQ0gsWUFBWSxFQUFFLENBQ1osV0FBMEMsRUFDMUMsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFLEVBQ21CLEVBQUU7WUFDekQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztnQkFDekIsSUFBSSxFQUFFLFlBQVksQ0FBQyxLQUFLO2dCQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ25CLElBQUksRUFBRSxtQ0FBbUM7Z0JBQ3pDLFdBQVc7Z0JBQ1gsZUFBZTtnQkFDZixZQUFZLEVBQUUsU0FBUyxDQUFDLG1CQUFtQjtnQkFDM0MsYUFBYSxFQUFFLFNBQVMsQ0FBQyxvQkFBb0I7YUFD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QUNqQixXQUFpRCxFQUNqRCxlQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUU7UUFFcEMsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUM7YUFDakQsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO3VHQTdoQ1UsY0FBYyxrQkF3bEJILDZCQUE2Qiw2QkFDekMsbUJBQW1COzJHQXpsQmxCLGNBQWMsY0FERCxLQUFLOztTQUNsQixjQUFjOzJGQUFkLGNBQWM7a0JBRDFCLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFOzswQkF5bEI1QixRQUFROzswQkFBSSxNQUFNOzJCQUFDLDZCQUE2Qjs7MEJBQ2hELE1BQU07MkJBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBAdHMtbm9jaGVja1xuLy9cbi8vIFRISVMgSVMgQSBHRU5FUkFURUQgRklMRVxuLy8gRE8gTk9UIE1PRElGWSBJVCEgWU9VUiBDSEFOR0VTIFdJTEwgQkUgTE9TVFxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgR3JwY0NhbGxUeXBlLFxuICBHcnBjQ2xpZW50LFxuICBHcnBjQ2xpZW50RmFjdG9yeSxcbiAgR3JwY0V2ZW50LFxuICBHcnBjTWV0YWRhdGFcbn0gZnJvbSAnQG5neC1ncnBjL2NvbW1vbic7XG5pbXBvcnQge1xuICBHUlBDX0NMSUVOVF9GQUNUT1JZLFxuICBHcnBjSGFuZGxlcixcbiAgdGFrZU1lc3NhZ2VzLFxuICB0aHJvd1N0YXR1c0Vycm9yc1xufSBmcm9tICdAbmd4LWdycGMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgKiBhcyB0aGlzUHJvdG8gZnJvbSAnLi9zZXNzaW9uLnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZUFwaTAwMCBmcm9tICcuLi8uLi9nb29nbGUvYXBpL2h0dHAucGInO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDEgZnJvbSAnQG5neC1ncnBjL3dlbGwta25vd24tdHlwZXMnO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDIgZnJvbSAnQG5neC1ncnBjL3dlbGwta25vd24tdHlwZXMnO1xuaW1wb3J0ICogYXMgZ29vZ2xlQXBpMDAzIGZyb20gJy4uLy4uL2dvb2dsZS9hcGkvYW5ub3RhdGlvbnMucGInO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDQgZnJvbSAnQG5neC1ncnBjL3dlbGwta25vd24tdHlwZXMnO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDUgZnJvbSAnQG5neC1ncnBjL3dlbGwta25vd24tdHlwZXMnO1xuaW1wb3J0ICogYXMgb25kZXdvTmx1MDA2IGZyb20gJy4uLy4uL29uZGV3by9ubHUvY29udGV4dC5wYic7XG5pbXBvcnQgKiBhcyBvbmRld29ObHUwMDcgZnJvbSAnLi4vLi4vb25kZXdvL25sdS9jb21tb24ucGInO1xuaW1wb3J0ICogYXMgb25kZXdvTmx1MDA4IGZyb20gJy4uLy4uL29uZGV3by9ubHUvb3BlcmF0aW9ucy5wYic7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwOSBmcm9tICdAbmd4LWdycGMvd2VsbC1rbm93bi10eXBlcyc7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAxMCBmcm9tICdAbmd4LWdycGMvd2VsbC1rbm93bi10eXBlcyc7XG5pbXBvcnQgKiBhcyBnb29nbGVScGMwMTEgZnJvbSAnLi4vLi4vZ29vZ2xlL3JwYy9zdGF0dXMucGInO1xuaW1wb3J0ICogYXMgZ29vZ2xlVHlwZTAxMiBmcm9tICcuLi8uLi9nb29nbGUvdHlwZS9sYXRsbmcucGInO1xuaW1wb3J0ICogYXMgb25kZXdvTmx1MDEzIGZyb20gJy4uLy4uL29uZGV3by9ubHUvaW50ZW50LnBiJztcbmltcG9ydCAqIGFzIG9uZGV3b05sdTAxNCBmcm9tICcuLi8uLi9vbmRld28vbmx1L2VudGl0eS10eXBlLnBiJztcbmltcG9ydCB7IEdSUENfU0VTU0lPTlNfQ0xJRU5UX1NFVFRJTkdTIH0gZnJvbSAnLi9zZXNzaW9uLnBiY29uZic7XG4vKipcbiAqIFNlcnZpY2UgY2xpZW50IGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LlNlc3Npb25zXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ2FueScgfSlcbmV4cG9ydCBjbGFzcyBTZXNzaW9uc0NsaWVudCB7XG4gIHByaXZhdGUgY2xpZW50OiBHcnBjQ2xpZW50PGFueT47XG5cbiAgLyoqXG4gICAqIFJhdyBSUEMgaW1wbGVtZW50YXRpb24gZm9yIGVhY2ggc2VydmljZSBjbGllbnQgbWV0aG9kLlxuICAgKiBUaGUgcmF3IG1ldGhvZHMgcHJvdmlkZSBtb3JlIGNvbnRyb2wgb24gdGhlIGluY29taW5nIGRhdGEgYW5kIGV2ZW50cy4gRS5nLiB0aGV5IGNhbiBiZSB1c2VmdWwgdG8gcmVhZCBzdGF0dXMgYE9LYCBtZXRhZGF0YS5cbiAgICogQXR0ZW50aW9uOiB0aGVzZSBtZXRob2RzIGRvIG5vdCB0aHJvdyBlcnJvcnMgd2hlbiBub24temVybyBzdGF0dXMgY29kZXMgYXJlIHJlY2VpdmVkLlxuICAgKi9cbiAgJHJhdyA9IHtcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5TZXNzaW9ucy9EZXRlY3RJbnRlbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uRGV0ZWN0SW50ZW50UmVzcG9uc2U+PlxuICAgICAqL1xuICAgIGRldGVjdEludGVudDogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5EZXRlY3RJbnRlbnRSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkRldGVjdEludGVudFJlc3BvbnNlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5TZXNzaW9ucy9EZXRlY3RJbnRlbnQnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5EZXRlY3RJbnRlbnRSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uRGV0ZWN0SW50ZW50UmVzcG9uc2VcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQmlkaXJlY3Rpb25hbCBzdHJlYW1pbmc6IC9vbmRld28ubmx1LlNlc3Npb25zL1N0cmVhbWluZ0RldGVjdEludGVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5TdHJlYW1pbmdEZXRlY3RJbnRlbnRSZXNwb25zZT4+XG4gICAgICovXG4gICAgc3RyZWFtaW5nRGV0ZWN0SW50ZW50OiAoXG4gICAgICByZXF1ZXN0RGF0YTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uU3RyZWFtaW5nRGV0ZWN0SW50ZW50UmVxdWVzdD4sXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uU3RyZWFtaW5nRGV0ZWN0SW50ZW50UmVzcG9uc2U+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS5iaWRpU3RyZWFtLFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuU2Vzc2lvbnMvU3RyZWFtaW5nRGV0ZWN0SW50ZW50JyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uU3RyZWFtaW5nRGV0ZWN0SW50ZW50UmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLlN0cmVhbWluZ0RldGVjdEludGVudFJlc3BvbnNlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LlNlc3Npb25zL0xpc3RTZXNzaW9uc1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5MaXN0U2Vzc2lvbnNSZXNwb25zZT4+XG4gICAgICovXG4gICAgbGlzdFNlc3Npb25zOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkxpc3RTZXNzaW9uc1JlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uTGlzdFNlc3Npb25zUmVzcG9uc2U+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28ubmx1LlNlc3Npb25zL0xpc3RTZXNzaW9ucycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkxpc3RTZXNzaW9uc1JlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5MaXN0U2Vzc2lvbnNSZXNwb25zZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5TZXNzaW9ucy9HZXRTZXNzaW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlNlc3Npb24+PlxuICAgICAqL1xuICAgIGdldFNlc3Npb246IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0U2Vzc2lvblJlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uU2Vzc2lvbj4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuU2Vzc2lvbnMvR2V0U2Vzc2lvbicsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkdldFNlc3Npb25SZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uU2Vzc2lvblxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5TZXNzaW9ucy9DcmVhdGVTZXNzaW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlNlc3Npb24+PlxuICAgICAqL1xuICAgIGNyZWF0ZVNlc3Npb246IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQ3JlYXRlU2Vzc2lvblJlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uU2Vzc2lvbj4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuU2Vzc2lvbnMvQ3JlYXRlU2Vzc2lvbicsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkNyZWF0ZVNlc3Npb25SZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uU2Vzc2lvblxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5TZXNzaW9ucy9UcmFja1Nlc3Npb25TdGVwXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlNlc3Npb24+PlxuICAgICAqL1xuICAgIHRyYWNrU2Vzc2lvblN0ZXA6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uVHJhY2tTZXNzaW9uU3RlcFJlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uU2Vzc2lvbj4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuU2Vzc2lvbnMvVHJhY2tTZXNzaW9uU3RlcCcsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLlRyYWNrU2Vzc2lvblN0ZXBSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uU2Vzc2lvblxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5TZXNzaW9ucy9EZWxldGVTZXNzaW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8Z29vZ2xlUHJvdG9idWYwMDQuRW1wdHk+PlxuICAgICAqL1xuICAgIGRlbGV0ZVNlc3Npb246IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uRGVsZXRlU2Vzc2lvblJlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDxnb29nbGVQcm90b2J1ZjAwNC5FbXB0eT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuU2Vzc2lvbnMvRGVsZXRlU2Vzc2lvbicsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkRlbGV0ZVNlc3Npb25SZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiBnb29nbGVQcm90b2J1ZjAwNC5FbXB0eVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5TZXNzaW9ucy9MaXN0U2Vzc2lvbkxhYmVsc1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5MaXN0U2Vzc2lvbkxhYmVsc1Jlc3BvbnNlPj5cbiAgICAgKi9cbiAgICBsaXN0U2Vzc2lvbkxhYmVsczogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5MaXN0U2Vzc2lvbkxhYmVsc1JlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uTGlzdFNlc3Npb25MYWJlbHNSZXNwb25zZT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuU2Vzc2lvbnMvTGlzdFNlc3Npb25MYWJlbHMnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5MaXN0U2Vzc2lvbkxhYmVsc1JlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5MaXN0U2Vzc2lvbkxhYmVsc1Jlc3BvbnNlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LlNlc3Npb25zL0xpc3RTZXNzaW9uTGFiZWxzT2ZBbGxTZXNzaW9uc1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5MaXN0U2Vzc2lvbkxhYmVsc1Jlc3BvbnNlPj5cbiAgICAgKi9cbiAgICBsaXN0U2Vzc2lvbkxhYmVsc09mQWxsU2Vzc2lvbnM6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uTGlzdFNlc3Npb25MYWJlbHNPZkFsbFNlc3Npb25zUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5MaXN0U2Vzc2lvbkxhYmVsc1Jlc3BvbnNlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5TZXNzaW9ucy9MaXN0U2Vzc2lvbkxhYmVsc09mQWxsU2Vzc2lvbnMnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5MaXN0U2Vzc2lvbkxhYmVsc09mQWxsU2Vzc2lvbnNSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uTGlzdFNlc3Npb25MYWJlbHNSZXNwb25zZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5TZXNzaW9ucy9MaXN0TGFuZ3VhZ2VDb2Rlc09mQWxsU2Vzc2lvbnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uTGlzdExhbmd1YWdlQ29kZXNSZXNwb25zZT4+XG4gICAgICovXG4gICAgbGlzdExhbmd1YWdlQ29kZXNPZkFsbFNlc3Npb25zOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkxpc3RMYW5ndWFnZUNvZGVzT2ZBbGxTZXNzaW9uc1JlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uTGlzdExhbmd1YWdlQ29kZXNSZXNwb25zZT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuU2Vzc2lvbnMvTGlzdExhbmd1YWdlQ29kZXNPZkFsbFNlc3Npb25zJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uTGlzdExhbmd1YWdlQ29kZXNPZkFsbFNlc3Npb25zUmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkxpc3RMYW5ndWFnZUNvZGVzUmVzcG9uc2VcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL29uZGV3by5ubHUuU2Vzc2lvbnMvTGlzdE1hdGNoZWRJbnRlbnRzT2ZBbGxTZXNzaW9uc1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5MaXN0TWF0Y2hlZEludGVudHNSZXNwb25zZT4+XG4gICAgICovXG4gICAgbGlzdE1hdGNoZWRJbnRlbnRzT2ZBbGxTZXNzaW9uczogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5MaXN0TWF0Y2hlZEludGVudHNPZkFsbFNlc3Npb25zUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5MaXN0TWF0Y2hlZEludGVudHNSZXNwb25zZT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuU2Vzc2lvbnMvTGlzdE1hdGNoZWRJbnRlbnRzT2ZBbGxTZXNzaW9ucycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkxpc3RNYXRjaGVkSW50ZW50c09mQWxsU2Vzc2lvbnNSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uTGlzdE1hdGNoZWRJbnRlbnRzUmVzcG9uc2VcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL29uZGV3by5ubHUuU2Vzc2lvbnMvTGlzdE1hdGNoZWRFbnRpdHlUeXBlc09mQWxsU2Vzc2lvbnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uTGlzdE1hdGNoZWRFbnRpdHlUeXBlc1Jlc3BvbnNlPj5cbiAgICAgKi9cbiAgICBsaXN0TWF0Y2hlZEVudGl0eVR5cGVzT2ZBbGxTZXNzaW9uczogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5MaXN0TWF0Y2hlZEVudGl0eVR5cGVzT2ZBbGxTZXNzaW9uc1JlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uTGlzdE1hdGNoZWRFbnRpdHlUeXBlc1Jlc3BvbnNlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5TZXNzaW9ucy9MaXN0TWF0Y2hlZEVudGl0eVR5cGVzT2ZBbGxTZXNzaW9ucycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkxpc3RNYXRjaGVkRW50aXR5VHlwZXNPZkFsbFNlc3Npb25zUmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkxpc3RNYXRjaGVkRW50aXR5VHlwZXNSZXNwb25zZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5TZXNzaW9ucy9MaXN0VXNlcklkc09mQWxsU2Vzc2lvbnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uTGlzdFVzZXJJZHNSZXNwb25zZT4+XG4gICAgICovXG4gICAgbGlzdFVzZXJJZHNPZkFsbFNlc3Npb25zOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkxpc3RVc2VySWRzT2ZBbGxTZXNzaW9uc1JlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uTGlzdFVzZXJJZHNSZXNwb25zZT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuU2Vzc2lvbnMvTGlzdFVzZXJJZHNPZkFsbFNlc3Npb25zJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uTGlzdFVzZXJJZHNPZkFsbFNlc3Npb25zUmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkxpc3RVc2VySWRzUmVzcG9uc2VcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL29uZGV3by5ubHUuU2Vzc2lvbnMvTGlzdElkZW50aWZpZWRVc2VySWRzT2ZBbGxTZXNzaW9uc1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5MaXN0SWRlbnRpZmllZFVzZXJJZHNSZXNwb25zZT4+XG4gICAgICovXG4gICAgbGlzdElkZW50aWZpZWRVc2VySWRzT2ZBbGxTZXNzaW9uczogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5MaXN0SWRlbnRpZmllZFVzZXJJZHNPZkFsbFNlc3Npb25zUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5MaXN0SWRlbnRpZmllZFVzZXJJZHNSZXNwb25zZT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuU2Vzc2lvbnMvTGlzdElkZW50aWZpZWRVc2VySWRzT2ZBbGxTZXNzaW9ucycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkxpc3RJZGVudGlmaWVkVXNlcklkc09mQWxsU2Vzc2lvbnNSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uTGlzdElkZW50aWZpZWRVc2VySWRzUmVzcG9uc2VcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL29uZGV3by5ubHUuU2Vzc2lvbnMvTGlzdFRhZ3NPZkFsbFNlc3Npb25zXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkxpc3RUYWdzUmVzcG9uc2U+PlxuICAgICAqL1xuICAgIGxpc3RUYWdzT2ZBbGxTZXNzaW9uczogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5MaXN0VGFnc09mQWxsU2Vzc2lvbnNSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkxpc3RUYWdzUmVzcG9uc2U+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28ubmx1LlNlc3Npb25zL0xpc3RUYWdzT2ZBbGxTZXNzaW9ucycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkxpc3RUYWdzT2ZBbGxTZXNzaW9uc1JlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5MaXN0VGFnc1Jlc3BvbnNlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LlNlc3Npb25zL0xpc3RJbnB1dENvbnRleHRzT2ZBbGxTZXNzaW9uc1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5MaXN0SW5wdXRDb250ZXh0c1Jlc3BvbnNlPj5cbiAgICAgKi9cbiAgICBsaXN0SW5wdXRDb250ZXh0c09mQWxsU2Vzc2lvbnM6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uTGlzdElucHV0Q29udGV4dHNPZkFsbFNlc3Npb25zUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5MaXN0SW5wdXRDb250ZXh0c1Jlc3BvbnNlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5TZXNzaW9ucy9MaXN0SW5wdXRDb250ZXh0c09mQWxsU2Vzc2lvbnMnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5MaXN0SW5wdXRDb250ZXh0c09mQWxsU2Vzc2lvbnNSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uTGlzdElucHV0Q29udGV4dHNSZXNwb25zZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5TZXNzaW9ucy9MaXN0T3V0cHV0Q29udGV4dHNPZkFsbFNlc3Npb25zXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkxpc3RPdXRwdXRDb250ZXh0c1Jlc3BvbnNlPj5cbiAgICAgKi9cbiAgICBsaXN0T3V0cHV0Q29udGV4dHNPZkFsbFNlc3Npb25zOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkxpc3RPdXRwdXRDb250ZXh0c09mQWxsU2Vzc2lvbnNSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkxpc3RPdXRwdXRDb250ZXh0c1Jlc3BvbnNlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5TZXNzaW9ucy9MaXN0T3V0cHV0Q29udGV4dHNPZkFsbFNlc3Npb25zJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uTGlzdE91dHB1dENvbnRleHRzT2ZBbGxTZXNzaW9uc1JlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5MaXN0T3V0cHV0Q29udGV4dHNSZXNwb25zZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5TZXNzaW9ucy9MaXN0UGxhdGZvcm1zT2ZBbGxTZXNzaW9uc1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5MaXN0UGxhdGZvcm1zUmVzcG9uc2U+PlxuICAgICAqL1xuICAgIGxpc3RQbGF0Zm9ybXNPZkFsbFNlc3Npb25zOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkxpc3RQbGF0Zm9ybXNPZkFsbFNlc3Npb25zUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5MaXN0UGxhdGZvcm1zUmVzcG9uc2U+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28ubmx1LlNlc3Npb25zL0xpc3RQbGF0Zm9ybXNPZkFsbFNlc3Npb25zJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uTGlzdFBsYXRmb3Jtc09mQWxsU2Vzc2lvbnNSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uTGlzdFBsYXRmb3Jtc1Jlc3BvbnNlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LlNlc3Npb25zL0xpc3RBY2NvdW50SWRzT2ZBbGxTZXNzaW9uc1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5MaXN0QWNjb3VudElkc1Jlc3BvbnNlPj5cbiAgICAgKi9cbiAgICBsaXN0QWNjb3VudElkc09mQWxsU2Vzc2lvbnM6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uTGlzdEFjY291bnRJZHNPZkFsbFNlc3Npb25zUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5MaXN0QWNjb3VudElkc1Jlc3BvbnNlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5TZXNzaW9ucy9MaXN0QWNjb3VudElkc09mQWxsU2Vzc2lvbnMnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5MaXN0QWNjb3VudElkc09mQWxsU2Vzc2lvbnNSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uTGlzdEFjY291bnRJZHNSZXNwb25zZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5TZXNzaW9ucy9MaXN0UHJvcGVydHlJZHNPZkFsbFNlc3Npb25zXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkxpc3RQcm9wZXJ0eUlkc1Jlc3BvbnNlPj5cbiAgICAgKi9cbiAgICBsaXN0UHJvcGVydHlJZHNPZkFsbFNlc3Npb25zOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkxpc3RQcm9wZXJ0eUlkc09mQWxsU2Vzc2lvbnNSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkxpc3RQcm9wZXJ0eUlkc1Jlc3BvbnNlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5TZXNzaW9ucy9MaXN0UHJvcGVydHlJZHNPZkFsbFNlc3Npb25zJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uTGlzdFByb3BlcnR5SWRzT2ZBbGxTZXNzaW9uc1JlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5MaXN0UHJvcGVydHlJZHNSZXNwb25zZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5TZXNzaW9ucy9MaXN0RGF0YXN0cmVhbUlkc09mQWxsU2Vzc2lvbnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uTGlzdERhdGFzdHJlYW1JZHNSZXNwb25zZT4+XG4gICAgICovXG4gICAgbGlzdERhdGFzdHJlYW1JZHNPZkFsbFNlc3Npb25zOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkxpc3REYXRhc3RyZWFtSWRzT2ZBbGxTZXNzaW9uc1JlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uTGlzdERhdGFzdHJlYW1JZHNSZXNwb25zZT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuU2Vzc2lvbnMvTGlzdERhdGFzdHJlYW1JZHNPZkFsbFNlc3Npb25zJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uTGlzdERhdGFzdHJlYW1JZHNPZkFsbFNlc3Npb25zUmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkxpc3REYXRhc3RyZWFtSWRzUmVzcG9uc2VcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL29uZGV3by5ubHUuU2Vzc2lvbnMvTGlzdE9yaWdpbklkc09mQWxsU2Vzc2lvbnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uTGlzdE9yaWdpbklkc1Jlc3BvbnNlPj5cbiAgICAgKi9cbiAgICBsaXN0T3JpZ2luSWRzT2ZBbGxTZXNzaW9uczogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5MaXN0T3JpZ2luSWRzT2ZBbGxTZXNzaW9uc1JlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uTGlzdE9yaWdpbklkc1Jlc3BvbnNlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5TZXNzaW9ucy9MaXN0T3JpZ2luSWRzT2ZBbGxTZXNzaW9ucycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkxpc3RPcmlnaW5JZHNPZkFsbFNlc3Npb25zUmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkxpc3RPcmlnaW5JZHNSZXNwb25zZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5TZXNzaW9ucy9BZGRTZXNzaW9uTGFiZWxzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlNlc3Npb24+PlxuICAgICAqL1xuICAgIGFkZFNlc3Npb25MYWJlbHM6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQWRkU2Vzc2lvbkxhYmVsc1JlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uU2Vzc2lvbj4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuU2Vzc2lvbnMvQWRkU2Vzc2lvbkxhYmVscycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkFkZFNlc3Npb25MYWJlbHNSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uU2Vzc2lvblxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5TZXNzaW9ucy9EZWxldGVTZXNzaW9uTGFiZWxzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlNlc3Npb24+PlxuICAgICAqL1xuICAgIGRlbGV0ZVNlc3Npb25MYWJlbHM6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uRGVsZXRlU2Vzc2lvbkxhYmVsc1JlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uU2Vzc2lvbj4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuU2Vzc2lvbnMvRGVsZXRlU2Vzc2lvbkxhYmVscycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkRlbGV0ZVNlc3Npb25MYWJlbHNSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uU2Vzc2lvblxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5TZXNzaW9ucy9MaXN0U2Vzc2lvblJldmlld3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uTGlzdFNlc3Npb25SZXZpZXdzUmVzcG9uc2U+PlxuICAgICAqL1xuICAgIGxpc3RTZXNzaW9uUmV2aWV3czogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5MaXN0U2Vzc2lvblJldmlld3NSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkxpc3RTZXNzaW9uUmV2aWV3c1Jlc3BvbnNlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5TZXNzaW9ucy9MaXN0U2Vzc2lvblJldmlld3MnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5MaXN0U2Vzc2lvblJldmlld3NSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uTGlzdFNlc3Npb25SZXZpZXdzUmVzcG9uc2VcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL29uZGV3by5ubHUuU2Vzc2lvbnMvR2V0U2Vzc2lvblJldmlld1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5TZXNzaW9uUmV2aWV3Pj5cbiAgICAgKi9cbiAgICBnZXRTZXNzaW9uUmV2aWV3OiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldFNlc3Npb25SZXZpZXdSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlNlc3Npb25SZXZpZXc+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28ubmx1LlNlc3Npb25zL0dldFNlc3Npb25SZXZpZXcnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5HZXRTZXNzaW9uUmV2aWV3UmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLlNlc3Npb25SZXZpZXdcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL29uZGV3by5ubHUuU2Vzc2lvbnMvR2V0TGF0ZXN0U2Vzc2lvblJldmlld1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5TZXNzaW9uUmV2aWV3Pj5cbiAgICAgKi9cbiAgICBnZXRMYXRlc3RTZXNzaW9uUmV2aWV3OiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldExhdGVzdFNlc3Npb25SZXZpZXdSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlNlc3Npb25SZXZpZXc+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28ubmx1LlNlc3Npb25zL0dldExhdGVzdFNlc3Npb25SZXZpZXcnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5HZXRMYXRlc3RTZXNzaW9uUmV2aWV3UmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLlNlc3Npb25SZXZpZXdcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL29uZGV3by5ubHUuU2Vzc2lvbnMvQ3JlYXRlU2Vzc2lvblJldmlld1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5TZXNzaW9uUmV2aWV3Pj5cbiAgICAgKi9cbiAgICBjcmVhdGVTZXNzaW9uUmV2aWV3OiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkNyZWF0ZVNlc3Npb25SZXZpZXdSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlNlc3Npb25SZXZpZXc+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28ubmx1LlNlc3Npb25zL0NyZWF0ZVNlc3Npb25SZXZpZXcnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5DcmVhdGVTZXNzaW9uUmV2aWV3UmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLlNlc3Npb25SZXZpZXdcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEdSUENfU0VTU0lPTlNfQ0xJRU5UX1NFVFRJTkdTKSBzZXR0aW5nczogYW55LFxuICAgIEBJbmplY3QoR1JQQ19DTElFTlRfRkFDVE9SWSkgY2xpZW50RmFjdG9yeTogR3JwY0NsaWVudEZhY3Rvcnk8YW55PixcbiAgICBwcml2YXRlIGhhbmRsZXI6IEdycGNIYW5kbGVyXG4gICkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50RmFjdG9yeS5jcmVhdGVDbGllbnQoJ29uZGV3by5ubHUuU2Vzc2lvbnMnLCBzZXR0aW5ncyk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL29uZGV3by5ubHUuU2Vzc2lvbnMvRGV0ZWN0SW50ZW50XG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkRldGVjdEludGVudFJlc3BvbnNlPlxuICAgKi9cbiAgZGV0ZWN0SW50ZW50KFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uRGV0ZWN0SW50ZW50UmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uRGV0ZWN0SW50ZW50UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuZGV0ZWN0SW50ZW50KHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogQmlkaXJlY3Rpb25hbCBzdHJlYW1pbmcgQC9vbmRld28ubmx1LlNlc3Npb25zL1N0cmVhbWluZ0RldGVjdEludGVudFxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5TdHJlYW1pbmdEZXRlY3RJbnRlbnRSZXNwb25zZT5cbiAgICovXG4gIHN0cmVhbWluZ0RldGVjdEludGVudChcbiAgICByZXF1ZXN0RGF0YTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uU3RyZWFtaW5nRGV0ZWN0SW50ZW50UmVxdWVzdD4sXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLlN0cmVhbWluZ0RldGVjdEludGVudFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLnN0cmVhbWluZ0RldGVjdEludGVudChyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28ubmx1LlNlc3Npb25zL0xpc3RTZXNzaW9uc1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5MaXN0U2Vzc2lvbnNSZXNwb25zZT5cbiAgICovXG4gIGxpc3RTZXNzaW9ucyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkxpc3RTZXNzaW9uc1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkxpc3RTZXNzaW9uc1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmxpc3RTZXNzaW9ucyhyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28ubmx1LlNlc3Npb25zL0dldFNlc3Npb25cbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uU2Vzc2lvbj5cbiAgICovXG4gIGdldFNlc3Npb24oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRTZXNzaW9uUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uU2Vzc2lvbj4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5nZXRTZXNzaW9uKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL29uZGV3by5ubHUuU2Vzc2lvbnMvQ3JlYXRlU2Vzc2lvblxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5TZXNzaW9uPlxuICAgKi9cbiAgY3JlYXRlU2Vzc2lvbihcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkNyZWF0ZVNlc3Npb25SZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5TZXNzaW9uPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmNyZWF0ZVNlc3Npb24ocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5TZXNzaW9ucy9UcmFja1Nlc3Npb25TdGVwXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLlNlc3Npb24+XG4gICAqL1xuICB0cmFja1Nlc3Npb25TdGVwKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uVHJhY2tTZXNzaW9uU3RlcFJlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLlNlc3Npb24+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAudHJhY2tTZXNzaW9uU3RlcChyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28ubmx1LlNlc3Npb25zL0RlbGV0ZVNlc3Npb25cbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxnb29nbGVQcm90b2J1ZjAwNC5FbXB0eT5cbiAgICovXG4gIGRlbGV0ZVNlc3Npb24oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5EZWxldGVTZXNzaW9uUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTxnb29nbGVQcm90b2J1ZjAwNC5FbXB0eT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5kZWxldGVTZXNzaW9uKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL29uZGV3by5ubHUuU2Vzc2lvbnMvTGlzdFNlc3Npb25MYWJlbHNcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uTGlzdFNlc3Npb25MYWJlbHNSZXNwb25zZT5cbiAgICovXG4gIGxpc3RTZXNzaW9uTGFiZWxzKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uTGlzdFNlc3Npb25MYWJlbHNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5MaXN0U2Vzc2lvbkxhYmVsc1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmxpc3RTZXNzaW9uTGFiZWxzKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL29uZGV3by5ubHUuU2Vzc2lvbnMvTGlzdFNlc3Npb25MYWJlbHNPZkFsbFNlc3Npb25zXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkxpc3RTZXNzaW9uTGFiZWxzUmVzcG9uc2U+XG4gICAqL1xuICBsaXN0U2Vzc2lvbkxhYmVsc09mQWxsU2Vzc2lvbnMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5MaXN0U2Vzc2lvbkxhYmVsc09mQWxsU2Vzc2lvbnNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5MaXN0U2Vzc2lvbkxhYmVsc1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmxpc3RTZXNzaW9uTGFiZWxzT2ZBbGxTZXNzaW9ucyhyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28ubmx1LlNlc3Npb25zL0xpc3RMYW5ndWFnZUNvZGVzT2ZBbGxTZXNzaW9uc1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5MaXN0TGFuZ3VhZ2VDb2Rlc1Jlc3BvbnNlPlxuICAgKi9cbiAgbGlzdExhbmd1YWdlQ29kZXNPZkFsbFNlc3Npb25zKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uTGlzdExhbmd1YWdlQ29kZXNPZkFsbFNlc3Npb25zUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uTGlzdExhbmd1YWdlQ29kZXNSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5saXN0TGFuZ3VhZ2VDb2Rlc09mQWxsU2Vzc2lvbnMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5TZXNzaW9ucy9MaXN0TWF0Y2hlZEludGVudHNPZkFsbFNlc3Npb25zXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkxpc3RNYXRjaGVkSW50ZW50c1Jlc3BvbnNlPlxuICAgKi9cbiAgbGlzdE1hdGNoZWRJbnRlbnRzT2ZBbGxTZXNzaW9ucyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkxpc3RNYXRjaGVkSW50ZW50c09mQWxsU2Vzc2lvbnNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5MaXN0TWF0Y2hlZEludGVudHNSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5saXN0TWF0Y2hlZEludGVudHNPZkFsbFNlc3Npb25zKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL29uZGV3by5ubHUuU2Vzc2lvbnMvTGlzdE1hdGNoZWRFbnRpdHlUeXBlc09mQWxsU2Vzc2lvbnNcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uTGlzdE1hdGNoZWRFbnRpdHlUeXBlc1Jlc3BvbnNlPlxuICAgKi9cbiAgbGlzdE1hdGNoZWRFbnRpdHlUeXBlc09mQWxsU2Vzc2lvbnMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5MaXN0TWF0Y2hlZEVudGl0eVR5cGVzT2ZBbGxTZXNzaW9uc1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkxpc3RNYXRjaGVkRW50aXR5VHlwZXNSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5saXN0TWF0Y2hlZEVudGl0eVR5cGVzT2ZBbGxTZXNzaW9ucyhyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28ubmx1LlNlc3Npb25zL0xpc3RVc2VySWRzT2ZBbGxTZXNzaW9uc1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5MaXN0VXNlcklkc1Jlc3BvbnNlPlxuICAgKi9cbiAgbGlzdFVzZXJJZHNPZkFsbFNlc3Npb25zKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uTGlzdFVzZXJJZHNPZkFsbFNlc3Npb25zUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uTGlzdFVzZXJJZHNSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5saXN0VXNlcklkc09mQWxsU2Vzc2lvbnMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5TZXNzaW9ucy9MaXN0SWRlbnRpZmllZFVzZXJJZHNPZkFsbFNlc3Npb25zXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkxpc3RJZGVudGlmaWVkVXNlcklkc1Jlc3BvbnNlPlxuICAgKi9cbiAgbGlzdElkZW50aWZpZWRVc2VySWRzT2ZBbGxTZXNzaW9ucyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkxpc3RJZGVudGlmaWVkVXNlcklkc09mQWxsU2Vzc2lvbnNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5MaXN0SWRlbnRpZmllZFVzZXJJZHNSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5saXN0SWRlbnRpZmllZFVzZXJJZHNPZkFsbFNlc3Npb25zKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL29uZGV3by5ubHUuU2Vzc2lvbnMvTGlzdFRhZ3NPZkFsbFNlc3Npb25zXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkxpc3RUYWdzUmVzcG9uc2U+XG4gICAqL1xuICBsaXN0VGFnc09mQWxsU2Vzc2lvbnMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5MaXN0VGFnc09mQWxsU2Vzc2lvbnNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5MaXN0VGFnc1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmxpc3RUYWdzT2ZBbGxTZXNzaW9ucyhyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28ubmx1LlNlc3Npb25zL0xpc3RJbnB1dENvbnRleHRzT2ZBbGxTZXNzaW9uc1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5MaXN0SW5wdXRDb250ZXh0c1Jlc3BvbnNlPlxuICAgKi9cbiAgbGlzdElucHV0Q29udGV4dHNPZkFsbFNlc3Npb25zKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uTGlzdElucHV0Q29udGV4dHNPZkFsbFNlc3Npb25zUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uTGlzdElucHV0Q29udGV4dHNSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5saXN0SW5wdXRDb250ZXh0c09mQWxsU2Vzc2lvbnMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5TZXNzaW9ucy9MaXN0T3V0cHV0Q29udGV4dHNPZkFsbFNlc3Npb25zXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkxpc3RPdXRwdXRDb250ZXh0c1Jlc3BvbnNlPlxuICAgKi9cbiAgbGlzdE91dHB1dENvbnRleHRzT2ZBbGxTZXNzaW9ucyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkxpc3RPdXRwdXRDb250ZXh0c09mQWxsU2Vzc2lvbnNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5MaXN0T3V0cHV0Q29udGV4dHNSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5saXN0T3V0cHV0Q29udGV4dHNPZkFsbFNlc3Npb25zKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL29uZGV3by5ubHUuU2Vzc2lvbnMvTGlzdFBsYXRmb3Jtc09mQWxsU2Vzc2lvbnNcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uTGlzdFBsYXRmb3Jtc1Jlc3BvbnNlPlxuICAgKi9cbiAgbGlzdFBsYXRmb3Jtc09mQWxsU2Vzc2lvbnMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5MaXN0UGxhdGZvcm1zT2ZBbGxTZXNzaW9uc1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkxpc3RQbGF0Zm9ybXNSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5saXN0UGxhdGZvcm1zT2ZBbGxTZXNzaW9ucyhyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28ubmx1LlNlc3Npb25zL0xpc3RBY2NvdW50SWRzT2ZBbGxTZXNzaW9uc1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5MaXN0QWNjb3VudElkc1Jlc3BvbnNlPlxuICAgKi9cbiAgbGlzdEFjY291bnRJZHNPZkFsbFNlc3Npb25zKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uTGlzdEFjY291bnRJZHNPZkFsbFNlc3Npb25zUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uTGlzdEFjY291bnRJZHNSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5saXN0QWNjb3VudElkc09mQWxsU2Vzc2lvbnMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5TZXNzaW9ucy9MaXN0UHJvcGVydHlJZHNPZkFsbFNlc3Npb25zXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkxpc3RQcm9wZXJ0eUlkc1Jlc3BvbnNlPlxuICAgKi9cbiAgbGlzdFByb3BlcnR5SWRzT2ZBbGxTZXNzaW9ucyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkxpc3RQcm9wZXJ0eUlkc09mQWxsU2Vzc2lvbnNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5MaXN0UHJvcGVydHlJZHNSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5saXN0UHJvcGVydHlJZHNPZkFsbFNlc3Npb25zKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL29uZGV3by5ubHUuU2Vzc2lvbnMvTGlzdERhdGFzdHJlYW1JZHNPZkFsbFNlc3Npb25zXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkxpc3REYXRhc3RyZWFtSWRzUmVzcG9uc2U+XG4gICAqL1xuICBsaXN0RGF0YXN0cmVhbUlkc09mQWxsU2Vzc2lvbnMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5MaXN0RGF0YXN0cmVhbUlkc09mQWxsU2Vzc2lvbnNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5MaXN0RGF0YXN0cmVhbUlkc1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmxpc3REYXRhc3RyZWFtSWRzT2ZBbGxTZXNzaW9ucyhyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28ubmx1LlNlc3Npb25zL0xpc3RPcmlnaW5JZHNPZkFsbFNlc3Npb25zXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkxpc3RPcmlnaW5JZHNSZXNwb25zZT5cbiAgICovXG4gIGxpc3RPcmlnaW5JZHNPZkFsbFNlc3Npb25zKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uTGlzdE9yaWdpbklkc09mQWxsU2Vzc2lvbnNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5MaXN0T3JpZ2luSWRzUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAubGlzdE9yaWdpbklkc09mQWxsU2Vzc2lvbnMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5TZXNzaW9ucy9BZGRTZXNzaW9uTGFiZWxzXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLlNlc3Npb24+XG4gICAqL1xuICBhZGRTZXNzaW9uTGFiZWxzKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQWRkU2Vzc2lvbkxhYmVsc1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLlNlc3Npb24+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuYWRkU2Vzc2lvbkxhYmVscyhyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28ubmx1LlNlc3Npb25zL0RlbGV0ZVNlc3Npb25MYWJlbHNcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uU2Vzc2lvbj5cbiAgICovXG4gIGRlbGV0ZVNlc3Npb25MYWJlbHMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5EZWxldGVTZXNzaW9uTGFiZWxzUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uU2Vzc2lvbj4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5kZWxldGVTZXNzaW9uTGFiZWxzKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL29uZGV3by5ubHUuU2Vzc2lvbnMvTGlzdFNlc3Npb25SZXZpZXdzXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkxpc3RTZXNzaW9uUmV2aWV3c1Jlc3BvbnNlPlxuICAgKi9cbiAgbGlzdFNlc3Npb25SZXZpZXdzKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uTGlzdFNlc3Npb25SZXZpZXdzUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uTGlzdFNlc3Npb25SZXZpZXdzUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAubGlzdFNlc3Npb25SZXZpZXdzKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL29uZGV3by5ubHUuU2Vzc2lvbnMvR2V0U2Vzc2lvblJldmlld1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5TZXNzaW9uUmV2aWV3PlxuICAgKi9cbiAgZ2V0U2Vzc2lvblJldmlldyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldFNlc3Npb25SZXZpZXdSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5TZXNzaW9uUmV2aWV3PiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmdldFNlc3Npb25SZXZpZXcocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5TZXNzaW9ucy9HZXRMYXRlc3RTZXNzaW9uUmV2aWV3XG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLlNlc3Npb25SZXZpZXc+XG4gICAqL1xuICBnZXRMYXRlc3RTZXNzaW9uUmV2aWV3KFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0TGF0ZXN0U2Vzc2lvblJldmlld1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLlNlc3Npb25SZXZpZXc+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuZ2V0TGF0ZXN0U2Vzc2lvblJldmlldyhyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28ubmx1LlNlc3Npb25zL0NyZWF0ZVNlc3Npb25SZXZpZXdcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uU2Vzc2lvblJldmlldz5cbiAgICovXG4gIGNyZWF0ZVNlc3Npb25SZXZpZXcoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5DcmVhdGVTZXNzaW9uUmV2aWV3UmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uU2Vzc2lvblJldmlldz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5jcmVhdGVTZXNzaW9uUmV2aWV3KHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cbn1cbiJdfQ==
