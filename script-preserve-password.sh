#!/bin/bash
export COSIGN_PASSWORD="9870.ll"
HARBOR_USER="admin"
HARBOR_PASS="Harbor12345"

for svc in auth backend frontend logger; do
  img="192.168.216.130/library/mon-$svc:v3"
  echo "--- Processing $svc ---"
  
  # Pull the image
  docker pull "$img"

  # Extract the digest (Cosign needs the exact SHA)
  digest=$(docker inspect --format='{{index .RepoDigests 0}}' "$img")
  
  if [ -z "$digest" ]; then
    echo "Error: Could not find digest for $img"
    continue
  fi

  echo "Signing $digest..."
  # Explicitly pass credentials to avoid UNAUTHORIZED errors
  cosign sign --key cosign.key \
    --registry-username "$HARBOR_USER" \
    --registry-password "$HARBOR_PASS" \
    "$digest"

  echo "Verifying..."
  cosign verify --key cosign.pub "$digest"
done
