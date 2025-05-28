// api/save-feedback.js
export default async function handler(req, res) {
  // 1) CORS 허용
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // OPTIONS preflight 요청에 빈 응답
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 2) Google Apps Script로 요청 프록시
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwLKZwqJum-…/exec';
  const upstream = await fetch(SCRIPT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req.body)
  });

  const text = await upstream.text();
  // 3) 원본 응답 그대로 내려주기
  res.status(upstream.status).send(text);
}
