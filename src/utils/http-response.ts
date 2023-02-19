/**
 * An http response.
 */
export class HttpResponse {

  constructor(private _status: number, private _results?: any) {
  }

  get status(): number { return this._status; }

  get results(): any { return this._results; }

  toJson(): object {
    return { status: this._status, results: this._results };
  }

}


export function Ok(results?: any): HttpResponse { return new HttpResponse(200, results); }

export function Created(results?: any): HttpResponse { return new HttpResponse(201, results); }

export function NotModified(results?: any): HttpResponse { return new HttpResponse(304, results); }

export function Redirect(results?: any): HttpResponse { return new HttpResponse(301, results); }

export function ClientError(results?: any): HttpResponse { return new HttpResponse(400, results); }

export function Unauthorized(results?: any): HttpResponse { return new HttpResponse(401, results); }

export function Forbidden(results?: any): HttpResponse { return new HttpResponse(403, results); }

export function NotFound(results?: any): HttpResponse { return new HttpResponse(404, results); }

export function InternalServerError(results?: any): HttpResponse { return new HttpResponse(500, results); }
