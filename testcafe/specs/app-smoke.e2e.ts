import { Selector } from 'testcafe'
import { e2eConfig } from '../e2e-config'

fixture(`Getting Started`).page(`http://localhost:${e2eConfig.port}`)

test('WHEN open app THEN main header text visible [<App/> works]', async t => {
    await t.expect(Selector('h1').innerText).eql('App component')
})

test('WHEN open app THEN rodmax-s github profile info visible [Redux works/github API works]', async t => {
    await t.expect(Selector('pre').innerText).contains('"name": "Maxim Rodionov"')
})
