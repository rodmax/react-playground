export type ApiUrlParts = ReadonlyArray<number | string>

export function apiUrl(urlParts: ApiUrlParts): string {
    return urlParts.join('/').replaceAll('//', '/')
}
