#! /bin/bash

CDN_DI_DISTRO_ID=EJZQODYMRL03O

function monitor_invalidation() {
  local inv_id="$1"
  echo "⏱️ Monitoring invalidation completion (10-second intervals)…"
  while true; do
    sleep 10
    local status=$(aws cloudfront get-invalidation --distribution-id="$CDN_DI_DISTRO_ID" --id "$inv_id" | jq --raw-output '.Invalidation.Status')
    if [ "$status" = "InProgress" ]; then
      echo -n '.'
    else
      echo ''
      [ "$status" = "Completed" ] && echo -e '🎉 \033[1;32mInvalidation complete!' && exit 0
      echo -e "❌ \033[1;31mInvalidation: $status\033[0m" >&2 && exit 2
    fi
  done
}

echo "⚡ Requesting CDN invalidation of /typescript/*…"
INV_ID=$(aws cloudfront create-invalidation --distribution-id "$CDN_DI_DISTRO_ID" --paths "/typescript/*" | jq --raw-output '.Invalidation.Id') &&
  monitor_invalidation "$INV_ID" ||
  { echo -e "❌ \033[1;31mInvalidation creation failed!\033[0m" >&2 && exit 1; }
