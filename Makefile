.PHONY: up start stop

dev:
	yarn dev

start:
	docker-compose -f docker-compose.yml up -d

stop:
	docker-compose -f docker-compose.yml stop