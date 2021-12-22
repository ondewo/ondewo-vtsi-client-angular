/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import { GrpcCallType, GrpcMetadata } from '@ngx-grpc/common';
import { GRPC_CLIENT_FACTORY, GrpcHandler, takeMessages, throwStatusErrors } from '@ngx-grpc/core';
import * as thisProto from './call-log.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import { GRPC_VOIP_CALL_LOGS_CLIENT_SETTINGS } from './call-log.pbconf';
import * as i0 from "@angular/core";
import * as i1 from "./call-log.pbconf";
import * as i2 from "@ngx-grpc/core";
/**
 * Service client implementation for ondewo.vtsi.VoipCallLogs
 */
export class VoipCallLogsClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        /**
         * Raw RPC implementation for each service client method.
         * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
         * Attention: these methods do not throw errors when non-zero status codes are received.
         */
        this.$raw = {
            /**
             * Unary RPC for /ondewo.vtsi.VoipCallLogs/GetVoipLog
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.GetVoipLogResponse>>
             */
            getVoipLog: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.vtsi.VoipCallLogs/GetVoipLog',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.GetVoipLogRequest,
                    responseClass: thisProto.GetVoipLogResponse
                });
            },
            /**
             * Unary RPC for /ondewo.vtsi.VoipCallLogs/ActivateSaveCallLogs
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.SaveCallLogsResponse>>
             */
            activateSaveCallLogs: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.vtsi.VoipCallLogs/ActivateSaveCallLogs',
                    requestData,
                    requestMetadata,
                    requestClass: googleProtobuf000.Empty,
                    responseClass: thisProto.SaveCallLogsResponse
                });
            }
        };
        this.client = clientFactory.createClient('ondewo.vtsi.VoipCallLogs', settings);
    }
    /**
     * Unary RPC for /ondewo.vtsi.VoipCallLogs/GetVoipLog
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetVoipLogResponse>
     */
    getVoipLog(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getVoipLog(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.vtsi.VoipCallLogs/ActivateSaveCallLogs
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SaveCallLogsResponse>
     */
    activateSaveCallLogs(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .activateSaveCallLogs(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
}
VoipCallLogsClient.ɵprov = i0.ɵɵdefineInjectable({ factory: function VoipCallLogsClient_Factory() { return new VoipCallLogsClient(i0.ɵɵinject(i1.GRPC_VOIP_CALL_LOGS_CLIENT_SETTINGS, 8), i0.ɵɵinject(i2.GRPC_CLIENT_FACTORY), i0.ɵɵinject(i2.GrpcHandler)); }, token: VoipCallLogsClient, providedIn: "any" });
VoipCallLogsClient.decorators = [
    { type: Injectable, args: [{ providedIn: 'any' },] }
];
VoipCallLogsClient.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GRPC_VOIP_CALL_LOGS_CLIENT_SETTINGS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [GRPC_CLIENT_FACTORY,] }] },
    { type: GrpcHandler }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbC1sb2cucGJzYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9vbmRld28vdnRzaS9jYWxsLWxvZy5wYnNjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsRUFBRTtBQUNGLDJCQUEyQjtBQUMzQiw4Q0FBOEM7QUFDOUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFDTCxZQUFZLEVBSVosWUFBWSxFQUNiLE1BQU0sa0JBQWtCLENBQUM7QUFDMUIsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixXQUFXLEVBQ1gsWUFBWSxFQUNaLGlCQUFpQixFQUNsQixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sS0FBSyxTQUFTLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxpQkFBaUIsTUFBTSw0QkFBNEIsQ0FBQztBQU1oRSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUN4RTs7R0FFRztBQUVILE1BQU0sT0FBTyxrQkFBa0I7SUFxRDdCLFlBQzJELFFBQWEsRUFDekMsYUFBcUMsRUFDMUQsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQXJEOUI7Ozs7V0FJRztRQUNILFNBQUksR0FBRztZQUNMOzs7Ozs7ZUFNRztZQUNILFVBQVUsRUFBRSxDQUNWLFdBQXdDLEVBQ3hDLGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxFQUNpQixFQUFFO2dCQUN2RCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO29CQUN6QixJQUFJLEVBQUUsWUFBWSxDQUFDLEtBQUs7b0JBQ3hCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtvQkFDbkIsSUFBSSxFQUFFLHNDQUFzQztvQkFDNUMsV0FBVztvQkFDWCxlQUFlO29CQUNmLFlBQVksRUFBRSxTQUFTLENBQUMsaUJBQWlCO29CQUN6QyxhQUFhLEVBQUUsU0FBUyxDQUFDLGtCQUFrQjtpQkFDNUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUNEOzs7Ozs7ZUFNRztZQUNILG9CQUFvQixFQUFFLENBQ3BCLFdBQW9DLEVBQ3BDLGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxFQUNtQixFQUFFO2dCQUN6RCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO29CQUN6QixJQUFJLEVBQUUsWUFBWSxDQUFDLEtBQUs7b0JBQ3hCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtvQkFDbkIsSUFBSSxFQUFFLGdEQUFnRDtvQkFDdEQsV0FBVztvQkFDWCxlQUFlO29CQUNmLFlBQVksRUFBRSxpQkFBaUIsQ0FBQyxLQUFLO29CQUNyQyxhQUFhLEVBQUUsU0FBUyxDQUFDLG9CQUFvQjtpQkFDOUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztTQUNGLENBQUM7UUFPQSxJQUFJLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxZQUFZLENBQ3RDLDBCQUEwQixFQUMxQixRQUFRLENBQ1QsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxVQUFVLENBQ1IsV0FBd0MsRUFDeEMsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFO1FBRXBDLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixVQUFVLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQzthQUN4QyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxvQkFBb0IsQ0FDbEIsV0FBb0MsRUFDcEMsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFO1FBRXBDLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixvQkFBb0IsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDO2FBQ2xELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7OztZQS9GRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFOzs7NENBdUQ1QixRQUFRLFlBQUksTUFBTSxTQUFDLG1DQUFtQzs0Q0FDdEQsTUFBTSxTQUFDLG1CQUFtQjtZQXhFN0IsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy9cbi8vIFRISVMgSVMgQSBHRU5FUkFURUQgRklMRVxuLy8gRE8gTk9UIE1PRElGWSBJVCEgWU9VUiBDSEFOR0VTIFdJTEwgQkUgTE9TVFxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgR3JwY0NhbGxUeXBlLFxuICBHcnBjQ2xpZW50LFxuICBHcnBjQ2xpZW50RmFjdG9yeSxcbiAgR3JwY0V2ZW50LFxuICBHcnBjTWV0YWRhdGFcbn0gZnJvbSAnQG5neC1ncnBjL2NvbW1vbic7XG5pbXBvcnQge1xuICBHUlBDX0NMSUVOVF9GQUNUT1JZLFxuICBHcnBjSGFuZGxlcixcbiAgdGFrZU1lc3NhZ2VzLFxuICB0aHJvd1N0YXR1c0Vycm9yc1xufSBmcm9tICdAbmd4LWdycGMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgKiBhcyB0aGlzUHJvdG8gZnJvbSAnLi9jYWxsLWxvZy5wYic7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwMCBmcm9tICdAbmd4LWdycGMvd2VsbC1rbm93bi10eXBlcyc7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwMSBmcm9tICdAbmd4LWdycGMvd2VsbC1rbm93bi10eXBlcyc7XG5pbXBvcnQgKiBhcyBnb29nbGVBcGkwMDIgZnJvbSAnLi4vLi4vZ29vZ2xlL2FwaS9odHRwLnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDAzIGZyb20gJ0BuZ3gtZ3JwYy93ZWxsLWtub3duLXR5cGVzJztcbmltcG9ydCAqIGFzIG9uZGV3b1NpcDAwNCBmcm9tICcuLi8uLi9vbmRld28vc2lwL3NpcC5wYic7XG5pbXBvcnQgKiBhcyBnb29nbGVBcGkwMDUgZnJvbSAnLi4vLi4vZ29vZ2xlL2FwaS9hbm5vdGF0aW9ucy5wYic7XG5pbXBvcnQgeyBHUlBDX1ZPSVBfQ0FMTF9MT0dTX0NMSUVOVF9TRVRUSU5HUyB9IGZyb20gJy4vY2FsbC1sb2cucGJjb25mJztcbi8qKlxuICogU2VydmljZSBjbGllbnQgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by52dHNpLlZvaXBDYWxsTG9nc1xuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdhbnknIH0pXG5leHBvcnQgY2xhc3MgVm9pcENhbGxMb2dzQ2xpZW50IHtcbiAgcHJpdmF0ZSBjbGllbnQ6IEdycGNDbGllbnQ8YW55PjtcblxuICAvKipcbiAgICogUmF3IFJQQyBpbXBsZW1lbnRhdGlvbiBmb3IgZWFjaCBzZXJ2aWNlIGNsaWVudCBtZXRob2QuXG4gICAqIFRoZSByYXcgbWV0aG9kcyBwcm92aWRlIG1vcmUgY29udHJvbCBvbiB0aGUgaW5jb21pbmcgZGF0YSBhbmQgZXZlbnRzLiBFLmcuIHRoZXkgY2FuIGJlIHVzZWZ1bCB0byByZWFkIHN0YXR1cyBgT0tgIG1ldGFkYXRhLlxuICAgKiBBdHRlbnRpb246IHRoZXNlIG1ldGhvZHMgZG8gbm90IHRocm93IGVycm9ycyB3aGVuIG5vbi16ZXJvIHN0YXR1cyBjb2RlcyBhcmUgcmVjZWl2ZWQuXG4gICAqL1xuICAkcmF3ID0ge1xuICAgIC8qKlxuICAgICAqIFVuYXJ5IFJQQyBmb3IgL29uZGV3by52dHNpLlZvaXBDYWxsTG9ncy9HZXRWb2lwTG9nXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkdldFZvaXBMb2dSZXNwb25zZT4+XG4gICAgICovXG4gICAgZ2V0Vm9pcExvZzogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRWb2lwTG9nUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5HZXRWb2lwTG9nUmVzcG9uc2U+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28udnRzaS5Wb2lwQ2FsbExvZ3MvR2V0Vm9pcExvZycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkdldFZvaXBMb2dSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uR2V0Vm9pcExvZ1Jlc3BvbnNlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IFJQQyBmb3IgL29uZGV3by52dHNpLlZvaXBDYWxsTG9ncy9BY3RpdmF0ZVNhdmVDYWxsTG9nc1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5TYXZlQ2FsbExvZ3NSZXNwb25zZT4+XG4gICAgICovXG4gICAgYWN0aXZhdGVTYXZlQ2FsbExvZ3M6IChcbiAgICAgIHJlcXVlc3REYXRhOiBnb29nbGVQcm90b2J1ZjAwMC5FbXB0eSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5TYXZlQ2FsbExvZ3NSZXNwb25zZT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by52dHNpLlZvaXBDYWxsTG9ncy9BY3RpdmF0ZVNhdmVDYWxsTG9ncycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogZ29vZ2xlUHJvdG9idWYwMDAuRW1wdHksXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5TYXZlQ2FsbExvZ3NSZXNwb25zZVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoR1JQQ19WT0lQX0NBTExfTE9HU19DTElFTlRfU0VUVElOR1MpIHNldHRpbmdzOiBhbnksXG4gICAgQEluamVjdChHUlBDX0NMSUVOVF9GQUNUT1JZKSBjbGllbnRGYWN0b3J5OiBHcnBjQ2xpZW50RmFjdG9yeTxhbnk+LFxuICAgIHByaXZhdGUgaGFuZGxlcjogR3JwY0hhbmRsZXJcbiAgKSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnRGYWN0b3J5LmNyZWF0ZUNsaWVudChcbiAgICAgICdvbmRld28udnRzaS5Wb2lwQ2FsbExvZ3MnLFxuICAgICAgc2V0dGluZ3NcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQyBmb3IgL29uZGV3by52dHNpLlZvaXBDYWxsTG9ncy9HZXRWb2lwTG9nXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkdldFZvaXBMb2dSZXNwb25zZT5cbiAgICovXG4gIGdldFZvaXBMb2coXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRWb2lwTG9nUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uR2V0Vm9pcExvZ1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmdldFZvaXBMb2cocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMgZm9yIC9vbmRld28udnRzaS5Wb2lwQ2FsbExvZ3MvQWN0aXZhdGVTYXZlQ2FsbExvZ3NcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uU2F2ZUNhbGxMb2dzUmVzcG9uc2U+XG4gICAqL1xuICBhY3RpdmF0ZVNhdmVDYWxsTG9ncyhcbiAgICByZXF1ZXN0RGF0YTogZ29vZ2xlUHJvdG9idWYwMDAuRW1wdHksXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLlNhdmVDYWxsTG9nc1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmFjdGl2YXRlU2F2ZUNhbGxMb2dzKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cbn1cbiJdfQ==