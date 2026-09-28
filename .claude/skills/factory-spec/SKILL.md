---
name: factory-spec
description: factory:spec 라벨이 붙은 기능 요청을 코드 대신 스펙 문서 PR로 만든다. 사람이 정해야 할 질문을 분명히 남긴다. 사용법 /factory-spec <이슈 번호>
disable-model-invocation: true
---

# 스펙 작성: #$ARGUMENTS

1. `git fetch origin && git worktree add .claude/worktrees/spec-$ARGUMENTS -b spec/issue-$ARGUMENTS origin/main`
2. `specs/issue-$ARGUMENTS.md`를 쓴다. 코드는 고치지 않는다.
   - **사용자 문제**: 이슈에서 사람이 하려는 일
   - **제품 스펙**: 화면에서 무엇을 입력하고 무엇이 보이는지. 예시 계산 한 개 이상
   - **기술 스펙**: 바뀔 함수와 데이터 모양, 추가할 테스트
   - **사람이 정할 것**: 에이전트가 임의로 정하면 안 되는 선택지. 항목마다 추천안과 이유
3. 커밋, push 후 draft PR을 연다. 본문은 CLAUDE.md 형식을 따르되 첫 줄은 `Fixes` 대신 `Refs #$ARGUMENTS`(스펙만 머지돼도 이슈가 닫히지 않게), `## Why`에 사용자 문제, `## How`에 "스펙 문서만 추가, 코드 변경 없음", `## AS IS / TO BE`에 지금 화면과 스펙대로 바뀔 화면을 글로 적는다. 이슈에 `needs-human` 라벨.
4. PR 주소와 "사람이 정할 것" 목록을 **한국어로** 보고하고 끝낸다.
