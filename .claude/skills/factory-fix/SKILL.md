---
name: factory-fix
description: factory:fix 라벨이 붙은 이슈 하나를 격리 → 구현 → 증명 → 출하 순서로 처리해 PR을 연다. 사용법 /factory-fix <이슈 번호>
disable-model-invocation: true
---

# 이슈 수정: #$ARGUMENTS

CLAUDE.md의 작업 흐름을 그대로 따른다.

1. **격리**: `git fetch origin && git worktree add ../nbbang-wt/issue-$ARGUMENTS -b fix/issue-$ARGUMENTS origin/main` 후 그 폴더에서만 작업한다.
2. **재현**: 이슈 본문의 입력값으로 실패하는 테스트를 먼저 추가하고 `npm test`로 실패를 확인한다.
3. **수정 전 화면**: `scripts/shot.sh src "<이슈 입력값 쿼리>" evidence/issue-$ARGUMENTS/before.png`
4. **구현**: 테스트가 통과할 만큼만 고친다.
5. **증명**: `npm test` 전체 통과 확인, `after.png` 캡처. 두 사진을 직접 열어 보고 증상이 사라졌는지 확인한다.
6. **리뷰**: `factory-reviewer` 서브에이전트에게 이슈 번호와 worktree 경로를 넘긴다. FAIL이면 지적을 고치고 4단계부터 다시 한다.
7. **출하**: 커밋 후 push하고 CLAUDE.md의 PR 본문 형식으로 PR을 연다. 전후 사진은 `![before](../blob/fix/issue-$ARGUMENTS/evidence/issue-$ARGUMENTS/before.png?raw=true)`처럼 브랜치의 파일을 링크한다.
8. 머지는 하지 않는다. PR 주소를 출력하고 끝낸다.
