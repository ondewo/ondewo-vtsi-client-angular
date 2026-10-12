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
import * as googleApi000 from '../../google/api/annotations.pb';
import * as ondewoNlu001 from '../../ondewo/nlu/context.pb';
import * as ondewoNlu002 from '../../ondewo/nlu/common.pb';
import * as ondewoNlu003 from '../../ondewo/nlu/operations.pb';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as googleProtobuf005 from '@ngx-grpc/well-known-types';
import * as googleProtobuf006 from '@ngx-grpc/well-known-types';
import * as googleProtobuf007 from '@ngx-grpc/well-known-types';
import * as ondewoNlu008 from '../../ondewo/nlu/intent.pb';
import * as ondewoS2t009 from '../../ondewo/s2t/speech-to-text.pb';
import * as ondewoT2s010 from '../../ondewo/t2s/text-to-speech.pb';
import * as googleProtobuf011 from '@ngx-grpc/well-known-types';
import * as ondewoSip012 from '../../ondewo/sip/sip.pb';
import * as ondewoVtsi013 from '../../ondewo/vtsi/call-configs.pb';
import * as ondewoVtsi014 from '../../ondewo/vtsi/campaigns.pb';
import * as ondewoVtsi015 from '../../ondewo/vtsi/projects.pb';
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
     * Unary call: /ondewo.vtsi.Calls/UpdateCaller
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.UpdateCallerResponse>>
     */
    updateCaller: (
      requestData: thisProto.UpdateCallerRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.UpdateCallerResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/UpdateCaller',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateCallerRequest,
        responseClass: thisProto.UpdateCallerResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Calls/UpdateCallers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.UpdateCallersResponse>>
     */
    updateCallers: (
      requestData: thisProto.UpdateCallersRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.UpdateCallersResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/UpdateCallers',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateCallersRequest,
        responseClass: thisProto.UpdateCallersResponse
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
     * Unary call: /ondewo.vtsi.Calls/UpdateListener
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.UpdateListenerResponse>>
     */
    updateListener: (
      requestData: thisProto.UpdateListenerRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.UpdateListenerResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/UpdateListener',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateListenerRequest,
        responseClass: thisProto.UpdateListenerResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Calls/UpdateListeners
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.UpdateListenersResponse>>
     */
    updateListeners: (
      requestData: thisProto.UpdateListenersRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.UpdateListenersResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/UpdateListeners',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateListenersRequest,
        responseClass: thisProto.UpdateListenersResponse
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
     * Unary call: /ondewo.vtsi.Calls/AddCallersToCampaign
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.AddCallersToCampaignResponse>>
     */
    addCallersToCampaign: (
      requestData: thisProto.AddCallersToCampaignRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.AddCallersToCampaignResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/AddCallersToCampaign',
        requestData,
        requestMetadata,
        requestClass: thisProto.AddCallersToCampaignRequest,
        responseClass: thisProto.AddCallersToCampaignResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Calls/AddScheduledCallersToCampaign
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.AddScheduledCallersToCampaignResponse>>
     */
    addScheduledCallersToCampaign: (
      requestData: thisProto.AddScheduledCallersToCampaignRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<
      GrpcEvent<thisProto.AddScheduledCallersToCampaignResponse>
    > => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/AddScheduledCallersToCampaign',
        requestData,
        requestMetadata,
        requestClass: thisProto.AddScheduledCallersToCampaignRequest,
        responseClass: thisProto.AddScheduledCallersToCampaignResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Calls/GetScheduledCaller
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ScheduledCaller>>
     */
    getScheduledCaller: (
      requestData: thisProto.GetScheduledCallerRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ScheduledCaller>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/GetScheduledCaller',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetScheduledCallerRequest,
        responseClass: thisProto.ScheduledCaller
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Calls/ListScheduledCallers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListScheduledCallersResponse>>
     */
    listScheduledCallers: (
      requestData: thisProto.ListScheduledCallersRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListScheduledCallersResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/ListScheduledCallers',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListScheduledCallersRequest,
        responseClass: thisProto.ListScheduledCallersResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Calls/UpdateScheduledCaller
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ScheduledCaller>>
     */
    updateScheduledCaller: (
      requestData: thisProto.UpdateScheduledCallerRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ScheduledCaller>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/UpdateScheduledCaller',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateScheduledCallerRequest,
        responseClass: thisProto.ScheduledCaller
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Calls/CancelScheduledCaller
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.CancelScheduledCallerResponse>>
     */
    cancelScheduledCaller: (
      requestData: thisProto.CancelScheduledCallerRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.CancelScheduledCallerResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/CancelScheduledCaller',
        requestData,
        requestMetadata,
        requestClass: thisProto.CancelScheduledCallerRequest,
        responseClass: thisProto.CancelScheduledCallerResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Calls/CancelScheduledCallers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.CancelScheduledCallersResponse>>
     */
    cancelScheduledCallers: (
      requestData: thisProto.CancelScheduledCallersRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.CancelScheduledCallersResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/CancelScheduledCallers',
        requestData,
        requestMetadata,
        requestClass: thisProto.CancelScheduledCallersRequest,
        responseClass: thisProto.CancelScheduledCallersResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Calls/RetryScheduledCaller
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ScheduledCaller>>
     */
    retryScheduledCaller: (
      requestData: thisProto.RetryScheduledCallerRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ScheduledCaller>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/RetryScheduledCaller',
        requestData,
        requestMetadata,
        requestClass: thisProto.RetryScheduledCallerRequest,
        responseClass: thisProto.ScheduledCaller
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
    },
    /**
     * Unary call: /ondewo.vtsi.Calls/GetCallStatistics
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.CallStatistics>>
     */
    getCallStatistics: (
      requestData: thisProto.GetCallStatisticsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.CallStatistics>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/GetCallStatistics',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetCallStatisticsRequest,
        responseClass: thisProto.CallStatistics
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Calls/UpdateCall
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.UpdateCallResponse>>
     */
    updateCall: (
      requestData: thisProto.UpdateCallRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.UpdateCallResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/UpdateCall',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateCallRequest,
        responseClass: thisProto.UpdateCallResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Calls/UpdateCalls
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.UpdateCallsResponse>>
     */
    updateCalls: (
      requestData: thisProto.UpdateCallsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.UpdateCallsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/UpdateCalls',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateCallsRequest,
        responseClass: thisProto.UpdateCallsResponse
      });
    },
    /**
     * Server streaming: /ondewo.vtsi.Calls/StreamCallerStatus
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.StreamCallResourceStatusResponse>>
     */
    streamCallerStatus: (
      requestData: thisProto.StreamCallerStatusRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.StreamCallResourceStatusResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/ondewo.vtsi.Calls/StreamCallerStatus',
        requestData,
        requestMetadata,
        requestClass: thisProto.StreamCallerStatusRequest,
        responseClass: thisProto.StreamCallResourceStatusResponse
      });
    },
    /**
     * Server streaming: /ondewo.vtsi.Calls/StreamListenerStatus
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.StreamCallResourceStatusResponse>>
     */
    streamListenerStatus: (
      requestData: thisProto.StreamListenerStatusRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.StreamCallResourceStatusResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/ondewo.vtsi.Calls/StreamListenerStatus',
        requestData,
        requestMetadata,
        requestClass: thisProto.StreamListenerStatusRequest,
        responseClass: thisProto.StreamCallResourceStatusResponse
      });
    },
    /**
     * Server streaming: /ondewo.vtsi.Calls/StreamScheduledCallerStatus
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.StreamCallResourceStatusResponse>>
     */
    streamScheduledCallerStatus: (
      requestData: thisProto.StreamScheduledCallerStatusRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.StreamCallResourceStatusResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/ondewo.vtsi.Calls/StreamScheduledCallerStatus',
        requestData,
        requestMetadata,
        requestClass: thisProto.StreamScheduledCallerStatusRequest,
        responseClass: thisProto.StreamCallResourceStatusResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Calls/InviteToCall
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.InviteToCallResponse>>
     */
    inviteToCall: (
      requestData: thisProto.InviteToCallRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.InviteToCallResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/InviteToCall',
        requestData,
        requestMetadata,
        requestClass: thisProto.InviteToCallRequest,
        responseClass: thisProto.InviteToCallResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Calls/RemoveCallParticipant
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RemoveCallParticipantResponse>>
     */
    removeCallParticipant: (
      requestData: thisProto.RemoveCallParticipantRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RemoveCallParticipantResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/RemoveCallParticipant',
        requestData,
        requestMetadata,
        requestClass: thisProto.RemoveCallParticipantRequest,
        responseClass: thisProto.RemoveCallParticipantResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Calls/SetCallMediaControl
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.SetCallMediaControlResponse>>
     */
    setCallMediaControl: (
      requestData: thisProto.SetCallMediaControlRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.SetCallMediaControlResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Calls/SetCallMediaControl',
        requestData,
        requestMetadata,
        requestClass: thisProto.SetCallMediaControlRequest,
        responseClass: thisProto.SetCallMediaControlResponse
      });
    },
    /**
     * Server streaming: /ondewo.vtsi.Calls/ListenCallAudio
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.StreamCallAudioResponse>>
     */
    listenCallAudio: (
      requestData: thisProto.ListenCallAudioRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.StreamCallAudioResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/ondewo.vtsi.Calls/ListenCallAudio',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListenCallAudioRequest,
        responseClass: thisProto.StreamCallAudioResponse
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
   * Unary call @/ondewo.vtsi.Calls/UpdateCaller
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UpdateCallerResponse>
   */
  updateCaller(
    requestData: thisProto.UpdateCallerRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.UpdateCallerResponse> {
    return this.$raw
      .updateCaller(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Calls/UpdateCallers
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UpdateCallersResponse>
   */
  updateCallers(
    requestData: thisProto.UpdateCallersRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.UpdateCallersResponse> {
    return this.$raw
      .updateCallers(requestData, requestMetadata)
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
   * Unary call @/ondewo.vtsi.Calls/UpdateListener
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UpdateListenerResponse>
   */
  updateListener(
    requestData: thisProto.UpdateListenerRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.UpdateListenerResponse> {
    return this.$raw
      .updateListener(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Calls/UpdateListeners
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UpdateListenersResponse>
   */
  updateListeners(
    requestData: thisProto.UpdateListenersRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.UpdateListenersResponse> {
    return this.$raw
      .updateListeners(requestData, requestMetadata)
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
   * Unary call @/ondewo.vtsi.Calls/AddCallersToCampaign
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.AddCallersToCampaignResponse>
   */
  addCallersToCampaign(
    requestData: thisProto.AddCallersToCampaignRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.AddCallersToCampaignResponse> {
    return this.$raw
      .addCallersToCampaign(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Calls/AddScheduledCallersToCampaign
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.AddScheduledCallersToCampaignResponse>
   */
  addScheduledCallersToCampaign(
    requestData: thisProto.AddScheduledCallersToCampaignRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.AddScheduledCallersToCampaignResponse> {
    return this.$raw
      .addScheduledCallersToCampaign(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Calls/GetScheduledCaller
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ScheduledCaller>
   */
  getScheduledCaller(
    requestData: thisProto.GetScheduledCallerRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ScheduledCaller> {
    return this.$raw
      .getScheduledCaller(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Calls/ListScheduledCallers
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListScheduledCallersResponse>
   */
  listScheduledCallers(
    requestData: thisProto.ListScheduledCallersRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListScheduledCallersResponse> {
    return this.$raw
      .listScheduledCallers(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Calls/UpdateScheduledCaller
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ScheduledCaller>
   */
  updateScheduledCaller(
    requestData: thisProto.UpdateScheduledCallerRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ScheduledCaller> {
    return this.$raw
      .updateScheduledCaller(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Calls/CancelScheduledCaller
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.CancelScheduledCallerResponse>
   */
  cancelScheduledCaller(
    requestData: thisProto.CancelScheduledCallerRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.CancelScheduledCallerResponse> {
    return this.$raw
      .cancelScheduledCaller(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Calls/CancelScheduledCallers
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.CancelScheduledCallersResponse>
   */
  cancelScheduledCallers(
    requestData: thisProto.CancelScheduledCallersRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.CancelScheduledCallersResponse> {
    return this.$raw
      .cancelScheduledCallers(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Calls/RetryScheduledCaller
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ScheduledCaller>
   */
  retryScheduledCaller(
    requestData: thisProto.RetryScheduledCallerRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ScheduledCaller> {
    return this.$raw
      .retryScheduledCaller(requestData, requestMetadata)
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

  /**
   * Unary call @/ondewo.vtsi.Calls/GetCallStatistics
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.CallStatistics>
   */
  getCallStatistics(
    requestData: thisProto.GetCallStatisticsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.CallStatistics> {
    return this.$raw
      .getCallStatistics(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Calls/UpdateCall
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UpdateCallResponse>
   */
  updateCall(
    requestData: thisProto.UpdateCallRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.UpdateCallResponse> {
    return this.$raw
      .updateCall(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Calls/UpdateCalls
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UpdateCallsResponse>
   */
  updateCalls(
    requestData: thisProto.UpdateCallsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.UpdateCallsResponse> {
    return this.$raw
      .updateCalls(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Server streaming @/ondewo.vtsi.Calls/StreamCallerStatus
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.StreamCallResourceStatusResponse>
   */
  streamCallerStatus(
    requestData: thisProto.StreamCallerStatusRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.StreamCallResourceStatusResponse> {
    return this.$raw
      .streamCallerStatus(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Server streaming @/ondewo.vtsi.Calls/StreamListenerStatus
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.StreamCallResourceStatusResponse>
   */
  streamListenerStatus(
    requestData: thisProto.StreamListenerStatusRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.StreamCallResourceStatusResponse> {
    return this.$raw
      .streamListenerStatus(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Server streaming @/ondewo.vtsi.Calls/StreamScheduledCallerStatus
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.StreamCallResourceStatusResponse>
   */
  streamScheduledCallerStatus(
    requestData: thisProto.StreamScheduledCallerStatusRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.StreamCallResourceStatusResponse> {
    return this.$raw
      .streamScheduledCallerStatus(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Calls/InviteToCall
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.InviteToCallResponse>
   */
  inviteToCall(
    requestData: thisProto.InviteToCallRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.InviteToCallResponse> {
    return this.$raw
      .inviteToCall(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Calls/RemoveCallParticipant
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RemoveCallParticipantResponse>
   */
  removeCallParticipant(
    requestData: thisProto.RemoveCallParticipantRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RemoveCallParticipantResponse> {
    return this.$raw
      .removeCallParticipant(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Calls/SetCallMediaControl
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.SetCallMediaControlResponse>
   */
  setCallMediaControl(
    requestData: thisProto.SetCallMediaControlRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.SetCallMediaControlResponse> {
    return this.$raw
      .setCallMediaControl(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Server streaming @/ondewo.vtsi.Calls/ListenCallAudio
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.StreamCallAudioResponse>
   */
  listenCallAudio(
    requestData: thisProto.ListenCallAudioRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.StreamCallAudioResponse> {
    return this.$raw
      .listenCallAudio(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
