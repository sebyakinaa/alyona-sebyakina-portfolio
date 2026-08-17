import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

const repositoryName=process.env.GITHUB_REPOSITORY?.split('/')[1];

export default defineConfig({
  base:process.env.GITHUB_ACTIONS&&repositoryName?'/'+repositoryName+'/':'/',
  plugins:[react()],
  test:{environment:'jsdom',include:['tests/unit/**/*.test.ts']},
});
