/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Frontline
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

/**
 * Current state of this user. Can be either `active` or `deactivated` and defaults to `active`
 */
export type UserStateType = "active" | "deactivated";

/**
 * Options to pass to update a UserInstance
 */
export interface UserContextUpdateOptions {
  /** The string that you assigned to describe the User. */
  friendlyName?: string;
  /** The avatar URL which will be shown in Frontline application. */
  avatar?: string;
  /**  */
  state?: UserStateType;
  /** Whether the User is available for new conversations. Set to `false` to prevent User from receiving new inbound conversations if you are using [Pool Routing](https://www.twilio.com/docs/frontline/handle-incoming-conversations#3-pool-routing). */
  isAvailable?: boolean;
}

export interface UserContext {
  /**
   * Fetch a UserInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed UserInstance
   */
  fetch(
    callback?: (error: Error | null, item?: UserInstance) => any
  ): Promise<UserInstance>;

  /**
   * Update a UserInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed UserInstance
   */
  update(
    callback?: (error: Error | null, item?: UserInstance) => any
  ): Promise<UserInstance>;
  /**
   * Update a UserInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed UserInstance
   */
  update(
    params: UserContextUpdateOptions,
    callback?: (error: Error | null, item?: UserInstance) => any
  ): Promise<UserInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface UserContextSolution {
  sid: string;
}

export class UserContextImpl implements UserContext {
  protected _solution: UserContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/Users/${sid}`;
  }

  fetch(
    callback?: (error: Error | null, item?: UserInstance) => any
  ): Promise<UserInstance> {
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
        new UserInstance(operationVersion, payload, instance._solution.sid)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?:
      | UserContextUpdateOptions
      | ((error: Error | null, item?: UserInstance) => any),
    callback?: (error: Error | null, item?: UserInstance) => any
  ): Promise<UserInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["avatar"] !== undefined) data["Avatar"] = params["avatar"];
    if (params["state"] !== undefined) data["State"] = params["state"];
    if (params["isAvailable"] !== undefined)
      data["IsAvailable"] = serialize.bool(params["isAvailable"]);

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
        new UserInstance(operationVersion, payload, instance._solution.sid)
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

interface UserPayload extends UserResource {}

interface UserResource {
  sid: string;
  identity: string;
  friendly_name: string;
  avatar: string;
  state: UserStateType;
  is_available: boolean;
  url: string;
}

export class UserInstance {
  protected _solution: UserContextSolution;
  protected _context?: UserContext;

  constructor(protected _version: V1, payload: UserResource, sid?: string) {
    this.sid = payload.sid;
    this.identity = payload.identity;
    this.friendlyName = payload.friendly_name;
    this.avatar = payload.avatar;
    this.state = payload.state;
    this.isAvailable = payload.is_available;
    this.url = payload.url;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The unique string that we created to identify the User resource.
   */
  sid: string;
  /**
   * The application-defined string that uniquely identifies the resource\'s User. This value is often a username or an email address, and is case-sensitive.
   */
  identity: string;
  /**
   * The string that you assigned to describe the User.
   */
  friendlyName: string;
  /**
   * The avatar URL which will be shown in Frontline application.
   */
  avatar: string;
  state: UserStateType;
  /**
   * Whether the User is available for new conversations. Defaults to `false` for new users.
   */
  isAvailable: boolean;
  /**
   * An absolute API resource URL for this user.
   */
  url: string;

  private get _proxy(): UserContext {
    this._context =
      this._context || new UserContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a UserInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed UserInstance
   */
  fetch(
    callback?: (error: Error | null, item?: UserInstance) => any
  ): Promise<UserInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a UserInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed UserInstance
   */
  update(
    callback?: (error: Error | null, item?: UserInstance) => any
  ): Promise<UserInstance>;
  /**
   * Update a UserInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed UserInstance
   */
  update(
    params: UserContextUpdateOptions,
    callback?: (error: Error | null, item?: UserInstance) => any
  ): Promise<UserInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: UserInstance) => any
  ): Promise<UserInstance> {
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
      identity: this.identity,
      friendlyName: this.friendlyName,
      avatar: this.avatar,
      state: this.state,
      isAvailable: this.isAvailable,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface UserSolution {}

export interface UserListInstance {
  _version: V1;
  _solution: UserSolution;
  _uri: string;

  (sid: string): UserContext;
  get(sid: string): UserContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function UserListInstance(version: V1): UserListInstance {
  const instance = ((sid) => instance.get(sid)) as UserListInstance;

  instance.get = function get(sid): UserContext {
    return new UserContextImpl(version, sid);
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
