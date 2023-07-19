


export function createRequestObject(): (string | XMLHttpRequest)[] {
  var resposta: string[] = [""];
  const httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = () => {
    if(httpRequest.readyState === 4) {
      if (httpRequest.status in [200, 201, 204]) {
        // request was okay
      } else {

        
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
            resposta[0] = `ih rapaz, sei não ${httpRequest.status}`;

        }
      }
    }
  }
  return [httpRequest, resposta[0]];
}

export function get(httpObject: XMLHttpRequest, url: string) {
  httpObject.open("GET", url, true);
  httpObject.send(null);
}

export function post(httpObject: XMLHttpRequest, url: string, body: any) {
  httpObject.open("POST", url, true);
  httpObject.send(body);
}
