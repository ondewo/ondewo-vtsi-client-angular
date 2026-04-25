/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import {
  GrpcCallType,
  GrpcClient,
  GrpcClientFactory,
  GrpcEvent,
  GrpcMetadata
} from '@ngx-grpc/common';
import {
  GRPC_CLIENT_FACTORY,
  GrpcHandler,
  takeMessages,
  throwStatusErrors
} from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './calls.pb';
import * as googleApi000 from '../../google/api/http.pb';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleApi002 from '../../google/api/annotations.pb';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as googleProtobuf005 from '@ngx-grpc/well-known-types';
import * as ondewoNlu006 from '../../ondewo/nlu/context.pb';
import * as ondewoNlu007 from '../../ondewo/nlu/common.pb';
import * as ondewoNlu008 from '../../ondewo/nlu/operations.pb';
import * as googleProtobuf009 from '@ngx-grpc/well-known-types';
import * as ondewoNlu010 from '../../ondewo/nlu/intent.pb';
import * as ondewoS2t011 from '../../ondewo/s2t/speech-to-text.pb';
import * as ondewoT2s012 from '../../ondewo/t2s/text-to-speech.pb';
import * as ondewoSip013 from '../../ondewo/sip/sip.pb';
import { GRPC_CALLS_CLIENT_SETTINGS } from './calls.pbconf';
/**
 * Service client implementation for ondewo.vtsi.Calls
 */
