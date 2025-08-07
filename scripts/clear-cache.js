// Cache clearing script for development
console.log('Clearing build cache...');

const fs = require('fs');
const path = require('path');

// Remove dist directory
const distPath = path.join(__dirname, '..', 'dist');
if (fs.existsSync(distPath)) {
  fs.rmSync(distPath, { recursive: true, force: true });
  console.log('✅ Removed dist directory');
}

// Remove node_modules/.vite if it exists
const viteCachePath = path.join(__dirname, '..', 'node_modules', '.vite');
if (fs.existsSync(viteCachePath)) {
  fs.rmSync(viteCachePath, { recursive: true, force: true });
  console.log('✅ Removed Vite cache');
}

console.log('🎯 Cache cleared successfully!');
console.log('💡 Run "npm run build" to create a fresh build'); 