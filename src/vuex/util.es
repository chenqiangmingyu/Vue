import Vue from 'vue';

export default {
    makeAction (type, api) {
        return async ({dispatch, state}, params) => {
            let res = await Vue.http.post(api, {params});

            dispatch(type, res.json().result);

            return res;
        };
    }
};
