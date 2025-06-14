/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Content
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V2 from "../V2";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

/**
 * Options to pass to each
 */
export interface ContentAndApprovalsListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Whether to sort by ascending or descending date updated */
  sortByDate?: string;
  /** Whether to sort by ascending or descending content name */
  sortByContentName?: string;
  /** Filter by >=[date-time] */
  dateCreatedAfter?: Date;
  /** Filter by <=[date-time] */
  dateCreatedBefore?: Date;
  /** Filter by Regex Pattern in content name */
  contentName?: string;
  /** Filter by Regex Pattern in template content */
  content?: string;
  /** Filter by array of valid language(s) */
  language?: Array<string>;
  /** Filter by array of contentType(s) */
  contentType?: Array<string>;
  /** Filter by array of ChannelEligibility(s), where ChannelEligibility=<channel>:<status> */
  channelEligibility?: Array<string>;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: ContentAndApprovalsInstance,
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
export interface ContentAndApprovalsListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Whether to sort by ascending or descending date updated */
  sortByDate?: string;
  /** Whether to sort by ascending or descending content name */
  sortByContentName?: string;
  /** Filter by >=[date-time] */
  dateCreatedAfter?: Date;
  /** Filter by <=[date-time] */
  dateCreatedBefore?: Date;
  /** Filter by Regex Pattern in content name */
  contentName?: string;
  /** Filter by Regex Pattern in template content */
  content?: string;
  /** Filter by array of valid language(s) */
  language?: Array<string>;
  /** Filter by array of contentType(s) */
  contentType?: Array<string>;
  /** Filter by array of ChannelEligibility(s), where ChannelEligibility=<channel>:<status> */
  channelEligibility?: Array<string>;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface ContentAndApprovalsListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Whether to sort by ascending or descending date updated */
  sortByDate?: string;
  /** Whether to sort by ascending or descending content name */
  sortByContentName?: string;
  /** Filter by >=[date-time] */
  dateCreatedAfter?: Date;
  /** Filter by <=[date-time] */
  dateCreatedBefore?: Date;
  /** Filter by Regex Pattern in content name */
  contentName?: string;
  /** Filter by Regex Pattern in template content */
  content?: string;
  /** Filter by array of valid language(s) */
  language?: Array<string>;
  /** Filter by array of contentType(s) */
  contentType?: Array<string>;
  /** Filter by array of ChannelEligibility(s), where ChannelEligibility=<channel>:<status> */
  channelEligibility?: Array<string>;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface ContentAndApprovalsSolution {}

export interface ContentAndApprovalsListInstance {
  _version: V2;
  _solution: ContentAndApprovalsSolution;
  _uri: string;

