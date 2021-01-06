import { Selector } from 'testcafe'
import { MainNavigationObject } from './page-objects/main-navigation.object'
import { e2eConfig } from './core/e2e-config'

fixture(`Github profile page`).page(e2eConfig.siteUrl)

const githubProfilePage = {
    infoContainer: Selector('pre').withText('"login": "rodmax"'),
}

const mainNavigation = new MainNavigationObject()

test('user can see details of github profile', async t => {
    await t.click(mainNavigation.linkByLabel('github-profile'))
    await t.expect(githubProfilePage.infoContainer.exists).ok()
})
