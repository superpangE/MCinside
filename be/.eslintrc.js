module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    indent: 2, // 띄어쓰기 2칸
    quotes: ['error', 'single'], // 더블쿼터 사용
    semi: 2, // 세미클론 사용
    'linebreak-style': 0, // 라인 스타일을 없앤다.
    'object-curly-newline': 0,
    'no-plusplus': 0, // for문 ++ 허용
    'no-alert': 0, // alert 허용
  },
};
