import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './voip.pb';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as i0 from '@angular/core';
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
		 * Unary call: /ondewo.vtsi.VoipSessions/CreateProjectConfigs
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
		 */
		createProjectConfigs: (
			requestData: thisProto.CreateProjectConfigsRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<googleProtobuf003.Empty>>;
		/**
		 * Unary call: /ondewo.vtsi.VoipSessions/GetProjectConfigs
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.GetProjectConfigsResponse>>
		 */
		getProjectConfigs: (
			requestData: thisProto.GetProjectConfigsRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.GetProjectConfigsResponse>>;
		/**
		 * Unary call: /ondewo.vtsi.VoipSessions/UpdateProjectConfigs
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
		 */
		updateProjectConfigs: (
			requestData: thisProto.UpdateProjectConfigsRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<googleProtobuf003.Empty>>;
		/**
		 * Unary call: /ondewo.vtsi.VoipSessions/DeleteProjectConfigs
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
		 */
		deleteProjectConfigs: (
			requestData: thisProto.DeleteProjectConfigsRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<googleProtobuf003.Empty>>;
		/**
		 * Unary call: /ondewo.vtsi.VoipSessions/DeployProject
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
		 */
		deployProject: (
			requestData: thisProto.DeployProjectRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<googleProtobuf003.Empty>>;
		/**
		 * Unary call: /ondewo.vtsi.VoipSessions/UndeployProject
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
		 */
		undeployProject: (
			requestData: thisProto.UndeployProjectRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<googleProtobuf003.Empty>>;
		/**
		 * Unary call: /ondewo.vtsi.VoipSessions/StartListeners
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.StartListenersResponse>>
		 */
		startListeners: (
			requestData: thisProto.StartListenersRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.StartListenersResponse>>;
		/**
		 * Unary call: /ondewo.vtsi.VoipSessions/StartCallers
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.StartCallersResponse>>
		 */
		startCallers: (
			requestData: thisProto.StartCallersRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.StartCallersResponse>>;
		/**
		 * Unary call: /ondewo.vtsi.VoipSessions/StartScheduledCallers
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
		 */
		startScheduledCallers: (
			requestData: thisProto.StartScheduledCallersRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<googleProtobuf003.Empty>>;
		/**
		 * Unary call: /ondewo.vtsi.VoipSessions/StopCalls
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
		 */
		stopCalls: (
			requestData: thisProto.StopCallsRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<googleProtobuf003.Empty>>;
		/**
		 * Unary call: /ondewo.vtsi.VoipSessions/StopAllCalls
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
		 */
		stopAllCalls: (
			requestData: thisProto.StopAllCallsRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<googleProtobuf003.Empty>>;
		/**
		 * Unary call: /ondewo.vtsi.VoipSessions/TransferCalls
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
		 */
		transferCalls: (
			requestData: thisProto.TransferCallsRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<googleProtobuf003.Empty>>;
		/**
		 * Unary call: /ondewo.vtsi.VoipSessions/GetVoipCallInfo
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.GetVoipCallInfoResponse>>
		 */
		getVoipCallInfo: (
			requestData: thisProto.GetVoipCallInfoRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.GetVoipCallInfoResponse>>;
		/**
		 * Unary call: /ondewo.vtsi.VoipSessions/ListVoipCallInfo
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.ListVoipCallInfoResponse>>
		 */
		listVoipCallInfo: (
			requestData: thisProto.ListVoipCallInfoRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.ListVoipCallInfoResponse>>;
		/**
		 * Unary call: /ondewo.vtsi.VoipSessions/GetAudioFile
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.GetAudioFileResponse>>
		 */
		getAudioFile: (
			requestData: thisProto.GetAudioFileRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.GetAudioFileResponse>>;
		/**
		 * Unary call: /ondewo.vtsi.VoipSessions/GetFullConversationAudioFile
		 *
		 * @param requestMessage Request message
		 * @param requestMetadata Request metadata
		 * @returns Observable<GrpcEvent<thisProto.GetFullConversationAudioFileResponse>>
		 */
		getFullConversationAudioFile: (
			requestData: thisProto.GetFullConversationAudioFileRequest,
			requestMetadata?: GrpcMetadata
		) => Observable<GrpcEvent<thisProto.GetFullConversationAudioFileResponse>>;
	};
	constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
	/**
	 * Unary call @/ondewo.vtsi.VoipSessions/CreateProjectConfigs
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<googleProtobuf003.Empty>
	 */
	createProjectConfigs(
		requestData: thisProto.CreateProjectConfigsRequest,
		requestMetadata?: GrpcMetadata
	): Observable<googleProtobuf003.Empty>;
	/**
	 * Unary call @/ondewo.vtsi.VoipSessions/GetProjectConfigs
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.GetProjectConfigsResponse>
	 */
	getProjectConfigs(
		requestData: thisProto.GetProjectConfigsRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.GetProjectConfigsResponse>;
	/**
	 * Unary call @/ondewo.vtsi.VoipSessions/UpdateProjectConfigs
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<googleProtobuf003.Empty>
	 */
	updateProjectConfigs(
		requestData: thisProto.UpdateProjectConfigsRequest,
		requestMetadata?: GrpcMetadata
	): Observable<googleProtobuf003.Empty>;
	/**
	 * Unary call @/ondewo.vtsi.VoipSessions/DeleteProjectConfigs
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<googleProtobuf003.Empty>
	 */
	deleteProjectConfigs(
		requestData: thisProto.DeleteProjectConfigsRequest,
		requestMetadata?: GrpcMetadata
	): Observable<googleProtobuf003.Empty>;
	/**
	 * Unary call @/ondewo.vtsi.VoipSessions/DeployProject
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<googleProtobuf003.Empty>
	 */
	deployProject(
		requestData: thisProto.DeployProjectRequest,
		requestMetadata?: GrpcMetadata
	): Observable<googleProtobuf003.Empty>;
	/**
	 * Unary call @/ondewo.vtsi.VoipSessions/UndeployProject
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<googleProtobuf003.Empty>
	 */
	undeployProject(
		requestData: thisProto.UndeployProjectRequest,
		requestMetadata?: GrpcMetadata
	): Observable<googleProtobuf003.Empty>;
	/**
	 * Unary call @/ondewo.vtsi.VoipSessions/StartListeners
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.StartListenersResponse>
	 */
	startListeners(
		requestData: thisProto.StartListenersRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.StartListenersResponse>;
	/**
	 * Unary call @/ondewo.vtsi.VoipSessions/StartCallers
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.StartCallersResponse>
	 */
	startCallers(
		requestData: thisProto.StartCallersRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.StartCallersResponse>;
	/**
	 * Unary call @/ondewo.vtsi.VoipSessions/StartScheduledCallers
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<googleProtobuf003.Empty>
	 */
	startScheduledCallers(
		requestData: thisProto.StartScheduledCallersRequest,
		requestMetadata?: GrpcMetadata
	): Observable<googleProtobuf003.Empty>;
	/**
	 * Unary call @/ondewo.vtsi.VoipSessions/StopCalls
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<googleProtobuf003.Empty>
	 */
	stopCalls(
		requestData: thisProto.StopCallsRequest,
		requestMetadata?: GrpcMetadata
	): Observable<googleProtobuf003.Empty>;
	/**
	 * Unary call @/ondewo.vtsi.VoipSessions/StopAllCalls
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<googleProtobuf003.Empty>
	 */
	stopAllCalls(
		requestData: thisProto.StopAllCallsRequest,
		requestMetadata?: GrpcMetadata
	): Observable<googleProtobuf003.Empty>;
	/**
	 * Unary call @/ondewo.vtsi.VoipSessions/TransferCalls
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<googleProtobuf003.Empty>
	 */
	transferCalls(
		requestData: thisProto.TransferCallsRequest,
		requestMetadata?: GrpcMetadata
	): Observable<googleProtobuf003.Empty>;
	/**
	 * Unary call @/ondewo.vtsi.VoipSessions/GetVoipCallInfo
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.GetVoipCallInfoResponse>
	 */
	getVoipCallInfo(
		requestData: thisProto.GetVoipCallInfoRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.GetVoipCallInfoResponse>;
	/**
	 * Unary call @/ondewo.vtsi.VoipSessions/ListVoipCallInfo
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.ListVoipCallInfoResponse>
	 */
	listVoipCallInfo(
		requestData: thisProto.ListVoipCallInfoRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.ListVoipCallInfoResponse>;
	/**
	 * Unary call @/ondewo.vtsi.VoipSessions/GetAudioFile
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.GetAudioFileResponse>
	 */
	getAudioFile(
		requestData: thisProto.GetAudioFileRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.GetAudioFileResponse>;
	/**
	 * Unary call @/ondewo.vtsi.VoipSessions/GetFullConversationAudioFile
	 *
	 * @param requestMessage Request message
	 * @param requestMetadata Request metadata
	 * @returns Observable<thisProto.GetFullConversationAudioFileResponse>
	 */
	getFullConversationAudioFile(
		requestData: thisProto.GetFullConversationAudioFileRequest,
		requestMetadata?: GrpcMetadata
	): Observable<thisProto.GetFullConversationAudioFileResponse>;
	static ɵfac: i0.ɵɵFactoryDeclaration<VoipSessionsClient, [{ optional: true }, null, null]>;
	static ɵprov: i0.ɵɵInjectableDeclaration<VoipSessionsClient>;
}
