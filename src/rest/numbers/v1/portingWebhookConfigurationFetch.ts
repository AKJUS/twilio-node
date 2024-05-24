/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Numbers
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

export interface PortingWebhookConfigurationFetchSolution {}

export interface PortingWebhookConfigurationFetchListInstance {
  _version: V1;
  _solution: PortingWebhookConfigurationFetchSolution;
  _uri: string;

  /**
   * Fetch a PortingWebhookConfigurationFetchInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PortingWebhookConfigurationFetchInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: PortingWebhookConfigurationFetchInstance
    ) => any
  ): Promise<PortingWebhookConfigurationFetchInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function PortingWebhookConfigurationFetchListInstance(
  version: V1
): PortingWebhookConfigurationFetchListInstance {
  const instance = {} as PortingWebhookConfigurationFetchListInstance;

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Porting/Configuration/Webhook`;

  instance.fetch = function fetch(
    callback?: (
      error: Error | null,
      items: PortingWebhookConfigurationFetchInstance
    ) => any
  ): Promise<PortingWebhookConfigurationFetchInstance> {
    let operationVersion = version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new PortingWebhookConfigurationFetchInstance(operationVersion, payload)
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

interface PortingWebhookConfigurationFetchPayload
  extends PortingWebhookConfigurationFetchResource {}

interface PortingWebhookConfigurationFetchResource {
  url: string;
  port_in_target_url: string;
  port_out_target_url: string;
  notifications_of: Array<string>;
  port_in_target_date_created: Date;
  port_out_target_date_created: Date;
}

export class PortingWebhookConfigurationFetchInstance {
  constructor(
    protected _version: V1,
    payload: PortingWebhookConfigurationFetchResource
  ) {
    this.url = payload.url;
    this.portInTargetUrl = payload.port_in_target_url;
    this.portOutTargetUrl = payload.port_out_target_url;
    this.notificationsOf = payload.notifications_of;
    this.portInTargetDateCreated = deserialize.iso8601DateTime(
      payload.port_in_target_date_created
    );
    this.portOutTargetDateCreated = deserialize.iso8601DateTime(
      payload.port_out_target_date_created
    );
  }

  /**
   * The URL of the webhook configuration request
   */
  url: string;
  /**
   * Webhook URL to send a request when a port in request or port in phone number event happens
   */
  portInTargetUrl: string;
  /**
   * Webhook URL to send a request when a port out phone number event happens
   */
  portOutTargetUrl: string;
  /**
   * List of notification events to send a request to the webhook URL
   */
  notificationsOf: Array<string>;
  /**
   * Creation date for the port in webhook configuration
   */
  portInTargetDateCreated: Date;
  /**
   * Creation date for the port out webhook configuration
   */
  portOutTargetDateCreated: Date;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      url: this.url,
      portInTargetUrl: this.portInTargetUrl,
      portOutTargetUrl: this.portOutTargetUrl,
      notificationsOf: this.notificationsOf,
      portInTargetDateCreated: this.portInTargetDateCreated,
      portOutTargetDateCreated: this.portOutTargetDateCreated,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
