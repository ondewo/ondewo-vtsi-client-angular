/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import { GrpcCallType, GrpcMetadata } from '@ngx-grpc/common';
import { GRPC_CLIENT_FACTORY, takeMessages, throwStatusErrors } from '@ngx-grpc/core';
import * as thisProto from './intent.pb';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as ondewoNlu011 from '../../ondewo/nlu/operations.pb';
import { GRPC_INTENTS_CLIENT_SETTINGS } from './intent.pbconf';
import * as i0 from '@angular/core';
import * as i1 from '@ngx-grpc/core';
/**
 * Service client implementation for ondewo.nlu.Intents
 */
class IntentsClient {
	handler;
	client;
	/**
	 * Raw RPC implementation for each service client method.
	 * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
	 * Attention: these methods do not throw errors when non-zero status codes are received.
	 */
	$raw = {
		/**
		 * Unary call: /ondewo.nlu.Intents/ListIntents
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ListIntentsResponse>>
		 */
		listIntents: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Intents/ListIntents',
				requestData,
				requestMetadata,
				requestClass: thisProto.ListIntentsRequest,
				responseClass: thisProto.ListIntentsResponse
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Intents/GetIntent
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.Intent>>
		 */
		getIntent: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Intents/GetIntent',
				requestData,
				requestMetadata,
				requestClass: thisProto.GetIntentRequest,
				responseClass: thisProto.Intent
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Intents/CreateIntent
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.Intent>>
		 */
		createIntent: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Intents/CreateIntent',
				requestData,
				requestMetadata,
				requestClass: thisProto.CreateIntentRequest,
				responseClass: thisProto.Intent
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Intents/UpdateIntent
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.Intent>>
		 */
		updateIntent: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Intents/UpdateIntent',
				requestData,
				requestMetadata,
				requestClass: thisProto.UpdateIntentRequest,
				responseClass: thisProto.Intent
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Intents/DeleteIntent
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
		 */
		deleteIntent: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Intents/DeleteIntent',
				requestData,
				requestMetadata,
				requestClass: thisProto.DeleteIntentRequest,
				responseClass: googleProtobuf003.Empty
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Intents/BatchUpdateIntents
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<ondewoNlu011.Operation>>
		 */
		batchUpdateIntents: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Intents/BatchUpdateIntents',
				requestData,
				requestMetadata,
				requestClass: thisProto.BatchUpdateIntentsRequest,
				responseClass: ondewoNlu011.Operation
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Intents/BatchDeleteIntents
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<ondewoNlu011.Operation>>
		 */
		batchDeleteIntents: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Intents/BatchDeleteIntents',
				requestData,
				requestMetadata,
				requestClass: thisProto.BatchDeleteIntentsRequest,
				responseClass: ondewoNlu011.Operation
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Intents/TagIntent
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
		 */
		tagIntent: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Intents/TagIntent',
				requestData,
				requestMetadata,
				requestClass: thisProto.IntentTagRequest,
				responseClass: googleProtobuf003.Empty
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Intents/DeleteIntentTag
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
		 */
		deleteIntentTag: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Intents/DeleteIntentTag',
				requestData,
				requestMetadata,
				requestClass: thisProto.IntentTagRequest,
				responseClass: googleProtobuf003.Empty
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Intents/GetIntentTags
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.GetIntentTagsResponse>>
		 */
		getIntentTags: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Intents/GetIntentTags',
				requestData,
				requestMetadata,
				requestClass: thisProto.GetIntentTagsRequest,
				responseClass: thisProto.GetIntentTagsResponse
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Intents/GetAllIntentTags
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.GetIntentTagsResponse>>
		 */
		getAllIntentTags: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Intents/GetAllIntentTags',
				requestData,
				requestMetadata,
				requestClass: thisProto.GetAllIntentTagsRequest,
				responseClass: thisProto.GetIntentTagsResponse
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Intents/BatchCreateTrainingPhrases
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.BatchTrainingPhrasesStatusResponse>>
		 */
		batchCreateTrainingPhrases: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Intents/BatchCreateTrainingPhrases',
				requestData,
				requestMetadata,
				requestClass: thisProto.BatchCreateTrainingPhrasesRequest,
				responseClass: thisProto.BatchTrainingPhrasesStatusResponse
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Intents/BatchGetTrainingPhrases
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.BatchTrainingPhrasesStatusResponse>>
		 */
		batchGetTrainingPhrases: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Intents/BatchGetTrainingPhrases',
				requestData,
				requestMetadata,
				requestClass: thisProto.BatchGetTrainingPhrasesRequest,
				responseClass: thisProto.BatchTrainingPhrasesStatusResponse
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Intents/BatchUpdateTrainingPhrases
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.BatchTrainingPhrasesStatusResponse>>
		 */
		batchUpdateTrainingPhrases: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Intents/BatchUpdateTrainingPhrases',
				requestData,
				requestMetadata,
				requestClass: thisProto.BatchUpdateTrainingPhrasesRequest,
				responseClass: thisProto.BatchTrainingPhrasesStatusResponse
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Intents/BatchDeleteTrainingPhrases
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.BatchDeleteTrainingPhrasesResponse>>
		 */
		batchDeleteTrainingPhrases: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Intents/BatchDeleteTrainingPhrases',
				requestData,
				requestMetadata,
				requestClass: thisProto.BatchDeleteTrainingPhrasesRequest,
				responseClass: thisProto.BatchDeleteTrainingPhrasesResponse
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Intents/ListTrainingPhrases
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ListTrainingPhrasesResponse>>
		 */
		listTrainingPhrases: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Intents/ListTrainingPhrases',
				requestData,
				requestMetadata,
				requestClass: thisProto.ListTrainingPhrasesRequest,
				responseClass: thisProto.ListTrainingPhrasesResponse
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Intents/BatchCreateResponseMessages
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.BatchResponseMessagesStatusResponse>>
		 */
		batchCreateResponseMessages: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Intents/BatchCreateResponseMessages',
				requestData,
				requestMetadata,
				requestClass: thisProto.BatchCreateResponseMessagesRequest,
				responseClass: thisProto.BatchResponseMessagesStatusResponse
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Intents/BatchGetResponseMessages
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.BatchResponseMessagesStatusResponse>>
		 */
		batchGetResponseMessages: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Intents/BatchGetResponseMessages',
				requestData,
				requestMetadata,
				requestClass: thisProto.BatchGetResponseMessagesRequest,
				responseClass: thisProto.BatchResponseMessagesStatusResponse
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Intents/BatchUpdateResponseMessages
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.BatchResponseMessagesStatusResponse>>
		 */
		batchUpdateResponseMessages: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Intents/BatchUpdateResponseMessages',
				requestData,
				requestMetadata,
				requestClass: thisProto.BatchUpdateResponseMessagesRequest,
				responseClass: thisProto.BatchResponseMessagesStatusResponse
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Intents/BatchDeleteResponseMessages
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.BatchDeleteResponseMessagesResponse>>
		 */
		batchDeleteResponseMessages: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Intents/BatchDeleteResponseMessages',
				requestData,
				requestMetadata,
				requestClass: thisProto.BatchDeleteResponseMessagesRequest,
				responseClass: thisProto.BatchDeleteResponseMessagesResponse
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Intents/ListResponseMessages
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ListResponseMessagesResponse>>
		 */
		listResponseMessages: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Intents/ListResponseMessages',
				requestData,
				requestMetadata,
				requestClass: thisProto.ListResponseMessagesRequest,
				responseClass: thisProto.ListResponseMessagesResponse
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Intents/BatchCreateParameters
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.BatchParametersStatusResponse>>
		 */
		batchCreateParameters: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Intents/BatchCreateParameters',
				requestData,
				requestMetadata,
				requestClass: thisProto.BatchCreateParametersRequest,
				responseClass: thisProto.BatchParametersStatusResponse
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Intents/BatchGetParameters
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.BatchParametersStatusResponse>>
		 */
		batchGetParameters: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Intents/BatchGetParameters',
				requestData,
				requestMetadata,
				requestClass: thisProto.BatchGetParametersRequest,
				responseClass: thisProto.BatchParametersStatusResponse
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Intents/BatchUpdateParameters
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.BatchParametersStatusResponse>>
		 */
		batchUpdateParameters: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Intents/BatchUpdateParameters',
				requestData,
				requestMetadata,
				requestClass: thisProto.BatchUpdateParametersRequest,
				responseClass: thisProto.BatchParametersStatusResponse
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Intents/BatchDeleteParameters
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.BatchDeleteParametersResponse>>
		 */
		batchDeleteParameters: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Intents/BatchDeleteParameters',
				requestData,
				requestMetadata,
				requestClass: thisProto.BatchDeleteParametersRequest,
				responseClass: thisProto.BatchDeleteParametersResponse
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Intents/ListParameters
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ListParametersResponse>>
		 */
		listParameters: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Intents/ListParameters',
				requestData,
				requestMetadata,
				requestClass: thisProto.ListParametersRequest,
				responseClass: thisProto.ListParametersResponse
			});
		},
		/**
		 * Unary call: /ondewo.nlu.Intents/ListTrainingPhrasesofIntentsWithEnrichment
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ListTrainingPhrasesofIntentsWithEnrichmentResponse>>
		 */
		listTrainingPhrasesofIntentsWithEnrichment: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.Intents/ListTrainingPhrasesofIntentsWithEnrichment',
				requestData,
				requestMetadata,
				requestClass: thisProto.ListTrainingPhrasesofIntentsWithEnrichmentRequest,
				responseClass: thisProto.ListTrainingPhrasesofIntentsWithEnrichmentResponse
			});
		}
	};
	constructor(settings, clientFactory, handler) {
		this.handler = handler;
		this.client = clientFactory.createClient('ondewo.nlu.Intents', settings);
	}
	/**
	 * Unary call @/ondewo.nlu.Intents/ListIntents
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ListIntentsResponse>
	 */
	listIntents(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.listIntents(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Intents/GetIntent
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.Intent>
	 */
	getIntent(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.getIntent(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Intents/CreateIntent
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.Intent>
	 */
	createIntent(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.createIntent(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Intents/UpdateIntent
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.Intent>
	 */
	updateIntent(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.updateIntent(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Intents/DeleteIntent
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<googleProtobuf003.Empty>
	 */
	deleteIntent(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.deleteIntent(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Intents/BatchUpdateIntents
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<ondewoNlu011.Operation>
	 */
	batchUpdateIntents(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.batchUpdateIntents(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Intents/BatchDeleteIntents
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<ondewoNlu011.Operation>
	 */
	batchDeleteIntents(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.batchDeleteIntents(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Intents/TagIntent
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<googleProtobuf003.Empty>
	 */
	tagIntent(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.tagIntent(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Intents/DeleteIntentTag
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<googleProtobuf003.Empty>
	 */
	deleteIntentTag(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.deleteIntentTag(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Intents/GetIntentTags
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.GetIntentTagsResponse>
	 */
	getIntentTags(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.getIntentTags(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Intents/GetAllIntentTags
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.GetIntentTagsResponse>
	 */
	getAllIntentTags(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.getAllIntentTags(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Intents/BatchCreateTrainingPhrases
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.BatchTrainingPhrasesStatusResponse>
	 */
	batchCreateTrainingPhrases(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.batchCreateTrainingPhrases(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Intents/BatchGetTrainingPhrases
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.BatchTrainingPhrasesStatusResponse>
	 */
	batchGetTrainingPhrases(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.batchGetTrainingPhrases(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Intents/BatchUpdateTrainingPhrases
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.BatchTrainingPhrasesStatusResponse>
	 */
	batchUpdateTrainingPhrases(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.batchUpdateTrainingPhrases(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Intents/BatchDeleteTrainingPhrases
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.BatchDeleteTrainingPhrasesResponse>
	 */
	batchDeleteTrainingPhrases(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.batchDeleteTrainingPhrases(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Intents/ListTrainingPhrases
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ListTrainingPhrasesResponse>
	 */
	listTrainingPhrases(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.listTrainingPhrases(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Intents/BatchCreateResponseMessages
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.BatchResponseMessagesStatusResponse>
	 */
	batchCreateResponseMessages(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw
			.batchCreateResponseMessages(requestData, requestMetadata)
			.pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Intents/BatchGetResponseMessages
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.BatchResponseMessagesStatusResponse>
	 */
	batchGetResponseMessages(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.batchGetResponseMessages(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Intents/BatchUpdateResponseMessages
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.BatchResponseMessagesStatusResponse>
	 */
	batchUpdateResponseMessages(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw
			.batchUpdateResponseMessages(requestData, requestMetadata)
			.pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Intents/BatchDeleteResponseMessages
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.BatchDeleteResponseMessagesResponse>
	 */
	batchDeleteResponseMessages(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw
			.batchDeleteResponseMessages(requestData, requestMetadata)
			.pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Intents/ListResponseMessages
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ListResponseMessagesResponse>
	 */
	listResponseMessages(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.listResponseMessages(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Intents/BatchCreateParameters
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.BatchParametersStatusResponse>
	 */
	batchCreateParameters(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.batchCreateParameters(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Intents/BatchGetParameters
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.BatchParametersStatusResponse>
	 */
	batchGetParameters(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.batchGetParameters(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Intents/BatchUpdateParameters
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.BatchParametersStatusResponse>
	 */
	batchUpdateParameters(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.batchUpdateParameters(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Intents/BatchDeleteParameters
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.BatchDeleteParametersResponse>
	 */
	batchDeleteParameters(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.batchDeleteParameters(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Intents/ListParameters
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ListParametersResponse>
	 */
	listParameters(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.listParameters(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.Intents/ListTrainingPhrasesofIntentsWithEnrichment
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ListTrainingPhrasesofIntentsWithEnrichmentResponse>
	 */
	listTrainingPhrasesofIntentsWithEnrichment(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw
			.listTrainingPhrasesofIntentsWithEnrichment(requestData, requestMetadata)
			.pipe(throwStatusErrors(), takeMessages());
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: '12.0.0',
		version: '16.0.2',
		ngImport: i0,
		type: IntentsClient,
		deps: [
			{ token: GRPC_INTENTS_CLIENT_SETTINGS, optional: true },
			{ token: GRPC_CLIENT_FACTORY },
			{ token: i1.GrpcHandler }
		],
		target: i0.ɵɵFactoryTarget.Injectable
	});
	static ɵprov = i0.ɵɵngDeclareInjectable({
		minVersion: '12.0.0',
		version: '16.0.2',
		ngImport: i0,
		type: IntentsClient,
		providedIn: 'any'
	});
}
export { IntentsClient };
i0.ɵɵngDeclareClassMetadata({
	minVersion: '12.0.0',
	version: '16.0.2',
	ngImport: i0,
	type: IntentsClient,
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
						args: [GRPC_INTENTS_CLIENT_SETTINGS]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZW50LnBic2MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvb25kZXdvL25sdS9pbnRlbnQucGJzYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLGNBQWM7QUFDZCxFQUFFO0FBQ0YsMkJBQTJCO0FBQzNCLDhDQUE4QztBQUM5QyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUNMLFlBQVksRUFJWixZQUFZLEVBQ2IsTUFBTSxrQkFBa0IsQ0FBQztBQUMxQixPQUFPLEVBQ0wsbUJBQW1CLEVBRW5CLFlBQVksRUFDWixpQkFBaUIsRUFDbEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEtBQUssU0FBUyxNQUFNLGFBQWEsQ0FBQztBQUl6QyxPQUFPLEtBQUssaUJBQWlCLE1BQU0sNEJBQTRCLENBQUM7QUFRaEUsT0FBTyxLQUFLLFlBQVksTUFBTSxnQ0FBZ0MsQ0FBQztBQUUvRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBQy9EOztHQUVHO0FBQ0gsTUFDYSxhQUFhO0lBeWtCZDtJQXhrQkYsTUFBTSxDQUFrQjtJQUVoQzs7OztPQUlHO0lBQ0gsSUFBSSxHQUFHO1FBQ0w7Ozs7OztXQU1HO1FBQ0gsV0FBVyxFQUFFLENBQ1gsV0FBeUMsRUFDekMsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFLEVBQ2tCLEVBQUU7WUFDeEQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztnQkFDekIsSUFBSSxFQUFFLFlBQVksQ0FBQyxLQUFLO2dCQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ25CLElBQUksRUFBRSxpQ0FBaUM7Z0JBQ3ZDLFdBQVc7Z0JBQ1gsZUFBZTtnQkFDZixZQUFZLEVBQUUsU0FBUyxDQUFDLGtCQUFrQjtn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QixXQUFtRCxFQUNuRCxlQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUU7UUFFcEMsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUM7YUFDbkQsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsY0FBYyxDQUNaLFdBQTRDLEVBQzVDLGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBRTtRQUVwQyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsY0FBYyxDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUM7YUFDNUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsMENBQTBDLENBQ3hDLFdBQXdFLEVBQ3hFLGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBRTtRQUVwQyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsMENBQTBDLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQzthQUN4RSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7dUdBNS9CVSxhQUFhLGtCQXVrQkYsNEJBQTRCLDZCQUN4QyxtQkFBbUI7MkdBeGtCbEIsYUFBYSxjQURBLEtBQUs7O1NBQ2xCLGFBQWE7MkZBQWIsYUFBYTtrQkFEekIsVUFBVTttQkFBQyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUU7OzBCQXdrQjVCLFFBQVE7OzBCQUFJLE1BQU07MkJBQUMsNEJBQTRCOzswQkFDL0MsTUFBTTsyQkFBQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIEB0cy1ub2NoZWNrXG4vL1xuLy8gVEhJUyBJUyBBIEdFTkVSQVRFRCBGSUxFXG4vLyBETyBOT1QgTU9ESUZZIElUISBZT1VSIENIQU5HRVMgV0lMTCBCRSBMT1NUXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBHcnBjQ2FsbFR5cGUsXG4gIEdycGNDbGllbnQsXG4gIEdycGNDbGllbnRGYWN0b3J5LFxuICBHcnBjRXZlbnQsXG4gIEdycGNNZXRhZGF0YVxufSBmcm9tICdAbmd4LWdycGMvY29tbW9uJztcbmltcG9ydCB7XG4gIEdSUENfQ0xJRU5UX0ZBQ1RPUlksXG4gIEdycGNIYW5kbGVyLFxuICB0YWtlTWVzc2FnZXMsXG4gIHRocm93U3RhdHVzRXJyb3JzXG59IGZyb20gJ0BuZ3gtZ3JwYy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCAqIGFzIHRoaXNQcm90byBmcm9tICcuL2ludGVudC5wYic7XG5pbXBvcnQgKiBhcyBnb29nbGVBcGkwMDAgZnJvbSAnLi4vLi4vZ29vZ2xlL2FwaS9odHRwLnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDAxIGZyb20gJ0BuZ3gtZ3JwYy93ZWxsLWtub3duLXR5cGVzJztcbmltcG9ydCAqIGFzIGdvb2dsZUFwaTAwMiBmcm9tICcuLi8uLi9nb29nbGUvYXBpL2Fubm90YXRpb25zLnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDAzIGZyb20gJ0BuZ3gtZ3JwYy93ZWxsLWtub3duLXR5cGVzJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDA0IGZyb20gJ0BuZ3gtZ3JwYy93ZWxsLWtub3duLXR5cGVzJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDA1IGZyb20gJ0BuZ3gtZ3JwYy93ZWxsLWtub3duLXR5cGVzJztcbmltcG9ydCAqIGFzIGdvb2dsZVJwYzAwNiBmcm9tICcuLi8uLi9nb29nbGUvcnBjL3N0YXR1cy5wYic7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwNyBmcm9tICdAbmd4LWdycGMvd2VsbC1rbm93bi10eXBlcyc7XG5pbXBvcnQgKiBhcyBvbmRld29ObHUwMDggZnJvbSAnLi4vLi4vb25kZXdvL25sdS9vcGVyYXRpb24tbWV0YWRhdGEucGInO1xuaW1wb3J0ICogYXMgb25kZXdvTmx1MDA5IGZyb20gJy4uLy4uL29uZGV3by9ubHUvY29udGV4dC5wYic7XG5pbXBvcnQgKiBhcyBvbmRld29ObHUwMTAgZnJvbSAnLi4vLi4vb25kZXdvL25sdS9jb21tb24ucGInO1xuaW1wb3J0ICogYXMgb25kZXdvTmx1MDExIGZyb20gJy4uLy4uL29uZGV3by9ubHUvb3BlcmF0aW9ucy5wYic7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAxMiBmcm9tICdAbmd4LWdycGMvd2VsbC1rbm93bi10eXBlcyc7XG5pbXBvcnQgeyBHUlBDX0lOVEVOVFNfQ0xJRU5UX1NFVFRJTkdTIH0gZnJvbSAnLi9pbnRlbnQucGJjb25mJztcbi8qKlxuICogU2VydmljZSBjbGllbnQgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuSW50ZW50c1xuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdhbnknIH0pXG5leHBvcnQgY2xhc3MgSW50ZW50c0NsaWVudCB7XG4gIHByaXZhdGUgY2xpZW50OiBHcnBjQ2xpZW50PGFueT47XG5cbiAgLyoqXG4gICAqIFJhdyBSUEMgaW1wbGVtZW50YXRpb24gZm9yIGVhY2ggc2VydmljZSBjbGllbnQgbWV0aG9kLlxuICAgKiBUaGUgcmF3IG1ldGhvZHMgcHJvdmlkZSBtb3JlIGNvbnRyb2wgb24gdGhlIGluY29taW5nIGRhdGEgYW5kIGV2ZW50cy4gRS5nLiB0aGV5IGNhbiBiZSB1c2VmdWwgdG8gcmVhZCBzdGF0dXMgYE9LYCBtZXRhZGF0YS5cbiAgICogQXR0ZW50aW9uOiB0aGVzZSBtZXRob2RzIGRvIG5vdCB0aHJvdyBlcnJvcnMgd2hlbiBub24temVybyBzdGF0dXMgY29kZXMgYXJlIHJlY2VpdmVkLlxuICAgKi9cbiAgJHJhdyA9IHtcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5JbnRlbnRzL0xpc3RJbnRlbnRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkxpc3RJbnRlbnRzUmVzcG9uc2U+PlxuICAgICAqL1xuICAgIGxpc3RJbnRlbnRzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkxpc3RJbnRlbnRzUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5MaXN0SW50ZW50c1Jlc3BvbnNlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5JbnRlbnRzL0xpc3RJbnRlbnRzJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uTGlzdEludGVudHNSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uTGlzdEludGVudHNSZXNwb25zZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5JbnRlbnRzL0dldEludGVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5JbnRlbnQ+PlxuICAgICAqL1xuICAgIGdldEludGVudDogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRJbnRlbnRSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkludGVudD4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuSW50ZW50cy9HZXRJbnRlbnQnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5HZXRJbnRlbnRSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uSW50ZW50XG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LkludGVudHMvQ3JlYXRlSW50ZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkludGVudD4+XG4gICAgICovXG4gICAgY3JlYXRlSW50ZW50OiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkNyZWF0ZUludGVudFJlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uSW50ZW50Pj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5JbnRlbnRzL0NyZWF0ZUludGVudCcsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkNyZWF0ZUludGVudFJlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5JbnRlbnRcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL29uZGV3by5ubHUuSW50ZW50cy9VcGRhdGVJbnRlbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uSW50ZW50Pj5cbiAgICAgKi9cbiAgICB1cGRhdGVJbnRlbnQ6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uVXBkYXRlSW50ZW50UmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5JbnRlbnQ+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28ubmx1LkludGVudHMvVXBkYXRlSW50ZW50JyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uVXBkYXRlSW50ZW50UmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkludGVudFxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5JbnRlbnRzL0RlbGV0ZUludGVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PGdvb2dsZVByb3RvYnVmMDAzLkVtcHR5Pj5cbiAgICAgKi9cbiAgICBkZWxldGVJbnRlbnQ6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uRGVsZXRlSW50ZW50UmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PGdvb2dsZVByb3RvYnVmMDAzLkVtcHR5Pj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5JbnRlbnRzL0RlbGV0ZUludGVudCcsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkRlbGV0ZUludGVudFJlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IGdvb2dsZVByb3RvYnVmMDAzLkVtcHR5XG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LkludGVudHMvQmF0Y2hVcGRhdGVJbnRlbnRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8b25kZXdvTmx1MDExLk9wZXJhdGlvbj4+XG4gICAgICovXG4gICAgYmF0Y2hVcGRhdGVJbnRlbnRzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkJhdGNoVXBkYXRlSW50ZW50c1JlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDxvbmRld29ObHUwMTEuT3BlcmF0aW9uPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5JbnRlbnRzL0JhdGNoVXBkYXRlSW50ZW50cycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkJhdGNoVXBkYXRlSW50ZW50c1JlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IG9uZGV3b05sdTAxMS5PcGVyYXRpb25cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL29uZGV3by5ubHUuSW50ZW50cy9CYXRjaERlbGV0ZUludGVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDxvbmRld29ObHUwMTEuT3BlcmF0aW9uPj5cbiAgICAgKi9cbiAgICBiYXRjaERlbGV0ZUludGVudHM6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQmF0Y2hEZWxldGVJbnRlbnRzUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PG9uZGV3b05sdTAxMS5PcGVyYXRpb24+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28ubmx1LkludGVudHMvQmF0Y2hEZWxldGVJbnRlbnRzJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uQmF0Y2hEZWxldGVJbnRlbnRzUmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogb25kZXdvTmx1MDExLk9wZXJhdGlvblxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5JbnRlbnRzL1RhZ0ludGVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PGdvb2dsZVByb3RvYnVmMDAzLkVtcHR5Pj5cbiAgICAgKi9cbiAgICB0YWdJbnRlbnQ6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uSW50ZW50VGFnUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PGdvb2dsZVByb3RvYnVmMDAzLkVtcHR5Pj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5JbnRlbnRzL1RhZ0ludGVudCcsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkludGVudFRhZ1JlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IGdvb2dsZVByb3RvYnVmMDAzLkVtcHR5XG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LkludGVudHMvRGVsZXRlSW50ZW50VGFnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8Z29vZ2xlUHJvdG9idWYwMDMuRW1wdHk+PlxuICAgICAqL1xuICAgIGRlbGV0ZUludGVudFRhZzogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5JbnRlbnRUYWdSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8Z29vZ2xlUHJvdG9idWYwMDMuRW1wdHk+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28ubmx1LkludGVudHMvRGVsZXRlSW50ZW50VGFnJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uSW50ZW50VGFnUmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogZ29vZ2xlUHJvdG9idWYwMDMuRW1wdHlcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL29uZGV3by5ubHUuSW50ZW50cy9HZXRJbnRlbnRUYWdzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkdldEludGVudFRhZ3NSZXNwb25zZT4+XG4gICAgICovXG4gICAgZ2V0SW50ZW50VGFnczogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRJbnRlbnRUYWdzUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5HZXRJbnRlbnRUYWdzUmVzcG9uc2U+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28ubmx1LkludGVudHMvR2V0SW50ZW50VGFncycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkdldEludGVudFRhZ3NSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uR2V0SW50ZW50VGFnc1Jlc3BvbnNlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LkludGVudHMvR2V0QWxsSW50ZW50VGFnc1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5HZXRJbnRlbnRUYWdzUmVzcG9uc2U+PlxuICAgICAqL1xuICAgIGdldEFsbEludGVudFRhZ3M6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0QWxsSW50ZW50VGFnc1JlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uR2V0SW50ZW50VGFnc1Jlc3BvbnNlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5JbnRlbnRzL0dldEFsbEludGVudFRhZ3MnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5HZXRBbGxJbnRlbnRUYWdzUmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkdldEludGVudFRhZ3NSZXNwb25zZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5JbnRlbnRzL0JhdGNoQ3JlYXRlVHJhaW5pbmdQaHJhc2VzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkJhdGNoVHJhaW5pbmdQaHJhc2VzU3RhdHVzUmVzcG9uc2U+PlxuICAgICAqL1xuICAgIGJhdGNoQ3JlYXRlVHJhaW5pbmdQaHJhc2VzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkJhdGNoQ3JlYXRlVHJhaW5pbmdQaHJhc2VzUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5CYXRjaFRyYWluaW5nUGhyYXNlc1N0YXR1c1Jlc3BvbnNlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5JbnRlbnRzL0JhdGNoQ3JlYXRlVHJhaW5pbmdQaHJhc2VzJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uQmF0Y2hDcmVhdGVUcmFpbmluZ1BocmFzZXNSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uQmF0Y2hUcmFpbmluZ1BocmFzZXNTdGF0dXNSZXNwb25zZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5JbnRlbnRzL0JhdGNoR2V0VHJhaW5pbmdQaHJhc2VzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkJhdGNoVHJhaW5pbmdQaHJhc2VzU3RhdHVzUmVzcG9uc2U+PlxuICAgICAqL1xuICAgIGJhdGNoR2V0VHJhaW5pbmdQaHJhc2VzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkJhdGNoR2V0VHJhaW5pbmdQaHJhc2VzUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5CYXRjaFRyYWluaW5nUGhyYXNlc1N0YXR1c1Jlc3BvbnNlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5JbnRlbnRzL0JhdGNoR2V0VHJhaW5pbmdQaHJhc2VzJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uQmF0Y2hHZXRUcmFpbmluZ1BocmFzZXNSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uQmF0Y2hUcmFpbmluZ1BocmFzZXNTdGF0dXNSZXNwb25zZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5JbnRlbnRzL0JhdGNoVXBkYXRlVHJhaW5pbmdQaHJhc2VzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkJhdGNoVHJhaW5pbmdQaHJhc2VzU3RhdHVzUmVzcG9uc2U+PlxuICAgICAqL1xuICAgIGJhdGNoVXBkYXRlVHJhaW5pbmdQaHJhc2VzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkJhdGNoVXBkYXRlVHJhaW5pbmdQaHJhc2VzUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5CYXRjaFRyYWluaW5nUGhyYXNlc1N0YXR1c1Jlc3BvbnNlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5JbnRlbnRzL0JhdGNoVXBkYXRlVHJhaW5pbmdQaHJhc2VzJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uQmF0Y2hVcGRhdGVUcmFpbmluZ1BocmFzZXNSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uQmF0Y2hUcmFpbmluZ1BocmFzZXNTdGF0dXNSZXNwb25zZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5JbnRlbnRzL0JhdGNoRGVsZXRlVHJhaW5pbmdQaHJhc2VzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkJhdGNoRGVsZXRlVHJhaW5pbmdQaHJhc2VzUmVzcG9uc2U+PlxuICAgICAqL1xuICAgIGJhdGNoRGVsZXRlVHJhaW5pbmdQaHJhc2VzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkJhdGNoRGVsZXRlVHJhaW5pbmdQaHJhc2VzUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5CYXRjaERlbGV0ZVRyYWluaW5nUGhyYXNlc1Jlc3BvbnNlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5JbnRlbnRzL0JhdGNoRGVsZXRlVHJhaW5pbmdQaHJhc2VzJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uQmF0Y2hEZWxldGVUcmFpbmluZ1BocmFzZXNSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uQmF0Y2hEZWxldGVUcmFpbmluZ1BocmFzZXNSZXNwb25zZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5JbnRlbnRzL0xpc3RUcmFpbmluZ1BocmFzZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uTGlzdFRyYWluaW5nUGhyYXNlc1Jlc3BvbnNlPj5cbiAgICAgKi9cbiAgICBsaXN0VHJhaW5pbmdQaHJhc2VzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkxpc3RUcmFpbmluZ1BocmFzZXNSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkxpc3RUcmFpbmluZ1BocmFzZXNSZXNwb25zZT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuSW50ZW50cy9MaXN0VHJhaW5pbmdQaHJhc2VzJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uTGlzdFRyYWluaW5nUGhyYXNlc1JlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5MaXN0VHJhaW5pbmdQaHJhc2VzUmVzcG9uc2VcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL29uZGV3by5ubHUuSW50ZW50cy9CYXRjaENyZWF0ZVJlc3BvbnNlTWVzc2FnZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uQmF0Y2hSZXNwb25zZU1lc3NhZ2VzU3RhdHVzUmVzcG9uc2U+PlxuICAgICAqL1xuICAgIGJhdGNoQ3JlYXRlUmVzcG9uc2VNZXNzYWdlczogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5CYXRjaENyZWF0ZVJlc3BvbnNlTWVzc2FnZXNSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkJhdGNoUmVzcG9uc2VNZXNzYWdlc1N0YXR1c1Jlc3BvbnNlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5JbnRlbnRzL0JhdGNoQ3JlYXRlUmVzcG9uc2VNZXNzYWdlcycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkJhdGNoQ3JlYXRlUmVzcG9uc2VNZXNzYWdlc1JlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5CYXRjaFJlc3BvbnNlTWVzc2FnZXNTdGF0dXNSZXNwb25zZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5JbnRlbnRzL0JhdGNoR2V0UmVzcG9uc2VNZXNzYWdlc1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5CYXRjaFJlc3BvbnNlTWVzc2FnZXNTdGF0dXNSZXNwb25zZT4+XG4gICAgICovXG4gICAgYmF0Y2hHZXRSZXNwb25zZU1lc3NhZ2VzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkJhdGNoR2V0UmVzcG9uc2VNZXNzYWdlc1JlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uQmF0Y2hSZXNwb25zZU1lc3NhZ2VzU3RhdHVzUmVzcG9uc2U+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28ubmx1LkludGVudHMvQmF0Y2hHZXRSZXNwb25zZU1lc3NhZ2VzJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uQmF0Y2hHZXRSZXNwb25zZU1lc3NhZ2VzUmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkJhdGNoUmVzcG9uc2VNZXNzYWdlc1N0YXR1c1Jlc3BvbnNlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LkludGVudHMvQmF0Y2hVcGRhdGVSZXNwb25zZU1lc3NhZ2VzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkJhdGNoUmVzcG9uc2VNZXNzYWdlc1N0YXR1c1Jlc3BvbnNlPj5cbiAgICAgKi9cbiAgICBiYXRjaFVwZGF0ZVJlc3BvbnNlTWVzc2FnZXM6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQmF0Y2hVcGRhdGVSZXNwb25zZU1lc3NhZ2VzUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5CYXRjaFJlc3BvbnNlTWVzc2FnZXNTdGF0dXNSZXNwb25zZT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuSW50ZW50cy9CYXRjaFVwZGF0ZVJlc3BvbnNlTWVzc2FnZXMnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5CYXRjaFVwZGF0ZVJlc3BvbnNlTWVzc2FnZXNSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uQmF0Y2hSZXNwb25zZU1lc3NhZ2VzU3RhdHVzUmVzcG9uc2VcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL29uZGV3by5ubHUuSW50ZW50cy9CYXRjaERlbGV0ZVJlc3BvbnNlTWVzc2FnZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uQmF0Y2hEZWxldGVSZXNwb25zZU1lc3NhZ2VzUmVzcG9uc2U+PlxuICAgICAqL1xuICAgIGJhdGNoRGVsZXRlUmVzcG9uc2VNZXNzYWdlczogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5CYXRjaERlbGV0ZVJlc3BvbnNlTWVzc2FnZXNSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkJhdGNoRGVsZXRlUmVzcG9uc2VNZXNzYWdlc1Jlc3BvbnNlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5JbnRlbnRzL0JhdGNoRGVsZXRlUmVzcG9uc2VNZXNzYWdlcycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkJhdGNoRGVsZXRlUmVzcG9uc2VNZXNzYWdlc1JlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5CYXRjaERlbGV0ZVJlc3BvbnNlTWVzc2FnZXNSZXNwb25zZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5JbnRlbnRzL0xpc3RSZXNwb25zZU1lc3NhZ2VzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkxpc3RSZXNwb25zZU1lc3NhZ2VzUmVzcG9uc2U+PlxuICAgICAqL1xuICAgIGxpc3RSZXNwb25zZU1lc3NhZ2VzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkxpc3RSZXNwb25zZU1lc3NhZ2VzUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5MaXN0UmVzcG9uc2VNZXNzYWdlc1Jlc3BvbnNlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5JbnRlbnRzL0xpc3RSZXNwb25zZU1lc3NhZ2VzJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uTGlzdFJlc3BvbnNlTWVzc2FnZXNSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uTGlzdFJlc3BvbnNlTWVzc2FnZXNSZXNwb25zZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5JbnRlbnRzL0JhdGNoQ3JlYXRlUGFyYW1ldGVyc1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5CYXRjaFBhcmFtZXRlcnNTdGF0dXNSZXNwb25zZT4+XG4gICAgICovXG4gICAgYmF0Y2hDcmVhdGVQYXJhbWV0ZXJzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkJhdGNoQ3JlYXRlUGFyYW1ldGVyc1JlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uQmF0Y2hQYXJhbWV0ZXJzU3RhdHVzUmVzcG9uc2U+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28ubmx1LkludGVudHMvQmF0Y2hDcmVhdGVQYXJhbWV0ZXJzJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uQmF0Y2hDcmVhdGVQYXJhbWV0ZXJzUmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkJhdGNoUGFyYW1ldGVyc1N0YXR1c1Jlc3BvbnNlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LkludGVudHMvQmF0Y2hHZXRQYXJhbWV0ZXJzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkJhdGNoUGFyYW1ldGVyc1N0YXR1c1Jlc3BvbnNlPj5cbiAgICAgKi9cbiAgICBiYXRjaEdldFBhcmFtZXRlcnM6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQmF0Y2hHZXRQYXJhbWV0ZXJzUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5CYXRjaFBhcmFtZXRlcnNTdGF0dXNSZXNwb25zZT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuSW50ZW50cy9CYXRjaEdldFBhcmFtZXRlcnMnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5CYXRjaEdldFBhcmFtZXRlcnNSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uQmF0Y2hQYXJhbWV0ZXJzU3RhdHVzUmVzcG9uc2VcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL29uZGV3by5ubHUuSW50ZW50cy9CYXRjaFVwZGF0ZVBhcmFtZXRlcnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uQmF0Y2hQYXJhbWV0ZXJzU3RhdHVzUmVzcG9uc2U+PlxuICAgICAqL1xuICAgIGJhdGNoVXBkYXRlUGFyYW1ldGVyczogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5CYXRjaFVwZGF0ZVBhcmFtZXRlcnNSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkJhdGNoUGFyYW1ldGVyc1N0YXR1c1Jlc3BvbnNlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5JbnRlbnRzL0JhdGNoVXBkYXRlUGFyYW1ldGVycycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkJhdGNoVXBkYXRlUGFyYW1ldGVyc1JlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5CYXRjaFBhcmFtZXRlcnNTdGF0dXNSZXNwb25zZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5JbnRlbnRzL0JhdGNoRGVsZXRlUGFyYW1ldGVyc1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5CYXRjaERlbGV0ZVBhcmFtZXRlcnNSZXNwb25zZT4+XG4gICAgICovXG4gICAgYmF0Y2hEZWxldGVQYXJhbWV0ZXJzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkJhdGNoRGVsZXRlUGFyYW1ldGVyc1JlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uQmF0Y2hEZWxldGVQYXJhbWV0ZXJzUmVzcG9uc2U+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28ubmx1LkludGVudHMvQmF0Y2hEZWxldGVQYXJhbWV0ZXJzJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uQmF0Y2hEZWxldGVQYXJhbWV0ZXJzUmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkJhdGNoRGVsZXRlUGFyYW1ldGVyc1Jlc3BvbnNlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LkludGVudHMvTGlzdFBhcmFtZXRlcnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uTGlzdFBhcmFtZXRlcnNSZXNwb25zZT4+XG4gICAgICovXG4gICAgbGlzdFBhcmFtZXRlcnM6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uTGlzdFBhcmFtZXRlcnNSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkxpc3RQYXJhbWV0ZXJzUmVzcG9uc2U+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28ubmx1LkludGVudHMvTGlzdFBhcmFtZXRlcnMnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5MaXN0UGFyYW1ldGVyc1JlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5MaXN0UGFyYW1ldGVyc1Jlc3BvbnNlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LkludGVudHMvTGlzdFRyYWluaW5nUGhyYXNlc29mSW50ZW50c1dpdGhFbnJpY2htZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkxpc3RUcmFpbmluZ1BocmFzZXNvZkludGVudHNXaXRoRW5yaWNobWVudFJlc3BvbnNlPj5cbiAgICAgKi9cbiAgICBsaXN0VHJhaW5pbmdQaHJhc2Vzb2ZJbnRlbnRzV2l0aEVucmljaG1lbnQ6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uTGlzdFRyYWluaW5nUGhyYXNlc29mSW50ZW50c1dpdGhFbnJpY2htZW50UmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8XG4gICAgICBHcnBjRXZlbnQ8dGhpc1Byb3RvLkxpc3RUcmFpbmluZ1BocmFzZXNvZkludGVudHNXaXRoRW5yaWNobWVudFJlc3BvbnNlPlxuICAgID4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5JbnRlbnRzL0xpc3RUcmFpbmluZ1BocmFzZXNvZkludGVudHNXaXRoRW5yaWNobWVudCcsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczpcbiAgICAgICAgICB0aGlzUHJvdG8uTGlzdFRyYWluaW5nUGhyYXNlc29mSW50ZW50c1dpdGhFbnJpY2htZW50UmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczpcbiAgICAgICAgICB0aGlzUHJvdG8uTGlzdFRyYWluaW5nUGhyYXNlc29mSW50ZW50c1dpdGhFbnJpY2htZW50UmVzcG9uc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEdSUENfSU5URU5UU19DTElFTlRfU0VUVElOR1MpIHNldHRpbmdzOiBhbnksXG4gICAgQEluamVjdChHUlBDX0NMSUVOVF9GQUNUT1JZKSBjbGllbnRGYWN0b3J5OiBHcnBjQ2xpZW50RmFjdG9yeTxhbnk+LFxuICAgIHByaXZhdGUgaGFuZGxlcjogR3JwY0hhbmRsZXJcbiAgKSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnRGYWN0b3J5LmNyZWF0ZUNsaWVudCgnb25kZXdvLm5sdS5JbnRlbnRzJywgc2V0dGluZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28ubmx1LkludGVudHMvTGlzdEludGVudHNcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uTGlzdEludGVudHNSZXNwb25zZT5cbiAgICovXG4gIGxpc3RJbnRlbnRzKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uTGlzdEludGVudHNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5MaXN0SW50ZW50c1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmxpc3RJbnRlbnRzKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL29uZGV3by5ubHUuSW50ZW50cy9HZXRJbnRlbnRcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uSW50ZW50PlxuICAgKi9cbiAgZ2V0SW50ZW50KFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0SW50ZW50UmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uSW50ZW50PiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmdldEludGVudChyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28ubmx1LkludGVudHMvQ3JlYXRlSW50ZW50XG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkludGVudD5cbiAgICovXG4gIGNyZWF0ZUludGVudChcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkNyZWF0ZUludGVudFJlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkludGVudD4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5jcmVhdGVJbnRlbnQocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5JbnRlbnRzL1VwZGF0ZUludGVudFxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5JbnRlbnQ+XG4gICAqL1xuICB1cGRhdGVJbnRlbnQoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5VcGRhdGVJbnRlbnRSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5JbnRlbnQ+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAudXBkYXRlSW50ZW50KHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL29uZGV3by5ubHUuSW50ZW50cy9EZWxldGVJbnRlbnRcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxnb29nbGVQcm90b2J1ZjAwMy5FbXB0eT5cbiAgICovXG4gIGRlbGV0ZUludGVudChcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkRlbGV0ZUludGVudFJlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8Z29vZ2xlUHJvdG9idWYwMDMuRW1wdHk+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuZGVsZXRlSW50ZW50KHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL29uZGV3by5ubHUuSW50ZW50cy9CYXRjaFVwZGF0ZUludGVudHNcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxvbmRld29ObHUwMTEuT3BlcmF0aW9uPlxuICAgKi9cbiAgYmF0Y2hVcGRhdGVJbnRlbnRzKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQmF0Y2hVcGRhdGVJbnRlbnRzUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTxvbmRld29ObHUwMTEuT3BlcmF0aW9uPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmJhdGNoVXBkYXRlSW50ZW50cyhyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28ubmx1LkludGVudHMvQmF0Y2hEZWxldGVJbnRlbnRzXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8b25kZXdvTmx1MDExLk9wZXJhdGlvbj5cbiAgICovXG4gIGJhdGNoRGVsZXRlSW50ZW50cyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkJhdGNoRGVsZXRlSW50ZW50c1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8b25kZXdvTmx1MDExLk9wZXJhdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5iYXRjaERlbGV0ZUludGVudHMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5JbnRlbnRzL1RhZ0ludGVudFxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPGdvb2dsZVByb3RvYnVmMDAzLkVtcHR5PlxuICAgKi9cbiAgdGFnSW50ZW50KFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uSW50ZW50VGFnUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTxnb29nbGVQcm90b2J1ZjAwMy5FbXB0eT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC50YWdJbnRlbnQocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5JbnRlbnRzL0RlbGV0ZUludGVudFRhZ1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPGdvb2dsZVByb3RvYnVmMDAzLkVtcHR5PlxuICAgKi9cbiAgZGVsZXRlSW50ZW50VGFnKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uSW50ZW50VGFnUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTxnb29nbGVQcm90b2J1ZjAwMy5FbXB0eT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5kZWxldGVJbnRlbnRUYWcocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5JbnRlbnRzL0dldEludGVudFRhZ3NcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uR2V0SW50ZW50VGFnc1Jlc3BvbnNlPlxuICAgKi9cbiAgZ2V0SW50ZW50VGFncyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldEludGVudFRhZ3NSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5HZXRJbnRlbnRUYWdzUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuZ2V0SW50ZW50VGFncyhyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28ubmx1LkludGVudHMvR2V0QWxsSW50ZW50VGFnc1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5HZXRJbnRlbnRUYWdzUmVzcG9uc2U+XG4gICAqL1xuICBnZXRBbGxJbnRlbnRUYWdzKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0QWxsSW50ZW50VGFnc1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkdldEludGVudFRhZ3NSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5nZXRBbGxJbnRlbnRUYWdzKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL29uZGV3by5ubHUuSW50ZW50cy9CYXRjaENyZWF0ZVRyYWluaW5nUGhyYXNlc1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5CYXRjaFRyYWluaW5nUGhyYXNlc1N0YXR1c1Jlc3BvbnNlPlxuICAgKi9cbiAgYmF0Y2hDcmVhdGVUcmFpbmluZ1BocmFzZXMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5CYXRjaENyZWF0ZVRyYWluaW5nUGhyYXNlc1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkJhdGNoVHJhaW5pbmdQaHJhc2VzU3RhdHVzUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuYmF0Y2hDcmVhdGVUcmFpbmluZ1BocmFzZXMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5JbnRlbnRzL0JhdGNoR2V0VHJhaW5pbmdQaHJhc2VzXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkJhdGNoVHJhaW5pbmdQaHJhc2VzU3RhdHVzUmVzcG9uc2U+XG4gICAqL1xuICBiYXRjaEdldFRyYWluaW5nUGhyYXNlcyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkJhdGNoR2V0VHJhaW5pbmdQaHJhc2VzUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uQmF0Y2hUcmFpbmluZ1BocmFzZXNTdGF0dXNSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5iYXRjaEdldFRyYWluaW5nUGhyYXNlcyhyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28ubmx1LkludGVudHMvQmF0Y2hVcGRhdGVUcmFpbmluZ1BocmFzZXNcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uQmF0Y2hUcmFpbmluZ1BocmFzZXNTdGF0dXNSZXNwb25zZT5cbiAgICovXG4gIGJhdGNoVXBkYXRlVHJhaW5pbmdQaHJhc2VzKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQmF0Y2hVcGRhdGVUcmFpbmluZ1BocmFzZXNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5CYXRjaFRyYWluaW5nUGhyYXNlc1N0YXR1c1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmJhdGNoVXBkYXRlVHJhaW5pbmdQaHJhc2VzKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL29uZGV3by5ubHUuSW50ZW50cy9CYXRjaERlbGV0ZVRyYWluaW5nUGhyYXNlc1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5CYXRjaERlbGV0ZVRyYWluaW5nUGhyYXNlc1Jlc3BvbnNlPlxuICAgKi9cbiAgYmF0Y2hEZWxldGVUcmFpbmluZ1BocmFzZXMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5CYXRjaERlbGV0ZVRyYWluaW5nUGhyYXNlc1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkJhdGNoRGVsZXRlVHJhaW5pbmdQaHJhc2VzUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuYmF0Y2hEZWxldGVUcmFpbmluZ1BocmFzZXMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5JbnRlbnRzL0xpc3RUcmFpbmluZ1BocmFzZXNcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uTGlzdFRyYWluaW5nUGhyYXNlc1Jlc3BvbnNlPlxuICAgKi9cbiAgbGlzdFRyYWluaW5nUGhyYXNlcyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkxpc3RUcmFpbmluZ1BocmFzZXNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5MaXN0VHJhaW5pbmdQaHJhc2VzUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAubGlzdFRyYWluaW5nUGhyYXNlcyhyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28ubmx1LkludGVudHMvQmF0Y2hDcmVhdGVSZXNwb25zZU1lc3NhZ2VzXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkJhdGNoUmVzcG9uc2VNZXNzYWdlc1N0YXR1c1Jlc3BvbnNlPlxuICAgKi9cbiAgYmF0Y2hDcmVhdGVSZXNwb25zZU1lc3NhZ2VzKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQmF0Y2hDcmVhdGVSZXNwb25zZU1lc3NhZ2VzUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uQmF0Y2hSZXNwb25zZU1lc3NhZ2VzU3RhdHVzUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuYmF0Y2hDcmVhdGVSZXNwb25zZU1lc3NhZ2VzKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL29uZGV3by5ubHUuSW50ZW50cy9CYXRjaEdldFJlc3BvbnNlTWVzc2FnZXNcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uQmF0Y2hSZXNwb25zZU1lc3NhZ2VzU3RhdHVzUmVzcG9uc2U+XG4gICAqL1xuICBiYXRjaEdldFJlc3BvbnNlTWVzc2FnZXMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5CYXRjaEdldFJlc3BvbnNlTWVzc2FnZXNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5CYXRjaFJlc3BvbnNlTWVzc2FnZXNTdGF0dXNSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5iYXRjaEdldFJlc3BvbnNlTWVzc2FnZXMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5JbnRlbnRzL0JhdGNoVXBkYXRlUmVzcG9uc2VNZXNzYWdlc1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5CYXRjaFJlc3BvbnNlTWVzc2FnZXNTdGF0dXNSZXNwb25zZT5cbiAgICovXG4gIGJhdGNoVXBkYXRlUmVzcG9uc2VNZXNzYWdlcyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkJhdGNoVXBkYXRlUmVzcG9uc2VNZXNzYWdlc1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkJhdGNoUmVzcG9uc2VNZXNzYWdlc1N0YXR1c1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmJhdGNoVXBkYXRlUmVzcG9uc2VNZXNzYWdlcyhyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28ubmx1LkludGVudHMvQmF0Y2hEZWxldGVSZXNwb25zZU1lc3NhZ2VzXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkJhdGNoRGVsZXRlUmVzcG9uc2VNZXNzYWdlc1Jlc3BvbnNlPlxuICAgKi9cbiAgYmF0Y2hEZWxldGVSZXNwb25zZU1lc3NhZ2VzKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQmF0Y2hEZWxldGVSZXNwb25zZU1lc3NhZ2VzUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uQmF0Y2hEZWxldGVSZXNwb25zZU1lc3NhZ2VzUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuYmF0Y2hEZWxldGVSZXNwb25zZU1lc3NhZ2VzKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL29uZGV3by5ubHUuSW50ZW50cy9MaXN0UmVzcG9uc2VNZXNzYWdlc1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5MaXN0UmVzcG9uc2VNZXNzYWdlc1Jlc3BvbnNlPlxuICAgKi9cbiAgbGlzdFJlc3BvbnNlTWVzc2FnZXMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5MaXN0UmVzcG9uc2VNZXNzYWdlc1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkxpc3RSZXNwb25zZU1lc3NhZ2VzUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAubGlzdFJlc3BvbnNlTWVzc2FnZXMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5JbnRlbnRzL0JhdGNoQ3JlYXRlUGFyYW1ldGVyc1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5CYXRjaFBhcmFtZXRlcnNTdGF0dXNSZXNwb25zZT5cbiAgICovXG4gIGJhdGNoQ3JlYXRlUGFyYW1ldGVycyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkJhdGNoQ3JlYXRlUGFyYW1ldGVyc1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkJhdGNoUGFyYW1ldGVyc1N0YXR1c1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmJhdGNoQ3JlYXRlUGFyYW1ldGVycyhyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28ubmx1LkludGVudHMvQmF0Y2hHZXRQYXJhbWV0ZXJzXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkJhdGNoUGFyYW1ldGVyc1N0YXR1c1Jlc3BvbnNlPlxuICAgKi9cbiAgYmF0Y2hHZXRQYXJhbWV0ZXJzKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQmF0Y2hHZXRQYXJhbWV0ZXJzUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uQmF0Y2hQYXJhbWV0ZXJzU3RhdHVzUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuYmF0Y2hHZXRQYXJhbWV0ZXJzKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL29uZGV3by5ubHUuSW50ZW50cy9CYXRjaFVwZGF0ZVBhcmFtZXRlcnNcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uQmF0Y2hQYXJhbWV0ZXJzU3RhdHVzUmVzcG9uc2U+XG4gICAqL1xuICBiYXRjaFVwZGF0ZVBhcmFtZXRlcnMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5CYXRjaFVwZGF0ZVBhcmFtZXRlcnNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5CYXRjaFBhcmFtZXRlcnNTdGF0dXNSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5iYXRjaFVwZGF0ZVBhcmFtZXRlcnMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5JbnRlbnRzL0JhdGNoRGVsZXRlUGFyYW1ldGVyc1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5CYXRjaERlbGV0ZVBhcmFtZXRlcnNSZXNwb25zZT5cbiAgICovXG4gIGJhdGNoRGVsZXRlUGFyYW1ldGVycyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkJhdGNoRGVsZXRlUGFyYW1ldGVyc1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkJhdGNoRGVsZXRlUGFyYW1ldGVyc1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmJhdGNoRGVsZXRlUGFyYW1ldGVycyhyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28ubmx1LkludGVudHMvTGlzdFBhcmFtZXRlcnNcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uTGlzdFBhcmFtZXRlcnNSZXNwb25zZT5cbiAgICovXG4gIGxpc3RQYXJhbWV0ZXJzKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uTGlzdFBhcmFtZXRlcnNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5MaXN0UGFyYW1ldGVyc1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmxpc3RQYXJhbWV0ZXJzKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL29uZGV3by5ubHUuSW50ZW50cy9MaXN0VHJhaW5pbmdQaHJhc2Vzb2ZJbnRlbnRzV2l0aEVucmljaG1lbnRcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uTGlzdFRyYWluaW5nUGhyYXNlc29mSW50ZW50c1dpdGhFbnJpY2htZW50UmVzcG9uc2U+XG4gICAqL1xuICBsaXN0VHJhaW5pbmdQaHJhc2Vzb2ZJbnRlbnRzV2l0aEVucmljaG1lbnQoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5MaXN0VHJhaW5pbmdQaHJhc2Vzb2ZJbnRlbnRzV2l0aEVucmljaG1lbnRSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5MaXN0VHJhaW5pbmdQaHJhc2Vzb2ZJbnRlbnRzV2l0aEVucmljaG1lbnRSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5saXN0VHJhaW5pbmdQaHJhc2Vzb2ZJbnRlbnRzV2l0aEVucmljaG1lbnQocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxufVxuIl19
