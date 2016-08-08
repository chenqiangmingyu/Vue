import {SAY_HELLO} from '../mutation-type';

/**
 * initialize state
 */
const state = {
    view: {}
};

const mutations = {
    [SAY_HELLO] (state, data) {
        state.view = data;
    }
};

export default {
    state, mutations
};
