import React from 'react'
import { render } from '@testing-library/react'
import { App } from './app'
import { httpClientMock } from 'common/http/testing/http-client-mock'
import { AppConfig, CONFIG_URL } from 'modules/core/config/config'
import { sleep } from 'common/testing/sleep'

describe(`${App.name}`, () => {
    beforeEach(() => {
        httpClientMock.setup()
    })

    afterEach(() => {
        httpClientMock.verify()
    })

    it('initializes and shows config info on initial(home) page', async () => {
        const { container } = render(<App />)
        const config: AppConfig = {
            mode: 'DEV',
            commitHash: 'commitHash',
            generated: 'date',
            sentryApiKey: null,
            version: '0.23.34',
        }
        httpClientMock
            .expect<AppConfig>({
                url: CONFIG_URL,
            })
            .flush(config)

        expect(container.textContent).not.toContain(config.version)

        await sleep(0) // NOTE: epic dispatch action asynchronously so we need wait a little
        expect(container.textContent).toContain(config.version)
    })
})
