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
import * as thisProto from './projects.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import { GRPC_PROJECTS_CLIENT_SETTINGS } from './projects.pbconf';
/**
 * Service client implementation for ondewo.vtsi.Projects
 */
@Injectable({ providedIn: 'any' })
export class ProjectsClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /ondewo.vtsi.Projects/CreateVtsiProject
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.CreateVtsiProjectResponse>>
     */
    createVtsiProject: (
      requestData: thisProto.CreateVtsiProjectRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.CreateVtsiProjectResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Projects/CreateVtsiProject',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateVtsiProjectRequest,
        responseClass: thisProto.CreateVtsiProjectResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Projects/GetVtsiProject
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.VtsiProject>>
     */
    getVtsiProject: (
      requestData: thisProto.GetVtsiProjectRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.VtsiProject>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Projects/GetVtsiProject',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetVtsiProjectRequest,
        responseClass: thisProto.VtsiProject
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Projects/UpdateVtsiProject
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.UpdateVtsiProjectResponse>>
     */
    updateVtsiProject: (
      requestData: thisProto.UpdateVtsiProjectRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.UpdateVtsiProjectResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Projects/UpdateVtsiProject',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateVtsiProjectRequest,
        responseClass: thisProto.UpdateVtsiProjectResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Projects/DeleteVtsiProject
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.DeleteVtsiProjectResponse>>
     */
    deleteVtsiProject: (
      requestData: thisProto.DeleteVtsiProjectRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.DeleteVtsiProjectResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Projects/DeleteVtsiProject',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteVtsiProjectRequest,
        responseClass: thisProto.DeleteVtsiProjectResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Projects/DeployVtsiProject
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.DeployVtsiProjectResponse>>
     */
    deployVtsiProject: (
      requestData: thisProto.DeployVtsiProjectRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.DeployVtsiProjectResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Projects/DeployVtsiProject',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeployVtsiProjectRequest,
        responseClass: thisProto.DeployVtsiProjectResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Projects/UndeployVtsiProject
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.UndeployVtsiProjectResponse>>
     */
    undeployVtsiProject: (
      requestData: thisProto.UndeployVtsiProjectRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.UndeployVtsiProjectResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Projects/UndeployVtsiProject',
        requestData,
        requestMetadata,
        requestClass: thisProto.UndeployVtsiProjectRequest,
        responseClass: thisProto.UndeployVtsiProjectResponse
      });
    },
    /**
     * Unary call: /ondewo.vtsi.Projects/ListVtsiProjects
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListVtsiProjectsResponse>>
     */
    listVtsiProjects: (
      requestData: thisProto.ListVtsiProjectsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListVtsiProjectsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.vtsi.Projects/ListVtsiProjects',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListVtsiProjectsRequest,
        responseClass: thisProto.ListVtsiProjectsResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_PROJECTS_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('ondewo.vtsi.Projects', settings);
  }

  /**
   * Unary call @/ondewo.vtsi.Projects/CreateVtsiProject
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.CreateVtsiProjectResponse>
   */
  createVtsiProject(
    requestData: thisProto.CreateVtsiProjectRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.CreateVtsiProjectResponse> {
    return this.$raw
      .createVtsiProject(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Projects/GetVtsiProject
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.VtsiProject>
   */
  getVtsiProject(
    requestData: thisProto.GetVtsiProjectRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.VtsiProject> {
    return this.$raw
      .getVtsiProject(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Projects/UpdateVtsiProject
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UpdateVtsiProjectResponse>
   */
  updateVtsiProject(
    requestData: thisProto.UpdateVtsiProjectRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.UpdateVtsiProjectResponse> {
    return this.$raw
      .updateVtsiProject(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Projects/DeleteVtsiProject
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.DeleteVtsiProjectResponse>
   */
  deleteVtsiProject(
    requestData: thisProto.DeleteVtsiProjectRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.DeleteVtsiProjectResponse> {
    return this.$raw
      .deleteVtsiProject(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Projects/DeployVtsiProject
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.DeployVtsiProjectResponse>
   */
  deployVtsiProject(
    requestData: thisProto.DeployVtsiProjectRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.DeployVtsiProjectResponse> {
    return this.$raw
      .deployVtsiProject(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Projects/UndeployVtsiProject
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UndeployVtsiProjectResponse>
   */
  undeployVtsiProject(
    requestData: thisProto.UndeployVtsiProjectRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.UndeployVtsiProjectResponse> {
    return this.$raw
      .undeployVtsiProject(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.vtsi.Projects/ListVtsiProjects
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListVtsiProjectsResponse>
   */
  listVtsiProjects(
    requestData: thisProto.ListVtsiProjectsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListVtsiProjectsResponse> {
    return this.$raw
      .listVtsiProjects(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
