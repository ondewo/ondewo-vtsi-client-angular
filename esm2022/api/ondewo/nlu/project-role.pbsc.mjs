/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import { GrpcCallType, GrpcMetadata } from '@ngx-grpc/common';
import { GRPC_CLIENT_FACTORY, takeMessages, throwStatusErrors } from '@ngx-grpc/core';
import * as thisProto from './project-role.pb';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import { GRPC_PROJECT_ROLES_CLIENT_SETTINGS } from './project-role.pbconf';
import * as i0 from '@angular/core';
import * as i1 from '@ngx-grpc/core';
/**
 * Service client implementation for ondewo.nlu.ProjectRoles
 */
class ProjectRolesClient {
	handler;
	client;
	/**
	 * Raw RPC implementation for each service client method.
	 * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
	 * Attention: these methods do not throw errors when non-zero status codes are received.
	 */
	$raw = {
		/**
		 * Unary call: /ondewo.nlu.ProjectRoles/CreateProjectRole
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ProjectRole>>
		 */
		createProjectRole: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.ProjectRoles/CreateProjectRole',
				requestData,
				requestMetadata,
				requestClass: thisProto.CreateProjectRoleRequest,
				responseClass: thisProto.ProjectRole
			});
		},
		/**
		 * Unary call: /ondewo.nlu.ProjectRoles/GetProjectRole
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ProjectRole>>
		 */
		getProjectRole: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.ProjectRoles/GetProjectRole',
				requestData,
				requestMetadata,
				requestClass: thisProto.GetProjectRoleRequest,
				responseClass: thisProto.ProjectRole
			});
		},
		/**
		 * Unary call: /ondewo.nlu.ProjectRoles/DeleteProjectRole
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<googleProtobuf004.Empty>>
		 */
		deleteProjectRole: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.ProjectRoles/DeleteProjectRole',
				requestData,
				requestMetadata,
				requestClass: thisProto.DeleteProjectRoleRequest,
				responseClass: googleProtobuf004.Empty
			});
		},
		/**
		 * Unary call: /ondewo.nlu.ProjectRoles/UpdateProjectRole
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ProjectRole>>
		 */
		updateProjectRole: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.ProjectRoles/UpdateProjectRole',
				requestData,
				requestMetadata,
				requestClass: thisProto.UpdateProjectRoleRequest,
				responseClass: thisProto.ProjectRole
			});
		},
		/**
		 * Unary call: /ondewo.nlu.ProjectRoles/ListProjectRoles
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ListProjectRolesResponse>>
		 */
		listProjectRoles: (requestData, requestMetadata = new GrpcMetadata()) => {
			return this.handler.handle({
				type: GrpcCallType.unary,
				client: this.client,
				path: '/ondewo.nlu.ProjectRoles/ListProjectRoles',
				requestData,
				requestMetadata,
				requestClass: thisProto.ListProjectRolesRequest,
				responseClass: thisProto.ListProjectRolesResponse
			});
		}
	};
	constructor(settings, clientFactory, handler) {
		this.handler = handler;
		this.client = clientFactory.createClient('ondewo.nlu.ProjectRoles', settings);
	}
	/**
	 * Unary call @/ondewo.nlu.ProjectRoles/CreateProjectRole
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ProjectRole>
	 */
	createProjectRole(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.createProjectRole(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.ProjectRoles/GetProjectRole
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ProjectRole>
	 */
	getProjectRole(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.getProjectRole(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.ProjectRoles/DeleteProjectRole
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<googleProtobuf004.Empty>
	 */
	deleteProjectRole(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.deleteProjectRole(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.ProjectRoles/UpdateProjectRole
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ProjectRole>
	 */
	updateProjectRole(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.updateProjectRole(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	/**
	 * Unary call @/ondewo.nlu.ProjectRoles/ListProjectRoles
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ListProjectRolesResponse>
	 */
	listProjectRoles(requestData, requestMetadata = new GrpcMetadata()) {
		return this.$raw.listProjectRoles(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: '12.0.0',
		version: '16.0.2',
		ngImport: i0,
		type: ProjectRolesClient,
		deps: [
			{ token: GRPC_PROJECT_ROLES_CLIENT_SETTINGS, optional: true },
			{ token: GRPC_CLIENT_FACTORY },
			{ token: i1.GrpcHandler }
		],
		target: i0.ɵɵFactoryTarget.Injectable
	});
	static ɵprov = i0.ɵɵngDeclareInjectable({
		minVersion: '12.0.0',
		version: '16.0.2',
		ngImport: i0,
		type: ProjectRolesClient,
		providedIn: 'any'
	});
}
export { ProjectRolesClient };
i0.ɵɵngDeclareClassMetadata({
	minVersion: '12.0.0',
	version: '16.0.2',
	ngImport: i0,
	type: ProjectRolesClient,
	decorators: [
		{
			type: Injectable,
			args: [{ providedIn: 'any' }]
		}
	],
	ctorParameters: function () {
		return [
			{
				type: undefined,
				decorators: [
					{
						type: Optional
					},
					{
						type: Inject,
						args: [GRPC_PROJECT_ROLES_CLIENT_SETTINGS]
					}
				]
			},
			{
				type: undefined,
				decorators: [
					{
						type: Inject,
						args: [GRPC_CLIENT_FACTORY]
					}
				]
			},
			{ type: i1.GrpcHandler }
		];
	}
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC1yb2xlLnBic2MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvb25kZXdvL25sdS9wcm9qZWN0LXJvbGUucGJzYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLGNBQWM7QUFDZCxFQUFFO0FBQ0YsMkJBQTJCO0FBQzNCLDhDQUE4QztBQUM5QyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUNMLFlBQVksRUFJWixZQUFZLEVBQ2IsTUFBTSxrQkFBa0IsQ0FBQztBQUMxQixPQUFPLEVBQ0wsbUJBQW1CLEVBRW5CLFlBQVksRUFDWixpQkFBaUIsRUFDbEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEtBQUssU0FBUyxNQUFNLG1CQUFtQixDQUFDO0FBSy9DLE9BQU8sS0FBSyxpQkFBaUIsTUFBTSw0QkFBNEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBQzNFOztHQUVHO0FBQ0gsTUFDYSxrQkFBa0I7SUF1SG5CO0lBdEhGLE1BQU0sQ0FBa0I7SUFFaEM7Ozs7T0FJRztJQUNILElBQUksR0FBRztRQUNMOzs7Ozs7V0FNRztRQUNILGlCQUFpQixFQUFFLENBQ2pCLFdBQStDLEVBQy9DLGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxFQUNVLEVBQUU7WUFDaEQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztnQkFDekIsSUFBSSxFQUFFLFlBQVksQ0FBQyxLQUFLO2dCQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ25CLElBQUksRUFBRSw0Q0FBNEM7Z0JBQ2xELFdBQVc7Z0JBQ1gsZUFBZTtnQkFDZixZQUFZLEVBQUUsU0FBUyxDQUFDLHdCQUF3QjtnQkFDaEQsYUFBYSxFQUFFLFNBQVMs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b250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gQHRzLW5vY2hlY2tcbi8vXG4vLyBUSElTIElTIEEgR0VORVJBVEVEIEZJTEVcbi8vIERPIE5PVCBNT0RJRlkgSVQhIFlPVVIgQ0hBTkdFUyBXSUxMIEJFIExPU1RcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEdycGNDYWxsVHlwZSxcbiAgR3JwY0NsaWVudCxcbiAgR3JwY0NsaWVudEZhY3RvcnksXG4gIEdycGNFdmVudCxcbiAgR3JwY01ldGFkYXRhXG59IGZyb20gJ0BuZ3gtZ3JwYy9jb21tb24nO1xuaW1wb3J0IHtcbiAgR1JQQ19DTElFTlRfRkFDVE9SWSxcbiAgR3JwY0hhbmRsZXIsXG4gIHRha2VNZXNzYWdlcyxcbiAgdGhyb3dTdGF0dXNFcnJvcnNcbn0gZnJvbSAnQG5neC1ncnBjL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0ICogYXMgdGhpc1Byb3RvIGZyb20gJy4vcHJvamVjdC1yb2xlLnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZUFwaTAwMCBmcm9tICcuLi8uLi9nb29nbGUvYXBpL2h0dHAucGInO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDEgZnJvbSAnQG5neC1ncnBjL3dlbGwta25vd24tdHlwZXMnO1xuaW1wb3J0ICogYXMgZ29vZ2xlQXBpMDAyIGZyb20gJy4uLy4uL2dvb2dsZS9hcGkvYW5ub3RhdGlvbnMucGInO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDMgZnJvbSAnQG5neC1ncnBjL3dlbGwta25vd24tdHlwZXMnO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDQgZnJvbSAnQG5neC1ncnBjL3dlbGwta25vd24tdHlwZXMnO1xuaW1wb3J0IHsgR1JQQ19QUk9KRUNUX1JPTEVTX0NMSUVOVF9TRVRUSU5HUyB9IGZyb20gJy4vcHJvamVjdC1yb2xlLnBiY29uZic7XG4vKipcbiAqIFNlcnZpY2UgY2xpZW50IGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LlByb2plY3RSb2xlc1xuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdhbnknIH0pXG5leHBvcnQgY2xhc3MgUHJvamVjdFJvbGVzQ2xpZW50IHtcbiAgcHJpdmF0ZSBjbGllbnQ6IEdycGNDbGllbnQ8YW55PjtcblxuICAvKipcbiAgICogUmF3IFJQQyBpbXBsZW1lbnRhdGlvbiBmb3IgZWFjaCBzZXJ2aWNlIGNsaWVudCBtZXRob2QuXG4gICAqIFRoZSByYXcgbWV0aG9kcyBwcm92aWRlIG1vcmUgY29udHJvbCBvbiB0aGUgaW5jb21pbmcgZGF0YSBhbmQgZXZlbnRzLiBFLmcuIHRoZXkgY2FuIGJlIHVzZWZ1bCB0byByZWFkIHN0YXR1cyBgT0tgIG1ldGFkYXRhLlxuICAgKiBBdHRlbnRpb246IHRoZXNlIG1ldGhvZHMgZG8gbm90IHRocm93IGVycm9ycyB3aGVuIG5vbi16ZXJvIHN0YXR1cyBjb2RlcyBhcmUgcmVjZWl2ZWQuXG4gICAqL1xuICAkcmF3ID0ge1xuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LlByb2plY3RSb2xlcy9DcmVhdGVQcm9qZWN0Um9sZVxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5Qcm9qZWN0Um9sZT4+XG4gICAgICovXG4gICAgY3JlYXRlUHJvamVjdFJvbGU6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQ3JlYXRlUHJvamVjdFJvbGVSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlByb2plY3RSb2xlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5Qcm9qZWN0Um9sZXMvQ3JlYXRlUHJvamVjdFJvbGUnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5DcmVhdGVQcm9qZWN0Um9sZVJlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5Qcm9qZWN0Um9sZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5Qcm9qZWN0Um9sZXMvR2V0UHJvamVjdFJvbGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uUHJvamVjdFJvbGU+PlxuICAgICAqL1xuICAgIGdldFByb2plY3RSb2xlOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldFByb2plY3RSb2xlUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5Qcm9qZWN0Um9sZT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuUHJvamVjdFJvbGVzL0dldFByb2plY3RSb2xlJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uR2V0UHJvamVjdFJvbGVSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uUHJvamVjdFJvbGVcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL29uZGV3by5ubHUuUHJvamVjdFJvbGVzL0RlbGV0ZVByb2plY3RSb2xlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8Z29vZ2xlUHJvdG9idWYwMDQuRW1wdHk+PlxuICAgICAqL1xuICAgIGRlbGV0ZVByb2plY3RSb2xlOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkRlbGV0ZVByb2plY3RSb2xlUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PGdvb2dsZVByb3RvYnVmMDA0LkVtcHR5Pj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5Qcm9qZWN0Um9sZXMvRGVsZXRlUHJvamVjdFJvbGUnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5EZWxldGVQcm9qZWN0Um9sZVJlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IGdvb2dsZVByb3RvYnVmMDA0LkVtcHR5XG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LlByb2plY3RSb2xlcy9VcGRhdGVQcm9qZWN0Um9sZVxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5Qcm9qZWN0Um9sZT4+XG4gICAgICovXG4gICAgdXBkYXRlUHJvamVjdFJvbGU6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uVXBkYXRlUHJvamVjdFJvbGVSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlByb2plY3RSb2xlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5Qcm9qZWN0Um9sZXMvVXBkYXRlUHJvamVjdFJvbGUnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5VcGRhdGVQcm9qZWN0Um9sZVJlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5Qcm9qZWN0Um9sZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5Qcm9qZWN0Um9sZXMvTGlzdFByb2plY3RSb2xlc1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5MaXN0UHJvamVjdFJvbGVzUmVzcG9uc2U+PlxuICAgICAqL1xuICAgIGxpc3RQcm9qZWN0Um9sZXM6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uTGlzdFByb2plY3RSb2xlc1JlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uTGlzdFByb2plY3RSb2xlc1Jlc3BvbnNlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5Qcm9qZWN0Um9sZXMvTGlzdFByb2plY3RSb2xlcycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkxpc3RQcm9qZWN0Um9sZXNSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uTGlzdFByb2plY3RSb2xlc1Jlc3BvbnNlXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChHUlBDX1BST0pFQ1RfUk9MRVNfQ0xJRU5UX1NFVFRJTkdTKSBzZXR0aW5nczogYW55LFxuICAgIEBJbmplY3QoR1JQQ19DTElFTlRfRkFDVE9SWSkgY2xpZW50RmFjdG9yeTogR3JwY0NsaWVudEZhY3Rvcnk8YW55PixcbiAgICBwcml2YXRlIGhhbmRsZXI6IEdycGNIYW5kbGVyXG4gICkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50RmFjdG9yeS5jcmVhdGVDbGllbnQoXG4gICAgICAnb25kZXdvLm5sdS5Qcm9qZWN0Um9sZXMnLFxuICAgICAgc2V0dGluZ3NcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28ubmx1LlByb2plY3RSb2xlcy9DcmVhdGVQcm9qZWN0Um9sZVxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5Qcm9qZWN0Um9sZT5cbiAgICovXG4gIGNyZWF0ZVByb2plY3RSb2xlKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQ3JlYXRlUHJvamVjdFJvbGVSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5Qcm9qZWN0Um9sZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5jcmVhdGVQcm9qZWN0Um9sZShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28ubmx1LlByb2plY3RSb2xlcy9HZXRQcm9qZWN0Um9sZVxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5Qcm9qZWN0Um9sZT5cbiAgICovXG4gIGdldFByb2plY3RSb2xlKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0UHJvamVjdFJvbGVSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5Qcm9qZWN0Um9sZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5nZXRQcm9qZWN0Um9sZShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28ubmx1LlByb2plY3RSb2xlcy9EZWxldGVQcm9qZWN0Um9sZVxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPGdvb2dsZVByb3RvYnVmMDA0LkVtcHR5PlxuICAgKi9cbiAgZGVsZXRlUHJvamVjdFJvbGUoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5EZWxldGVQcm9qZWN0Um9sZVJlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8Z29vZ2xlUHJvdG9idWYwMDQuRW1wdHk+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuZGVsZXRlUHJvamVjdFJvbGUocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5Qcm9qZWN0Um9sZXMvVXBkYXRlUHJvamVjdFJvbGVcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uUHJvamVjdFJvbGU+XG4gICAqL1xuICB1cGRhdGVQcm9qZWN0Um9sZShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlVwZGF0ZVByb2plY3RSb2xlUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uUHJvamVjdFJvbGU+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAudXBkYXRlUHJvamVjdFJvbGUocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5Qcm9qZWN0Um9sZXMvTGlzdFByb2plY3RSb2xlc1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5MaXN0UHJvamVjdFJvbGVzUmVzcG9uc2U+XG4gICAqL1xuICBsaXN0UHJvamVjdFJvbGVzKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uTGlzdFByb2plY3RSb2xlc1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkxpc3RQcm9qZWN0Um9sZXNSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5saXN0UHJvamVjdFJvbGVzKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cbn1cbiJdfQ==