import * as env from '../devtools/env';

export const e2eConfig = {
    port: env.e2eMode === 'prod' ? env.staticServerPort : env.devServerPort,
}