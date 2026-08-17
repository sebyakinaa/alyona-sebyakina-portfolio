# Портфолио Алены Себякиной

React + TypeScript + Vite, GSAP/ScrollTrigger и Lenis.

## Запуск

`pnpm install`, затем `pnpm dev`. Проверки: `pnpm build`, `pnpm test`, `pnpm test:e2e`, `pnpm lint`, `pnpm typecheck`.

Ссылки проектов находятся в `src/data/projects.ts`, PDF-резюме — в `public/resume`, шрифты — в `public/fonts`, изображения — в `public/assets`.

## Публикация на GitHub Pages

1. Создайте репозиторий на GitHub и загрузите в него содержимое этой папки.
2. В Settings → Pages выберите GitHub Actions.
3. Отправьте изменения в ветку main. Workflow .github/workflows/deploy-pages.yml соберёт и опубликует сайт автоматически.

Сайт будет доступен по адресу вида https://<username>.github.io/<repository>/.
