/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import { GrpcCallType, GrpcMetadata } from '@ngx-grpc/common';
import { GRPC_CLIENT_FACTORY, takeMessages, throwStatusErrors } from '@ngx-grpc/core';
import * as thisProto from './sip.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import { GRPC_SIP_CLIENT_SETTINGS } from './sip.pbconf';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-grpc/core";
/**
 * Service client implementation for ondewo.sip.Sip
 */
class SipClient {
    handler;
    client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw = {
        /**
         * Unary call: /ondewo.sip.Sip/SipStartSession
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.SipStatus>>
         */
        sipStartSession: (requestData, requestMetadata = new GrpcMetadata()) => {
            return this.handler.handle({
                type: GrpcCallType.unary,
                client: this.client,
                path: '/ondewo.sip.Sip/SipStartSession',
                requestData,
                requestMetadata,
                requestClass: thisProto.SipStartSessionRequest,
                responseClass: thisProto.SipStatus
            });
        },
        /**
         * Unary call: /ondewo.sip.Sip/SipEndSession
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.SipStatus>>
         */
        sipEndSession: (requestData, requestMetadata = new GrpcMetadata()) => {
            return this.handler.handle({
                type: GrpcCallType.unary,
                client: this.client,
                path: '/ondewo.sip.Sip/SipEndSession',
                requestData,
                requestMetadata,
                requestClass: googleProtobuf000.Empty,
                responseClass: thisProto.SipStatus
            });
        },
        /**
         * Unary call: /ondewo.sip.Sip/SipStartCall
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.SipStatus>>
         */
        sipStartCall: (requestData, requestMetadata = new GrpcMetadata()) => {
            return this.handler.handle({
                type: GrpcCallType.unary,
                client: this.client,
                path: '/ondewo.sip.Sip/SipStartCall',
                requestData,
                requestMetadata,
                requestClass: thisProto.SipStartCallRequest,
                responseClass: thisProto.SipStatus
            });
        },
        /**
         * Unary call: /ondewo.sip.Sip/SipEndCall
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.SipStatus>>
         */
        sipEndCall: (requestData, requestMetadata = new GrpcMetadata()) => {
            return this.handler.handle({
                type: GrpcCallType.unary,
                client: this.client,
                path: '/ondewo.sip.Sip/SipEndCall',
                requestData,
                requestMetadata,
                requestClass: thisProto.SipEndCallRequest,
                responseClass: thisProto.SipStatus
            });
        },
        /**
         * Unary call: /ondewo.sip.Sip/SipTransferCall
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.SipStatus>>
         */
        sipTransferCall: (requestData, requestMetadata = new GrpcMetadata()) => {
            return this.handler.handle({
                type: GrpcCallType.unary,
                client: this.client,
                path: '/ondewo.sip.Sip/SipTransferCall',
                requestData,
                requestMetadata,
                requestClass: thisProto.SipTransferCallRequest,
                responseClass: thisProto.SipStatus
            });
        },
        /**
         * Unary call: /ondewo.sip.Sip/SipRegisterAccount
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.SipStatus>>
         */
        sipRegisterAccount: (requestData, requestMetadata = new GrpcMetadata()) => {
            return this.handler.handle({
                type: GrpcCallType.unary,
                client: this.client,
                path: '/ondewo.sip.Sip/SipRegisterAccount',
                requestData,
                requestMetadata,
                requestClass: thisProto.SipRegisterAccountRequest,
                responseClass: thisProto.SipStatus
            });
        },
        /**
         * Unary call: /ondewo.sip.Sip/SipGetSipStatus
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.SipStatus>>
         */
        sipGetSipStatus: (requestData, requestMetadata = new GrpcMetadata()) => {
            return this.handler.handle({
                type: GrpcCallType.unary,
                client: this.client,
                path: '/ondewo.sip.Sip/SipGetSipStatus',
                requestData,
                requestMetadata,
                requestClass: googleProtobuf000.Empty,
                responseClass: thisProto.SipStatus
            });
        },
        /**
         * Unary call: /ondewo.sip.Sip/SipGetSipStatusHistory
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.SipStatusHistoryResponse>>
         */
        sipGetSipStatusHistory: (requestData, requestMetadata = new GrpcMetadata()) => {
            return this.handler.handle({
                type: GrpcCallType.unary,
                client: this.client,
                path: '/ondewo.sip.Sip/SipGetSipStatusHistory',
                requestData,
                requestMetadata,
                requestClass: googleProtobuf000.Empty,
                responseClass: thisProto.SipStatusHistoryResponse
            });
        },
        /**
         * Unary call: /ondewo.sip.Sip/SipPlayWavFiles
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.SipStatus>>
         */
        sipPlayWavFiles: (requestData, requestMetadata = new GrpcMetadata()) => {
            return this.handler.handle({
                type: GrpcCallType.unary,
                client: this.client,
                path: '/ondewo.sip.Sip/SipPlayWavFiles',
                requestData,
                requestMetadata,
                requestClass: thisProto.SipPlayWavFilesRequest,
                responseClass: thisProto.SipStatus
            });
        },
        /**
         * Unary call: /ondewo.sip.Sip/SipMute
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.SipStatus>>
         */
        sipMute: (requestData, requestMetadata = new GrpcMetadata()) => {
            return this.handler.handle({
                type: GrpcCallType.unary,
                client: this.client,
                path: '/ondewo.sip.Sip/SipMute',
                requestData,
                requestMetadata,
                requestClass: googleProtobuf000.Empty,
                responseClass: thisProto.SipStatus
            });
        },
        /**
         * Unary call: /ondewo.sip.Sip/SipUnMute
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.SipStatus>>
         */
        sipUnMute: (requestData, requestMetadata = new GrpcMetadata()) => {
            return this.handler.handle({
                type: GrpcCallType.unary,
                client: this.client,
                path: '/ondewo.sip.Sip/SipUnMute',
                requestData,
                requestMetadata,
                requestClass: googleProtobuf000.Empty,
                responseClass: thisProto.SipStatus
            });
        }
    };
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        this.client = clientFactory.createClient('ondewo.sip.Sip', settings);
    }
    /**
     * Unary call @/ondewo.sip.Sip/SipStartSession
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SipStatus>
     */
    sipStartSession(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .sipStartSession(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.sip.Sip/SipEndSession
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SipStatus>
     */
    sipEndSession(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .sipEndSession(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.sip.Sip/SipStartCall
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SipStatus>
     */
    sipStartCall(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .sipStartCall(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.sip.Sip/SipEndCall
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SipStatus>
     */
    sipEndCall(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .sipEndCall(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.sip.Sip/SipTransferCall
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SipStatus>
     */
    sipTransferCall(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .sipTransferCall(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.sip.Sip/SipRegisterAccount
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SipStatus>
     */
    sipRegisterAccount(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .sipRegisterAccount(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.sip.Sip/SipGetSipStatus
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SipStatus>
     */
    sipGetSipStatus(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .sipGetSipStatus(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.sip.Sip/SipGetSipStatusHistory
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SipStatusHistoryResponse>
     */
    sipGetSipStatusHistory(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .sipGetSipStatusHistory(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.sip.Sip/SipPlayWavFiles
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SipStatus>
     */
    sipPlayWavFiles(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .sipPlayWavFiles(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.sip.Sip/SipMute
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SipStatus>
     */
    sipMute(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .sipMute(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.sip.Sip/SipUnMute
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SipStatus>
     */
    sipUnMute(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .sipUnMute(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: SipClient, deps: [{ token: GRPC_SIP_CLIENT_SETTINGS, optional: true }, { token: GRPC_CLIENT_FACTORY }, { token: i1.GrpcHandler }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: SipClient, providedIn: 'any' });
}
export { SipClient };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: SipClient, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'any' }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [GRPC_SIP_CLIENT_SETTINGS]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [GRPC_CLIENT_FACTORY]
                }] }, { type: i1.GrpcHandler }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lwLnBic2MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvb25kZXdvL3NpcC9zaXAucGJzYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLGNBQWM7QUFDZCxFQUFFO0FBQ0YsMkJBQTJCO0FBQzNCLDhDQUE4QztBQUM5QyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUNMLFlBQVksRUFJWixZQUFZLEVBQ2IsTUFBTSxrQkFBa0IsQ0FBQztBQUMxQixPQUFPLEVBQ0wsbUJBQW1CLEVBRW5CLFlBQVksRUFDWixpQkFBaUIsRUFDbEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEtBQUssU0FBUyxNQUFNLFVBQVUsQ0FBQztBQUN0QyxPQUFPLEtBQUssaUJBQWlCLE1BQU0sNEJBQTRCLENBQUM7QUFFaEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sY0FBYyxDQUFDOzs7QUFDeEQ7O0dBRUc7QUFDSCxNQUNhLFNBQVM7SUFxUFY7SUFwUEYsTUFBTSxDQUFrQjtJQUVoQzs7OztPQUlHO0lBQ0gsSUFBSSxHQUFHO1FBQ0w7Ozs7OztXQU1HO1FBQ0gsZUFBZSxFQUFFLENBQ2YsV0FBNkMsRUFDN0MsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFLEVBQ1EsRUFBRTtZQUM5QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2dCQUN6QixJQUFJLEVBQUUsWUFBWSxDQUFDLEtBQUs7Z0JBQ3hCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsSUFBSSxFQUFFLGlDQUFpQztnQkFDdkMsV0FBVztnQkFDWCxlQUFlO2dCQUNmLFlBQVksRUFBRSxTQUFTLENBQUMsc0JBQXNCO2dCQUM5QyxhQUFhLEVBQUUsU0FBUyxDQUFDLFNBQVM7YUFDbkMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUNEOzs7Ozs7V0FNRztRQUNILGFBQWEsRUFBRSxDQUNiLFdBQW9DLEVBQ3BDLGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxFQUNRLEVBQUU7WUFDOUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztnQkFDekIsSUFBSSxFQUFFLFlBQVksQ0FBQyxLQUFLO2dCQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ25CLElBQUksRUFBRSwrQkFBK0I7Z0JBQ3JDLFdBQVc7Z0JBQ1gsZUFBZTtnQkFDZixZQUFZLEVBQUUsaUJBQWlCLENBQUMsS0FBSztnQkFDckMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxTQUFTO2FBQ25DLENBQUMsQ0FBQztRQUNMLENBQUM7UUFDRDs7Ozs7O1dBTUc7UUFDSCxZQUFZLEVBQUUsQ0FDWixXQUEwQyxFQUMxQyxlQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsRUFDUSxFQUFFO1lBQzlDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7Z0JBQ3pCLElBQUksRUFBRSxZQUFZLENBQUMsS0FBSztnQkFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2dCQUNuQixJQUFJLEVBQUUsOEJBQThCO2dCQUNwQyxXQUFXO2dCQUNYLGVBQWU7Z0JBQ2YsWUFBWSxFQUFFLFNBQVMsQ0FBQyxtQkFBbUI7Z0JBQzNDLGFBQWEsRUFBRSxTQUFTLENBQUMsU0FBUzthQUNuQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQ0Q7Ozs7OztXQU1HO1FBQ0gsVUFBVSxFQUFFLENBQ1YsV0FBd0MsRUFDeEMsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFLEVBQ1EsRUFBRTtZQUM5QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2dCQUN6QixJQUFJLEVBQUUsWUFBWSxDQUFDLEtBQUs7Z0JBQ3hCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsSUFBSSxFQUFFLDRCQUE0QjtnQkFDbEMsV0FBVztnQkFDWCxlQUFlO2dCQUNmLFlBQVksRUFBRSxTQUFTLENBQUMsaUJBQWlCO2dCQUN6QyxhQUFhLEVBQUUsU0FBUyxDQUFDLFNBQVM7YUFDbkMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUNEOzs7Ozs7V0FNRztRQUNILGVBQWUsRUFBRSxDQUNmLFdBQTZDLEVBQzdDLGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxFQUNRLEVBQUU7WUFDOUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztnQkFDekIsSUFBSSxFQUFFLFlBQVksQ0FBQyxLQUFLO2dCQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ25CLElBQUksRUFBRSxpQ0FBaUM7Z0JBQ3ZDLFdBQVc7Z0JBQ1gsZUFBZTtnQkFDZixZQUFZLEVBQUUsU0FBUyxDQUFDLHNCQUFzQjtnQkFDOUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxTQUFTO2FBQ25DLENBQUMsQ0FBQztRQUNMLENBQUM7UUFDRDs7Ozs7O1dBTUc7UUFDSCxrQkFBa0IsRUFBRSxDQUNsQixXQUFnRCxFQUNoRCxlQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsRUFDUSxFQUFFO1lBQzlDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7Z0JBQ3pCLElBQUksRUFBRSxZQUFZLENBQUMsS0FBSztnQkFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2dCQUNuQixJQUFJLEVBQUUsb0NBQW9DO2dCQUMxQyxXQUFXO2dCQUNYLGVBQWU7Z0JBQ2YsWUFBWSxFQUFFLFNBQVMsQ0FBQyx5QkFBeUI7Z0JBQ2pELGFBQWEsRUFBRSxTQUFTLENBQUMsU0FBUzthQUNuQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQ0Q7Ozs7OztXQU1HO1FBQ0gsZUFBZSxFQUFFLENBQ2YsV0FBb0MsRUFDcEMsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFLEVBQ1EsRUFBRTtZQUM5QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2dCQUN6QixJQUFJLEVBQUUsWUFBWSxDQUFDLEtBQUs7Z0JBQ3hCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsSUFBSSxFQUFFLGlDQUFpQztnQkFDdkMsV0FBVztnQkFDWCxlQUFlO2dCQUNmLFlBQVksRUFBRSxpQkFBaUIsQ0FBQyxLQUFLO2dCQUNyQyxhQUFhLEVBQUUsU0FBUyxDQUFDLFNBQVM7YUFDbkMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUNEOzs7Ozs7V0FNRztRQUNILHNCQUFzQixFQUFFLENBQ3RCLFdBQW9DLEVBQ3BDLGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxFQUN1QixFQUFFO1lBQzdELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7Z0JBQ3pCLElBQUksRUFBRSxZQUFZLENBQUMsS0FBSztnQkFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2dCQUNuQixJQUFJLEVBQUUsd0NBQXdDO2dCQUM5QyxXQUFXO2dCQUNYLGVBQWU7Z0JBQ2YsWUFBWSxFQUFFLGlCQUFpQixDQUFDLEtBQUs7Z0JBQ3JDLGFBQWEsRUFBRSxTQUFTLENBQUMsd0JBQXdCO2FBQ2xELENBQUMsQ0FBQztRQUNMLENBQUM7UUFDRDs7Ozs7O1dBTUc7UUFDSCxlQUFlLEVBQUUsQ0FDZixXQUE2QyxFQUM3QyxlQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsRUFDUSxFQUFFO1lBQzlDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7Z0JBQ3pCLElBQUksRUFBRSxZQUFZLENBQUMsS0FBSztnQkFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2dCQUNuQixJQUFJLEVBQUUsaUNBQWlDO2dCQUN2QyxXQUFXO2dCQUNYLGVBQWU7Z0JBQ2YsWUFBWSxFQUFFLFNBQVMsQ0FBQyxzQkFBc0I7Z0JBQzlDLGFBQWEsRUFBRSxTQUFTLENBQUMsU0FBUzthQUNuQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQ0Q7Ozs7OztXQU1HO1FBQ0gsT0FBTyxFQUFFLENBQ1AsV0FBb0MsRUFDcEMsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFLEVBQ1EsRUFBRTtZQUM5QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2dCQUN6QixJQUFJLEVBQUUsWUFBWSxDQUFDLEtBQUs7Z0JBQ3hCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsSUFBSSxFQUFFLHlCQUF5QjtnQkFDL0IsV0FBVztnQkFDWCxlQUFlO2dCQUNmLFlBQVksRUFBRSxpQkFBaUIsQ0FBQyxLQUFLO2dCQUNyQyxhQUFhLEVBQUUsU0FBUyxDQUFDLFNBQVM7YUFDbkMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUNEOzs7Ozs7V0FNRztRQUNILFNBQVMsRUFBRSxDQUNULFdBQW9DLEVBQ3BDLGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxFQUNRLEVBQUU7WUFDOUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztnQkFDekIsSUFBSSxFQUFFLFlBQVksQ0FBQyxLQUFLO2dCQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ25CLElBQUksRUFBRSwyQkFBMkI7Z0JBQ2pDLFdBQVc7Z0JBQ1gsZUFBZTtnQkFDZixZQUFZLEVBQUUsaUJBQWlCLENBQUMsS0FBSztnQkFDckMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxTQUFTO2FBQ25DLENBQUMsQ0FBQztRQUNMLENBQUM7S0FDRixDQUFDO0lBRUYsWUFDZ0QsUUFBYSxFQUM5QixhQUFxQyxFQUMxRCxPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO1FBRTVCLElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsZUFBZSxDQUNiLFdBQTZDLEVBQzdDLGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBRTtRQUVwQyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsZUFBZSxDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUM7YUFDN0MsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsYUFBYSxDQUNYLFdBQW9DLEVBQ3BDLGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBRTtRQUVwQyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsYUFBYSxDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUM7YUFDM0MsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsWUFBWSxDQUNWLFdBQTBDLEVBQzFDLGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBRTtRQUVwQyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsWUFBWSxDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUM7YUFDMUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsVUFBVSxDQUNSLFdBQXdDLEVBQ3hDLGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBRTtRQUVwQyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsVUFBVSxDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUM7YUFDeEMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsZUFBZSxDQUNiLFdBQTZDLEVBQzdDLGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBRTtRQUVwQyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsZUFBZSxDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUM7YUFDN0MsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsa0JBQWtCLENBQ2hCLFdBQWdELEVBQ2hELGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBRTtRQUVwQyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2Isa0JBQWtCLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQzthQUNoRCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxlQUFlLENBQ2IsV0FBb0MsRUFDcEMsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFO1FBRXBDLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixlQUFlLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQzthQUM3QyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxzQkFBc0IsQ0FDcEIsV0FBb0MsRUFDcEMsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFO1FBRXBDLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixzQkFBc0IsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDO2FBQ3BELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILGVBQWUsQ0FDYixXQUE2QyxFQUM3QyxlQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUU7UUFFcEMsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLGVBQWUsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDO2FBQzdDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILE9BQU8sQ0FDTCxXQUFvQyxFQUNwQyxlQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUU7UUFFcEMsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLE9BQU8sQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDO2FBQ3JDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILFNBQVMsQ0FDUCxXQUFvQyxFQUNwQyxlQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUU7UUFFcEMsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLFNBQVMsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDO2FBQ3ZDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQzt1R0F4YVUsU0FBUyxrQkFtUEUsd0JBQXdCLDZCQUNwQyxtQkFBbUI7MkdBcFBsQixTQUFTLGNBREksS0FBSzs7U0FDbEIsU0FBUzsyRkFBVCxTQUFTO2tCQURyQixVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRTs7MEJBb1A1QixRQUFROzswQkFBSSxNQUFNOzJCQUFDLHdCQUF3Qjs7MEJBQzNDLE1BQU07MkJBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBAdHMtbm9jaGVja1xuLy9cbi8vIFRISVMgSVMgQSBHRU5FUkFURUQgRklMRVxuLy8gRE8gTk9UIE1PRElGWSBJVCEgWU9VUiBDSEFOR0VTIFdJTEwgQkUgTE9TVFxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgR3JwY0NhbGxUeXBlLFxuICBHcnBjQ2xpZW50LFxuICBHcnBjQ2xpZW50RmFjdG9yeSxcbiAgR3JwY0V2ZW50LFxuICBHcnBjTWV0YWRhdGFcbn0gZnJvbSAnQG5neC1ncnBjL2NvbW1vbic7XG5pbXBvcnQge1xuICBHUlBDX0NMSUVOVF9GQUNUT1JZLFxuICBHcnBjSGFuZGxlcixcbiAgdGFrZU1lc3NhZ2VzLFxuICB0aHJvd1N0YXR1c0Vycm9yc1xufSBmcm9tICdAbmd4LWdycGMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgKiBhcyB0aGlzUHJvdG8gZnJvbSAnLi9zaXAucGInO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDAgZnJvbSAnQG5neC1ncnBjL3dlbGwta25vd24tdHlwZXMnO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDEgZnJvbSAnQG5neC1ncnBjL3dlbGwta25vd24tdHlwZXMnO1xuaW1wb3J0IHsgR1JQQ19TSVBfQ0xJRU5UX1NFVFRJTkdTIH0gZnJvbSAnLi9zaXAucGJjb25mJztcbi8qKlxuICogU2VydmljZSBjbGllbnQgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zaXAuU2lwXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ2FueScgfSlcbmV4cG9ydCBjbGFzcyBTaXBDbGllbnQge1xuICBwcml2YXRlIGNsaWVudDogR3JwY0NsaWVudDxhbnk+O1xuXG4gIC8qKlxuICAgKiBSYXcgUlBDIGltcGxlbWVudGF0aW9uIGZvciBlYWNoIHNlcnZpY2UgY2xpZW50IG1ldGhvZC5cbiAgICogVGhlIHJhdyBtZXRob2RzIHByb3ZpZGUgbW9yZSBjb250cm9sIG9uIHRoZSBpbmNvbWluZyBkYXRhIGFuZCBldmVudHMuIEUuZy4gdGhleSBjYW4gYmUgdXNlZnVsIHRvIHJlYWQgc3RhdHVzIGBPS2AgbWV0YWRhdGEuXG4gICAqIEF0dGVudGlvbjogdGhlc2UgbWV0aG9kcyBkbyBub3QgdGhyb3cgZXJyb3JzIHdoZW4gbm9uLXplcm8gc3RhdHVzIGNvZGVzIGFyZSByZWNlaXZlZC5cbiAgICovXG4gICRyYXcgPSB7XG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL29uZGV3by5zaXAuU2lwL1NpcFN0YXJ0U2Vzc2lvblxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5TaXBTdGF0dXM+PlxuICAgICAqL1xuICAgIHNpcFN0YXJ0U2Vzc2lvbjogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5TaXBTdGFydFNlc3Npb25SZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlNpcFN0YXR1cz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5zaXAuU2lwL1NpcFN0YXJ0U2Vzc2lvbicsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLlNpcFN0YXJ0U2Vzc2lvblJlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5TaXBTdGF0dXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL29uZGV3by5zaXAuU2lwL1NpcEVuZFNlc3Npb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uU2lwU3RhdHVzPj5cbiAgICAgKi9cbiAgICBzaXBFbmRTZXNzaW9uOiAoXG4gICAgICByZXF1ZXN0RGF0YTogZ29vZ2xlUHJvdG9idWYwMDAuRW1wdHksXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uU2lwU3RhdHVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLnNpcC5TaXAvU2lwRW5kU2Vzc2lvbicsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogZ29vZ2xlUHJvdG9idWYwMDAuRW1wdHksXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5TaXBTdGF0dXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL29uZGV3by5zaXAuU2lwL1NpcFN0YXJ0Q2FsbFxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5TaXBTdGF0dXM+PlxuICAgICAqL1xuICAgIHNpcFN0YXJ0Q2FsbDogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5TaXBTdGFydENhbGxSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlNpcFN0YXR1cz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5zaXAuU2lwL1NpcFN0YXJ0Q2FsbCcsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLlNpcFN0YXJ0Q2FsbFJlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5TaXBTdGF0dXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL29uZGV3by5zaXAuU2lwL1NpcEVuZENhbGxcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uU2lwU3RhdHVzPj5cbiAgICAgKi9cbiAgICBzaXBFbmRDYWxsOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlNpcEVuZENhbGxSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlNpcFN0YXR1cz4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5zaXAuU2lwL1NpcEVuZENhbGwnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5TaXBFbmRDYWxsUmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLlNpcFN0YXR1c1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLnNpcC5TaXAvU2lwVHJhbnNmZXJDYWxsXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlNpcFN0YXR1cz4+XG4gICAgICovXG4gICAgc2lwVHJhbnNmZXJDYWxsOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlNpcFRyYW5zZmVyQ2FsbFJlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uU2lwU3RhdHVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLnNpcC5TaXAvU2lwVHJhbnNmZXJDYWxsJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uU2lwVHJhbnNmZXJDYWxsUmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLlNpcFN0YXR1c1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLnNpcC5TaXAvU2lwUmVnaXN0ZXJBY2NvdW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlNpcFN0YXR1cz4+XG4gICAgICovXG4gICAgc2lwUmVnaXN0ZXJBY2NvdW50OiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlNpcFJlZ2lzdGVyQWNjb3VudFJlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uU2lwU3RhdHVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLnNpcC5TaXAvU2lwUmVnaXN0ZXJBY2NvdW50JyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uU2lwUmVnaXN0ZXJBY2NvdW50UmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLlNpcFN0YXR1c1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLnNpcC5TaXAvU2lwR2V0U2lwU3RhdHVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlNpcFN0YXR1cz4+XG4gICAgICovXG4gICAgc2lwR2V0U2lwU3RhdHVzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogZ29vZ2xlUHJvdG9idWYwMDAuRW1wdHksXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uU2lwU3RhdHVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLnNpcC5TaXAvU2lwR2V0U2lwU3RhdHVzJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiBnb29nbGVQcm90b2J1ZjAwMC5FbXB0eSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLlNpcFN0YXR1c1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLnNpcC5TaXAvU2lwR2V0U2lwU3RhdHVzSGlzdG9yeVxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5TaXBTdGF0dXNIaXN0b3J5UmVzcG9uc2U+PlxuICAgICAqL1xuICAgIHNpcEdldFNpcFN0YXR1c0hpc3Rvcnk6IChcbiAgICAgIHJlcXVlc3REYXRhOiBnb29nbGVQcm90b2J1ZjAwMC5FbXB0eSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5TaXBTdGF0dXNIaXN0b3J5UmVzcG9uc2U+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28uc2lwLlNpcC9TaXBHZXRTaXBTdGF0dXNIaXN0b3J5JyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiBnb29nbGVQcm90b2J1ZjAwMC5FbXB0eSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLlNpcFN0YXR1c0hpc3RvcnlSZXNwb25zZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLnNpcC5TaXAvU2lwUGxheVdhdkZpbGVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlNpcFN0YXR1cz4+XG4gICAgICovXG4gICAgc2lwUGxheVdhdkZpbGVzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlNpcFBsYXlXYXZGaWxlc1JlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uU2lwU3RhdHVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLnNpcC5TaXAvU2lwUGxheVdhdkZpbGVzJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uU2lwUGxheVdhdkZpbGVzUmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLlNpcFN0YXR1c1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLnNpcC5TaXAvU2lwTXV0ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5TaXBTdGF0dXM+PlxuICAgICAqL1xuICAgIHNpcE11dGU6IChcbiAgICAgIHJlcXVlc3REYXRhOiBnb29nbGVQcm90b2J1ZjAwMC5FbXB0eSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5TaXBTdGF0dXM+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28uc2lwLlNpcC9TaXBNdXRlJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiBnb29nbGVQcm90b2J1ZjAwMC5FbXB0eSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLlNpcFN0YXR1c1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLnNpcC5TaXAvU2lwVW5NdXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlNpcFN0YXR1cz4+XG4gICAgICovXG4gICAgc2lwVW5NdXRlOiAoXG4gICAgICByZXF1ZXN0RGF0YTogZ29vZ2xlUHJvdG9idWYwMDAuRW1wdHksXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uU2lwU3RhdHVzPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLnNpcC5TaXAvU2lwVW5NdXRlJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiBnb29nbGVQcm90b2J1ZjAwMC5FbXB0eSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLlNpcFN0YXR1c1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoR1JQQ19TSVBfQ0xJRU5UX1NFVFRJTkdTKSBzZXR0aW5nczogYW55LFxuICAgIEBJbmplY3QoR1JQQ19DTElFTlRfRkFDVE9SWSkgY2xpZW50RmFjdG9yeTogR3JwY0NsaWVudEZhY3Rvcnk8YW55PixcbiAgICBwcml2YXRlIGhhbmRsZXI6IEdycGNIYW5kbGVyXG4gICkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50RmFjdG9yeS5jcmVhdGVDbGllbnQoJ29uZGV3by5zaXAuU2lwJywgc2V0dGluZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28uc2lwLlNpcC9TaXBTdGFydFNlc3Npb25cbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uU2lwU3RhdHVzPlxuICAgKi9cbiAgc2lwU3RhcnRTZXNzaW9uKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uU2lwU3RhcnRTZXNzaW9uUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uU2lwU3RhdHVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLnNpcFN0YXJ0U2Vzc2lvbihyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28uc2lwLlNpcC9TaXBFbmRTZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLlNpcFN0YXR1cz5cbiAgICovXG4gIHNpcEVuZFNlc3Npb24oXG4gICAgcmVxdWVzdERhdGE6IGdvb2dsZVByb3RvYnVmMDAwLkVtcHR5LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5TaXBTdGF0dXM+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuc2lwRW5kU2Vzc2lvbihyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28uc2lwLlNpcC9TaXBTdGFydENhbGxcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uU2lwU3RhdHVzPlxuICAgKi9cbiAgc2lwU3RhcnRDYWxsKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uU2lwU3RhcnRDYWxsUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uU2lwU3RhdHVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLnNpcFN0YXJ0Q2FsbChyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28uc2lwLlNpcC9TaXBFbmRDYWxsXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLlNpcFN0YXR1cz5cbiAgICovXG4gIHNpcEVuZENhbGwoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5TaXBFbmRDYWxsUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uU2lwU3RhdHVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLnNpcEVuZENhbGwocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLnNpcC5TaXAvU2lwVHJhbnNmZXJDYWxsXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLlNpcFN0YXR1cz5cbiAgICovXG4gIHNpcFRyYW5zZmVyQ2FsbChcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlNpcFRyYW5zZmVyQ2FsbFJlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLlNpcFN0YXR1cz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5zaXBUcmFuc2ZlckNhbGwocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLnNpcC5TaXAvU2lwUmVnaXN0ZXJBY2NvdW50XG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLlNpcFN0YXR1cz5cbiAgICovXG4gIHNpcFJlZ2lzdGVyQWNjb3VudChcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlNpcFJlZ2lzdGVyQWNjb3VudFJlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLlNpcFN0YXR1cz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5zaXBSZWdpc3RlckFjY291bnQocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLnNpcC5TaXAvU2lwR2V0U2lwU3RhdHVzXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLlNpcFN0YXR1cz5cbiAgICovXG4gIHNpcEdldFNpcFN0YXR1cyhcbiAgICByZXF1ZXN0RGF0YTogZ29vZ2xlUHJvdG9idWYwMDAuRW1wdHksXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLlNpcFN0YXR1cz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5zaXBHZXRTaXBTdGF0dXMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLnNpcC5TaXAvU2lwR2V0U2lwU3RhdHVzSGlzdG9yeVxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5TaXBTdGF0dXNIaXN0b3J5UmVzcG9uc2U+XG4gICAqL1xuICBzaXBHZXRTaXBTdGF0dXNIaXN0b3J5KFxuICAgIHJlcXVlc3REYXRhOiBnb29nbGVQcm90b2J1ZjAwMC5FbXB0eSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uU2lwU3RhdHVzSGlzdG9yeVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLnNpcEdldFNpcFN0YXR1c0hpc3RvcnkocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLnNpcC5TaXAvU2lwUGxheVdhdkZpbGVzXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLlNpcFN0YXR1cz5cbiAgICovXG4gIHNpcFBsYXlXYXZGaWxlcyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlNpcFBsYXlXYXZGaWxlc1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLlNpcFN0YXR1cz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5zaXBQbGF5V2F2RmlsZXMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLnNpcC5TaXAvU2lwTXV0ZVxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5TaXBTdGF0dXM+XG4gICAqL1xuICBzaXBNdXRlKFxuICAgIHJlcXVlc3REYXRhOiBnb29nbGVQcm90b2J1ZjAwMC5FbXB0eSxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uU2lwU3RhdHVzPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLnNpcE11dGUocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLnNpcC5TaXAvU2lwVW5NdXRlXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLlNpcFN0YXR1cz5cbiAgICovXG4gIHNpcFVuTXV0ZShcbiAgICByZXF1ZXN0RGF0YTogZ29vZ2xlUHJvdG9idWYwMDAuRW1wdHksXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLlNpcFN0YXR1cz4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5zaXBVbk11dGUocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxufVxuIl19