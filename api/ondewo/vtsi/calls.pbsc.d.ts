import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './calls.pb';
import * as i0 from "@angular/core";
/**
 * Service client implementation for ondewo.vtsi.Calls
 */
export declare class CallsClient {
    private handler;
    private client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw: {
        /**
         * Unary call: /ondewo.vtsi.Calls/StartCaller
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.StartCallerResponse>>
         */
        startCaller: (requestData: thisProto.StartCallerRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.StartCallerResponse>>;
        /**
         * Unary call: /ondewo.vtsi.Calls/StartCallers
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.StartCallersResponse>>
         */
        startCallers: (requestData: thisProto.StartCallersRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.StartCallersResponse>>;
        /**
         * Unary call: /ondewo.vtsi.Calls/StartListener
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.StartListenerResponse>>
         */
        startListener: (requestData: thisProto.StartListenerRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.StartListenerResponse>>;
        /**
         * Unary call: /ondewo.vtsi.Calls/StartListeners
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.StartListenersResponse>>
         */
        startListeners: (requestData: thisProto.StartListenersRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.StartListenersResponse>>;
        /**
         * Unary call: /ondewo.vtsi.Calls/StartScheduledCaller
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.StartScheduledCallerResponse>>
         */
        startScheduledCaller: (requestData: thisProto.StartScheduledCallerRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.StartScheduledCallerResponse>>;
        /**
         * Unary call: /ondewo.vtsi.Calls/StartScheduledCallers
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.StartScheduledCallersResponse>>
         */
        startScheduledCallers: (requestData: thisProto.StartScheduledCallersRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.StartScheduledCallersResponse>>;
        /**
         * Unary call: /ondewo.vtsi.Calls/StopCall
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.StopCallResponse>>
         */
        stopCall: (requestData: thisProto.StopCallRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.StopCallResponse>>;
        /**
         * Unary call: /ondewo.vtsi.Calls/StopCalls
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.StopCallsResponse>>
         */
        stopCalls: (requestData: thisProto.StopCallsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.StopCallsResponse>>;
        /**
         * Unary call: /ondewo.vtsi.Calls/StopAllCalls
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.StopCallsResponse>>
         */
        stopAllCalls: (requestData: thisProto.StopAllCallsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.StopCallsResponse>>;
        /**
         * Unary call: /ondewo.vtsi.Calls/TransferCall
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.TransferCallResponse>>
         */
        transferCall: (requestData: thisProto.TransferCallRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.TransferCallResponse>>;
        /**
         * Unary call: /ondewo.vtsi.Calls/TransferCalls
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.TransferCallsResponse>>
         */
        transferCalls: (requestData: thisProto.TransferCallsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.TransferCallsResponse>>;
        /**
         * Unary call: /ondewo.vtsi.Calls/GetCallInfo
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetCallInfoResponse>>
         */
        getCallInfo: (requestData: thisProto.GetCallInfoRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetCallInfoResponse>>;
        /**
         * Unary call: /ondewo.vtsi.Calls/ListCallInfo
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListCallInfoResponse>>
         */
        listCallInfo: (requestData: thisProto.ListCallInfoRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListCallInfoResponse>>;
        /**
         * Unary call: /ondewo.vtsi.Calls/GetAudioFile
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetAudioFileResponse>>
         */
        getAudioFile: (requestData: thisProto.GetAudioFileRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetAudioFileResponse>>;
        /**
         * Unary call: /ondewo.vtsi.Calls/GetFullConversationAudioFile
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetFullConversationAudioFileResponse>>
         */
        getFullConversationAudioFile: (requestData: thisProto.GetFullConversationAudioFileRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetFullConversationAudioFileResponse>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Unary call @/ondewo.vtsi.Calls/StartCaller
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.StartCallerResponse>
     */
    startCaller(requestData: thisProto.StartCallerRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.StartCallerResponse>;
    /**
     * Unary call @/ondewo.vtsi.Calls/StartCallers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.StartCallersResponse>
     */
    startCallers(requestData: thisProto.StartCallersRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.StartCallersResponse>;
    /**
     * Unary call @/ondewo.vtsi.Calls/StartListener
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.StartListenerResponse>
     */
    startListener(requestData: thisProto.StartListenerRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.StartListenerResponse>;
    /**
     * Unary call @/ondewo.vtsi.Calls/StartListeners
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.StartListenersResponse>
     */
    startListeners(requestData: thisProto.StartListenersRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.StartListenersResponse>;
    /**
     * Unary call @/ondewo.vtsi.Calls/StartScheduledCaller
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.StartScheduledCallerResponse>
     */
    startScheduledCaller(requestData: thisProto.StartScheduledCallerRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.StartScheduledCallerResponse>;
    /**
     * Unary call @/ondewo.vtsi.Calls/StartScheduledCallers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.StartScheduledCallersResponse>
     */
    startScheduledCallers(requestData: thisProto.StartScheduledCallersRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.StartScheduledCallersResponse>;
    /**
     * Unary call @/ondewo.vtsi.Calls/StopCall
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.StopCallResponse>
     */
    stopCall(requestData: thisProto.StopCallRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.StopCallResponse>;
    /**
     * Unary call @/ondewo.vtsi.Calls/StopCalls
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.StopCallsResponse>
     */
    stopCalls(requestData: thisProto.StopCallsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.StopCallsResponse>;
    /**
     * Unary call @/ondewo.vtsi.Calls/StopAllCalls
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.StopCallsResponse>
     */
    stopAllCalls(requestData: thisProto.StopAllCallsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.StopCallsResponse>;
    /**
     * Unary call @/ondewo.vtsi.Calls/TransferCall
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.TransferCallResponse>
     */
    transferCall(requestData: thisProto.TransferCallRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.TransferCallResponse>;
    /**
     * Unary call @/ondewo.vtsi.Calls/TransferCalls
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.TransferCallsResponse>
     */
    transferCalls(requestData: thisProto.TransferCallsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.TransferCallsResponse>;
    /**
     * Unary call @/ondewo.vtsi.Calls/GetCallInfo
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetCallInfoResponse>
     */
    getCallInfo(requestData: thisProto.GetCallInfoRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.GetCallInfoResponse>;
    /**
     * Unary call @/ondewo.vtsi.Calls/ListCallInfo
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListCallInfoResponse>
     */
    listCallInfo(requestData: thisProto.ListCallInfoRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListCallInfoResponse>;
    /**
     * Unary call @/ondewo.vtsi.Calls/GetAudioFile
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetAudioFileResponse>
     */
    getAudioFile(requestData: thisProto.GetAudioFileRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.GetAudioFileResponse>;
    /**
     * Unary call @/ondewo.vtsi.Calls/GetFullConversationAudioFile
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetFullConversationAudioFileResponse>
     */
    getFullConversationAudioFile(requestData: thisProto.GetFullConversationAudioFileRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.GetFullConversationAudioFileResponse>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CallsClient, [{ optional: true; }, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CallsClient>;
}