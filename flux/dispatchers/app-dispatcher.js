import Dispatcher from './dispatcher';

export default Object.assign(Dispatcher.prototype, {
    handleViewAction: function(action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action,
        })
    },
});

