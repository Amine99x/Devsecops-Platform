for svc in auth backend frontend logger; do
  img="192.168.216.130/library/mon-$svc:v3"
  echo "Pulling $img"
  docker pull "$img"

  digest=$(docker inspect --format='{{index .RepoDigests 0}}' "$img")
  echo "Digest for $svc => $digest"

  echo "Signing $digest"
  cosign sign --key cosign.key "$digest"

  echo "Verifying $digest"
  cosign verify --key cosign.pub "$digest"
done

