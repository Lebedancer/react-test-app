import constants from '../constants/app-constants';
import Dispatcher from '../dispatchers/app-dispatcher';

export default {
    addItem: function(item) {
        Dispatcher.handleViewAction({
            actionType: constants.ADD_ITEM,
            item: item,
        })
    },
    removeItem: function(index) {
        Dispatcher.handleViewAction({
            actionType: constants.REMOVE_ITEM,
            index: index,
        })
    },
    decreaseItem: function(index) {
        Dispatcher.handleViewAction({
            actionType: constants.DECREASE_ITEM,
            index: index,
        })
    },
    increaseItem: function(index) {
        Dispatcher.handleViewAction({
            actionType: constants.INCREASE_ITEM,
            index: index,
        })
    },
}