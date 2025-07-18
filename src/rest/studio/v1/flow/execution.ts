/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Studio
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
import { ExecutionContextListInstance } from "./execution/executionContext";
import { ExecutionStepListInstance } from "./execution/executionStep";

/**
 * The status of the Execution. Can be: `active` or `ended`.
 */
export type ExecutionStatus = "active" | "ended";

/**
 * Options to pass to update a ExecutionInstance
 */
export interface ExecutionContextUpdateOptions {
  /**  */
  status: ExecutionStatus;
}

/**
 * Options to pass to create a ExecutionInstance
 */
export interface ExecutionListInstanceCreateOptions {
  /** The Contact phone number to start a Studio Flow Execution, available as variable `{{contact.channel.address}}`. */
  to: string;
  /** The Twilio phone number to send messages or initiate calls from during the Flow\\\'s Execution. Available as variable `{{flow.channel.address}}`. For SMS, this can also be a Messaging Service SID. */
  from: string;
  /** JSON data that will be added to the Flow\\\'s context and that can be accessed as variables inside your Flow. For example, if you pass in `Parameters={\\\"name\\\":\\\"Zeke\\\"}`, a widget in your Flow can reference the variable `{{flow.data.name}}`, which returns \\\"Zeke\\\". Note: the JSON value must explicitly be passed as a string, not as a hash object. Depending on your particular HTTP library, you may need to add quotes or URL encode the JSON string. */
  parameters?: any;
}
/**
 * Options to pass to each
 */
