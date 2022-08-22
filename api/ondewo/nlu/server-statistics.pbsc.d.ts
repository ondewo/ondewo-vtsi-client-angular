import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './server-statistics.pb';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as ondewoNlu004 from '../../ondewo/nlu/common.pb';
import * as i0 from "@angular/core";
/**
 * Service client implementation for ondewo.nlu.ServerStatistics
 */
export declare class ServerStatisticsClient {
    private handler;
    private client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw: {
        /**
         * Unary call: /ondewo.nlu.ServerStatistics/GetProjectCount
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<ondewoNlu004.StatResponse>>
         */
        getProjectCount: (requestData: googleProtobuf003.Empty, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<ondewoNlu004.StatResponse>>;
        /**
         * Unary call: /ondewo.nlu.ServerStatistics/GetUserProjectCount
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<ondewoNlu004.StatResponse>>
         */
        getUserProjectCount: (requestData: thisProto.GetUserProjectCountRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<ondewoNlu004.StatResponse>>;
        /**
         * Unary call: /ondewo.nlu.ServerStatistics/GetUserCount
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<ondewoNlu004.StatResponse>>
         */
        getUserCount: (requestData: googleProtobuf003.Empty, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<ondewoNlu004.StatResponse>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Unary call @/ondewo.nlu.ServerStatistics/GetProjectCount
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<ondewoNlu004.StatResponse>
     */
    getProjectCount(requestData: googleProtobuf003.Empty, requestMetadata?: GrpcMetadata): Observable<ondewoNlu004.StatResponse>;
    /**
     * Unary call @/ondewo.nlu.ServerStatistics/GetUserProjectCount
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<ondewoNlu004.StatResponse>
     */
    getUserProjectCount(requestData: thisProto.GetUserProjectCountRequest, requestMetadata?: GrpcMetadata): Observable<ondewoNlu004.StatResponse>;
    /**
     * Unary call @/ondewo.nlu.ServerStatistics/GetUserCount
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<ondewoNlu004.StatResponse>
     */
    getUserCount(requestData: googleProtobuf003.Empty, requestMetadata?: GrpcMetadata): Observable<ondewoNlu004.StatResponse>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ServerStatisticsClient, [{ optional: true; }, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ServerStatisticsClient>;
}
