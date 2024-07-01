#!/bin/bash

VERSION="uat-1.0.0"
DOMAIN="registry.gitlab.com/b1575"
IMAGE_NAME="tesla-web-comercial"
REMOTE_TAG_VERSION=${DOMAIN}/${IMAGE_NAME}:${VERSION}
REMOTE_TAG_LATEST=${DOMAIN}/${IMAGE_NAME}:uat-latest

echo "Comienza generación de imagen de cliente en producción"
echo "Comenzando generación de imagen"
docker build -t ${REMOTE_TAG_LATEST} .
echo "Finalización de generación de imagen"
echo "Comenzando taggeo de imagen"
docker tag ${REMOTE_TAG_LATEST} ${REMOTE_TAG_VERSION}
echo "Finalización de taggeo de imagen"
echo "Comenzando subida de imagen"
docker push ${REMOTE_TAG_VERSION}
docker push ${REMOTE_TAG_LATEST}
echo "Finalización de subida de imagen"
echo "Finalización de generación de imagen de cliente en producción"
