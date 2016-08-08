var mockup = require('../tool/mockup');

module.exports = function (path, params, request) {
    return mockup.ok({
        accountId: Math.random()
    });
}
