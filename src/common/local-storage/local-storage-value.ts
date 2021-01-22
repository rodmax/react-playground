const LOCAL_STORAGE_NS = 'app'

export class LocalStorageValue<T> {
    private readonly key_

    constructor(key: string) {
        this.key_ = `${LOCAL_STORAGE_NS}.${key}`
    }

    set(value: T): void {
        localStorage.setItem(this.key_, JSON.stringify(value))
    }

    get(defaultValue: T): T
    get(defaultValue: T | null = null): T | null {
        const rawValue = localStorage.getItem(this.key_)
        let value: T | null = null
        try {
            value = rawValue !== null ? JSON.parse(rawValue) : defaultValue
        } catch {
            value = defaultValue
        }
        return value as T
    }
}
