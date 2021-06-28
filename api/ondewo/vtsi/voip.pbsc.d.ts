import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './voip.pb';
/**
 * Service client implementation for ondewo.nlu.VoipSessions
 */
export declare class VoipSessionsClient {
    private handler;
    private client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw: {
        /**
         * Unary RPC for /ondewo.nlu.VoipSessions/LoadManifest
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.VoipManifestResponse>>
         */
        loadManifest: (requestData: thisProto.VoipManifest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.VoipManifestResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.VoipSessions/RunManifest
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.RunManifestResponse>>
         */
        runManifest: (requestData: thisProto.ManifestRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.RunManifestResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.VoipSessions/RemoveManifest
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.RemoveManifestResponse>>
         */
        removeManifest: (requestData: thisProto.ManifestRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.RemoveManifestResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.VoipSessions/GetManifestIDs
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetManifestIDsResponse>>
         */
        getManifestIDs: (requestData: thisProto.GetManifestIDsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetManifestIDsResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.VoipSessions/StartCallInstance
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.StartCallInstanceResponse>>
         */
        startCallInstance: (requestData: thisProto.StartCallInstanceRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.StartCallInstanceResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.VoipSessions/StopCallInstance
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.StopCallInstanceResponse>>
         */
        stopCallInstance: (requestData: thisProto.StopCallInstanceRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.StopCallInstanceResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.VoipSessions/StartMultipleCallInstances
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.StartMultipleCallInstancesResponse>>
         */
        startMultipleCallInstances: (requestData: thisProto.StartMultipleCallInstancesRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.StartMultipleCallInstancesResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.VoipSessions/GetCallIDs
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetCallIDsResponse>>
         */
        getCallIDs: (requestData: thisProto.GetCallIDsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetCallIDsResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.VoipSessions/GetSessionID
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetSessionIDResponse>>
         */
        getSessionID: (requestData: thisProto.GetSessionIDRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetSessionIDResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.VoipSessions/ShutdownUnhealthyCalls
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ShutdownUnhealthyCallsResponse>>
         */
        shutdownUnhealthyCalls: (requestData: thisProto.ShutdownUnhealthyCallsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ShutdownUnhealthyCallsResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.VoipSessions/GetManifestStatus
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.VoipManifestStatus>>
         */
        getManifestStatus: (requestData: thisProto.VoipManifestStatusRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.VoipManifestStatus>>;
        /**
         * Unary RPC for /ondewo.nlu.VoipSessions/GetInstanceStatus
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.VoipStatus>>
         */
        getInstanceStatus: (requestData: thisProto.GetVoipStatusRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.VoipStatus>>;
        /**
         * Unary RPC for /ondewo.nlu.VoipSessions/UpdateServicesStatus
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.UpdateServicesStatusResponse>>
         */
        updateServicesStatus: (requestData: thisProto.UpdateServicesStatusRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.UpdateServicesStatusResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.VoipSessions/DeployPreconditionForWorkingSetup
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.DeployPreconditionResponse>>
         */
        deployPreconditionForWorkingSetup: (requestData: thisProto.DeployPreconditionRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.DeployPreconditionResponse>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Unary RPC for /ondewo.nlu.VoipSessions/LoadManifest
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.VoipManifestResponse>
     */
    loadManifest(requestData: thisProto.VoipManifest, requestMetadata?: GrpcMetadata): Observable<thisProto.VoipManifestResponse>;
    /**
     * Unary RPC for /ondewo.nlu.VoipSessions/RunManifest
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.RunManifestResponse>
     */
    runManifest(requestData: thisProto.ManifestRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.RunManifestResponse>;
    /**
     * Unary RPC for /ondewo.nlu.VoipSessions/RemoveManifest
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.RemoveManifestResponse>
     */
    removeManifest(requestData: thisProto.ManifestRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.RemoveManifestResponse>;
    /**
     * Unary RPC for /ondewo.nlu.VoipSessions/GetManifestIDs
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetManifestIDsResponse>
     */
    getManifestIDs(requestData: thisProto.GetManifestIDsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.GetManifestIDsResponse>;
    /**
     * Unary RPC for /ondewo.nlu.VoipSessions/StartCallInstance
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.StartCallInstanceResponse>
     */
    startCallInstance(requestData: thisProto.StartCallInstanceRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.StartCallInstanceResponse>;
    /**
     * Unary RPC for /ondewo.nlu.VoipSessions/StopCallInstance
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.StopCallInstanceResponse>
     */
    stopCallInstance(requestData: thisProto.StopCallInstanceRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.StopCallInstanceResponse>;
    /**
     * Unary RPC for /ondewo.nlu.VoipSessions/StartMultipleCallInstances
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.StartMultipleCallInstancesResponse>
     */
    startMultipleCallInstances(requestData: thisProto.StartMultipleCallInstancesRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.StartMultipleCallInstancesResponse>;
    /**
     * Unary RPC for /ondewo.nlu.VoipSessions/GetCallIDs
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetCallIDsResponse>
     */
    getCallIDs(requestData: thisProto.GetCallIDsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.GetCallIDsResponse>;
    /**
     * Unary RPC for /ondewo.nlu.VoipSessions/GetSessionID
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetSessionIDResponse>
     */
    getSessionID(requestData: thisProto.GetSessionIDRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.GetSessionIDResponse>;
    /**
     * Unary RPC for /ondewo.nlu.VoipSessions/ShutdownUnhealthyCalls
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ShutdownUnhealthyCallsResponse>
     */
    shutdownUnhealthyCalls(requestData: thisProto.ShutdownUnhealthyCallsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ShutdownUnhealthyCallsResponse>;
    /**
     * Unary RPC for /ondewo.nlu.VoipSessions/GetManifestStatus
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.VoipManifestStatus>
     */
    getManifestStatus(requestData: thisProto.VoipManifestStatusRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.VoipManifestStatus>;
    /**
     * Unary RPC for /ondewo.nlu.VoipSessions/GetInstanceStatus
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.VoipStatus>
     */
    getInstanceStatus(requestData: thisProto.GetVoipStatusRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.VoipStatus>;
    /**
     * Unary RPC for /ondewo.nlu.VoipSessions/UpdateServicesStatus
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.UpdateServicesStatusResponse>
     */
    updateServicesStatus(requestData: thisProto.UpdateServicesStatusRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.UpdateServicesStatusResponse>;
    /**
     * Unary RPC for /ondewo.nlu.VoipSessions/DeployPreconditionForWorkingSetup
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.DeployPreconditionResponse>
     */
    deployPreconditionForWorkingSetup(requestData: thisProto.DeployPreconditionRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.DeployPreconditionResponse>;
}
