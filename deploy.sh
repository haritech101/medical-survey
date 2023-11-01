#!/bin/bash

TARGET_MACHINE="dev@tech101.in"
TARGET_PATH="/home/dev/docker/medical-survey"

ssh $TARGET_MACHINE mkdir -p $TARGET_PATH
scp docker-compose.yml ${TARGET_MACHINE}:${TARGET_PATH}/
ssh $TARGET_MACHINE docker-compose -f ${TARGET_PATH}/docker-compose.yml up -d
