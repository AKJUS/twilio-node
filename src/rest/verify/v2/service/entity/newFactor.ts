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
import V2 from "../../../V2";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

/**
 * The Status of this Factor. One of `unverified` or `verified`.
 */
export type NewFactorFactorStatuses = "unverified" | "verified";

/**
 * The Type of this Factor. Currently `push` and `totp` are supported.
 */
export type NewFactorFactorTypes = "push" | "totp";

export type NewFactorNotificationPlatforms = "apn" | "fcm" | "none";

export type NewFactorTotpAlgorithms = "sha1" | "sha256" | "sha512";

/**
 * Options to pass to create a NewFactorInstance
 */
export interface NewFactorListInstanceCreateOptions {
  /** The friendly name of this Factor. This can be any string up to 64 characters, meant for humans to distinguish between Factors. For `factor_type` `push`, this could be a device name. For `factor_type` `totp`, this value is used as the “account name” in constructing the `binding.uri` property. At the same time, we recommend avoiding providing PII. */
  friendlyName: string;
  /**  */
  factorType: NewFactorFactorTypes;
  /** The algorithm used when `factor_type` is `push`. Algorithm supported: `ES256` */
  "binding.alg"?: string;
  /** The Ecdsa public key in PKIX, ASN.1 DER format encoded in Base64.  Required when `factor_type` is `push` */
  "binding.publicKey"?: string;
  /** The ID that uniquely identifies your app in the Google or Apple store, such as `com.example.myapp`. It can be up to 100 characters long.  Required when `factor_type` is `push`. */
  "config.appId"?: string;
  /**  */
  "config.notificationPlatform"?: NewFactorNotificationPlatforms;
  /** For APN, the device token. For FCM, the registration token. It is used to send the push notifications. Must be between 32 and 255 characters long.  Required when `factor_type` is `push`. */
  "config.notificationToken"?: string;
  /** The Verify Push SDK version used to configure the factor  Required when `factor_type` is `push` */
  "config.sdkVersion"?: string;
  /** The shared secret for TOTP factors encoded in Base32. This can be provided when creating the Factor, otherwise it will be generated.  Used when `factor_type` is `totp` */
  "binding.secret"?: string;
  /** Defines how often, in seconds, are TOTP codes generated. i.e, a new TOTP code is generated every time_step seconds. Must be between 20 and 60 seconds, inclusive. The default value is defined at the service level in the property `totp.time_step`. Defaults to 30 seconds if not configured.  Used when `factor_type` is `totp` */
  "config.timeStep"?: number;
  /** The number of time-steps, past and future, that are valid for validation of TOTP codes. Must be between 0 and 2, inclusive. The default value is defined at the service level in the property `totp.skew`. If not configured defaults to 1.  Used when `factor_type` is `totp` */
  "config.skew"?: number;
  /** Number of digits for generated TOTP codes. Must be between 3 and 8, inclusive. The default value is defined at the service level in the property `totp.code_length`. If not configured defaults to 6.  Used when `factor_type` is `totp` */
  "config.codeLength"?: number;
  /**  */
  "config.alg"?: NewFactorTotpAlgorithms;
  /** Custom metadata associated with the factor. This is added by the Device/SDK directly to allow for the inclusion of device information. It must be a stringified JSON with only strings values eg. `{\\\"os\\\": \\\"Android\\\"}`. Can be up to 1024 characters in length. */
  metadata?: any;
}

export interface NewFactorSolution {
  serviceSid: string;
  identity: string;
}

export interface NewFactorListInstance {
  _version: V2;
  _solution: NewFactorSolution;
  _uri: string;

  /**
   * Create a NewFactorInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed NewFactorInstance
   */
  create(
    params: NewFactorListInstanceCreateOptions,
    callback?: (error: Error | null, item?: NewFactorInstance) => any
  ): Promise<NewFactorInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function NewFactorListInstance(
  version: V2,
  serviceSid: string,
  identity: string
): NewFactorListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  if (!isValidPathParam(identity)) {
    throw new Error("Parameter 'identity' is not valid.");
  }

  const instance = {} as NewFactorListInstance;

  instance._version = version;
  instance._solution = { serviceSid, identity };
  instance._uri = `/Services/${serviceSid}/Entities/${identity}/Factors`;

