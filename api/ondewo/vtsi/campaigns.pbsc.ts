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
import * as thisProto from './campaigns.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as ondewoNlu002 from '../../ondewo/nlu/context.pb';
import * as ondewoNlu003 from '../../ondewo/nlu/intent.pb';
import * as ondewoS2t004 from '../../ondewo/s2t/speech-to-text.pb';
import * as ondewoT2s005 from '../../ondewo/t2s/text-to-speech.pb';
import * as googleProtobuf006 from '@ngx-grpc/well-known-types';
import * as googleProtobuf007 from '@ngx-grpc/well-known-types';
import * as ondewoSip008 from '../../ondewo/sip/sip.pb';
import * as ondewoVtsi009 from '../../ondewo/vtsi/call-configs.pb';
import { GRPC_CAMPAIGNS_CLIENT_SETTINGS } from './campaigns.pbconf';
/**
 * Service client implementation for ondewo.vtsi.Campaigns
 */
@Injectable({ providedIn: 'any' })
export class CampaignsClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /ondewo.vtsi.Campaigns/CreateCampaign
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Campaign>>
     */
    createCampaign: (
      requestData: thisProto.CreateCampaignRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Campaign>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Campaigns/CreateCampaign',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateCampaignRequest,
        responseClass: thisProto.Campaign
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Campaigns/GetCampaign
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Campaign>>
     */
    getCampaign: (
      requestData: thisProto.GetCampaignRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Campaign>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Campaigns/GetCampaign',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetCampaignRequest,
        responseClass: thisProto.Campaign
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Campaigns/UpdateCampaign
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Campaign>>
     */
    updateCampaign: (
      requestData: thisProto.UpdateCampaignRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Campaign>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Campaigns/UpdateCampaign',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateCampaignRequest,
        responseClass: thisProto.Campaign
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Campaigns/DeleteCampaign
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.DeleteCampaignResponse>>
     */
    deleteCampaign: (
      requestData: thisProto.DeleteCampaignRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.DeleteCampaignResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Campaigns/DeleteCampaign',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteCampaignRequest,
        responseClass: thisProto.DeleteCampaignResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Campaigns/ListCampaigns
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListCampaignsResponse>>
     */
    listCampaigns: (
      requestData: thisProto.ListCampaignsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListCampaignsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Campaigns/ListCampaigns',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListCampaignsRequest,
        responseClass: thisProto.ListCampaignsResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Campaigns/GetCampaignStatistics
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.CampaignStatistics>>
     */
    getCampaignStatistics: (
      requestData: thisProto.GetCampaignStatisticsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.CampaignStatistics>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Campaigns/GetCampaignStatistics',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetCampaignStatisticsRequest,
        responseClass: thisProto.CampaignStatistics
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Campaigns/ListCampaignCalls
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListCampaignCallsResponse>>
     */
    listCampaignCalls: (
      requestData: thisProto.ListCampaignCallsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListCampaignCallsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Campaigns/ListCampaignCalls',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListCampaignCallsRequest,
        responseClass: thisProto.ListCampaignCallsResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Campaigns/StartCampaign
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Campaign>>
     */
    startCampaign: (
      requestData: thisProto.StartCampaignRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Campaign>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Campaigns/StartCampaign',
        requestData,
        requestMetadata,
        requestClass: thisProto.StartCampaignRequest,
        responseClass: thisProto.Campaign
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Campaigns/StopCampaign
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Campaign>>
     */
    stopCampaign: (
      requestData: thisProto.StopCampaignRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Campaign>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Campaigns/StopCampaign',
        requestData,
        requestMetadata,
        requestClass: thisProto.StopCampaignRequest,
        responseClass: thisProto.Campaign
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Campaigns/HardStopCampaign
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Campaign>>
     */
    hardStopCampaign: (
      requestData: thisProto.HardStopCampaignRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Campaign>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Campaigns/HardStopCampaign',
        requestData,
        requestMetadata,
        requestClass: thisProto.HardStopCampaignRequest,
        responseClass: thisProto.Campaign
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Campaigns/ResumeCampaign
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Campaign>>
     */
    resumeCampaign: (
      requestData: thisProto.ResumeCampaignRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Campaign>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Campaigns/ResumeCampaign',
        requestData,
        requestMetadata,
        requestClass: thisProto.ResumeCampaignRequest,
        responseClass: thisProto.Campaign
      });
    },
    /**
     * Server streaming: /ondewo.vtsi.Campaigns/StreamCampaignStatus
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.StreamCampaignStatusResponse>>
     */
    streamCampaignStatus: (
      requestData: thisProto.StreamCampaignStatusRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.StreamCampaignStatusResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/ondewo.vtsi.Campaigns/StreamCampaignStatus',
        requestData,
        requestMetadata,
        requestClass: thisProto.StreamCampaignStatusRequest,
        responseClass: thisProto.StreamCampaignStatusResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Campaigns/GetCampaignCall
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.CampaignCall>>
     */
    getCampaignCall: (
      requestData: thisProto.GetCampaignCallRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.CampaignCall>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Campaigns/GetCampaignCall',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetCampaignCallRequest,
        responseClass: thisProto.CampaignCall
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Campaigns/CancelCampaignCalls
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.CancelCampaignCallsResponse>>
     */
    cancelCampaignCalls: (
      requestData: thisProto.CancelCampaignCallsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.CancelCampaignCallsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Campaigns/CancelCampaignCalls',
        requestData,
        requestMetadata,
        requestClass: thisProto.CancelCampaignCallsRequest,
        responseClass: thisProto.CancelCampaignCallsResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Campaigns/RetryCampaignCalls
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RetryCampaignCallsResponse>>
     */
    retryCampaignCalls: (
      requestData: thisProto.RetryCampaignCallsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RetryCampaignCallsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Campaigns/RetryCampaignCalls',
        requestData,
        requestMetadata,
        requestClass: thisProto.RetryCampaignCallsRequest,
        responseClass: thisProto.RetryCampaignCallsResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Campaigns/CloneCampaign
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Campaign>>
     */
    cloneCampaign: (
      requestData: thisProto.CloneCampaignRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Campaign>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Campaigns/CloneCampaign',
        requestData,
        requestMetadata,
        requestClass: thisProto.CloneCampaignRequest,
        responseClass: thisProto.Campaign
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_CAMPAIGNS_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('ondewo.vtsi.Campaigns', settings);
  }

  /**
   * Unary call @/ondewo.vtsi.Campaigns/CreateCampaign
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Campaign>
   */
  createCampaign(
    requestData: thisProto.CreateCampaignRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Campaign> {
    return this.$raw
      .createCampaign(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Campaigns/GetCampaign
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Campaign>
   */
  getCampaign(
    requestData: thisProto.GetCampaignRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Campaign> {
    return this.$raw
      .getCampaign(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Campaigns/UpdateCampaign
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Campaign>
   */
  updateCampaign(
    requestData: thisProto.UpdateCampaignRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Campaign> {
    return this.$raw
      .updateCampaign(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Campaigns/DeleteCampaign
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.DeleteCampaignResponse>
   */
  deleteCampaign(
    requestData: thisProto.DeleteCampaignRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.DeleteCampaignResponse> {
    return this.$raw
      .deleteCampaign(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Campaigns/ListCampaigns
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListCampaignsResponse>
   */
  listCampaigns(
    requestData: thisProto.ListCampaignsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListCampaignsResponse> {
    return this.$raw
      .listCampaigns(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Campaigns/GetCampaignStatistics
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.CampaignStatistics>
   */
  getCampaignStatistics(
    requestData: thisProto.GetCampaignStatisticsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.CampaignStatistics> {
    return this.$raw
      .getCampaignStatistics(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Campaigns/ListCampaignCalls
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListCampaignCallsResponse>
   */
  listCampaignCalls(
    requestData: thisProto.ListCampaignCallsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListCampaignCallsResponse> {
    return this.$raw
      .listCampaignCalls(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Campaigns/StartCampaign
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Campaign>
   */
  startCampaign(
    requestData: thisProto.StartCampaignRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Campaign> {
    return this.$raw
      .startCampaign(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Campaigns/StopCampaign
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Campaign>
   */
  stopCampaign(
    requestData: thisProto.StopCampaignRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Campaign> {
    return this.$raw
      .stopCampaign(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Campaigns/HardStopCampaign
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Campaign>
   */
  hardStopCampaign(
    requestData: thisProto.HardStopCampaignRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Campaign> {
    return this.$raw
      .hardStopCampaign(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Campaigns/ResumeCampaign
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Campaign>
   */
  resumeCampaign(
    requestData: thisProto.ResumeCampaignRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Campaign> {
    return this.$raw
      .resumeCampaign(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Server streaming @/ondewo.vtsi.Campaigns/StreamCampaignStatus
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.StreamCampaignStatusResponse>
   */
  streamCampaignStatus(
    requestData: thisProto.StreamCampaignStatusRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.StreamCampaignStatusResponse> {
    return this.$raw
      .streamCampaignStatus(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Campaigns/GetCampaignCall
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.CampaignCall>
   */
  getCampaignCall(
    requestData: thisProto.GetCampaignCallRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.CampaignCall> {
    return this.$raw
      .getCampaignCall(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Campaigns/CancelCampaignCalls
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.CancelCampaignCallsResponse>
   */
  cancelCampaignCalls(
    requestData: thisProto.CancelCampaignCallsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.CancelCampaignCallsResponse> {
    return this.$raw
      .cancelCampaignCalls(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Campaigns/RetryCampaignCalls
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RetryCampaignCallsResponse>
   */
  retryCampaignCalls(
    requestData: thisProto.RetryCampaignCallsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RetryCampaignCallsResponse> {
    return this.$raw
      .retryCampaignCalls(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Campaigns/CloneCampaign
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Campaign>
   */
  cloneCampaign(
    requestData: thisProto.CloneCampaignRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Campaign> {
    return this.$raw
      .cloneCampaign(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
