const fs = require('fs');
const path = require('path');

const ENV_KEYS = [
  'VITE_FIREBASE_API_KEY',
  'VITE_FIREBASE_AUTH_DOMAIN',
  'VITE_FIREBASE_DB_URL',
  'VITE_FIREBASE_PROJECT_ID',
  'VITE_FIREBASE_STORAGE_BUCKET',
  'VITE_FIREBASE_MSG_SENDER_ID',
  'VITE_FIREBASE_APP_ID'
];

const envFilePath = path.resolve(__dirname, '.env');

let output = '';

ENV_KEYS.forEach((key) => {
  const value = process.env[key];
  console.log(`Checking ${key}=${value}`);
  if (value !== undefined) {
    output += `${key}=${value}\n`;
  } else {
    console.warn(`Already exists in .env file: ${key}`);
  }
});

if (output) {
  fs.writeFileSync(envFilePath, output);
  console.log(`Already write ${envFilePath} into .env file`);
} else {
  console.log('no environment variables to write');
}
