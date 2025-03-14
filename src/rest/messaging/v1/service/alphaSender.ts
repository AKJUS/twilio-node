/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Messaging
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

/**
 * Options to pass to create a AlphaSenderInstance
 */
export interface AlphaSenderListInstanceCreateOptions {
  /** The Alphanumeric Sender ID string. Can be up to 11 characters long. Valid characters are A-Z, a-z, 0-9, space, hyphen `-`, plus `+`, underscore `_` and ampersand `&`. This value cannot contain only numbers. */
  alphaSender: string;
}
/**
 * Options to pass to each
 */
export interface AlphaSenderListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: AlphaSenderInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface AlphaSenderListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface AlphaSenderListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface AlphaSenderContext {
  /**
   * Remove a AlphaSenderInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a AlphaSenderInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AlphaSenderInstance
   */
  fetch(
    callback?: (error: Error | null, item?: AlphaSenderInstance) => any
  ): Promise<AlphaSenderInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AlphaSenderContextSolution {
  serviceSid: string;
  sid: string;
}

export class AlphaSenderContextImpl implements AlphaSenderContext {
  protected _solution: AlphaSenderContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, serviceSid: string, sid: string) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { serviceSid, sid };
    this._uri = `/Services/${serviceSid}/AlphaSenders/${sid}`;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    const headers: any = {};

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
        headers,
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(
    callback?: (error: Error | null, item?: AlphaSenderInstance) => any
  ): Promise<AlphaSenderInstance> {
    const headers: any = {};
    headers["Accept"] = "application/json";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new AlphaSenderInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return this._solution;
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

interface AlphaSenderPayload extends TwilioResponsePayload {
  alpha_senders: AlphaSenderResource[];
}

interface AlphaSenderResource {
  sid: string;
  account_sid: string;
  service_sid: string;
  date_created: Date;
  date_updated: Date;
  alpha_sender: string;
  capabilities: Array<string>;
  url: string;
}

export class AlphaSenderInstance {
  protected _solution: AlphaSenderContextSolution;
  protected _context?: AlphaSenderContext;

  constructor(
    protected _version: V1,
    payload: AlphaSenderResource,
    serviceSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.alphaSender = payload.alpha_sender;
    this.capabilities = payload.capabilities;
    this.url = payload.url;

    this._solution = { serviceSid, sid: sid || this.sid };
  }

  /**
   * The unique string that we created to identify the AlphaSender resource.
   */
  sid: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the AlphaSender resource.
   */
  accountSid: string;
  /**
   * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) the resource is associated with.
   */
  serviceSid: string;
  /**
   * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;
  /**
   * The Alphanumeric Sender ID string.
   */
  alphaSender: string;
  /**
   * An array of values that describe whether the number can receive calls or messages. Can be: `SMS`.
   */
  capabilities: Array<string>;
  /**
   * The absolute URL of the AlphaSender resource.
   */
  url: string;

  private get _proxy(): AlphaSenderContext {
    this._context =
      this._context ||
      new AlphaSenderContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a AlphaSenderInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a AlphaSenderInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AlphaSenderInstance
   */
  fetch(
    callback?: (error: Error | null, item?: AlphaSenderInstance) => any
  ): Promise<AlphaSenderInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      accountSid: this.accountSid,
      serviceSid: this.serviceSid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      alphaSender: this.alphaSender,
      capabilities: this.capabilities,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface AlphaSenderSolution {
  serviceSid: string;
}

export interface AlphaSenderListInstance {
  _version: V1;
  _solution: AlphaSenderSolution;
  _uri: string;

  (sid: string): AlphaSenderContext;
  get(sid: string): AlphaSenderContext;

  /**
   * Create a AlphaSenderInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AlphaSenderInstance
   */
  create(
    params: AlphaSenderListInstanceCreateOptions,
    callback?: (error: Error | null, item?: AlphaSenderInstance) => any
  ): Promise<AlphaSenderInstance>;

  /**
   * Streams AlphaSenderInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AlphaSenderListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: AlphaSenderInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: AlphaSenderListInstanceEachOptions,
    callback?: (item: AlphaSenderInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of AlphaSenderInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: AlphaSenderPage) => any
  ): Promise<AlphaSenderPage>;
  /**
   * Lists AlphaSenderInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AlphaSenderListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: AlphaSenderInstance[]) => any
  ): Promise<AlphaSenderInstance[]>;
  list(
    params: AlphaSenderListInstanceOptions,
    callback?: (error: Error | null, items: AlphaSenderInstance[]) => any
  ): Promise<AlphaSenderInstance[]>;
  /**
   * Retrieve a single page of AlphaSenderInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AlphaSenderListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: AlphaSenderPage) => any
  ): Promise<AlphaSenderPage>;
  page(
    params: AlphaSenderListInstancePageOptions,
    callback?: (error: Error | null, items: AlphaSenderPage) => any
  ): Promise<AlphaSenderPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function AlphaSenderListInstance(
  version: V1,
  serviceSid: string
): AlphaSenderListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as AlphaSenderListInstance;

  instance.get = function get(sid): AlphaSenderContext {
    return new AlphaSenderContextImpl(version, serviceSid, sid);
  };

  instance._version = version;
  instance._solution = { serviceSid };
  instance._uri = `/Services/${serviceSid}/AlphaSenders`;

  instance.create = function create(
    params: AlphaSenderListInstanceCreateOptions,
    callback?: (error: Error | null, items: AlphaSenderInstance) => any
  ): Promise<AlphaSenderInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["alphaSender"] === null || params["alphaSender"] === undefined) {
      throw new Error("Required parameter \"params['alphaSender']\" missing.");
    }

    let data: any = {};

    data["AlphaSender"] = params["alphaSender"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    headers["Accept"] = "application/json";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new AlphaSenderInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | AlphaSenderListInstancePageOptions
      | ((error: Error | null, items: AlphaSenderPage) => any),
    callback?: (error: Error | null, items: AlphaSenderPage) => any
  ): Promise<AlphaSenderPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};
    headers["Accept"] = "application/json";

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new AlphaSenderPage(operationVersion, payload, instance._solution)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: AlphaSenderPage) => any
  ): Promise<AlphaSenderPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new AlphaSenderPage(instance._version, payload, instance._solution)
    );
    pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
    return pagePromise;
  };

  instance.toJSON = function toJSON() {
    return instance._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(instance.toJSON(), options);
  };

  return instance;
}

export class AlphaSenderPage extends Page<
  V1,
  AlphaSenderPayload,
  AlphaSenderResource,
  AlphaSenderInstance
> {
  /**
   * Initialize the AlphaSenderPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: AlphaSenderSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of AlphaSenderInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AlphaSenderResource): AlphaSenderInstance {
    return new AlphaSenderInstance(
      this._version,
      payload,
      this._solution.serviceSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
