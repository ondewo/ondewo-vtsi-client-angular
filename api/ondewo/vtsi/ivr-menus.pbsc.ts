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
import * as thisProto from './ivr-menus.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as ondewoNlu002 from '../../ondewo/nlu/intent.pb';
import * as ondewoSip003 from '../../ondewo/sip/sip.pb';
import * as ondewoVtsi004 from '../../ondewo/vtsi/call-configs.pb';
import * as ondewoVtsi005 from '../../ondewo/vtsi/campaigns.pb';
import * as ondewoVtsi006 from '../../ondewo/vtsi/projects.pb';
import * as googleProtobuf007 from '@ngx-grpc/well-known-types';
import * as ondewoNlu008 from '../../ondewo/nlu/context.pb';
import * as ondewoS2t009 from '../../ondewo/s2t/speech-to-text.pb';
import * as ondewoT2s010 from '../../ondewo/t2s/text-to-speech.pb';
import * as ondewoVtsi011 from '../../ondewo/vtsi/calls.pb';
import { GRPC_IVR_MENUS_CLIENT_SETTINGS } from './ivr-menus.pbconf';
/**
 * Service client implementation for ondewo.vtsi.IvrMenus
 */
@Injectable({ providedIn: 'any' })
export class IvrMenusClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /ondewo.vtsi.IvrMenus/CreateIvrMenu
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.IvrMenu>>
     */
    createIvrMenu: (
      requestData: thisProto.CreateIvrMenuRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.IvrMenu>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.IvrMenus/CreateIvrMenu',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateIvrMenuRequest,
        responseClass: thisProto.IvrMenu
      });
    },
    /**
     * Unary call: /ondewo.vtsi.IvrMenus/GetIvrMenu
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.IvrMenu>>
     */
    getIvrMenu: (
      requestData: thisProto.GetIvrMenuRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.IvrMenu>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.IvrMenus/GetIvrMenu',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetIvrMenuRequest,
        responseClass: thisProto.IvrMenu
      });
    },
    /**
     * Unary call: /ondewo.vtsi.IvrMenus/UpdateIvrMenu
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.IvrMenu>>
     */
    updateIvrMenu: (
      requestData: thisProto.UpdateIvrMenuRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.IvrMenu>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.IvrMenus/UpdateIvrMenu',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateIvrMenuRequest,
        responseClass: thisProto.IvrMenu
      });
    },
    /**
     * Unary call: /ondewo.vtsi.IvrMenus/DeleteIvrMenu
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.DeleteIvrMenuResponse>>
     */
    deleteIvrMenu: (
      requestData: thisProto.DeleteIvrMenuRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.DeleteIvrMenuResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.IvrMenus/DeleteIvrMenu',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteIvrMenuRequest,
        responseClass: thisProto.DeleteIvrMenuResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.IvrMenus/ListIvrMenus
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListIvrMenusResponse>>
     */
    listIvrMenus: (
      requestData: thisProto.ListIvrMenusRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListIvrMenusResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.IvrMenus/ListIvrMenus',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListIvrMenusRequest,
        responseClass: thisProto.ListIvrMenusResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.IvrMenus/ValidateIvrMenu
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ValidateIvrMenuResponse>>
     */
    validateIvrMenu: (
      requestData: thisProto.ValidateIvrMenuRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ValidateIvrMenuResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.IvrMenus/ValidateIvrMenu',
        requestData,
        requestMetadata,
        requestClass: thisProto.ValidateIvrMenuRequest,
        responseClass: thisProto.ValidateIvrMenuResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.IvrMenus/PublishIvrMenu
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.IvrMenu>>
     */
    publishIvrMenu: (
      requestData: thisProto.PublishIvrMenuRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.IvrMenu>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.IvrMenus/PublishIvrMenu',
        requestData,
        requestMetadata,
        requestClass: thisProto.PublishIvrMenuRequest,
        responseClass: thisProto.IvrMenu
      });
    },
    /**
     * Unary call: /ondewo.vtsi.IvrMenus/CloneIvrMenu
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.IvrMenu>>
     */
    cloneIvrMenu: (
      requestData: thisProto.CloneIvrMenuRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.IvrMenu>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.IvrMenus/CloneIvrMenu',
        requestData,
        requestMetadata,
        requestClass: thisProto.CloneIvrMenuRequest,
        responseClass: thisProto.IvrMenu
      });
    },
    /**
     * Unary call: /ondewo.vtsi.IvrMenus/ListIvrMenuRevisions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListIvrMenuRevisionsResponse>>
     */
    listIvrMenuRevisions: (
      requestData: thisProto.ListIvrMenuRevisionsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListIvrMenuRevisionsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.IvrMenus/ListIvrMenuRevisions',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListIvrMenuRevisionsRequest,
        responseClass: thisProto.ListIvrMenuRevisionsResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.IvrMenus/TestIvrMenu
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.IvrMenuTest>>
     */
    testIvrMenu: (
      requestData: thisProto.TestIvrMenuRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.IvrMenuTest>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.IvrMenus/TestIvrMenu',
        requestData,
        requestMetadata,
        requestClass: thisProto.TestIvrMenuRequest,
        responseClass: thisProto.IvrMenuTest
      });
    },
    /**
     * Unary call: /ondewo.vtsi.IvrMenus/GetIvrMenuTest
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.IvrMenuTest>>
     */
    getIvrMenuTest: (
      requestData: thisProto.GetIvrMenuTestRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.IvrMenuTest>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.IvrMenus/GetIvrMenuTest',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetIvrMenuTestRequest,
        responseClass: thisProto.IvrMenuTest
      });
    },
    /**
     * Unary call: /ondewo.vtsi.IvrMenus/GetIvrMenuDialplan
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.GetIvrMenuDialplanResponse>>
     */
    getIvrMenuDialplan: (
      requestData: thisProto.GetIvrMenuDialplanRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.GetIvrMenuDialplanResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.IvrMenus/GetIvrMenuDialplan',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetIvrMenuDialplanRequest,
        responseClass: thisProto.GetIvrMenuDialplanResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_IVR_MENUS_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('ondewo.vtsi.IvrMenus', settings);
  }

  /**
   * Unary call @/ondewo.vtsi.IvrMenus/CreateIvrMenu
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.IvrMenu>
   */
  createIvrMenu(
    requestData: thisProto.CreateIvrMenuRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.IvrMenu> {
    return this.$raw
      .createIvrMenu(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.IvrMenus/GetIvrMenu
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.IvrMenu>
   */
  getIvrMenu(
    requestData: thisProto.GetIvrMenuRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.IvrMenu> {
    return this.$raw
      .getIvrMenu(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.IvrMenus/UpdateIvrMenu
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.IvrMenu>
   */
  updateIvrMenu(
    requestData: thisProto.UpdateIvrMenuRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.IvrMenu> {
    return this.$raw
      .updateIvrMenu(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.IvrMenus/DeleteIvrMenu
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.DeleteIvrMenuResponse>
   */
  deleteIvrMenu(
    requestData: thisProto.DeleteIvrMenuRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.DeleteIvrMenuResponse> {
    return this.$raw
      .deleteIvrMenu(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.IvrMenus/ListIvrMenus
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListIvrMenusResponse>
   */
  listIvrMenus(
    requestData: thisProto.ListIvrMenusRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListIvrMenusResponse> {
    return this.$raw
      .listIvrMenus(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.IvrMenus/ValidateIvrMenu
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ValidateIvrMenuResponse>
   */
  validateIvrMenu(
    requestData: thisProto.ValidateIvrMenuRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ValidateIvrMenuResponse> {
    return this.$raw
      .validateIvrMenu(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.IvrMenus/PublishIvrMenu
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.IvrMenu>
   */
  publishIvrMenu(
    requestData: thisProto.PublishIvrMenuRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.IvrMenu> {
    return this.$raw
      .publishIvrMenu(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.IvrMenus/CloneIvrMenu
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.IvrMenu>
   */
  cloneIvrMenu(
    requestData: thisProto.CloneIvrMenuRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.IvrMenu> {
    return this.$raw
      .cloneIvrMenu(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.IvrMenus/ListIvrMenuRevisions
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListIvrMenuRevisionsResponse>
   */
  listIvrMenuRevisions(
    requestData: thisProto.ListIvrMenuRevisionsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListIvrMenuRevisionsResponse> {
    return this.$raw
      .listIvrMenuRevisions(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.IvrMenus/TestIvrMenu
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.IvrMenuTest>
   */
  testIvrMenu(
    requestData: thisProto.TestIvrMenuRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.IvrMenuTest> {
    return this.$raw
      .testIvrMenu(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.IvrMenus/GetIvrMenuTest
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.IvrMenuTest>
   */
  getIvrMenuTest(
    requestData: thisProto.GetIvrMenuTestRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.IvrMenuTest> {
    return this.$raw
      .getIvrMenuTest(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.IvrMenus/GetIvrMenuDialplan
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetIvrMenuDialplanResponse>
   */
  getIvrMenuDialplan(
    requestData: thisProto.GetIvrMenuDialplanRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.GetIvrMenuDialplanResponse> {
    return this.$raw
      .getIvrMenuDialplan(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