@Injectable({ providedIn: 'any' })
export class CallsClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /ondewo.vtsi.Calls/StartCaller
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.StartCallerResponse>>
     */
    startCaller: (
      requestData: thisProto.StartCallerRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.StartCallerResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/StartCaller',
        requestData,
        requestMetadata,
        requestClass: thisProto.StartCallerRequest,
        responseClass: thisProto.StartCallerResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Calls/StartCallers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.StartCallersResponse>>
     */
    startCallers: (
      requestData: thisProto.StartCallersRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.StartCallersResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/StartCallers',
        requestData,
        requestMetadata,
        requestClass: thisProto.StartCallersRequest,
        responseClass: thisProto.StartCallersResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Calls/ListCallers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListCallersResponse>>
     */
    listCallers: (
      requestData: thisProto.ListCallersRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListCallersResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/ListCallers',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListCallersRequest,
        responseClass: thisProto.ListCallersResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Calls/GetCaller
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Caller>>
     */
    getCaller: (
      requestData: thisProto.GetCallerRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Caller>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/GetCaller',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetCallerRequest,
        responseClass: thisProto.Caller
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Calls/DeleteCaller
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.DeleteCallerResponse>>
     */
    deleteCaller: (
      requestData: thisProto.DeleteCallerRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.DeleteCallerResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/DeleteCaller',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteCallerRequest,
        responseClass: thisProto.DeleteCallerResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Calls/DeleteCallers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.DeleteCallersResponse>>
     */
    deleteCallers: (
      requestData: thisProto.DeleteCallersRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.DeleteCallersResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/DeleteCallers',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteCallersRequest,
        responseClass: thisProto.DeleteCallersResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Calls/StopCaller
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.StopCallerResponse>>
     */
    stopCaller: (
      requestData: thisProto.StopCallerRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.StopCallerResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/StopCaller',
        requestData,
        requestMetadata,
        requestClass: thisProto.StopCallerRequest,
        responseClass: thisProto.StopCallerResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Calls/StopCallers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.StopCallersResponse>>
     */
    stopCallers: (
      requestData: thisProto.StopCallersRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.StopCallersResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/StopCallers',
        requestData,
        requestMetadata,
        requestClass: thisProto.StopCallersRequest,
        responseClass: thisProto.StopCallersResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Calls/StartListener
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.StartListenerResponse>>
     */
    startListener: (
      requestData: thisProto.StartListenerRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.StartListenerResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/StartListener',
        requestData,
        requestMetadata,
        requestClass: thisProto.StartListenerRequest,
        responseClass: thisProto.StartListenerResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Calls/StartListeners
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.StartListenersResponse>>
     */
    startListeners: (
      requestData: thisProto.StartListenersRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.StartListenersResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/StartListeners',
        requestData,
        requestMetadata,
        requestClass: thisProto.StartListenersRequest,
        responseClass: thisProto.StartListenersResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Calls/StopListener
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.StopListenerResponse>>
     */
    stopListener: (
      requestData: thisProto.StopListenerRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.StopListenerResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/StopListener',
        requestData,
        requestMetadata,
        requestClass: thisProto.StopListenerRequest,
        responseClass: thisProto.StopListenerResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Calls/StopListeners
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.StopListenersResponse>>
     */
    stopListeners: (
      requestData: thisProto.StopListenersRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.StopListenersResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/StopListeners',
        requestData,
        requestMetadata,
        requestClass: thisProto.StopListenersRequest,
        responseClass: thisProto.StopListenersResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Calls/ListListeners
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListListenersResponse>>
     */
    listListeners: (
      requestData: thisProto.ListListenersRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListListenersResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/ListListeners',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListListenersRequest,
        responseClass: thisProto.ListListenersResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Calls/GetListener
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Listener>>
     */
    getListener: (
      requestData: thisProto.GetListenerRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Listener>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/GetListener',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetListenerRequest,
        responseClass: thisProto.Listener
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Calls/DeleteListener
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.DeleteListenerResponse>>
     */
    deleteListener: (
      requestData: thisProto.DeleteListenerRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.DeleteListenerResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/DeleteListener',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteListenerRequest,
        responseClass: thisProto.DeleteListenerResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Calls/DeleteListeners
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.DeleteListenersResponse>>
     */
    deleteListeners: (
      requestData: thisProto.DeleteListenersRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.DeleteListenersResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/DeleteListeners',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteListenersRequest,
        responseClass: thisProto.DeleteListenersResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Calls/StartScheduledCaller
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.StartScheduledCallerResponse>>
     */
    startScheduledCaller: (
      requestData: thisProto.StartScheduledCallerRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.StartScheduledCallerResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/StartScheduledCaller',
        requestData,
        requestMetadata,
        requestClass: thisProto.StartScheduledCallerRequest,
        responseClass: thisProto.StartScheduledCallerResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Calls/StartScheduledCallers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.StartScheduledCallersResponse>>
     */
    startScheduledCallers: (
      requestData: thisProto.StartScheduledCallersRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.StartScheduledCallersResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/StartScheduledCallers',
        requestData,
        requestMetadata,
        requestClass: thisProto.StartScheduledCallersRequest,
        responseClass: thisProto.StartScheduledCallersResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Calls/StopCall
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.StopCallResponse>>
     */
    stopCall: (
      requestData: thisProto.StopCallRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.StopCallResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/StopCall',
        requestData,
        requestMetadata,
        requestClass: thisProto.StopCallRequest,
        responseClass: thisProto.StopCallResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Calls/StopCalls
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.StopCallsResponse>>
     */
    stopCalls: (
      requestData: thisProto.StopCallsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.StopCallsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/StopCalls',
        requestData,
        requestMetadata,
        requestClass: thisProto.StopCallsRequest,
        responseClass: thisProto.StopCallsResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Calls/StopAllCalls
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.StopCallsResponse>>
     */
    stopAllCalls: (
      requestData: thisProto.StopAllCallsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.StopCallsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/StopAllCalls',
        requestData,
        requestMetadata,
        requestClass: thisProto.StopAllCallsRequest,
        responseClass: thisProto.StopCallsResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Calls/TransferCall
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.TransferCallResponse>>
     */
    transferCall: (
      requestData: thisProto.TransferCallRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.TransferCallResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/TransferCall',
        requestData,
        requestMetadata,
        requestClass: thisProto.TransferCallRequest,
        responseClass: thisProto.TransferCallResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Calls/TransferCalls
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.TransferCallsResponse>>
     */
    transferCalls: (
      requestData: thisProto.TransferCallsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.TransferCallsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/TransferCalls',
        requestData,
        requestMetadata,
        requestClass: thisProto.TransferCallsRequest,
        responseClass: thisProto.TransferCallsResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Calls/GetCall
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Call>>
     */
    getCall: (
      requestData: thisProto.GetCallRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Call>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/GetCall',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetCallRequest,
        responseClass: thisProto.Call
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Calls/ListCalls
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListCallsResponse>>
     */
    listCalls: (
      requestData: thisProto.ListCallsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListCallsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/ListCalls',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListCallsRequest,
        responseClass: thisProto.ListCallsResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_CALLS_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('ondewo.vtsi.Calls', settings);
  }

  /**
   * Unary call @/ondewo.vtsi.Calls/StartCaller
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.StartCallerResponse>
   */
  startCaller(
    requestData: thisProto.StartCallerRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.StartCallerResponse> {
    return this.$raw
      .startCaller(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Calls/StartCallers
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.StartCallersResponse>
   */
  startCallers(
    requestData: thisProto.StartCallersRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.StartCallersResponse> {
    return this.$raw
      .startCallers(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Calls/ListCallers
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListCallersResponse>
   */
  listCallers(
    requestData: thisProto.ListCallersRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListCallersResponse> {
    return this.$raw
      .listCallers(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Calls/GetCaller
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Caller>
   */
  getCaller(
    requestData: thisProto.GetCallerRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Caller> {
    return this.$raw
      .getCaller(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Calls/DeleteCaller
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.DeleteCallerResponse>
   */
  deleteCaller(
    requestData: thisProto.DeleteCallerRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.DeleteCallerResponse> {
    return this.$raw
      .deleteCaller(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Calls/DeleteCallers
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.DeleteCallersResponse>
   */
  deleteCallers(
    requestData: thisProto.DeleteCallersRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.DeleteCallersResponse> {
    return this.$raw
      .deleteCallers(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Calls/StopCaller
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.StopCallerResponse>
   */
  stopCaller(
    requestData: thisProto.StopCallerRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.StopCallerResponse> {
    return this.$raw
      .stopCaller(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Calls/StopCallers
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.StopCallersResponse>
   */
  stopCallers(
    requestData: thisProto.StopCallersRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.StopCallersResponse> {
    return this.$raw
      .stopCallers(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Calls/StartListener
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.StartListenerResponse>
   */
  startListener(
    requestData: thisProto.StartListenerRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.StartListenerResponse> {
    return this.$raw
      .startListener(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Calls/StartListeners
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.StartListenersResponse>
   */
  startListeners(
    requestData: thisProto.StartListenersRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.StartListenersResponse> {
    return this.$raw
      .startListeners(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Calls/StopListener
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.StopListenerResponse>
   */
  stopListener(
    requestData: thisProto.StopListenerRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.StopListenerResponse> {
    return this.$raw
      .stopListener(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Calls/StopListeners
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.StopListenersResponse>
   */
  stopListeners(
    requestData: thisProto.StopListenersRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.StopListenersResponse> {
    return this.$raw
      .stopListeners(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Calls/ListListeners
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListListenersResponse>
   */
  listListeners(
    requestData: thisProto.ListListenersRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListListenersResponse> {
    return this.$raw
      .listListeners(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Calls/GetListener
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Listener>
   */
  getListener(
    requestData: thisProto.GetListenerRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Listener> {
    return this.$raw
      .getListener(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Calls/DeleteListener
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.DeleteListenerResponse>
   */
  deleteListener(
    requestData: thisProto.DeleteListenerRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.DeleteListenerResponse> {
    return this.$raw
      .deleteListener(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Calls/DeleteListeners
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.DeleteListenersResponse>
   */
  deleteListeners(
    requestData: thisProto.DeleteListenersRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.DeleteListenersResponse> {
    return this.$raw
      .deleteListeners(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Calls/StartScheduledCaller
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.StartScheduledCallerResponse>
   */
  startScheduledCaller(
    requestData: thisProto.StartScheduledCallerRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.StartScheduledCallerResponse> {
    return this.$raw
      .startScheduledCaller(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Calls/StartScheduledCallers
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.StartScheduledCallersResponse>
   */
  startScheduledCallers(
    requestData: thisProto.StartScheduledCallersRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.StartScheduledCallersResponse> {
    return this.$raw
      .startScheduledCallers(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Calls/StopCall
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.StopCallResponse>
   */
  stopCall(
    requestData: thisProto.StopCallRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.StopCallResponse> {
    return this.$raw
      .stopCall(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Calls/StopCalls
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.StopCallsResponse>
   */
  stopCalls(
    requestData: thisProto.StopCallsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.StopCallsResponse> {
    return this.$raw
      .stopCalls(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Calls/StopAllCalls
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.StopCallsResponse>
   */
  stopAllCalls(
    requestData: thisProto.StopAllCallsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.StopCallsResponse> {
    return this.$raw
      .stopAllCalls(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Calls/TransferCall
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.TransferCallResponse>
   */
  transferCall(
    requestData: thisProto.TransferCallRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.TransferCallResponse> {
    return this.$raw
      .transferCall(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Calls/TransferCalls
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.TransferCallsResponse>
   */
  transferCalls(
    requestData: thisProto.TransferCallsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.TransferCallsResponse> {
    return this.$raw
      .transferCalls(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Calls/GetCall
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Call>
   */
  getCall(
    requestData: thisProto.GetCallRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Call> {
    return this.$raw
      .getCall(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Calls/ListCalls
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListCallsResponse>
   */
  listCalls(
    requestData: thisProto.ListCallsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListCallsResponse> {
    return this.$raw
      .listCalls(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
