import { Selector } from 'testcafe'
import { e2eConfig } from '../e2e-config'

fixture(`Getting Started`).page(`http://localhost:${e2eConfig.port}`)

test('WHEN open app THEN main header text visible (<App/> works)', async t => {
    await t.expect(Selector('h1').innerText).eql('App component')
})

test('WHEN open app THEN github profile login info visible<Redux works>', async t => {
    await t.expect(Selector('pre').innerText).contains('"login":')
})
