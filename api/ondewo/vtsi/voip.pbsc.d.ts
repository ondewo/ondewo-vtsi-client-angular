import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './voip.pb';
import * as i0 from "@angular/core";
/**
 * Service client implementation for ondewo.vtsi.VoipSessions
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
         * Unary call: /ondewo.vtsi.VoipSessions/RunManifest
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.RunManifestResponse>>
         */
        runManifest: (requestData: thisProto.ManifestRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.RunManifestResponse>>;
        /**
         * Unary call: /ondewo.vtsi.VoipSessions/RemoveManifest
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.RemoveManifestResponse>>
         */
        removeManifest: (requestData: thisProto.ManifestRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.RemoveManifestResponse>>;
        /**
         * Unary call: /ondewo.vtsi.VoipSessions/GetManifestIDs
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetManifestIDsResponse>>
         */
        getManifestIDs: (requestData: thisProto.GetManifestIDsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetManifestIDsResponse>>;
        /**
         * Unary call: /ondewo.vtsi.VoipSessions/StartCallInstance
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.StartCallInstanceResponse>>
         */
        startCallInstance: (requestData: thisProto.StartCallInstanceRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.StartCallInstanceResponse>>;
        /**
         * Unary call: /ondewo.vtsi.VoipSessions/StopCallInstance
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.StopCallInstanceResponse>>
         */
        stopCallInstance: (requestData: thisProto.StopCallInstanceRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.StopCallInstanceResponse>>;
        /**
         * Unary call: /ondewo.vtsi.VoipSessions/StartMultipleCallInstances
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.StartMultipleCallInstancesResponse>>
         */
        startMultipleCallInstances: (requestData: thisProto.StartMultipleCallInstancesRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.StartMultipleCallInstancesResponse>>;
        /**
         * Unary call: /ondewo.vtsi.VoipSessions/GetCallIDs
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetCallIDsResponse>>
         */
        getCallIDs: (requestData: thisProto.GetCallIDsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetCallIDsResponse>>;
        /**
         * Unary call: /ondewo.vtsi.VoipSessions/GetSessionID
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetSessionIDResponse>>
         */
        getSessionID: (requestData: thisProto.GetSessionIDRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetSessionIDResponse>>;
        /**
         * Unary call: /ondewo.vtsi.VoipSessions/ShutdownUnhealthyCalls
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ShutdownUnhealthyCallsResponse>>
         */
        shutdownUnhealthyCalls: (requestData: thisProto.ShutdownUnhealthyCallsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ShutdownUnhealthyCallsResponse>>;
        /**
         * Unary call: /ondewo.vtsi.VoipSessions/GetManifestStatus
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.VoipManifestStatus>>
         */
        getManifestStatus: (requestData: thisProto.VoipManifestStatusRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.VoipManifestStatus>>;
        /**
         * Unary call: /ondewo.vtsi.VoipSessions/GetInstanceStatus
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.VoipStatus>>
         */
        getInstanceStatus: (requestData: thisProto.GetVoipStatusRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.VoipStatus>>;
        /**
         * Unary call: /ondewo.vtsi.VoipSessions/UpdateServicesStatus
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.UpdateServicesStatusResponse>>
         */
        updateServicesStatus: (requestData: thisProto.UpdateServicesStatusRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.UpdateServicesStatusResponse>>;
        /**
         * Unary call: /ondewo.vtsi.VoipSessions/DeployPreconditionForWorkingSetup
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.DeployPreconditionResponse>>
         */
        deployPreconditionForWorkingSetup: (requestData: thisProto.DeployPreconditionRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.DeployPreconditionResponse>>;
        /**
         * Unary call: /ondewo.vtsi.VoipSessions/GetAudioFile
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetAudioFileResponse>>
         */
        getAudioFile: (requestData: thisProto.GetAudioFileRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetAudioFileResponse>>;
        /**
         * Unary call: /ondewo.vtsi.VoipSessions/GetFullConversationAudioFile
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetFullConversationAudioFileResponse>>
         */
        getFullConversationAudioFile: (requestData: thisProto.GetFullConversationAudioFileRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetFullConversationAudioFileResponse>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Unary call @/ondewo.vtsi.VoipSessions/RunManifest
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.RunManifestResponse>
     */
    runManifest(requestData: thisProto.ManifestRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.RunManifestResponse>;
    /**
     * Unary call @/ondewo.vtsi.VoipSessions/RemoveManifest
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.RemoveManifestResponse>
     */
    removeManifest(requestData: thisProto.ManifestRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.RemoveManifestResponse>;
    /**
     * Unary call @/ondewo.vtsi.VoipSessions/GetManifestIDs
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetManifestIDsResponse>
     */
    getManifestIDs(requestData: thisProto.GetManifestIDsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.GetManifestIDsResponse>;
    /**
     * Unary call @/ondewo.vtsi.VoipSessions/StartCallInstance
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.StartCallInstanceResponse>
     */
    startCallInstance(requestData: thisProto.StartCallInstanceRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.StartCallInstanceResponse>;
    /**
     * Unary call @/ondewo.vtsi.VoipSessions/StopCallInstance
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.StopCallInstanceResponse>
     */
    stopCallInstance(requestData: thisProto.StopCallInstanceRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.StopCallInstanceResponse>;
    /**
     * Unary call @/ondewo.vtsi.VoipSessions/StartMultipleCallInstances
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.StartMultipleCallInstancesResponse>
     */
    startMultipleCallInstances(requestData: thisProto.StartMultipleCallInstancesRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.StartMultipleCallInstancesResponse>;
    /**
     * Unary call @/ondewo.vtsi.VoipSessions/GetCallIDs
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetCallIDsResponse>
     */
    getCallIDs(requestData: thisProto.GetCallIDsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.GetCallIDsResponse>;
    /**
     * Unary call @/ondewo.vtsi.VoipSessions/GetSessionID
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetSessionIDResponse>
     */
    getSessionID(requestData: thisProto.GetSessionIDRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.GetSessionIDResponse>;
    /**
     * Unary call @/ondewo.vtsi.VoipSessions/ShutdownUnhealthyCalls
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ShutdownUnhealthyCallsResponse>
     */
    shutdownUnhealthyCalls(requestData: thisProto.ShutdownUnhealthyCallsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ShutdownUnhealthyCallsResponse>;
    /**
     * Unary call @/ondewo.vtsi.VoipSessions/GetManifestStatus
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.VoipManifestStatus>
     */
    getManifestStatus(requestData: thisProto.VoipManifestStatusRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.VoipManifestStatus>;
    /**
     * Unary call @/ondewo.vtsi.VoipSessions/GetInstanceStatus
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.VoipStatus>
     */
    getInstanceStatus(requestData: thisProto.GetVoipStatusRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.VoipStatus>;
    /**
     * Unary call @/ondewo.vtsi.VoipSessions/UpdateServicesStatus
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.UpdateServicesStatusResponse>
     */
    updateServicesStatus(requestData: thisProto.UpdateServicesStatusRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.UpdateServicesStatusResponse>;
    /**
     * Unary call @/ondewo.vtsi.VoipSessions/DeployPreconditionForWorkingSetup
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.DeployPreconditionResponse>
     */
    deployPreconditionForWorkingSetup(requestData: thisProto.DeployPreconditionRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.DeployPreconditionResponse>;
    /**
     * Unary call @/ondewo.vtsi.VoipSessions/GetAudioFile
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetAudioFileResponse>
     */
    getAudioFile(requestData: thisProto.GetAudioFileRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.GetAudioFileResponse>;
    /**
     * Unary call @/ondewo.vtsi.VoipSessions/GetFullConversationAudioFile
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetFullConversationAudioFileResponse>
     */
    getFullConversationAudioFile(requestData: thisProto.GetFullConversationAudioFileRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.GetFullConversationAudioFileResponse>;
    static ɵfac: i0.ɵɵFactoryDeclaration<VoipSessionsClient, [{ optional: true; }, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<VoipSessionsClient>;
}
