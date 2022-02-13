# which branches to use for the build of the client sdk
VTSI_API_GIT_BRANCH=tags/2.2.0
NLU_API_GIT_BRANCH=tags/2.4.0
S2T_API_GIT_BRANCH=tags/3.0.0
SIP_API_GIT_BRANCH=tags/1.2.0
T2S_API_GIT_BRANCH=tags/3.0.0

NLU_APIS_DIR=src/ondewo-nlu-api
NLU_PROTOS_DIR=${NLU_APIS_DIR}/ondewo

GOOGLE_APIS_DIR=${NLU_APIS_DIR}/googleapis
GOOGLE_PROTOS_DIR=${GOOGLE_APIS_DIR}/google

S2T_APIS_DIR=src/ondewo-s2t-api
S2T_PROTOS_DIR=${S2T_APIS_DIR}/ondewo

SIP_APIS_DIR=src/ondewo-sip-api
SIP_PROTOS_DIR=${SIP_APIS_DIR}/ondewo

T2S_APIS_DIR=src/ondewo-t2s-api
T2S_PROTOS_DIR=${T2S_APIS_DIR}/ondewo

VTSI_APIS_DIR=src/ondewo-vtsi-api
VTSI_PROTOS_DIR=${VTSI_APIS_DIR}/ondewo

build: clean_protos_from_submodules check_out_correct_submodule_versions copy_proto_files_all_submodules generate_protos

check_out_correct_submodule_versions: 
	@echo "START checking out correct submodule versions ..."
	git submodule update --init --recursive
	git -C ${NLU_APIS_DIR} fetch --all
	git -C ${NLU_APIS_DIR} checkout ${NLU_API_GIT_BRANCH}
	git -C ${S2T_APIS_DIR} fetch --all
	git -C ${S2T_APIS_DIR} checkout ${S2T_API_GIT_BRANCH}
	git -C ${SIP_APIS_DIR} fetch --all
	git -C ${SIP_APIS_DIR} checkout ${SIP_API_GIT_BRANCH}
	git -C ${T2S_APIS_DIR} fetch --all
	git -C ${T2S_APIS_DIR} checkout ${T2S_API_GIT_BRANCH}
	git -C ${VTSI_APIS_DIR} fetch --all
	git -C ${VTSI_APIS_DIR} checkout ${VTSI_API_GIT_BRANCH}
	@echo "DONE checking out correct submodule versions."

clean_protos_from_submodules: 
	@echo "START cleaning all protos from submodules from build folder ..."
	rm -rf  ${VTSI_APIS_DIR}/google
	rm -rf  ${VTSI_APIS_DIR}/ondewo/nlu
	rm -rf  ${VTSI_APIS_DIR}/ondewo/qa
	rm -rf  ${VTSI_APIS_DIR}/ondewo/s2t
	rm -rf  ${VTSI_APIS_DIR}/ondewo/sip
	rm -rf  ${VTSI_APIS_DIR}/ondewo/t2s
	@echo "DONE cleaning all protos from submodules from build folder."

copy_proto_files_all_submodules: copy_proto_files_for_google_api copy_proto_files_for_ondewo_nlu_api copy_proto_files_for_ondewo_s2t_api copy_proto_files_for_ondewo_t2s_api copy_proto_files_for_ondewo_sip_api

copy_proto_files_for_google_api: 
	@echo "START copying googleapis protos from submodules to build folder ..."
	-mkdir -p ${VTSI_APIS_DIR}/google/api
	-mkdir -p ${VTSI_APIS_DIR}/google/longrunning
	-mkdir -p ${VTSI_APIS_DIR}/google/rpc
	-mkdir -p ${VTSI_APIS_DIR}/google/type
	cp ${GOOGLE_PROTOS_DIR}/api/annotations.proto ${VTSI_APIS_DIR}/google/api/
	cp ${GOOGLE_PROTOS_DIR}/api/http.proto ${VTSI_APIS_DIR}/google/api/
	cp ${GOOGLE_PROTOS_DIR}/type/latlng.proto ${VTSI_APIS_DIR}/google/type/
	cp ${GOOGLE_PROTOS_DIR}/rpc/status.proto ${VTSI_APIS_DIR}/google/rpc/
	cp ${GOOGLE_PROTOS_DIR}/longrunning/operations.proto ${VTSI_APIS_DIR}/google/longrunning/
	@echo "DONE copying googleapis protos from submodules to build folder."
	
copy_proto_files_for_ondewo_nlu_api:
	@echo "START copying ondewo-nlu protos from submodules to build folder ..."
	-mkdir -p ${VTSI_APIS_DIR}/ondewo/nlu/
	cp ${NLU_PROTOS_DIR}/nlu/context.proto ${VTSI_APIS_DIR}/ondewo/nlu/
	@echo "DONE copying ondewo-nlu protos from submodules to build folder."

copy_proto_files_for_ondewo_s2t_api: 
	@echo "START copying ondewo-s2t protos from submodules to build folder ..."
	-mkdir -p ${VTSI_APIS_DIR}/ondewo/s2t/
	cp ${S2T_PROTOS_DIR}/s2t/speech-to-text.proto ${VTSI_APIS_DIR}/ondewo/s2t/
	@echo "DONE copying ondewo-s2t protos from submodules to build folder."

copy_proto_files_for_ondewo_t2s_api: 
	@echo "START copying ondewo-t2s protos from submodules to build folder ..."
	-mkdir -p ${VTSI_APIS_DIR}/ondewo/t2s/
	cp ${T2S_PROTOS_DIR}/t2s/text-to-speech.proto ${VTSI_APIS_DIR}/ondewo/t2s/
	cp ${T2S_PROTOS_DIR}/t2s/custom_phonemizer.proto ${VTSI_APIS_DIR}/ondewo/t2s/
	@echo "DONE copying ondewo-t2s protos from submodules to build folder."

copy_proto_files_for_ondewo_sip_api:
	@echo "START copying ondewo-sip protos from submodules to build folder ..."
	-mkdir -p ${VTSI_APIS_DIR}/ondewo/sip/
	cp ${SIP_PROTOS_DIR}/sip/sip.proto ${VTSI_APIS_DIR}/ondewo/sip/
	@echo "DONE copying ondewo-sip protos from submodules to build folder."

generate_protos:
	@echo "START generate protos ..."
	cd src/ && npm run generate
	@echo "DONE generate protos."

push_to_npm: 
	@echo "START pushing release to npm ..."
	cd src/ && npm run publish-npm
	@echo "DONE pushing release to npm."