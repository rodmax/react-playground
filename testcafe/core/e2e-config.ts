import * as env from '../../devtools/env'
const port = env.e2eMode === 'prod' ? env.staticServerPort : env.devServerPort

export const e2eConfig = {
    siteUrl: `http://localhost:${port}`,
}
