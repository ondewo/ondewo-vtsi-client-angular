import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './projects.pb';
import * as i0 from "@angular/core";
/**
 * Service client implementation for ondewo.vtsi.Projects
 */
export declare class ProjectsClient {
    private handler;
    private client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw: {
        /**
         * Unary call: /ondewo.vtsi.Projects/CreateVtsiProject
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.CreateVtsiProjectResponse>>
         */
        createVtsiProject: (requestData: thisProto.CreateVtsiProjectRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.CreateVtsiProjectResponse>>;
        /**
         * Unary call: /ondewo.vtsi.Projects/GetVtsiProject
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.VtsiProject>>
         */
        getVtsiProject: (requestData: thisProto.GetVtsiProjectRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.VtsiProject>>;
        /**
         * Unary call: /ondewo.vtsi.Projects/UpdateVtsiProject
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.UpdateVtsiProjectResponse>>
         */
        updateVtsiProject: (requestData: thisProto.UpdateVtsiProjectRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.UpdateVtsiProjectResponse>>;
        /**
         * Unary call: /ondewo.vtsi.Projects/DeleteVtsiProject
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.DeleteVtsiProjectResponse>>
         */
        deleteVtsiProject: (requestData: thisProto.DeleteVtsiProjectRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.DeleteVtsiProjectResponse>>;
        /**
         * Unary call: /ondewo.vtsi.Projects/DeployVtsiProject
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.DeployVtsiProjectResponse>>
         */
        deployVtsiProject: (requestData: thisProto.DeployVtsiProjectRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.DeployVtsiProjectResponse>>;
        /**
         * Unary call: /ondewo.vtsi.Projects/UndeployVtsiProject
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.UndeployVtsiProjectResponse>>
         */
        undeployVtsiProject: (requestData: thisProto.UndeployVtsiProjectRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.UndeployVtsiProjectResponse>>;
        /**
         * Unary call: /ondewo.vtsi.Projects/ListVtsiProjects
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListVtsiProjectsResponse>>
         */
        listVtsiProjects: (requestData: thisProto.ListVtsiProjectsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListVtsiProjectsResponse>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Unary call @/ondewo.vtsi.Projects/CreateVtsiProject
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.CreateVtsiProjectResponse>
     */
    createVtsiProject(requestData: thisProto.CreateVtsiProjectRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.CreateVtsiProjectResponse>;
    /**
     * Unary call @/ondewo.vtsi.Projects/GetVtsiProject
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.VtsiProject>
     */
    getVtsiProject(requestData: thisProto.GetVtsiProjectRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.VtsiProject>;
    /**
     * Unary call @/ondewo.vtsi.Projects/UpdateVtsiProject
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.UpdateVtsiProjectResponse>
     */
    updateVtsiProject(requestData: thisProto.UpdateVtsiProjectRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.UpdateVtsiProjectResponse>;
    /**
     * Unary call @/ondewo.vtsi.Projects/DeleteVtsiProject
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.DeleteVtsiProjectResponse>
     */
    deleteVtsiProject(requestData: thisProto.DeleteVtsiProjectRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.DeleteVtsiProjectResponse>;
    /**
     * Unary call @/ondewo.vtsi.Projects/DeployVtsiProject
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.DeployVtsiProjectResponse>
     */
    deployVtsiProject(requestData: thisProto.DeployVtsiProjectRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.DeployVtsiProjectResponse>;
    /**
     * Unary call @/ondewo.vtsi.Projects/UndeployVtsiProject
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.UndeployVtsiProjectResponse>
     */
    undeployVtsiProject(requestData: thisProto.UndeployVtsiProjectRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.UndeployVtsiProjectResponse>;
    /**
     * Unary call @/ondewo.vtsi.Projects/ListVtsiProjects
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListVtsiProjectsResponse>
     */
    listVtsiProjects(requestData: thisProto.ListVtsiProjectsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListVtsiProjectsResponse>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProjectsClient, [{ optional: true; }, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ProjectsClient>;
}
