/**
 * Local types for shaperouter_client
 */

/**
 * Firebase ID token for authentication
 */
export type FirebaseIdToken = string;

/**
 * A personal API key (`shroute_...`) that authenticates its owner against the
 * ShapeRouter admin routes, as an alternative to a Firebase ID token.
 *
 * TODO: these three types are declared here so this package builds against
 * @sudobility/shaperouter_types <= 1.0.53. Once 1.0.54 is published, delete them
 * and import UserApiKey / UserApiKeyCreated / CurrentUser from the types package
 * instead -- the definitions are identical.
 */
export interface UserApiKey {
  /** Unique identifier for this key record */
  uuid: string;
  /** Firebase UID of the owner */
  firebase_uid: string;
  /** Human-readable label, e.g. "CLI on my laptop" */
  key_name: string;
  /** First characters of the key, for display (e.g. "shroute_ab12cd") */
  key_prefix: string;
  /** Whether the key is accepted; a deactivated key fails authentication */
  is_active: boolean;
  /** ISO 8601 timestamp of the most recent authenticated request, or null */
  last_used_at: string | null;
  /** ISO 8601 timestamp when the key was created */
  created_at: string | null;
  /** ISO 8601 timestamp of the most recent update */
  updated_at: string | null;
}

/**
 * Response from creating a personal API key -- the only response that returns
 * the secret without being asked.
 */
export interface UserApiKeyCreated extends UserApiKey {
  /** The full `shroute_...` key */
  api_key: string;
}

/** Identity of the authenticated caller, from `GET /users/me`. */
export interface CurrentUser {
  /** Firebase UID of the caller */
  firebase_uid: string;
  /** Caller's email, or null when unavailable */
  email: string | null;
  /** Whether the caller is a site admin */
  siteAdmin: boolean;
  /** Which credential authenticated this request */
  auth_method: 'firebase' | 'api_key';
  /** Display name from the Firebase profile, or null */
  display_name: string | null;
}

/** Payload for creating a personal API key. */
export interface UserApiKeyCreateRequest {
  key_name: string;
}

/** Payload for updating a personal API key. */
export interface UserApiKeyUpdateRequest {
  key_name?: string;
  is_active?: boolean;
}

/**
 * Query key types for TanStack Query
 */
export const QUERY_KEYS = {
  keys: (entitySlug: string) => ['shaperouter', 'keys', entitySlug] as const,
  key: (entitySlug: string, keyId: string) =>
    ['shaperouter', 'keys', entitySlug, keyId] as const,
  projects: (entitySlug: string) =>
    ['shaperouter', 'projects', entitySlug] as const,
  project: (entitySlug: string, projectId: string) =>
    ['shaperouter', 'projects', entitySlug, projectId] as const,
  endpoints: (entitySlug: string, projectId: string) =>
    ['shaperouter', 'endpoints', entitySlug, projectId] as const,
  endpoint: (entitySlug: string, projectId: string, endpointId: string) =>
    ['shaperouter', 'endpoints', entitySlug, projectId, endpointId] as const,
  analytics: (entitySlug: string) =>
    ['shaperouter', 'analytics', entitySlug] as const,
  settings: (userId: string) => ['shaperouter', 'settings', userId] as const,
  userApiKeys: (userId: string) =>
    ['shaperouter', 'userApiKeys', userId] as const,
  currentUser: () => ['shaperouter', 'currentUser'] as const,
  storageConfig: (entitySlug: string) =>
    ['shaperouter', 'storageConfig', entitySlug] as const,
  // Entity query keys
  entities: () => ['shaperouter', 'entities'] as const,
  entity: (entitySlug: string) =>
    ['shaperouter', 'entities', entitySlug] as const,
  entityMembers: (entitySlug: string) =>
    ['shaperouter', 'entities', entitySlug, 'members'] as const,
  entityInvitations: (entitySlug: string) =>
    ['shaperouter', 'entities', entitySlug, 'invitations'] as const,
  myInvitations: () => ['shaperouter', 'invitations', 'mine'] as const,
  // Rate limit query keys
  rateLimitsConfig: () => ['shaperouter', 'ratelimits', 'config'] as const,
  rateLimitsHistory: (periodType: string) =>
    ['shaperouter', 'ratelimits', 'history', periodType] as const,
  // Provider query keys (public, no auth needed)
  providers: () => ['shaperouter', 'providers'] as const,
  provider: (providerId: string) =>
    ['shaperouter', 'providers', providerId] as const,
  providerModels: (providerId: string) =>
    ['shaperouter', 'providers', providerId, 'models'] as const,
} as const;
