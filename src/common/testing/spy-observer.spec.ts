import { Subject } from 'rxjs'
import { spyObserver } from './spy-observer'

describe('spyObserver', () => {
    it('spies on "next" and "complete" callback', () => {
        const observer = spyObserver<number>()
        const subject = new Subject<number>()
        subject.subscribe(observer)
        subject.next(1)
        subject.next(2)
        subject.complete()
        expect(observer.next).toHaveBeenCalledTimes(2)
        expect(observer.next).toHaveBeenNthCalledWith(1, 1)
        expect(observer.next).toHaveBeenNthCalledWith(2, 2)
        expect(observer.complete).toHaveBeenCalledTimes(1)
    })

    it('spies on "error" callback and prevent fail spec when error overrides', () => {
        const observer = spyObserver<number>({ error: () => {} })
        const subject = new Subject<number>()
        subject.subscribe(observer)
        const err = new Error('subject error')
        subject.error(err)
        expect(observer.error).toHaveBeenCalledWith(err)
    })
})
