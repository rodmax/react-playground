import { Selector } from 'testcafe';
import { e2eConfig } from '../e2e-config';

fixture(`Getting Started`)
    .page(`http://localhost:${e2eConfig.port}`);

test('My first test', async t => {
    await t
        .expect(Selector('h1').innerText).eql('App component');
});