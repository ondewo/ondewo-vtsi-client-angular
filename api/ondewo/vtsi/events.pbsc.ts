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
import * as thisProto from './events.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as ondewoSip004 from '../../ondewo/sip/sip.pb';
import * as ondewoVtsi005 from '../../ondewo/vtsi/campaigns.pb';
import { GRPC_EVENTS_CLIENT_SETTINGS } from './events.pbconf';
/**
 * Service client implementation for ondewo.vtsi.Events
 */
@Injectable({ providedIn: 'any' })
export class EventsClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /ondewo.vtsi.Events/CreateVtsiEventSubscription
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.VtsiEventSubscription>>
     */
    createVtsiEventSubscription: (
      requestData: thisProto.CreateVtsiEventSubscriptionRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.VtsiEventSubscription>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Events/CreateVtsiEventSubscription',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateVtsiEventSubscriptionRequest,
        responseClass: thisProto.VtsiEventSubscription
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Events/GetVtsiEventSubscription
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.VtsiEventSubscription>>
     */
    getVtsiEventSubscription: (
      requestData: thisProto.GetVtsiEventSubscriptionRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.VtsiEventSubscription>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Events/GetVtsiEventSubscription',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetVtsiEventSubscriptionRequest,
        responseClass: thisProto.VtsiEventSubscription
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Events/UpdateVtsiEventSubscription
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.VtsiEventSubscription>>
     */
    updateVtsiEventSubscription: (
      requestData: thisProto.UpdateVtsiEventSubscriptionRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.VtsiEventSubscription>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Events/UpdateVtsiEventSubscription',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateVtsiEventSubscriptionRequest,
        responseClass: thisProto.VtsiEventSubscription
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Events/DeleteVtsiEventSubscription
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.DeleteVtsiEventSubscriptionResponse>>
     */
    deleteVtsiEventSubscription: (
      requestData: thisProto.DeleteVtsiEventSubscriptionRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.DeleteVtsiEventSubscriptionResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Events/DeleteVtsiEventSubscription',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteVtsiEventSubscriptionRequest,
        responseClass: thisProto.DeleteVtsiEventSubscriptionResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Events/ListVtsiEventSubscriptions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListVtsiEventSubscriptionsResponse>>
     */
    listVtsiEventSubscriptions: (
      requestData: thisProto.ListVtsiEventSubscriptionsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListVtsiEventSubscriptionsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Events/ListVtsiEventSubscriptions',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListVtsiEventSubscriptionsRequest,
        responseClass: thisProto.ListVtsiEventSubscriptionsResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Events/CreateWebhook
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Webhook>>
     */
    createWebhook: (
      requestData: thisProto.CreateWebhookRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Webhook>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Events/CreateWebhook',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateWebhookRequest,
        responseClass: thisProto.Webhook
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Events/GetWebhook
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Webhook>>
     */
    getWebhook: (
      requestData: thisProto.GetWebhookRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Webhook>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Events/GetWebhook',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetWebhookRequest,
        responseClass: thisProto.Webhook
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Events/UpdateWebhook
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Webhook>>
     */
    updateWebhook: (
      requestData: thisProto.UpdateWebhookRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Webhook>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Events/UpdateWebhook',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateWebhookRequest,
        responseClass: thisProto.Webhook
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Events/DeleteWebhook
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.DeleteWebhookResponse>>
     */
    deleteWebhook: (
      requestData: thisProto.DeleteWebhookRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.DeleteWebhookResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Events/DeleteWebhook',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteWebhookRequest,
        responseClass: thisProto.DeleteWebhookResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Events/ListWebhooks
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListWebhooksResponse>>
     */
    listWebhooks: (
      requestData: thisProto.ListWebhooksRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListWebhooksResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Events/ListWebhooks',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListWebhooksRequest,
        responseClass: thisProto.ListWebhooksResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Events/TestWebhook
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.TestWebhookResponse>>
     */
    testWebhook: (
      requestData: thisProto.TestWebhookRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.TestWebhookResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Events/TestWebhook',
        requestData,
        requestMetadata,
        requestClass: thisProto.TestWebhookRequest,
        responseClass: thisProto.TestWebhookResponse
      });
    },
    /**
     * Server streaming: /ondewo.vtsi.Events/SubscribeVtsiEvents
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.SubscribeVtsiEventsResponse>>
     */
    subscribeVtsiEvents: (
      requestData: thisProto.SubscribeVtsiEventsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.SubscribeVtsiEventsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/ondewo.vtsi.Events/SubscribeVtsiEvents',
        requestData,
        requestMetadata,
        requestClass: thisProto.SubscribeVtsiEventsRequest,
        responseClass: thisProto.SubscribeVtsiEventsResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_EVENTS_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('ondewo.vtsi.Events', settings);
  }

  /**
   * Unary call @/ondewo.vtsi.Events/CreateVtsiEventSubscription
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.VtsiEventSubscription>
   */
  createVtsiEventSubscription(
    requestData: thisProto.CreateVtsiEventSubscriptionRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.VtsiEventSubscription> {
    return this.$raw
      .createVtsiEventSubscription(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Events/GetVtsiEventSubscription
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.VtsiEventSubscription>
   */
  getVtsiEventSubscription(
    requestData: thisProto.GetVtsiEventSubscriptionRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.VtsiEventSubscription> {
    return this.$raw
      .getVtsiEventSubscription(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Events/UpdateVtsiEventSubscription
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.VtsiEventSubscription>
   */
  updateVtsiEventSubscription(
    requestData: thisProto.UpdateVtsiEventSubscriptionRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.VtsiEventSubscription> {
    return this.$raw
      .updateVtsiEventSubscription(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Events/DeleteVtsiEventSubscription
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.DeleteVtsiEventSubscriptionResponse>
   */
  deleteVtsiEventSubscription(
    requestData: thisProto.DeleteVtsiEventSubscriptionRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.DeleteVtsiEventSubscriptionResponse> {
    return this.$raw
      .deleteVtsiEventSubscription(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Events/ListVtsiEventSubscriptions
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListVtsiEventSubscriptionsResponse>
   */
  listVtsiEventSubscriptions(
    requestData: thisProto.ListVtsiEventSubscriptionsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListVtsiEventSubscriptionsResponse> {
    return this.$raw
      .listVtsiEventSubscriptions(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Events/CreateWebhook
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Webhook>
   */
  createWebhook(
    requestData: thisProto.CreateWebhookRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Webhook> {
    return this.$raw
      .createWebhook(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Events/GetWebhook
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Webhook>
   */
  getWebhook(
    requestData: thisProto.GetWebhookRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Webhook> {
    return this.$raw
      .getWebhook(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Events/UpdateWebhook
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Webhook>
   */
  updateWebhook(
    requestData: thisProto.UpdateWebhookRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Webhook> {
    return this.$raw
      .updateWebhook(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Events/DeleteWebhook
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.DeleteWebhookResponse>
   */
  deleteWebhook(
    requestData: thisProto.DeleteWebhookRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.DeleteWebhookResponse> {
    return this.$raw
      .deleteWebhook(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Events/ListWebhooks
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListWebhooksResponse>
   */
  listWebhooks(
    requestData: thisProto.ListWebhooksRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListWebhooksResponse> {
    return this.$raw
      .listWebhooks(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Events/TestWebhook
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.TestWebhookResponse>
   */
  testWebhook(
    requestData: thisProto.TestWebhookRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.TestWebhookResponse> {
    return this.$raw
      .testWebhook(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Server streaming @/ondewo.vtsi.Events/SubscribeVtsiEvents
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.SubscribeVtsiEventsResponse>
   */
  subscribeVtsiEvents(
    requestData: thisProto.SubscribeVtsiEventsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.SubscribeVtsiEventsResponse> {
    return this.$raw
      .subscribeVtsiEvents(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
