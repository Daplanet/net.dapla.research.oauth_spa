IMAGE_NAME		:= net.dapla.research.oauth_spa
IMAGE_VERSION		:= 1.0.0
STACK_NAME		:= $(shell basename "$$(pwd)")
VIRTUAL_HOST		:= app.local

.PHONY: all clean deploy image test $(VIRTUAL_HOST)
.DEFAULT: all

all: clean deploy

clean:
	@docker stack rm $(STACK_NAME)

distclean: clean
	@docker rmi $(IMAGE_NAME):$(IMAGE_VERSION) $(IMAGE_NAME):latest

image:
	@docker build -t $(IMAGE_NAME):$(IMAGE_VERSION) .
	@docker tag $(IMAGE_NAME):$(IMAGE_VERSION) $(IMAGE_NAME):latest

deploy: image
	@docker stack deploy -c docker-compose.yml $(STACK_NAME)

test: $(VIRTUAL_HOST)

$(VIRTUAL_HOST):
	@curl -sSLk $@
