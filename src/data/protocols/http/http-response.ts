enum HttpStatusCode {
  noContent = 204,
  unauthorized = 401
}

type HttpResponse = {
  statusCode: HttpStatusCode,
  body?: any
}

export { HttpResponse, HttpStatusCode }
