export const ZUIX_DEFAULT = {
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