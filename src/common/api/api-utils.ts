export type ApiUrlParts = ReadonlyArray<number | string>

const REDUNDANT_SLASH_RE = /([^:])\/\//g
export function apiUrl(urlParts: ApiUrlParts): string {
    return urlParts.join('/').replaceAll(REDUNDANT_SLASH_RE, '$1/')
}
