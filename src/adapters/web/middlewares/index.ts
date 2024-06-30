import { Request, Response } from "express";

export type HttpRequest = {
  body: any;
  query: any;
  params: any;
  ip: string | undefined;
  method: string;
  path: string;
  source: {
    ip: string | undefined;
    browser: string | undefined;
  };
};

export type HttpResponse = {
  statusCode: number;
  body: any;
};

export type Tcontroller = (httpRequest: HttpRequest) => Promise<HttpResponse>;

export const withHttpMiddleware = (controller: Tcontroller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      query: req.query,
      params: req.params,
      ip: req.ip,
      method: req.method,
      path: req.path,
      source: {
        ip: req.ip,
        browser: req.get("User-Agent"),
      },
    };
    try {
      const httpReponse: HttpResponse = await controller(httpRequest);
      return res.status(httpReponse.statusCode).send(httpReponse.body);
    } catch (error) {
      return res.status(500).json({
        error: error,
      });
    }
  };
};
