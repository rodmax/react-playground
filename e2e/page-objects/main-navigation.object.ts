import { Selector } from 'testcafe'

export const NAVIGATION_LINK_LABELS = ['github-profile', 'users'] as const

type MainNavigationLinkLabel = typeof NAVIGATION_LINK_LABELS[number]

export class MainNavigationObject {
    private readonly container_ = Selector('.main-layout__sidebar')

    linkByLabel(label: MainNavigationLinkLabel): Selector {
        return this.container_.find('a').withText(label)
    }
}
