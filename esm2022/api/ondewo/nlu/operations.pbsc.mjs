/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import { GrpcCallType, GrpcMetadata } from '@ngx-grpc/common';
import { GRPC_CLIENT_FACTORY, takeMessages, throwStatusErrors } from '@ngx-grpc/core';
import * as thisProto from './operations.pb';
import * as googleProtobuf005 from '@ngx-grpc/well-known-types';
import { GRPC_OPERATIONS_CLIENT_SETTINGS } from './operations.pbconf';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-grpc/core";
/**
 * Service client implementation for ondewo.nlu.Operations
 */
class OperationsClient {
    handler;
    client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw = {
        /**
         * Unary call: /ondewo.nlu.Operations/ListOperations
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListOperationsResponse>>
         */
        listOperations: (requestData, requestMetadata = new GrpcMetadata()) => {
            return this.handler.handle({
                type: GrpcCallType.unary,
                client: this.client,
                path: '/ondewo.nlu.Operations/ListOperations',
                requestData,
                requestMetadata,
                requestClass: thisProto.ListOperationsRequest,
                responseClass: thisProto.ListOperationsResponse
            });
        },
        /**
         * Unary call: /ondewo.nlu.Operations/GetOperation
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.Operation>>
         */
        getOperation: (requestData, requestMetadata = new GrpcMetadata()) => {
            return this.handler.handle({
                type: GrpcCallType.unary,
                client: this.client,
                path: '/ondewo.nlu.Operations/GetOperation',
                requestData,
                requestMetadata,
                requestClass: thisProto.GetOperationRequest,
                responseClass: thisProto.Operation
            });
        },
        /**
         * Unary call: /ondewo.nlu.Operations/DeleteOperation
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<googleProtobuf005.Empty>>
         */
        deleteOperation: (requestData, requestMetadata = new GrpcMetadata()) => {
            return this.handler.handle({
                type: GrpcCallType.unary,
                client: this.client,
                path: '/ondewo.nlu.Operations/DeleteOperation',
                requestData,
                requestMetadata,
                requestClass: thisProto.DeleteOperationRequest,
                responseClass: googleProtobuf005.Empty
            });
        },
        /**
         * Unary call: /ondewo.nlu.Operations/CancelOperation
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<googleProtobuf005.Empty>>
         */
        cancelOperation: (requestData, requestMetadata = new GrpcMetadata()) => {
            return this.handler.handle({
                type: GrpcCallType.unary,
                client: this.client,
                path: '/ondewo.nlu.Operations/CancelOperation',
                requestData,
                requestMetadata,
                requestClass: thisProto.CancelOperationRequest,
                responseClass: googleProtobuf005.Empty
            });
        }
    };
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        this.client = clientFactory.createClient('ondewo.nlu.Operations', settings);
    }
    /**
     * Unary call @/ondewo.nlu.Operations/ListOperations
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListOperationsResponse>
     */
    listOperations(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .listOperations(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.nlu.Operations/GetOperation
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.Operation>
     */
    getOperation(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getOperation(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.nlu.Operations/DeleteOperation
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf005.Empty>
     */
    deleteOperation(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .deleteOperation(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.nlu.Operations/CancelOperation
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf005.Empty>
     */
    cancelOperation(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .cancelOperation(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: OperationsClient, deps: [{ token: GRPC_OPERATIONS_CLIENT_SETTINGS, optional: true }, { token: GRPC_CLIENT_FACTORY }, { token: i1.GrpcHandler }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: OperationsClient, providedIn: 'any' });
}
export { OperationsClient };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: OperationsClient, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'any' }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [GRPC_OPERATIONS_CLIENT_SETTINGS]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [GRPC_CLIENT_FACTORY]
                }] }, { type: i1.GrpcHandler }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlcmF0aW9ucy5wYnNjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYXBpL29uZGV3by9ubHUvb3BlcmF0aW9ucy5wYnNjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsY0FBYztBQUNkLEVBQUU7QUFDRiwyQkFBMkI7QUFDM0IsOENBQThDO0FBQzlDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsWUFBWSxFQUlaLFlBQVksRUFDYixNQUFNLGtCQUFrQixDQUFDO0FBQzFCLE9BQU8sRUFDTCxtQkFBbUIsRUFFbkIsWUFBWSxFQUNaLGlCQUFpQixFQUNsQixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sS0FBSyxTQUFTLE1BQU0saUJBQWlCLENBQUM7QUFNN0MsT0FBTyxLQUFLLGlCQUFpQixNQUFNLDRCQUE0QixDQUFDO0FBR2hFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFDdEU7O0dBRUc7QUFDSCxNQUNhLGdCQUFnQjtJQWtHakI7SUFqR0YsTUFBTSxDQUFrQjtJQUVoQzs7OztPQUlHO0lBQ0gsSUFBSSxHQUFHO1FBQ0w7Ozs7OztXQU1HO1FBQ0gsY0FBYyxFQUFFLENBQ2QsV0FBNEMsRUFDNUMsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFLEVBQ3FCLEVBQUU7WUFDM0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztnQkFDekIsSUFBSSxFQUFFLFlBQVksQ0FBQyxLQUFLO2dCQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ25CLElBQUksRUFBRSx1Q0FBdUM7Z0JBQzdDLFdBQVc7Z0JBQ1gsZUFBZTtnQkFDZixZQUFZLEVBQUUsU0FBUyxDQUFDLHFCQUFxQjtnQkFDN0MsYUFBYSxFQUFFLFNBQVMsQ0FBQyxz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QUFJLFlBQVksRUFBRTtRQUVwQyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsZUFBZSxDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUM7YUFDN0MsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO3VHQXJLVSxnQkFBZ0Isa0JBZ0dMLCtCQUErQiw2QkFDM0MsbUJBQW1COzJHQWpHbEIsZ0JBQWdCLGNBREgsS0FBSzs7U0FDbEIsZ0JBQWdCOzJGQUFoQixnQkFBZ0I7a0JBRDVCLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFOzswQkFpRzVCLFFBQVE7OzBCQUFJLE1BQU07MkJBQUMsK0JBQStCOzswQkFDbEQsTUFBTTsyQkFBQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIEB0cy1ub2NoZWNrXG4vL1xuLy8gVEhJUyBJUyBBIEdFTkVSQVRFRCBGSUxFXG4vLyBETyBOT1QgTU9ESUZZIElUISBZT1VSIENIQU5HRVMgV0lMTCBCRSBMT1NUXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBHcnBjQ2FsbFR5cGUsXG4gIEdycGNDbGllbnQsXG4gIEdycGNDbGllbnRGYWN0b3J5LFxuICBHcnBjRXZlbnQsXG4gIEdycGNNZXRhZGF0YVxufSBmcm9tICdAbmd4LWdycGMvY29tbW9uJztcbmltcG9ydCB7XG4gIEdSUENfQ0xJRU5UX0ZBQ1RPUlksXG4gIEdycGNIYW5kbGVyLFxuICB0YWtlTWVzc2FnZXMsXG4gIHRocm93U3RhdHVzRXJyb3JzXG59IGZyb20gJ0BuZ3gtZ3JwYy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCAqIGFzIHRoaXNQcm90byBmcm9tICcuL29wZXJhdGlvbnMucGInO1xuaW1wb3J0ICogYXMgZ29vZ2xlQXBpMDAwIGZyb20gJy4uLy4uL2dvb2dsZS9hcGkvaHR0cC5wYic7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwMSBmcm9tICdAbmd4LWdycGMvd2VsbC1rbm93bi10eXBlcyc7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwMiBmcm9tICdAbmd4LWdycGMvd2VsbC1rbm93bi10eXBlcyc7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwMyBmcm9tICdAbmd4LWdycGMvd2VsbC1rbm93bi10eXBlcyc7XG5pbXBvcnQgKiBhcyBnb29nbGVBcGkwMDQgZnJvbSAnLi4vLi4vZ29vZ2xlL2FwaS9hbm5vdGF0aW9ucy5wYic7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwNSBmcm9tICdAbmd4LWdycGMvd2VsbC1rbm93bi10eXBlcyc7XG5pbXBvcnQgKiBhcyBnb29nbGVScGMwMDYgZnJvbSAnLi4vLi4vZ29vZ2xlL3JwYy9zdGF0dXMucGInO1xuaW1wb3J0ICogYXMgb25kZXdvTmx1MDA3IGZyb20gJy4uLy4uL29uZGV3by9ubHUvb3BlcmF0aW9uLW1ldGFkYXRhLnBiJztcbmltcG9ydCB7IEdSUENfT1BFUkFUSU9OU19DTElFTlRfU0VUVElOR1MgfSBmcm9tICcuL29wZXJhdGlvbnMucGJjb25mJztcbi8qKlxuICogU2VydmljZSBjbGllbnQgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuT3BlcmF0aW9uc1xuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdhbnknIH0pXG5leHBvcnQgY2xhc3MgT3BlcmF0aW9uc0NsaWVudCB7XG4gIHByaXZhdGUgY2xpZW50OiBHcnBjQ2xpZW50PGFueT47XG5cbiAgLyoqXG4gICAqIFJhdyBSUEMgaW1wbGVtZW50YXRpb24gZm9yIGVhY2ggc2VydmljZSBjbGllbnQgbWV0aG9kLlxuICAgKiBUaGUgcmF3IG1ldGhvZHMgcHJvdmlkZSBtb3JlIGNvbnRyb2wgb24gdGhlIGluY29taW5nIGRhdGEgYW5kIGV2ZW50cy4gRS5nLiB0aGV5IGNhbiBiZSB1c2VmdWwgdG8gcmVhZCBzdGF0dXMgYE9LYCBtZXRhZGF0YS5cbiAgICogQXR0ZW50aW9uOiB0aGVzZSBtZXRob2RzIGRvIG5vdCB0aHJvdyBlcnJvcnMgd2hlbiBub24temVybyBzdGF0dXMgY29kZXMgYXJlIHJlY2VpdmVkLlxuICAgKi9cbiAgJHJhdyA9IHtcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5PcGVyYXRpb25zL0xpc3RPcGVyYXRpb25zXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkxpc3RPcGVyYXRpb25zUmVzcG9uc2U+PlxuICAgICAqL1xuICAgIGxpc3RPcGVyYXRpb25zOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkxpc3RPcGVyYXRpb25zUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5MaXN0T3BlcmF0aW9uc1Jlc3BvbnNlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5PcGVyYXRpb25zL0xpc3RPcGVyYXRpb25zJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uTGlzdE9wZXJhdGlvbnNSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uTGlzdE9wZXJhdGlvbnNSZXNwb25zZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5PcGVyYXRpb25zL0dldE9wZXJhdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5PcGVyYXRpb24+PlxuICAgICAqL1xuICAgIGdldE9wZXJhdGlvbjogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRPcGVyYXRpb25SZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLk9wZXJhdGlvbj4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuT3BlcmF0aW9ucy9HZXRPcGVyYXRpb24nLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5HZXRPcGVyYXRpb25SZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uT3BlcmF0aW9uXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1Lk9wZXJhdGlvbnMvRGVsZXRlT3BlcmF0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8Z29vZ2xlUHJvdG9idWYwMDUuRW1wdHk+PlxuICAgICAqL1xuICAgIGRlbGV0ZU9wZXJhdGlvbjogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5EZWxldGVPcGVyYXRpb25SZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8Z29vZ2xlUHJvdG9idWYwMDUuRW1wdHk+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28ubmx1Lk9wZXJhdGlvbnMvRGVsZXRlT3BlcmF0aW9uJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uRGVsZXRlT3BlcmF0aW9uUmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogZ29vZ2xlUHJvdG9idWYwMDUuRW1wdHlcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL29uZGV3by5ubHUuT3BlcmF0aW9ucy9DYW5jZWxPcGVyYXRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDxnb29nbGVQcm90b2J1ZjAwNS5FbXB0eT4+XG4gICAgICovXG4gICAgY2FuY2VsT3BlcmF0aW9uOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkNhbmNlbE9wZXJhdGlvblJlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDxnb29nbGVQcm90b2J1ZjAwNS5FbXB0eT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuT3BlcmF0aW9ucy9DYW5jZWxPcGVyYXRpb24nLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5DYW5jZWxPcGVyYXRpb25SZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiBnb29nbGVQcm90b2J1ZjAwNS5FbXB0eVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoR1JQQ19PUEVSQVRJT05TX0NMSUVOVF9TRVRUSU5HUykgc2V0dGluZ3M6IGFueSxcbiAgICBASW5qZWN0KEdSUENfQ0xJRU5UX0ZBQ1RPUlkpIGNsaWVudEZhY3Rvcnk6IEdycGNDbGllbnRGYWN0b3J5PGFueT4sXG4gICAgcHJpdmF0ZSBoYW5kbGVyOiBHcnBjSGFuZGxlclxuICApIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudEZhY3RvcnkuY3JlYXRlQ2xpZW50KCdvbmRld28ubmx1Lk9wZXJhdGlvbnMnLCBzZXR0aW5ncyk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL29uZGV3by5ubHUuT3BlcmF0aW9ucy9MaXN0T3BlcmF0aW9uc1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5MaXN0T3BlcmF0aW9uc1Jlc3BvbnNlPlxuICAgKi9cbiAgbGlzdE9wZXJhdGlvbnMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5MaXN0T3BlcmF0aW9uc1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkxpc3RPcGVyYXRpb25zUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAubGlzdE9wZXJhdGlvbnMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5PcGVyYXRpb25zL0dldE9wZXJhdGlvblxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5PcGVyYXRpb24+XG4gICAqL1xuICBnZXRPcGVyYXRpb24oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRPcGVyYXRpb25SZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5PcGVyYXRpb24+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuZ2V0T3BlcmF0aW9uKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL29uZGV3by5ubHUuT3BlcmF0aW9ucy9EZWxldGVPcGVyYXRpb25cbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxnb29nbGVQcm90b2J1ZjAwNS5FbXB0eT5cbiAgICovXG4gIGRlbGV0ZU9wZXJhdGlvbihcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkRlbGV0ZU9wZXJhdGlvblJlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8Z29vZ2xlUHJvdG9idWYwMDUuRW1wdHk+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuZGVsZXRlT3BlcmF0aW9uKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL29uZGV3by5ubHUuT3BlcmF0aW9ucy9DYW5jZWxPcGVyYXRpb25cbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxnb29nbGVQcm90b2J1ZjAwNS5FbXB0eT5cbiAgICovXG4gIGNhbmNlbE9wZXJhdGlvbihcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkNhbmNlbE9wZXJhdGlvblJlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8Z29vZ2xlUHJvdG9idWYwMDUuRW1wdHk+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuY2FuY2VsT3BlcmF0aW9uKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cbn1cbiJdfQ==