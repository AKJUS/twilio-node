/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Api
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2010 from "../../V2010";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

/**
 * Options to pass to update a OutgoingCallerIdInstance
 */
export interface OutgoingCallerIdContextUpdateOptions {
  /** A descriptive string that you create to describe the resource. It can be up to 64 characters long. */
  friendlyName?: string;
}
/**
 * Options to pass to each
 */
export interface OutgoingCallerIdListInstanceEachOptions {
  /** The phone number of the OutgoingCallerId resources to read. */
  phoneNumber?: string;
  /** The string that identifies the OutgoingCallerId resources to read. */
  friendlyName?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: OutgoingCallerIdInstance,
    done: (err?: Error) => void
  ) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface OutgoingCallerIdListInstanceOptions {
  /** The phone number of the OutgoingCallerId resources to read. */
  phoneNumber?: string;
  /** The string that identifies the OutgoingCallerId resources to read. */
  friendlyName?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface OutgoingCallerIdListInstancePageOptions {
  /** The phone number of the OutgoingCallerId resources to read. */
  phoneNumber?: string;
  /** The string that identifies the OutgoingCallerId resources to read. */
  friendlyName?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface OutgoingCallerIdContext {
  /**
   * Remove a OutgoingCallerIdInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a OutgoingCallerIdInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed OutgoingCallerIdInstance
   */
  fetch(
    callback?: (error: Error | null, item?: OutgoingCallerIdInstance) => any
  ): Promise<OutgoingCallerIdInstance>;

  /**
   * Update a OutgoingCallerIdInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed OutgoingCallerIdInstance
   */
  update(
    callback?: (error: Error | null, item?: OutgoingCallerIdInstance) => any
  ): Promise<OutgoingCallerIdInstance>;
  /**
   * Update a OutgoingCallerIdInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed OutgoingCallerIdInstance
   */
  update(
    params: OutgoingCallerIdContextUpdateOptions,
    callback?: (error: Error | null, item?: OutgoingCallerIdInstance) => any
  ): Promise<OutgoingCallerIdInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface OutgoingCallerIdContextSolution {
  accountSid: string;
  sid: string;
}

export class OutgoingCallerIdContextImpl implements OutgoingCallerIdContext {
  protected _solution: OutgoingCallerIdContextSolution;
  protected _uri: string;

  constructor(protected _version: V2010, accountSid: string, sid: string) {
    if (!isValidPathParam(accountSid)) {
      throw new Error("Parameter 'accountSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { accountSid, sid };
    this._uri = `/Accounts/${accountSid}/OutgoingCallerIds/${sid}.json`;
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
    callback?: (error: Error | null, item?: OutgoingCallerIdInstance) => any
  ): Promise<OutgoingCallerIdInstance> {
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
        new OutgoingCallerIdInstance(
          operationVersion,
          payload,
          instance._solution.accountSid,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?:
      | OutgoingCallerIdContextUpdateOptions
      | ((error: Error | null, item?: OutgoingCallerIdInstance) => any),
    callback?: (error: Error | null, item?: OutgoingCallerIdInstance) => any
  ): Promise<OutgoingCallerIdInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    headers["Accept"] = "application/json";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new OutgoingCallerIdInstance(
          operationVersion,
          payload,
          instance._solution.accountSid,
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

interface OutgoingCallerIdPayload extends TwilioResponsePayload {
  outgoing_caller_ids: OutgoingCallerIdResource[];
}

interface OutgoingCallerIdResource {
  sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  account_sid: string;
  phone_number: string;
  uri: string;
}

export class OutgoingCallerIdInstance {
  protected _solution: OutgoingCallerIdContextSolution;
  protected _context?: OutgoingCallerIdContext;

  constructor(
    protected _version: V2010,
    payload: OutgoingCallerIdResource,
    accountSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.friendlyName = payload.friendly_name;
    this.accountSid = payload.account_sid;
    this.phoneNumber = payload.phone_number;
    this.uri = payload.uri;

    this._solution = { accountSid, sid: sid || this.sid };
  }

  /**
   * The unique string that that we created to identify the OutgoingCallerId resource.
   */
  sid: string;
  /**
   * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated: Date;
  /**
   * The string that you assigned to describe the resource.
   */
  friendlyName: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the OutgoingCallerId resource.
   */
  accountSid: string;
  /**
   * The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number.
   */
  phoneNumber: string;
  /**
   * The URI of the resource, relative to `https://api.twilio.com`.
   */
  uri: string;

  private get _proxy(): OutgoingCallerIdContext {
    this._context =
      this._context ||
      new OutgoingCallerIdContextImpl(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a OutgoingCallerIdInstance
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
   * Fetch a OutgoingCallerIdInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed OutgoingCallerIdInstance
   */
  fetch(
    callback?: (error: Error | null, item?: OutgoingCallerIdInstance) => any
  ): Promise<OutgoingCallerIdInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a OutgoingCallerIdInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed OutgoingCallerIdInstance
   */
  update(
    callback?: (error: Error | null, item?: OutgoingCallerIdInstance) => any
  ): Promise<OutgoingCallerIdInstance>;
  /**
   * Update a OutgoingCallerIdInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed OutgoingCallerIdInstance
   */
  update(
    params: OutgoingCallerIdContextUpdateOptions,
    callback?: (error: Error | null, item?: OutgoingCallerIdInstance) => any
  ): Promise<OutgoingCallerIdInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: OutgoingCallerIdInstance) => any
  ): Promise<OutgoingCallerIdInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      friendlyName: this.friendlyName,
      accountSid: this.accountSid,
      phoneNumber: this.phoneNumber,
      uri: this.uri,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface OutgoingCallerIdSolution {
  accountSid: string;
}

export interface OutgoingCallerIdListInstance {
  _version: V2010;
  _solution: OutgoingCallerIdSolution;
  _uri: string;

  (sid: string): OutgoingCallerIdContext;
  get(sid: string): OutgoingCallerIdContext;

  /**
   * Streams OutgoingCallerIdInstance records from the API.
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
   * @param { OutgoingCallerIdListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: OutgoingCallerIdInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: OutgoingCallerIdListInstanceEachOptions,
    callback?: (
      item: OutgoingCallerIdInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of OutgoingCallerIdInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: OutgoingCallerIdPage) => any
  ): Promise<OutgoingCallerIdPage>;
  /**
   * Lists OutgoingCallerIdInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { OutgoingCallerIdListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: OutgoingCallerIdInstance[]) => any
  ): Promise<OutgoingCallerIdInstance[]>;
  list(
    params: OutgoingCallerIdListInstanceOptions,
    callback?: (error: Error | null, items: OutgoingCallerIdInstance[]) => any
  ): Promise<OutgoingCallerIdInstance[]>;
  /**
   * Retrieve a single page of OutgoingCallerIdInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { OutgoingCallerIdListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: OutgoingCallerIdPage) => any
  ): Promise<OutgoingCallerIdPage>;
  page(
    params: OutgoingCallerIdListInstancePageOptions,
    callback?: (error: Error | null, items: OutgoingCallerIdPage) => any
  ): Promise<OutgoingCallerIdPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function OutgoingCallerIdListInstance(
  version: V2010,
  accountSid: string
): OutgoingCallerIdListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as OutgoingCallerIdListInstance;

  instance.get = function get(sid): OutgoingCallerIdContext {
    return new OutgoingCallerIdContextImpl(version, accountSid, sid);
  };

  instance._version = version;
  instance._solution = { accountSid };
  instance._uri = `/Accounts/${accountSid}/OutgoingCallerIds.json`;

  instance.page = function page(
    params?:
      | OutgoingCallerIdListInstancePageOptions
      | ((error: Error | null, items: OutgoingCallerIdPage) => any),
    callback?: (error: Error | null, items: OutgoingCallerIdPage) => any
  ): Promise<OutgoingCallerIdPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["phoneNumber"] !== undefined)
      data["PhoneNumber"] = params["phoneNumber"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
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
        new OutgoingCallerIdPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: OutgoingCallerIdPage) => any
  ): Promise<OutgoingCallerIdPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new OutgoingCallerIdPage(instance._version, payload, instance._solution)
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

export class OutgoingCallerIdPage extends Page<
  V2010,
  OutgoingCallerIdPayload,
  OutgoingCallerIdResource,
  OutgoingCallerIdInstance
> {
  /**
   * Initialize the OutgoingCallerIdPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2010,
    response: Response<string>,
    solution: OutgoingCallerIdSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of OutgoingCallerIdInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: OutgoingCallerIdResource): OutgoingCallerIdInstance {
    return new OutgoingCallerIdInstance(
      this._version,
      payload,
      this._solution.accountSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
