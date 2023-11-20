include .env
export

DEPLOY_SCRIPT=scripts/deploy.ts


### Environment Setup

# This assumes that you created a full hardhat typescript project which install a lot of the other dependencies
.PHONY: install-deps
install-deps:
	yarn add --dev @nomicfoundation/hardhat-verify dotenv

.PHONY: run-local-network
run-local-network:
	yarn hardhat node

### Compile and deploy Commands

.PHONY: compile
compile:
	yarn hardhat compile

.PHONY: local-deploy
local-deploy:
	yarn hardhat run $(DEPLOY_SCRIPT) --network localhost

.PHONY: sepolia-deploy
sepolia-deploy:
	yarn hardhat run $(DEPLOY_SCRIPT) --network sepolia

### Tests

.PHONY: run-tests
run-tests:
	yarn hardhat test