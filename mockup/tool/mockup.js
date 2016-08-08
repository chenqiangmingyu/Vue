/**
 * @file 处理mockup相关功能
 */
var u = require('underscore');
var qs = require('querystring');

var mockup = {};

/**
 * 去除接口的查询字符串 `?112222`
 * require.cache 相关key已经被删除，不存在缓存问题
 *
 * @param {string} path 路径字符串
 * @return {string} 去除查询字符串后的路径
 */
function filterArgs(path) {
    var index = path.indexOf('?');
    index = index > -1 ? index : path.length;

    return path.substr(0, index);
}

/**
 * 获取mockup结果
 *
 * 对于请求path如果为/hello/world
 * 则对应的mockup数据文件位置为：mockup/hello/world.js
 *
 * @param {Object} request 请求对象
 * @return {?Object}
 */
mockup.load = function(request) {
    console.log('Vue', 'OK', 'Mockup load data for `' + request.url + '`');
    var path = request.url.replace(/^\/data/, '') || '';
    var pathSegments = path.split(/\//);
    var notEmptySegments = [];
    pathSegments.forEach(function (item) {
        item && notEmptySegments.push(item);
    });

    if (notEmptySegments.length > 1) {
        var filePath = notEmptySegments.join('/');

        try {
            var mockModuleName = filterArgs('../' + filePath);

            var referer = request.headers.referer;
            var response = require(mockModuleName);
            if (typeof response === 'function') {
                response = response(request.path, u.extend(request.body, request.query), request);
            }
            delete require.cache[require.resolve(mockModuleName)];
            return response;
        }
        catch (e) {
            console.log('Vue', 'ERROR', 'Mockup data not found for `' + path + '`');
            return null;
        }
    }
    else {
        return null;
    }
};


module.exports = exports = mockup;




















/* vim: set ts=4 sw=4 sts=4 tw=100: */
