import { Selector } from 'testcafe'

export const NAVIGATION_LINK_LABELS = ['github-profile', 'users'] as const

type MainNavigationLinkLabel = typeof NAVIGATION_LINK_LABELS[number]

export class MainNavigationObject {
    private readonly container = Selector('.c-main-layout__sidebar')

    public linkByLabel(label: MainNavigationLinkLabel): Selector {
        return this.container.find('a').withText(label)
    }
}
