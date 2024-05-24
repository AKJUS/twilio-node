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

export type PortingWebhookConfigurationDeleteWebhookType =
  | "PORT_IN"
  | "PORT_OUT";

export interface PortingWebhookConfigurationDeleteContext {
  /**
   * Remove a PortingWebhookConfigurationDeleteInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface PortingWebhookConfigurationDeleteContextSolution {
  webhookType: PortingWebhookConfigurationDeleteWebhookType;
}

export class PortingWebhookConfigurationDeleteContextImpl
  implements PortingWebhookConfigurationDeleteContext
{
  protected _solution: PortingWebhookConfigurationDeleteContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V1,
    webhookType: PortingWebhookConfigurationDeleteWebhookType
  ) {
    if (!isValidPathParam(webhookType)) {
      throw new Error("Parameter 'webhookType' is not valid.");
    }

    this._solution = { webhookType };
    this._uri = `/Porting/Configuration/Webhook/${webhookType}`;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
      });

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

export interface PortingWebhookConfigurationDeleteSolution {}

export interface PortingWebhookConfigurationDeleteListInstance {
  _version: V1;
  _solution: PortingWebhookConfigurationDeleteSolution;
  _uri: string;

  (
    webhookType: PortingWebhookConfigurationDeleteWebhookType
  ): PortingWebhookConfigurationDeleteContext;
  get(
    webhookType: PortingWebhookConfigurationDeleteWebhookType
  ): PortingWebhookConfigurationDeleteContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function PortingWebhookConfigurationDeleteListInstance(
  version: V1
): PortingWebhookConfigurationDeleteListInstance {
  const instance = ((webhookType) =>
    instance.get(webhookType)) as PortingWebhookConfigurationDeleteListInstance;

  instance.get = function get(
    webhookType
  ): PortingWebhookConfigurationDeleteContext {
    return new PortingWebhookConfigurationDeleteContextImpl(
      version,
      webhookType
    );
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
