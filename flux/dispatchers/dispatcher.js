let _callbacks = [];
let _promises = [];

let _addPromise = function(callback, payload) {
    _promises.push(new Promise(function(resolve, reject) {
        if (callback(payload)) {
            resolve(payload);
        } else {
            reject(new Error('Dispatcher callback unsuccessful'));
        }

    }))
};

let _clearPromises = function() {
    _promises = [];
};

let Dispatcher = function() {
};
Dispatcher.prototype = Object.assign(Dispatcher.prototype, {
    register: function(callback) {
        _callbacks.push(callback);
        return _callbacks.length - 1;
    },
    dispatch: function(payload) {
        _callbacks.forEach(function(callback) {
            _addPromise(callback, payload);
        });
        Promise.all(_promises).then(_clearPromises);
    },
});

export default Dispatcher;