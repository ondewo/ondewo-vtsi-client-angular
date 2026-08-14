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
import * as thisProto from './logs.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import * as googleApi003 from '../../google/api/annotations.pb';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as ondewoNlu005 from '../../ondewo/nlu/context.pb';
import * as ondewoNlu006 from '../../ondewo/nlu/intent.pb';
import * as ondewoS2t007 from '../../ondewo/s2t/speech-to-text.pb';
import * as ondewoT2s008 from '../../ondewo/t2s/text-to-speech.pb';
import * as ondewoSip009 from '../../ondewo/sip/sip.pb';
import * as ondewoNlu010 from '../../ondewo/nlu/common.pb';
import * as ondewoVtsi011 from '../../ondewo/vtsi/calls.pb';
import { GRPC_LOGS_CLIENT_SETTINGS } from './logs.pbconf';
/**
 * Service client implementation for ondewo.vtsi.Logs
 */
@Injectable({ providedIn: 'any' })
export class LogsClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Server streaming: /ondewo.vtsi.Logs/StreamCallLogs
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.StreamCallLogsResponse>>
     */
    streamCallLogs: (
      requestData: thisProto.StreamCallLogsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.StreamCallLogsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/ondewo.vtsi.Logs/StreamCallLogs',
        requestData,
        requestMetadata,
        requestClass: thisProto.StreamCallLogsRequest,
        responseClass: thisProto.StreamCallLogsResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Logs/ListCallLogs
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListCallLogsResponse>>
     */
    listCallLogs: (
      requestData: thisProto.ListCallLogsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListCallLogsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Logs/ListCallLogs',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListCallLogsRequest,
        responseClass: thisProto.ListCallLogsResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Logs/GetCallLogStream
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.CallLogStream>>
     */
    getCallLogStream: (
      requestData: thisProto.GetCallLogStreamRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.CallLogStream>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Logs/GetCallLogStream',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetCallLogStreamRequest,
        responseClass: thisProto.CallLogStream
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Logs/ListCallLogStreams
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListCallLogStreamsResponse>>
     */
    listCallLogStreams: (
      requestData: thisProto.ListCallLogStreamsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListCallLogStreamsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Logs/ListCallLogStreams',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListCallLogStreamsRequest,
        responseClass: thisProto.ListCallLogStreamsResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Logs/DeleteCallLogs
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.DeleteCallLogsResponse>>
     */
    deleteCallLogs: (
      requestData: thisProto.DeleteCallLogsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.DeleteCallLogsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Logs/DeleteCallLogs',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteCallLogsRequest,
        responseClass: thisProto.DeleteCallLogsResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_LOGS_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('ondewo.vtsi.Logs', settings);
  }

  /**
   * Server streaming @/ondewo.vtsi.Logs/StreamCallLogs
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.StreamCallLogsResponse>
   */
  streamCallLogs(
    requestData: thisProto.StreamCallLogsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.StreamCallLogsResponse> {
    return this.$raw
      .streamCallLogs(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Logs/ListCallLogs
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListCallLogsResponse>
   */
  listCallLogs(
    requestData: thisProto.ListCallLogsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListCallLogsResponse> {
    return this.$raw
      .listCallLogs(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Logs/GetCallLogStream
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.CallLogStream>
   */
  getCallLogStream(
    requestData: thisProto.GetCallLogStreamRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.CallLogStream> {
    return this.$raw
      .getCallLogStream(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Logs/ListCallLogStreams
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListCallLogStreamsResponse>
   */
  listCallLogStreams(
    requestData: thisProto.ListCallLogStreamsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListCallLogStreamsResponse> {
    return this.$raw
      .listCallLogStreams(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Logs/DeleteCallLogs
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.DeleteCallLogsResponse>
   */
  deleteCallLogs(
    requestData: thisProto.DeleteCallLogsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.DeleteCallLogsResponse> {
    return this.$raw
      .deleteCallLogs(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
