const LOCAL_STORAGE_NS = 'app'

export class LocalStorageValue<T> {
    private readonly key

    constructor(key: string) {
        this.key = `${LOCAL_STORAGE_NS}.${key}`
    }

    public set(value: T): void {
        localStorage.setItem(this.key, JSON.stringify(value))
    }

    public get(defaultValue: T): T
    public get(defaultValue: T | null = null): T | null {
        const rawValue = localStorage.getItem(this.key)
        let value: T | null = null
        try {
            value = rawValue && JSON.parse(rawValue)
        } finally {
            if (defaultValue !== null && value === null) {
                value = defaultValue
            }
        }
        return value as T
    }
}
