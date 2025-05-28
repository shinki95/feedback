# Product Heating Guide

간단한 정적 웹페이지로, 사용자가 제품을 선택하고:
- 가열 방법 표시
- 별점 평가
- 자유 피드백

을 남겨 Google Sheets에 저장할 수 있습니다.

## 사용 방법

1. `index.html` 파일을 열어, 데스크탑 또는 모바일 브라우저에서 확인하세요.
2. 제품을 선택하고, 별점을 클릭한 뒤, 피드백을 입력하고 제출하세요.

## 배포

- GitHub에 푸시한 뒤, Vercel 또는 Netlify 같은 정적 호스팅 서비스에 연결하세요.
- `GOOGLE_SHEETS_URL` 상수에 Google Apps Script Web App URL을 설정해야 합니다.