export interface ExecutionListInstanceEachOptions {
  /** Only show Execution resources starting on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time, given as `YYYY-MM-DDThh:mm:ss-hh:mm`. */
  dateCreatedFrom?: Date;
  /** Only show Execution resources starting before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time, given as `YYYY-MM-DDThh:mm:ss-hh:mm`. */
  dateCreatedTo?: Date;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: ExecutionInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface ExecutionListInstanceOptions {
  /** Only show Execution resources starting on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time, given as `YYYY-MM-DDThh:mm:ss-hh:mm`. */
  dateCreatedFrom?: Date;
  /** Only show Execution resources starting before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time, given as `YYYY-MM-DDThh:mm:ss-hh:mm`. */
  dateCreatedTo?: Date;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface ExecutionListInstancePageOptions {
  /** Only show Execution resources starting on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time, given as `YYYY-MM-DDThh:mm:ss-hh:mm`. */
  dateCreatedFrom?: Date;
  /** Only show Execution resources starting before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time, given as `YYYY-MM-DDThh:mm:ss-hh:mm`. */
  dateCreatedTo?: Date;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface ExecutionContext {
  executionContext: ExecutionContextListInstance;
  steps: ExecutionStepListInstance;

  /**
   * Remove a ExecutionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a ExecutionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ExecutionInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ExecutionInstance) => any
  ): Promise<ExecutionInstance>;

  /**
   * Update a ExecutionInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ExecutionInstance
   */
  update(
    params: ExecutionContextUpdateOptions,
    callback?: (error: Error | null, item?: ExecutionInstance) => any
  ): Promise<ExecutionInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ExecutionContextSolution {
  flowSid: string;
  sid: string;
}

export class ExecutionContextImpl implements ExecutionContext {
  protected _solution: ExecutionContextSolution;
  protected _uri: string;

  protected _executionContext?: ExecutionContextListInstance;
  protected _steps?: ExecutionStepListInstance;

  constructor(protected _version: V1, flowSid: string, sid: string) {
    if (!isValidPathParam(flowSid)) {
      throw new Error("Parameter 'flowSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { flowSid, sid };
    this._uri = `/Flows/${flowSid}/Executions/${sid}`;
  }

  get executionContext(): ExecutionContextListInstance {
    this._executionContext =
      this._executionContext ||
      ExecutionContextListInstance(
        this._version,
        this._solution.flowSid,
        this._solution.sid
      );
    return this._executionContext;
  }

  get steps(): ExecutionStepListInstance {
    this._steps =
      this._steps ||
      ExecutionStepListInstance(
        this._version,
        this._solution.flowSid,
        this._solution.sid
      );
    return this._steps;
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
    callback?: (error: Error | null, item?: ExecutionInstance) => any
  ): Promise<ExecutionInstance> {
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
        new ExecutionInstance(
          operationVersion,
          payload,
          instance._solution.flowSid,
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
    params: ExecutionContextUpdateOptions,
    callback?: (error: Error | null, item?: ExecutionInstance) => any
  ): Promise<ExecutionInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["status"] === null || params["status"] === undefined) {
      throw new Error("Required parameter \"params['status']\" missing.");
    }

    let data: any = {};

    data["Status"] = params["status"];

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
        new ExecutionInstance(
          operationVersion,
          payload,
          instance._solution.flowSid,
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

interface ExecutionPayload extends TwilioResponsePayload {
  executions: ExecutionResource[];
}

interface ExecutionResource {
  sid: string;
  account_sid: string;
  flow_sid: string;
  contact_sid: string;
  contact_channel_address: string;
  context: any;
  status: ExecutionStatus;
  date_created: Date;
  date_updated: Date;
  url: string;
  links: Record<string, string>;
}

export class ExecutionInstance {
  protected _solution: ExecutionContextSolution;
  protected _context?: ExecutionContext;

  constructor(
    protected _version: V1,
    payload: ExecutionResource,
    flowSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.flowSid = payload.flow_sid;
    this.contactSid = payload.contact_sid;
    this.contactChannelAddress = payload.contact_channel_address;
    this.context = payload.context;
    this.status = payload.status;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { flowSid, sid: sid || this.sid };
  }

  /**
   * The unique string that we created to identify the Execution resource.
   */
  sid: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Execution resource.
   */
  accountSid: string;
  /**
   * The SID of the Flow.
   */
  flowSid: string;
  /**
   * The SID of the Contact.
   */
  contactSid: string;
  /**
   * The phone number, SIP address or Client identifier that triggered the Execution. Phone numbers are in E.164 format (e.g. +16175551212). SIP addresses are formatted as `name@company.com`. Client identifiers are formatted `client:name`.
   */
  contactChannelAddress: string;
  /**
   * The current state of the Flow\'s Execution. As a flow executes, we save its state in this context. We save data that your widgets can access as variables in configuration fields or in text areas as variable substitution.
   */
  context: any;
  status: ExecutionStatus;
  /**
   * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;
  /**
   * The absolute URL of the resource.
   */
  url: string;
  /**
   * The URLs of nested resources.
   */
  links: Record<string, string>;

  private get _proxy(): ExecutionContext {
    this._context =
      this._context ||
      new ExecutionContextImpl(
        this._version,
        this._solution.flowSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a ExecutionInstance
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
   * Fetch a ExecutionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ExecutionInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ExecutionInstance) => any
  ): Promise<ExecutionInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a ExecutionInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ExecutionInstance
   */
  update(
    params: ExecutionContextUpdateOptions,
    callback?: (error: Error | null, item?: ExecutionInstance) => any
  ): Promise<ExecutionInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: ExecutionInstance) => any
  ): Promise<ExecutionInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the executionContext.
   */
  executionContext(): ExecutionContextListInstance {
    return this._proxy.executionContext;
  }

  /**
   * Access the steps.
   */
  steps(): ExecutionStepListInstance {
    return this._proxy.steps;
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
      flowSid: this.flowSid,
      contactSid: this.contactSid,
      contactChannelAddress: this.contactChannelAddress,
      context: this.context,
      status: this.status,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface ExecutionSolution {
  flowSid: string;
}

export interface ExecutionListInstance {
  _version: V1;
  _solution: ExecutionSolution;
  _uri: string;

  (sid: string): ExecutionContext;
  get(sid: string): ExecutionContext;

  /**
   * Create a ExecutionInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ExecutionInstance
   */
  create(
    params: ExecutionListInstanceCreateOptions,
    callback?: (error: Error | null, item?: ExecutionInstance) => any
  ): Promise<ExecutionInstance>;

  /**
   * Streams ExecutionInstance records from the API.
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
   * @param { ExecutionListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: ExecutionInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: ExecutionListInstanceEachOptions,
    callback?: (item: ExecutionInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of ExecutionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: ExecutionPage) => any
  ): Promise<ExecutionPage>;
  /**
   * Lists ExecutionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ExecutionListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: ExecutionInstance[]) => any
  ): Promise<ExecutionInstance[]>;
  list(
    params: ExecutionListInstanceOptions,
    callback?: (error: Error | null, items: ExecutionInstance[]) => any
  ): Promise<ExecutionInstance[]>;
  /**
   * Retrieve a single page of ExecutionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ExecutionListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: ExecutionPage) => any
  ): Promise<ExecutionPage>;
  page(
    params: ExecutionListInstancePageOptions,
    callback?: (error: Error | null, items: ExecutionPage) => any
  ): Promise<ExecutionPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function ExecutionListInstance(
  version: V1,
  flowSid: string
): ExecutionListInstance {
  if (!isValidPathParam(flowSid)) {
    throw new Error("Parameter 'flowSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as ExecutionListInstance;

  instance.get = function get(sid): ExecutionContext {
    return new ExecutionContextImpl(version, flowSid, sid);
  };

  instance._version = version;
  instance._solution = { flowSid };
  instance._uri = `/Flows/${flowSid}/Executions`;

  instance.create = function create(
    params: ExecutionListInstanceCreateOptions,
    callback?: (error: Error | null, items: ExecutionInstance) => any
  ): Promise<ExecutionInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["to"] === null || params["to"] === undefined) {
      throw new Error("Required parameter \"params['to']\" missing.");
    }

    if (params["from"] === null || params["from"] === undefined) {
      throw new Error("Required parameter \"params['from']\" missing.");
    }

    let data: any = {};

    data["To"] = params["to"];

    data["From"] = params["from"];
    if (params["parameters"] !== undefined)
      data["Parameters"] = serialize.object(params["parameters"]);

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
        new ExecutionInstance(
          operationVersion,
          payload,
          instance._solution.flowSid
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
      | ExecutionListInstancePageOptions
      | ((error: Error | null, items: ExecutionPage) => any),
    callback?: (error: Error | null, items: ExecutionPage) => any
  ): Promise<ExecutionPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["dateCreatedFrom"] !== undefined)
      data["DateCreatedFrom"] = serialize.iso8601DateTime(
        params["dateCreatedFrom"]
      );
    if (params["dateCreatedTo"] !== undefined)
      data["DateCreatedTo"] = serialize.iso8601DateTime(
        params["dateCreatedTo"]
      );
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
        new ExecutionPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: ExecutionPage) => any
  ): Promise<ExecutionPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new ExecutionPage(instance._version, payload, instance._solution)
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

export class ExecutionPage extends Page<
  V1,
  ExecutionPayload,
  ExecutionResource,
  ExecutionInstance
> {
  /**
   * Initialize the ExecutionPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: ExecutionSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of ExecutionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ExecutionResource): ExecutionInstance {
    return new ExecutionInstance(
      this._version,
      payload,
      this._solution.flowSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
