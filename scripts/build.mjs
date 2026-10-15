import { cpSync, rmSync } from 'node:fs';

rmSync('dist', { recursive: true, force: true });
cpSync('site', 'dist', { recursive: true });
console.log('Static portfolio copied to dist');
