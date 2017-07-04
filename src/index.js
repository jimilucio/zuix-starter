import zuix from 'zuix-dist/js/zuix';

import * as config from './configuration';

zuix.context('myAppHeader', ctx => ctx.options(config.ZUIX_DEFAULT));
zuix.context('myAppContent', ctx => ctx.options(config.ZUIX_DEFAULT));
zuix.context('myAppFooter', ctx => ctx.options(config.ZUIX_DEFAULT));