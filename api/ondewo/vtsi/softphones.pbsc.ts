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
import * as thisProto from './softphones.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import * as ondewoVtsi003 from '../../ondewo/vtsi/projects.pb';
import { GRPC_SOFTPHONES_CLIENT_SETTINGS } from './softphones.pbconf';
/**
 * Service client implementation for ondewo.vtsi.Softphones
 */
@Injectable({ providedIn: 'any' })
export class SoftphonesClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /ondewo.vtsi.Softphones/CreateSoftphoneAccount
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.CreateSoftphoneAccountResponse>>
     */
    createSoftphoneAccount: (
      requestData: thisProto.CreateSoftphoneAccountRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.CreateSoftphoneAccountResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Softphones/CreateSoftphoneAccount',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateSoftphoneAccountRequest,
        responseClass: thisProto.CreateSoftphoneAccountResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Softphones/GetSoftphoneAccount
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.SoftphoneAccount>>
     */
    getSoftphoneAccount: (
      requestData: thisProto.GetSoftphoneAccountRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.SoftphoneAccount>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Softphones/GetSoftphoneAccount',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetSoftphoneAccountRequest,
        responseClass: thisProto.SoftphoneAccount
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Softphones/UpdateSoftphoneAccount
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.SoftphoneAccount>>
     */
    updateSoftphoneAccount: (
      requestData: thisProto.UpdateSoftphoneAccountRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.SoftphoneAccount>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Softphones/UpdateSoftphoneAccount',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateSoftphoneAccountRequest,
        responseClass: thisProto.SoftphoneAccount
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Softphones/DeleteSoftphoneAccount
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.DeleteSoftphoneAccountResponse>>
     */
    deleteSoftphoneAccount: (
      requestData: thisProto.DeleteSoftphoneAccountRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.DeleteSoftphoneAccountResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Softphones/DeleteSoftphoneAccount',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteSoftphoneAccountRequest,
        responseClass: thisProto.DeleteSoftphoneAccountResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Softphones/ListSoftphoneAccounts
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListSoftphoneAccountsResponse>>
     */
    listSoftphoneAccounts: (
      requestData: thisProto.ListSoftphoneAccountsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListSoftphoneAccountsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Softphones/ListSoftphoneAccounts',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListSoftphoneAccountsRequest,
        responseClass: thisProto.ListSoftphoneAccountsResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Softphones/RotateSoftphoneCredentials
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RotateSoftphoneCredentialsResponse>>
     */
    rotateSoftphoneCredentials: (
      requestData: thisProto.RotateSoftphoneCredentialsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RotateSoftphoneCredentialsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Softphones/RotateSoftphoneCredentials',
        requestData,
        requestMetadata,
        requestClass: thisProto.RotateSoftphoneCredentialsRequest,
        responseClass: thisProto.RotateSoftphoneCredentialsResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Softphones/ListSoftphoneCertificates
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListSoftphoneCertificatesResponse>>
     */
    listSoftphoneCertificates: (
      requestData: thisProto.ListSoftphoneCertificatesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListSoftphoneCertificatesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Softphones/ListSoftphoneCertificates',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListSoftphoneCertificatesRequest,
        responseClass: thisProto.ListSoftphoneCertificatesResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Softphones/GetSoftphoneCertificate
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.SoftphoneCertificate>>
     */
    getSoftphoneCertificate: (
      requestData: thisProto.GetSoftphoneCertificateRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.SoftphoneCertificate>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Softphones/GetSoftphoneCertificate',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetSoftphoneCertificateRequest,
        responseClass: thisProto.SoftphoneCertificate
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Softphones/RevokeSoftphoneCertificate
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.SoftphoneCertificate>>
     */
    revokeSoftphoneCertificate: (
      requestData: thisProto.RevokeSoftphoneCertificateRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.SoftphoneCertificate>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Softphones/RevokeSoftphoneCertificate',
        requestData,
        requestMetadata,
        requestClass: thisProto.RevokeSoftphoneCertificateRequest,
        responseClass: thisProto.SoftphoneCertificate
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Softphones/GetSoftphoneProvisioning
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.SoftphoneProvisioning>>
     */
    getSoftphoneProvisioning: (
      requestData: thisProto.GetSoftphoneProvisioningRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.SoftphoneProvisioning>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Softphones/GetSoftphoneProvisioning',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetSoftphoneProvisioningRequest,
        responseClass: thisProto.SoftphoneProvisioning
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_SOFTPHONES_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'ondewo.vtsi.Softphones',
      settings
    );
  }

  /**
   * Unary call @/ondewo.vtsi.Softphones/CreateSoftphoneAccount
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.CreateSoftphoneAccountResponse>
   */
  createSoftphoneAccount(
    requestData: thisProto.CreateSoftphoneAccountRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.CreateSoftphoneAccountResponse> {
    return this.$raw
      .createSoftphoneAccount(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Softphones/GetSoftphoneAccount
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.SoftphoneAccount>
   */
  getSoftphoneAccount(
    requestData: thisProto.GetSoftphoneAccountRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.SoftphoneAccount> {
    return this.$raw
      .getSoftphoneAccount(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Softphones/UpdateSoftphoneAccount
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.SoftphoneAccount>
   */
  updateSoftphoneAccount(
    requestData: thisProto.UpdateSoftphoneAccountRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.SoftphoneAccount> {
    return this.$raw
      .updateSoftphoneAccount(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Softphones/DeleteSoftphoneAccount
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.DeleteSoftphoneAccountResponse>
   */
  deleteSoftphoneAccount(
    requestData: thisProto.DeleteSoftphoneAccountRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.DeleteSoftphoneAccountResponse> {
    return this.$raw
      .deleteSoftphoneAccount(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Softphones/ListSoftphoneAccounts
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListSoftphoneAccountsResponse>
   */
  listSoftphoneAccounts(
    requestData: thisProto.ListSoftphoneAccountsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListSoftphoneAccountsResponse> {
    return this.$raw
      .listSoftphoneAccounts(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Softphones/RotateSoftphoneCredentials
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RotateSoftphoneCredentialsResponse>
   */
  rotateSoftphoneCredentials(
    requestData: thisProto.RotateSoftphoneCredentialsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RotateSoftphoneCredentialsResponse> {
    return this.$raw
      .rotateSoftphoneCredentials(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Softphones/ListSoftphoneCertificates
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListSoftphoneCertificatesResponse>
   */
  listSoftphoneCertificates(
    requestData: thisProto.ListSoftphoneCertificatesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListSoftphoneCertificatesResponse> {
    return this.$raw
      .listSoftphoneCertificates(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Softphones/GetSoftphoneCertificate
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.SoftphoneCertificate>
   */
  getSoftphoneCertificate(
    requestData: thisProto.GetSoftphoneCertificateRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.SoftphoneCertificate> {
    return this.$raw
      .getSoftphoneCertificate(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Softphones/RevokeSoftphoneCertificate
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.SoftphoneCertificate>
   */
  revokeSoftphoneCertificate(
    requestData: thisProto.RevokeSoftphoneCertificateRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.SoftphoneCertificate> {
    return this.$raw
      .revokeSoftphoneCertificate(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Softphones/GetSoftphoneProvisioning
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.SoftphoneProvisioning>
   */
  getSoftphoneProvisioning(
    requestData: thisProto.GetSoftphoneProvisioningRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.SoftphoneProvisioning> {
    return this.$raw
      .getSoftphoneProvisioning(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
