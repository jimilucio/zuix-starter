import zuix from 'zuix-dist/js/zuix';

const my_loading_options = {
    lazyLoad: false,
    priority: -1, // minor numbers gets higher loading priority
    ready: function(ctx) {
        // ctx is the {ComponentContext} object holding the loaded content/component
        console.log('Loaded '+ctx.componentId+' as '+ctx.contextId+'.');
    },
    error: function(err) {
        console.log('Oh-oh!', err);
    }
}

zuix.context('myAppHeader', ctx => ctx.options(my_loading_options));
zuix.context('myAppContent', ctx => ctx.options(my_loading_options));
zuix.context('myAppFooter', ctx => ctx.options(my_loading_options));