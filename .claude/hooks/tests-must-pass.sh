#!/usr/bin/env bash
# Stop 훅: 코드가 바뀐 worktree에서 테스트가 실패하면 끝내지 못하게 막는다.
input=$(cat)
[ "$(printf '%s' "$input" | jq -r '.stop_hook_active // false')" = "true" ] && exit 0

cd "${CLAUDE_PROJECT_DIR:-.}" || exit 0
failed=""
while read -r path; do
  changed=$(git -C "$path" status --porcelain -- src test; git -C "$path" diff --name-only origin/main -- src test 2>/dev/null)
  [ -z "$changed" ] && continue
  if ! out=$(cd "$path" && npm test 2>&1); then
    failed="$failed\n[$path]\n$(printf '%s' "$out" | grep -E '✖|not ok|Expected|actual|expected' | head -8)"
  fi
done < <(git worktree list --porcelain | sed -n 's/^worktree //p')

if [ -n "$failed" ]; then
  printf '테스트가 실패한 상태로는 끝낼 수 없습니다. 고친 뒤 다시 npm test를 돌리세요.%b\n' "$failed" >&2
  exit 2
fi
exit 0
