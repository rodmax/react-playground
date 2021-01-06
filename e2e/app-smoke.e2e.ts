import { e2eConfig } from './core/e2e-config'
import { NAVIGATION_LINK_LABELS, MainNavigationObject } from './page-objects/main-navigation.object'

fixture('Home page').page(e2eConfig.siteUrl)

const mainNavigation = new MainNavigationObject()

NAVIGATION_LINK_LABELS.forEach(label => {
    test(`user can see "${label}" link`, async t => {
        await t.expect(mainNavigation.linkByLabel(label).exists).ok()
    })
})
