# @sudobility/shaperouter_client

React client library for the ShapeRouter API with state management hooks.

## Installation

```bash
bun add @sudobility/shaperouter_client
```

## Usage

```typescript
import { useKeys, useProjects, useAiExecute } from '@sudobility/shaperouter_client';

const { keys, isLoading, refresh, createKey } = useKeys(networkClient, baseUrl);
await refresh(userId, token);
```

## Hooks

| Hook | Purpose |
|------|---------|
| `useKeys` | LLM API key management |
| `useProjects` | Project CRUD |
| `useEndpoints` | Endpoint configuration |
| `useAiExecute` | LLM inference |
| `useAnalytics` | Usage analytics |
| `useSettings` | User settings |

Each hook returns `{ data, isLoading, error, refresh, clearError, reset }` plus CRUD methods.

## Development

```bash
bun run build        # Build to dist/
bun run test         # Run Vitest
bun run typecheck    # TypeScript check
bun run lint         # ESLint
bun run verify       # Typecheck + lint + test + build
```

## Related Packages

- `@sudobility/shaperouter_types` -- Shared type definitions
- `@sudobility/shaperouter_lib` -- Zustand stores wrapping these hooks
- `shaperouter_app` -- Frontend consumer

## License

BUSL-1.1
