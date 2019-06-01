import { fetchUtils, CREATE } from 'react-admin';
var __assign = (this && this.__assign) || function () {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
/**
 * Maps react-admin queries to a json-server powered REST API
 *
 * @see https://github.com/typicode/json-server
 * @example
 * GET_LIST     => GET http://my.api.url/posts?_sort=title&_order=ASC&_start=0&_end=24
 * GET_ONE      => GET http://my.api.url/posts/123
 * GET_MANY     => GET http://my.api.url/posts/123, GET http://my.api.url/posts/456, GET http://my.api.url/posts/789
 * UPDATE       => PUT http://my.api.url/posts/123
 * CREATE       => POST http://my.api.url/posts/123
 * DELETE       => DELETE http://my.api.url/posts/123
 */
export default (function (apiUrl, httpClient) {
  if (httpClient === void 0) { httpClient = fetchUtils.fetchJson; }
  /**
   * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
   * @param {String} resource Name of the resource to fetch, e.g. 'posts'
   * @param {Object} params The data request params, depending on the type
   * @returns {Object} { url, options } The HTTP request parameters
   */
  var convertDataRequestToHTTP = function (type, resource, params) {
    var _a;
    var url = '';
    var options = {};
    switch (type) {
      case CREATE:
        url = apiUrl + "/" + resource;
        options.method = 'POST';
        var data = [];
        if (type === 'trades/associate') {
          const { data: { selectedIds } } = params;
          data = selectedIds;
        } else {
          data = params.data;
        }
        options.body = JSON.stringify(data);
        break;
      default:
        throw new Error("Unsupported fetch action type " + type);
    }
    return { url: url, options: options };
  };
  /**
   * @param {Object} response HTTP response from fetch()
   * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
   * @param {String} resource Name of the resource to fetch, e.g. 'posts'
   * @param {Object} params The data request params, depending on the type
   * @returns {Object} Data response
   */
  var convertHTTPResponse = function (response, type, resource, params) {
    var headers = response.headers, json = response.json;
    switch (type) {
      case CREATE:
        return { data: __assign({}, params.data, { id: json.id }) };
      default:
        return { data: json };
    }
  };
  /**
   * @param {string} type Request type, e.g GET_LIST
   * @param {string} resource Resource name, e.g. "posts"
   * @param {Object} payload Request parameters. Depends on the request type
   * @returns {Promise} the Promise for a data response
   */
  return function (type, resource, params) {
    // json-server doesn't handle filters on UPDATE route, so we fallback to calling UPDATE n times instead
    var _a = convertDataRequestToHTTP(type, resource, params), url = _a.url, options = _a.options;
    return httpClient(url, options).then(function (response) {
      return convertHTTPResponse(response, type, resource, params);
    });
  };
});
