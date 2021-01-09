import { config } from '../config/config'

export function initializeDevTools(): void {
    const devtools = {
        get config() {
            return config()
        },
    }

    const wnd = (window as unknown) as { dev: unknown }
    wnd.dev = devtools
}
