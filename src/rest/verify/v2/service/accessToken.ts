/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Verify
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V2 from "../../V2";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

/**
 * The Type of the Factor. Currently only `push` is supported.
 */
export type AccessTokenFactorTypes = "push";

/**
 * Options to pass to create a AccessTokenInstance
 */
export interface AccessTokenListInstanceCreateOptions {
  /** The unique external identifier for the Entity of the Service. This identifier should be immutable, not PII, and generated by your external system, such as your user\\\'s UUID, GUID, or SID. */
  identity: string;
  /**  */
  factorType: AccessTokenFactorTypes;
  /** The friendly name of the factor that is going to be created with this access token */
  factorFriendlyName?: string;
  /** How long, in seconds, the access token is valid. Can be an integer between 60 and 300. Default is 60. */
  ttl?: number;
}

export interface AccessTokenContext {
  /**
   * Fetch a AccessTokenInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AccessTokenInstance
   */
  fetch(
    callback?: (error: Error | null, item?: AccessTokenInstance) => any
  ): Promise<AccessTokenInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AccessTokenContextSolution {
  serviceSid: string;
  sid: string;
}

export class AccessTokenContextImpl implements AccessTokenContext {
  protected _solution: AccessTokenContextSolution;
  protected _uri: string;

  constructor(protected _version: V2, serviceSid: string, sid: string) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { serviceSid, sid };
    this._uri = `/Services/${serviceSid}/AccessTokens/${sid}`;
  }

  fetch(
    callback?: (error: Error | null, item?: AccessTokenInstance) => any
  ): Promise<AccessTokenInstance> {
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
        new AccessTokenInstance(
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

interface AccessTokenPayload extends AccessTokenResource {}

interface AccessTokenResource {
  sid: string;
  account_sid: string;
  service_sid: string;
  entity_identity: string;
  factor_type: AccessTokenFactorTypes;
  factor_friendly_name: string;
  token: string;
  url: string;
  ttl: number;
  date_created: Date;
}

export class AccessTokenInstance {
  protected _solution: AccessTokenContextSolution;
  protected _context?: AccessTokenContext;

  constructor(
    protected _version: V2,
    payload: AccessTokenResource,
    serviceSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.entityIdentity = payload.entity_identity;
    this.factorType = payload.factor_type;
    this.factorFriendlyName = payload.factor_friendly_name;
    this.token = payload.token;
    this.url = payload.url;
    this.ttl = deserialize.integer(payload.ttl);
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);

    this._solution = { serviceSid, sid: sid || this.sid };
  }

  /**
   * A 34 character string that uniquely identifies this Access Token.
   */
  sid: string;
  /**
   * The unique SID identifier of the Account.
   */
  accountSid: string;
  /**
   * The unique SID identifier of the Verify Service.
   */
  serviceSid: string;
  /**
   * The unique external identifier for the Entity of the Service.
   */
  entityIdentity: string;
  factorType: AccessTokenFactorTypes;
  /**
   * A human readable description of this factor, up to 64 characters. For a push factor, this can be the device\'s name.
   */
  factorFriendlyName: string;
  /**
   * The access token generated for enrollment, this is an encrypted json web token.
   */
  token: string;
  /**
   * The URL of this resource.
   */
  url: string;
  /**
   * How long, in seconds, the access token is valid. Max: 5 minutes
   */
  ttl: number;
  /**
   * The date that this access token was created, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;

  private get _proxy(): AccessTokenContext {
    this._context =
      this._context ||
      new AccessTokenContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Fetch a AccessTokenInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AccessTokenInstance
   */
  fetch(
    callback?: (error: Error | null, item?: AccessTokenInstance) => any
  ): Promise<AccessTokenInstance> {
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
      entityIdentity: this.entityIdentity,
      factorType: this.factorType,
      factorFriendlyName: this.factorFriendlyName,
      token: this.token,
      url: this.url,
      ttl: this.ttl,
      dateCreated: this.dateCreated,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface AccessTokenSolution {
  serviceSid: string;
}

export interface AccessTokenListInstance {
  _version: V2;
  _solution: AccessTokenSolution;
  _uri: string;

  (sid: string): AccessTokenContext;
  get(sid: string): AccessTokenContext;

  /**
   * Create a AccessTokenInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AccessTokenInstance
   */
  create(
    params: AccessTokenListInstanceCreateOptions,
    callback?: (error: Error | null, item?: AccessTokenInstance) => any
  ): Promise<AccessTokenInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function AccessTokenListInstance(
  version: V2,
  serviceSid: string
): AccessTokenListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as AccessTokenListInstance;

  instance.get = function get(sid): AccessTokenContext {
    return new AccessTokenContextImpl(version, serviceSid, sid);
  };

  instance._version = version;
  instance._solution = { serviceSid };
  instance._uri = `/Services/${serviceSid}/AccessTokens`;

  instance.create = function create(
    params: AccessTokenListInstanceCreateOptions,
    callback?: (error: Error | null, items: AccessTokenInstance) => any
  ): Promise<AccessTokenInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["identity"] === null || params["identity"] === undefined) {
      throw new Error("Required parameter \"params['identity']\" missing.");
    }

    if (params["factorType"] === null || params["factorType"] === undefined) {
      throw new Error("Required parameter \"params['factorType']\" missing.");
    }

    let data: any = {};

    data["Identity"] = params["identity"];

    data["FactorType"] = params["factorType"];
    if (params["factorFriendlyName"] !== undefined)
      data["FactorFriendlyName"] = params["factorFriendlyName"];
    if (params["ttl"] !== undefined) data["Ttl"] = params["ttl"];

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
        new AccessTokenInstance(
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
