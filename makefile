PROJECT = fpts

COMPOSE_FILE = ./docker-compose.yml
COMPOSE = docker compose -p $(PROJECT) -f $(COMPOSE_FILE)

.PHONY: build run env

build:
	$(COMPOSE) build $(STAGE)

run:
	$(COMPOSE) run -it --rm --service-ports $(STAGE)

env:
	@make run STAGE=dev-container
