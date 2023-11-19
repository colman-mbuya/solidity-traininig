include .env
export

DEPLOY_SCRIPT=script/DeploySimpleStorage.s.sol

### FORGE COMMANDS

.PHONY: compile
compile:
	forge compile

.PHONY: local-deploy
local-deploy:
	forge script $(DEPLOY_SCRIPT) --rpc-url $(LOCAL_RPC_URL) --private-key $(PRIVATE_KEY) --broadcast

.PHONY: sepolia-deploy
sepolia-deploy:
	forge script $(DEPLOY_SCRIPT) --rpc-url $(SEPOLIA_RPC_URL) --private-key $(SEPOLIA_PRIVATE_KEY) --broadcast --verify

### Tests

# .PHONY: run-tests
# run-tests:
# 	TBC