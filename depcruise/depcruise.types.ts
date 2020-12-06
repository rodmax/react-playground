import { IOptions, IRuleSetType } from 'dependency-cruiser'
import { OmitStrict } from '../src/common/types/omit-strict.type'

export type DepcruiseConfig = { options: IOptions } & OmitStrict<IRuleSetType, 'options'>
