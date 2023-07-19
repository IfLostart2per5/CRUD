"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.post = exports.get = exports.createRequestObject = void 0;
function createRequestObject() {
    var resposta = [""];
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status in [200, 201, 204]) {
                // request was okay
            }
            else {
                switch (httpRequest.status) {
                    case 404:
                        resposta[0] = "nao encontrado (404)";
                        break;
                    case 500:
                        resposta[0] = "erro interno do servidor (500)";
                        break;
                    case 400:
                        resposta[0] = "seila (400)";
                        break;
                    case 401:
                        resposta[0] = "cadê a identidade? (401)";
                        break;
                    case 403:
                        resposta[0] = "vaza daqui! (403)";
                        break;
                    default:
                        resposta[0] = "ih rapaz, sei n\u00E3o ".concat(httpRequest.status);
                }
            }
        }
    };
    return [httpRequest, resposta[0]];
}
exports.createRequestObject = createRequestObject;
function get(httpObject, url) {
    httpObject.open("GET", url, true);
    httpObject.send(null);
    return httpObject.responseText();
}
exports.get = get;
function post(httpObject, url, body) {
    httpObject.open("POST", url, true);
    httpObject.send(body);
    return httpObject.responseText();
}
exports.post = post;
