/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Lookups
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V2 from "../V2";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

/**
 * Rate limit request schema
 */
export class RateLimitRequest {
  /**
   * Limit of requests for the bucket
   */
  "limit"?: number;
  /**
   * Time to live of the rule
   */
  "ttl"?: number;
}

/**
 * Options to pass to update a BucketInstance
 */
export interface BucketContextUpdateOptions {
  /**  */
  rateLimitRequest?: RateLimitRequest;
}

export interface BucketContext {
  /**
   * Remove a BucketInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a BucketInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BucketInstance
   */
  fetch(
    callback?: (error: Error | null, item?: BucketInstance) => any
  ): Promise<BucketInstance>;

  /**
   * Update a BucketInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BucketInstance
   */
  update(
    callback?: (error: Error | null, item?: BucketInstance) => any
  ): Promise<BucketInstance>;
  /**
   * Update a BucketInstance
   *
   * @param params - Body for request
   * @param headers - header params for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BucketInstance
   */
  update(
    params: RateLimitRequest,
    headers?: any,
    callback?: (error: Error | null, item?: BucketInstance) => any
  ): Promise<BucketInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface BucketContextSolution {
  field: string;
  bucket: string;
}

export class BucketContextImpl implements BucketContext {
  protected _solution: BucketContextSolution;
  protected _uri: string;

  constructor(protected _version: V2, field: string, bucket: string) {
    if (!isValidPathParam(field)) {
      throw new Error("Parameter 'field' is not valid.");
    }

    if (!isValidPathParam(bucket)) {
      throw new Error("Parameter 'bucket' is not valid.");
    }

    this._solution = { field, bucket };
    this._uri = `/RateLimits/Fields/${field}/Bucket/${bucket}`;
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
    callback?: (error: Error | null, item?: BucketInstance) => any
  ): Promise<BucketInstance> {
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
        new BucketInstance(
          operationVersion,
          payload,
          instance._solution.field,
          instance._solution.bucket
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
      | RateLimitRequest
      | ((error: Error | null, item?: BucketInstance) => any),
    headers?: any,
    callback?: (error: Error | null, item?: BucketInstance) => any
  ): Promise<BucketInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    data = params;

    if (headers === null || headers === undefined) {
      headers = {};
    }

    headers["Content-Type"] = "application/json";
    headers["Accept"] = "application/json";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "put",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new BucketInstance(
          operationVersion,
          payload,
          instance._solution.field,
          instance._solution.bucket
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

interface BucketPayload extends BucketResource {}

interface BucketResource {
  code: number;
  message: string;
  more_info: string;
  status: number;
  field: string;
  limit: number;
  bucket: string;
  owner: string;
  ttl: number;
}

export class BucketInstance {
  protected _solution: BucketContextSolution;
  protected _context?: BucketContext;

  constructor(
    protected _version: V2,
    payload: BucketResource,
    field?: string,
    bucket?: string
  ) {
    this.code = payload.code;
    this.message = payload.message;
    this.moreInfo = payload.more_info;
    this.status = payload.status;
    this.field = payload.field;
    this.limit = payload.limit;
    this.bucket = payload.bucket;
    this.owner = payload.owner;
    this.ttl = payload.ttl;

    this._solution = {
      field: field || this.field,
      bucket: bucket || this.bucket,
    };
  }

  /**
   * Twilio-specific error code
   */
  code: number;
  /**
   * Error message
   */
  message: string;
  /**
   * Link to Error Code References
   */
  moreInfo: string;
  /**
   * HTTP response status code
   */
  status: number;
  /**
   * Limit of requests for the bucket
   */
  field: string;
  /**
   * Limit of requests for the bucket
   */
  limit: number;
  /**
   * Name of the bucket
   */
  bucket: string;
  /**
   * Owner of the rule
   */
  owner: string;
  /**
   * Time to live of the rule
   */
  ttl: number;

  private get _proxy(): BucketContext {
    this._context =
      this._context ||
      new BucketContextImpl(
        this._version,
        this._solution.field,
        this._solution.bucket
      );
    return this._context;
  }

  /**
   * Remove a BucketInstance
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
   * Fetch a BucketInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BucketInstance
   */
  fetch(
    callback?: (error: Error | null, item?: BucketInstance) => any
  ): Promise<BucketInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a BucketInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BucketInstance
   */
  update(
    callback?: (error: Error | null, item?: BucketInstance) => any
  ): Promise<BucketInstance>;
  /**
   * Update a BucketInstance
   *
   * @param params - Body for request
   * @param headers - header params for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BucketInstance
   */
  update(
    params: RateLimitRequest,
    headers?: any,
    callback?: (error: Error | null, item?: BucketInstance) => any
  ): Promise<BucketInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: BucketInstance) => any
  ): Promise<BucketInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      code: this.code,
      message: this.message,
      moreInfo: this.moreInfo,
      status: this.status,
      field: this.field,
      limit: this.limit,
      bucket: this.bucket,
      owner: this.owner,
      ttl: this.ttl,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface BucketSolution {}

export interface BucketListInstance {
  _version: V2;
  _solution: BucketSolution;
  _uri: string;

  (field: string, bucket: string): BucketContext;
  get(field: string, bucket: string): BucketContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function BucketListInstance(version: V2): BucketListInstance {
  const instance = ((field, bucket) =>
    instance.get(field, bucket)) as BucketListInstance;

  instance.get = function get(field, bucket): BucketContext {
    return new BucketContextImpl(version, field, bucket);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = ``;

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
