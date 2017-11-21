## Instructions

If you want to try to generate the same library, use the latest version of `angular-rollup` (1.0.0-rc.3 or greater).

- `npm install -g angular-rollup@latest`
- `mkdir new-app && cd new-app`
- `ngr scaffold`
- `npm install`
- `ngr generate lib --dir src/app/shared/lib --name my-lib`
- `ngr generate module --name lib --dir src/app/shared/lib/components/my --include component`
- Add `export * from './lib.component';` to `src/app/shared/lib/components/lib/lib.component.ts`
- Add `export * from './components/lib/lib.module';` to `src/app/shared/lib/index.ts`
- `ngr build lib -c src/app/shared/lib/lib.config.json`
