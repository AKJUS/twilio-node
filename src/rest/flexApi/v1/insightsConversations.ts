/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Flex
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

/**
 * Options to pass to each
 */
export interface InsightsConversationsListInstanceEachOptions {
  /** The Token HTTP request header */
  token?: string;
  /** Unique Id of the segment for which conversation details needs to be fetched */
  segmentId?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: InsightsConversationsInstance,
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
export interface InsightsConversationsListInstanceOptions {
  /** The Token HTTP request header */
  token?: string;
  /** Unique Id of the segment for which conversation details needs to be fetched */
  segmentId?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface InsightsConversationsListInstancePageOptions {
  /** The Token HTTP request header */
  token?: string;
  /** Unique Id of the segment for which conversation details needs to be fetched */
  segmentId?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface InsightsConversationsSolution {}

export interface InsightsConversationsListInstance {
  _version: V1;
  _solution: InsightsConversationsSolution;
  _uri: string;

  /**
   * Streams InsightsConversationsInstance records from the API.
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
   * @param { InsightsConversationsListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: InsightsConversationsInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: InsightsConversationsListInstanceEachOptions,
    callback?: (
      item: InsightsConversationsInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of InsightsConversationsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: InsightsConversationsPage) => any
  ): Promise<InsightsConversationsPage>;
  /**
   * Lists InsightsConversationsInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { InsightsConversationsListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (
      error: Error | null,
      items: InsightsConversationsInstance[]
    ) => any
  ): Promise<InsightsConversationsInstance[]>;
  list(
    params: InsightsConversationsListInstanceOptions,
    callback?: (
      error: Error | null,
      items: InsightsConversationsInstance[]
    ) => any
  ): Promise<InsightsConversationsInstance[]>;
  /**
   * Retrieve a single page of InsightsConversationsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { InsightsConversationsListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: InsightsConversationsPage) => any
  ): Promise<InsightsConversationsPage>;
  page(
    params: InsightsConversationsListInstancePageOptions,
    callback?: (error: Error | null, items: InsightsConversationsPage) => any
  ): Promise<InsightsConversationsPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function InsightsConversationsListInstance(
  version: V1
): InsightsConversationsListInstance {
  const instance = {} as InsightsConversationsListInstance;

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Insights/Conversations`;

  instance.page = function page(
    params?:
      | InsightsConversationsListInstancePageOptions
      | ((error: Error | null, items: InsightsConversationsPage) => any),
    callback?: (error: Error | null, items: InsightsConversationsPage) => any
  ): Promise<InsightsConversationsPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["segmentId"] !== undefined)
      data["SegmentId"] = params["segmentId"];
    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};
    if (params["token"] !== undefined) headers["Token"] = params["token"];

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new InsightsConversationsPage(
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
    callback?: (error: Error | null, items: InsightsConversationsPage) => any
  ): Promise<InsightsConversationsPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new InsightsConversationsPage(
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

interface InsightsConversationsPayload extends TwilioResponsePayload {
  conversations: InsightsConversationsResource[];
}

interface InsightsConversationsResource {
  account_id: string;
  conversation_id: string;
  segment_count: number;
  segments: Array<any>;
}

export class InsightsConversationsInstance {
  constructor(protected _version: V1, payload: InsightsConversationsResource) {
    this.accountId = payload.account_id;
    this.conversationId = payload.conversation_id;
    this.segmentCount = deserialize.integer(payload.segment_count);
    this.segments = payload.segments;
  }

  /**
   * The id of the account.
   */
  accountId: string;
  /**
   * The unique id of the conversation
   */
  conversationId: string;
  /**
   * The count of segments for a conversation
   */
  segmentCount: number;
  /**
   * The Segments of a conversation
   */
  segments: Array<any>;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountId: this.accountId,
      conversationId: this.conversationId,
      segmentCount: this.segmentCount,
      segments: this.segments,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class InsightsConversationsPage extends Page<
  V1,
  InsightsConversationsPayload,
  InsightsConversationsResource,
  InsightsConversationsInstance
> {
  /**
   * Initialize the InsightsConversationsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: InsightsConversationsSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of InsightsConversationsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: InsightsConversationsResource
  ): InsightsConversationsInstance {
    return new InsightsConversationsInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
