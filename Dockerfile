FROM ubuntu:latest
LABEL authors="abrosse"

ENTRYPOINT ["top", "-b"]