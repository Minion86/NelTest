# Partial security remediation — 2026-10-16

Status: incomplete; do not treat this draft as clearing all security warnings.

Applied compatible transitive npm updates within the existing manifest constraints. Kept framework versions together and did not suppress advisories or use npm audit fix --force. Added grouped weekly Dependabot security updates. Native build/install scripts were disabled while resolving dependencies.

## Remaining work

The old Ionic/Angular/native toolchains still require vulnerable dependencies. Migrate the application to a supported Ionic/Angular stack, port @angular/http/RxJS/native integrations, replace node-sass and old Webpack dependencies, and verify device builds. A lockfile-only update cannot complete that migration.

## Validation and limitations

The npm lockfiles were resolved with --package-lock-only --ignore-scripts --legacy-peer-deps. This is dependency resolution, not a successful build or runtime test. These legacy applications were not executed. Review compatibility and run their tests/device builds before merging. Critical/high findings remain; alerts must stay open. Bundled libraries and unlocked projects are not certified clean.

## Dependency audit snapshots

- `/`: 52 vulnerable packages (5 low, 20 moderate, 24 high, 3 critical).
