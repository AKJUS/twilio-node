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
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

/**
 * Options to pass to fetch a UsAppToPersonUsecaseInstance
 */
export interface UsAppToPersonUsecaseListInstanceFetchOptions {
  /** The unique string to identify the A2P brand. */
  brandRegistrationSid?: string;
}

export interface UsAppToPersonUsecaseSolution {
  messagingServiceSid: string;
}

export interface UsAppToPersonUsecaseListInstance {
  _version: V1;
  _solution: UsAppToPersonUsecaseSolution;
  _uri: string;

  /**
   * Fetch a UsAppToPersonUsecaseInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed UsAppToPersonUsecaseInstance
   */
  fetch(
    callback?: (error: Error | null, item?: UsAppToPersonUsecaseInstance) => any
  ): Promise<UsAppToPersonUsecaseInstance>;
  /**
   * Fetch a UsAppToPersonUsecaseInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed UsAppToPersonUsecaseInstance
   */
  fetch(
    params: UsAppToPersonUsecaseListInstanceFetchOptions,
    callback?: (error: Error | null, item?: UsAppToPersonUsecaseInstance) => any
  ): Promise<UsAppToPersonUsecaseInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function UsAppToPersonUsecaseListInstance(
  version: V1,
  messagingServiceSid: string
): UsAppToPersonUsecaseListInstance {
  if (!isValidPathParam(messagingServiceSid)) {
    throw new Error("Parameter 'messagingServiceSid' is not valid.");
  }

  const instance = {} as UsAppToPersonUsecaseListInstance;

  instance._version = version;
  instance._solution = { messagingServiceSid };
  instance._uri = `/Services/${messagingServiceSid}/Compliance/Usa2p/Usecases`;

  instance.fetch = function fetch(
    params?:
      | UsAppToPersonUsecaseListInstanceFetchOptions
      | ((error: Error | null, items: UsAppToPersonUsecaseInstance) => any),
    callback?: (error: Error | null, items: UsAppToPersonUsecaseInstance) => any
  ): Promise<UsAppToPersonUsecaseInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["brandRegistrationSid"] !== undefined)
      data["BrandRegistrationSid"] = params["brandRegistrationSid"];

    const headers: any = {};
    headers["Accept"] = "application/json";

    let operationVersion = version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new UsAppToPersonUsecaseInstance(
          operationVersion,
          payload,
          instance._solution.messagingServiceSid
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

interface UsAppToPersonUsecasePayload extends UsAppToPersonUsecaseResource {}

interface UsAppToPersonUsecaseResource {
  us_app_to_person_usecases: Array<Record<string, object>>;
}

export class UsAppToPersonUsecaseInstance {
  constructor(
    protected _version: V1,
    payload: UsAppToPersonUsecaseResource,
    messagingServiceSid: string
  ) {
    this.usAppToPersonUsecases = payload.us_app_to_person_usecases;
  }

  /**
   * Human readable name, code, description and post_approval_required (indicates whether or not post approval is required for this Use Case) of A2P Campaign Use Cases.
   */
  usAppToPersonUsecases: Array<Record<string, object>>;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      usAppToPersonUsecases: this.usAppToPersonUsecases,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
