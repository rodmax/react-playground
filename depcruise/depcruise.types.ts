import { IConfiguration, IOptions } from 'dependency-cruiser'

/**
 * NOTE: IConfiguration.options not provide tsConfig field, so we override it vi IOptions
 */
export type DepcruiseConfig = IConfiguration & { options: IOptions }
