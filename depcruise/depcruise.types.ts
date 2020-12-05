import { IOptions, IRuleSetType } from 'dependency-cruiser'
import { OmitStrict } from '../src/common/typings/omit-strict.typings'

export type DepcruiseConfig = { options: IOptions } & OmitStrict<IRuleSetType, 'options'>