  instance.create = function create(
    params: NewFactorListInstanceCreateOptions,
    callback?: (error: Error | null, items: NewFactorInstance) => any
  ): Promise<NewFactorInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["friendlyName"] === null ||
      params["friendlyName"] === undefined
    ) {
      throw new Error("Required parameter \"params['friendlyName']\" missing.");
    }

    if (params["factorType"] === null || params["factorType"] === undefined) {
      throw new Error("Required parameter \"params['factorType']\" missing.");
    }

    let data: any = {};

    data["FriendlyName"] = params["friendlyName"];

    data["FactorType"] = params["factorType"];
    if (params["binding.alg"] !== undefined)
      data["Binding.Alg"] = params["binding.alg"];
    if (params["binding.publicKey"] !== undefined)
      data["Binding.PublicKey"] = params["binding.publicKey"];
    if (params["config.appId"] !== undefined)
      data["Config.AppId"] = params["config.appId"];
    if (params["config.notificationPlatform"] !== undefined)
      data["Config.NotificationPlatform"] =
        params["config.notificationPlatform"];
    if (params["config.notificationToken"] !== undefined)
      data["Config.NotificationToken"] = params["config.notificationToken"];
    if (params["config.sdkVersion"] !== undefined)
      data["Config.SdkVersion"] = params["config.sdkVersion"];
    if (params["binding.secret"] !== undefined)
      data["Binding.Secret"] = params["binding.secret"];
    if (params["config.timeStep"] !== undefined)
      data["Config.TimeStep"] = params["config.timeStep"];
    if (params["config.skew"] !== undefined)
      data["Config.Skew"] = params["config.skew"];
    if (params["config.codeLength"] !== undefined)
      data["Config.CodeLength"] = params["config.codeLength"];
    if (params["config.alg"] !== undefined)
      data["Config.Alg"] = params["config.alg"];
    if (params["metadata"] !== undefined)
      data["Metadata"] = serialize.object(params["metadata"]);

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
        new NewFactorInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
          instance._solution.identity
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

interface NewFactorPayload extends NewFactorResource {}

interface NewFactorResource {
  sid: string;
  account_sid: string;
  service_sid: string;
  entity_sid: string;
  identity: string;
  binding: any;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  status: NewFactorFactorStatuses;
  factor_type: NewFactorFactorTypes;
  config: any;
  metadata: any;
  url: string;
}

export class NewFactorInstance {
  constructor(
    protected _version: V2,
    payload: NewFactorResource,
    serviceSid: string,
    identity: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.entitySid = payload.entity_sid;
    this.identity = payload.identity;
    this.binding = payload.binding;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.friendlyName = payload.friendly_name;
    this.status = payload.status;
    this.factorType = payload.factor_type;
    this.config = payload.config;
    this.metadata = payload.metadata;
    this.url = payload.url;
  }

  /**
   * A 34 character string that uniquely identifies this Factor.
   */
  sid: string;
  /**
   * The unique SID identifier of the Account.
   */
  accountSid: string;
  /**
   * The unique SID identifier of the Service.
   */
  serviceSid: string;
  /**
   * The unique SID identifier of the Entity.
   */
  entitySid: string;
  /**
   * Customer unique identity for the Entity owner of the Factor. This identifier should be immutable, not PII, length between 8 and 64 characters, and generated by your external system, such as your user\'s UUID, GUID, or SID. It can only contain dash (-) separated alphanumeric characters.
   */
  identity: string;
  /**
   * Contains the `factor_type` specific secret and metadata. For push, this is `binding.public_key` and `binding.alg`. For totp, this is `binding.secret` and `binding.uri`. The `binding.uri` property is generated following the [google authenticator key URI format](https://github.com/google/google-authenticator/wiki/Key-Uri-Format), and `Factor.friendly_name` is used for the “accountname” value and `Service.friendly_name` or `Service.totp.issuer` is used for the `issuer` value.   The Binding property is ONLY returned upon Factor creation.
   */
  binding: any;
  /**
   * The date that this Factor was created, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The date that this Factor was updated, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;
  /**
   * The friendly name of this Factor. This can be any string up to 64 characters, meant for humans to distinguish between Factors. For `factor_type` `push`, this could be a device name. For `factor_type` `totp`, this value is used as the “account name” in constructing the `binding.uri` property. At the same time, we recommend avoiding providing PII.
   */
  friendlyName: string;
  status: NewFactorFactorStatuses;
  factorType: NewFactorFactorTypes;
  /**
   * An object that contains configurations specific to a `factor_type`.
   */
  config: any;
  /**
   * Custom metadata associated with the factor. This is added by the Device/SDK directly to allow for the inclusion of device information. It must be a stringified JSON with only strings values eg. `{\"os\": \"Android\"}`. Can be up to 1024 characters in length.
   */
  metadata: any;
  /**
   * The URL of this resource.
   */
  url: string;

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
      entitySid: this.entitySid,
      identity: this.identity,
      binding: this.binding,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      friendlyName: this.friendlyName,
      status: this.status,
      factorType: this.factorType,
      config: this.config,
      metadata: this.metadata,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
