import { Observer } from 'rxjs/internal/types'

export interface SpyObserver<T, E = Error> {
    next: jest.Mock<void, [T]>
    error: jest.Mock<void, [E]>
    complete: jest.Mock<void, []>
}

export function spyObserver<T, E = Error>(partial: Partial<Observer<T>> = {}): SpyObserver<T, E> {
    return {
        next: jest.fn(partial.next),
        error: jest.fn(
            partial.error ||
                (err => {
                    // eslint-disable-next-line no-console -- valid assertion log used in tests
                    console.error(
                        `[${spyObserver.name}]: unhandled error. If error expected, please override error callback to not see this message\n`,
                        err
                    )
                })
        ),
        complete: jest.fn(partial.complete),
    }
}
