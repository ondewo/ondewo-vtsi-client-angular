import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './call-log.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
/**
 * Service client implementation for ondewo.vtsi.VoipCallLogs
 */
export declare class VoipCallLogsClient {
    private handler;
    private client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw: {
        /**
         * Unary RPC for /ondewo.vtsi.VoipCallLogs/GetVoipLog
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetVoipLogResponse>>
         */
        getVoipLog: (requestData: thisProto.GetVoipLogRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetVoipLogResponse>>;
        /**
         * Unary RPC for /ondewo.vtsi.VoipCallLogs/ActivateSaveCallLogs
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.SaveCallLogsResponse>>
         */
        activateSaveCallLogs: (requestData: googleProtobuf000.Empty, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.SaveCallLogsResponse>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Unary RPC for /ondewo.vtsi.VoipCallLogs/GetVoipLog
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetVoipLogResponse>
     */
    getVoipLog(requestData: thisProto.GetVoipLogRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.GetVoipLogResponse>;
    /**
     * Unary RPC for /ondewo.vtsi.VoipCallLogs/ActivateSaveCallLogs
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SaveCallLogsResponse>
     */
    activateSaveCallLogs(requestData: googleProtobuf000.Empty, requestMetadata?: GrpcMetadata): Observable<thisProto.SaveCallLogsResponse>;
}