  /**
   * Streams ContentAndApprovalsInstance records from the API.
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
   * @param { ContentAndApprovalsListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: ContentAndApprovalsInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: ContentAndApprovalsListInstanceEachOptions,
    callback?: (
      item: ContentAndApprovalsInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of ContentAndApprovalsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: ContentAndApprovalsPage) => any
  ): Promise<ContentAndApprovalsPage>;
  /**
   * Lists ContentAndApprovalsInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ContentAndApprovalsListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (
      error: Error | null,
      items: ContentAndApprovalsInstance[]
    ) => any
  ): Promise<ContentAndApprovalsInstance[]>;
  list(
    params: ContentAndApprovalsListInstanceOptions,
    callback?: (
      error: Error | null,
      items: ContentAndApprovalsInstance[]
    ) => any
  ): Promise<ContentAndApprovalsInstance[]>;
  /**
   * Retrieve a single page of ContentAndApprovalsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ContentAndApprovalsListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: ContentAndApprovalsPage) => any
  ): Promise<ContentAndApprovalsPage>;
  page(
    params: ContentAndApprovalsListInstancePageOptions,
    callback?: (error: Error | null, items: ContentAndApprovalsPage) => any
  ): Promise<ContentAndApprovalsPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function ContentAndApprovalsListInstance(
  version: V2
): ContentAndApprovalsListInstance {
  const instance = {} as ContentAndApprovalsListInstance;

  instance._version = version;
  instance._solution = {};
  instance._uri = `/ContentAndApprovals`;

  instance.page = function page(
    params?:
      | ContentAndApprovalsListInstancePageOptions
      | ((error: Error | null, items: ContentAndApprovalsPage) => any),
    callback?: (error: Error | null, items: ContentAndApprovalsPage) => any
  ): Promise<ContentAndApprovalsPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];
    if (params["sortByDate"] !== undefined)
      data["SortByDate"] = params["sortByDate"];
    if (params["sortByContentName"] !== undefined)
      data["SortByContentName"] = params["sortByContentName"];
    if (params["dateCreatedAfter"] !== undefined)
      data["DateCreatedAfter"] = serialize.iso8601DateTime(
        params["dateCreatedAfter"]
      );
    if (params["dateCreatedBefore"] !== undefined)
      data["DateCreatedBefore"] = serialize.iso8601DateTime(
        params["dateCreatedBefore"]
      );
    if (params["contentName"] !== undefined)
      data["ContentName"] = params["contentName"];
    if (params["content"] !== undefined) data["Content"] = params["content"];
    if (params["language"] !== undefined)
      data["Language"] = serialize.map(params["language"], (e: string) => e);
    if (params["contentType"] !== undefined)
      data["ContentType"] = serialize.map(
        params["contentType"],
        (e: string) => e
      );
    if (params["channelEligibility"] !== undefined)
      data["ChannelEligibility"] = serialize.map(
        params["channelEligibility"],
        (e: string) => e
      );

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
        new ContentAndApprovalsPage(
          operationVersion,
          payload,
          instance._solution
        )
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
    callback?: (error: Error | null, items: ContentAndApprovalsPage) => any
  ): Promise<ContentAndApprovalsPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new ContentAndApprovalsPage(
          instance._version,
          payload,
          instance._solution
        )
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

interface ContentAndApprovalsPayload extends TwilioResponsePayload {
  contents: ContentAndApprovalsResource[];
}

interface ContentAndApprovalsResource {
  date_created: Date;
  date_updated: Date;
  sid: string;
  account_sid: string;
  friendly_name: string;
  language: string;
  variables: Record<string, object>;
  types: Record<string, object>;
  approval_requests: Record<string, object>;
}

export class ContentAndApprovalsInstance {
  constructor(protected _version: V2, payload: ContentAndApprovalsResource) {
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.friendlyName = payload.friendly_name;
    this.language = payload.language;
    this.variables = payload.variables;
    this.types = payload.types;
    this.approvalRequests = payload.approval_requests;
  }

  /**
   * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated: Date;
  /**
   * The unique string that that we created to identify the Content resource.
   */
  sid: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/usage/api/account) that created Content resource.
   */
  accountSid: string;
  /**
   * A string name used to describe the Content resource. Not visible to the end recipient.
   */
  friendlyName: string;
  /**
   * Two-letter (ISO 639-1) language code (e.g., en) identifying the language the Content resource is in.
   */
  language: string;
  /**
   * Defines the default placeholder values for variables included in the Content resource. e.g. {\"1\": \"Customer_Name\"}.
   */
  variables: Record<string, object>;
  /**
   * The [Content types](https://www.twilio.com/docs/content/content-types-overview) (e.g. twilio/text) for this Content resource.
   */
  types: Record<string, object>;
  /**
   * The submitted information and approval request status of the Content resource.
   */
  approvalRequests: Record<string, object>;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      sid: this.sid,
      accountSid: this.accountSid,
      friendlyName: this.friendlyName,
      language: this.language,
      variables: this.variables,
      types: this.types,
      approvalRequests: this.approvalRequests,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class ContentAndApprovalsPage extends Page<
  V2,
  ContentAndApprovalsPayload,
  ContentAndApprovalsResource,
  ContentAndApprovalsInstance
> {
  /**
   * Initialize the ContentAndApprovalsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2,
    response: Response<string>,
    solution: ContentAndApprovalsSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of ContentAndApprovalsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: ContentAndApprovalsResource
  ): ContentAndApprovalsInstance {
    return new ContentAndApprovalsInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
