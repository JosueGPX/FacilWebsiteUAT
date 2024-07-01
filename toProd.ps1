$VERSION = "uat-0.0.0"
$DOMAIN = "registry.gitlab.com/b1575"
$IMAGE_NAME = "tesla-web-comercial"
$REMOTE_TAG_VERSION = "${DOMAIN}/${IMAGE_NAME}:${VERSION}"
$REMOTE_TAG_LATEST = "${DOMAIN}/${IMAGE_NAME}:uat-latest"

Write-Host "Comienza generación de imagen de cliente en producción"
Write-Host "Comenzando generación de imagen"
docker build -t $REMOTE_TAG_LATEST .
Write-Host "Finalización de generación de imagen"
Write-Host "Comenzando taggeo de imagen"
docker tag $REMOTE_TAG_LATEST $REMOTE_TAG_VERSION
Write-Host "Finalización de taggeo de imagen"
Write-Host "Comenzando subida de imagen"
docker push $REMOTE_TAG_VERSION
docker push $REMOTE_TAG_LATEST
Write-Host "Finalización de subida de imagen"
Write-Host "Finalización de generación de imagen de cliente en producción"
