/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Conversations
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
import { MessageListInstance } from "./conversation/message";
import { ParticipantListInstance } from "./conversation/participant";
import { WebhookListInstance } from "./conversation/webhook";

/**
 * Current state of this conversation. Can be either `initializing`, `active`, `inactive` or `closed` and defaults to `active`
 */
export type ConversationState = "inactive" | "active" | "closed";

export type ConversationWebhookEnabledType = "true" | "false";

/**
 * Options to pass to remove a ConversationInstance
 */
export interface ConversationContextRemoveOptions {
  /** The X-Twilio-Webhook-Enabled HTTP request header */
  xTwilioWebhookEnabled?: ConversationWebhookEnabledType;
}

/**
 * Options to pass to update a ConversationInstance
 */
export interface ConversationContextUpdateOptions {
  /** The X-Twilio-Webhook-Enabled HTTP request header */
  xTwilioWebhookEnabled?: ConversationWebhookEnabledType;
  /** The human-readable name of this conversation, limited to 256 characters. Optional. */
  friendlyName?: string;
  /** The date that this resource was created. */
  dateCreated?: Date;
  /** The date that this resource was last updated. */
  dateUpdated?: Date;
  /** An optional string metadata field you can use to store any data you wish. The string value must contain structurally valid JSON if specified.  **Note** that if the attributes are not set \\\"{}\\\" will be returned. */
  attributes?: string;
  /** The unique ID of the [Messaging Service](https://www.twilio.com/docs/messaging/api/service-resource) this conversation belongs to. */
  messagingServiceSid?: string;
  /**  */
  state?: ConversationState;
  /** ISO8601 duration when conversation will be switched to `inactive` state. Minimum value for this timer is 1 minute. */
  "timers.inactive"?: string;
  /** ISO8601 duration when conversation will be switched to `closed` state. Minimum value for this timer is 10 minutes. */
  "timers.closed"?: string;
  /** An application-defined string that uniquely identifies the resource. It can be used to address the resource in place of the resource\\\'s `sid` in the URL. */
  uniqueName?: string;
  /** The default email address that will be used when sending outbound emails in this conversation. */
  "bindings.email.address"?: string;
  /** The default name that will be used when sending outbound emails in this conversation. */
  "bindings.email.name"?: string;
}

/**
 * Options to pass to create a ConversationInstance
 */
export interface ConversationListInstanceCreateOptions {
  /** The X-Twilio-Webhook-Enabled HTTP request header */
  xTwilioWebhookEnabled?: ConversationWebhookEnabledType;
  /** The human-readable name of this conversation, limited to 256 characters. Optional. */
  friendlyName?: string;
  /** An application-defined string that uniquely identifies the resource. It can be used to address the resource in place of the resource\\\'s `sid` in the URL. */
  uniqueName?: string;
  /** The date that this resource was created. */
  dateCreated?: Date;
  /** The date that this resource was last updated. */
  dateUpdated?: Date;
  /** The unique ID of the [Messaging Service](https://www.twilio.com/docs/messaging/api/service-resource) this conversation belongs to. */
  messagingServiceSid?: string;
  /** An optional string metadata field you can use to store any data you wish. The string value must contain structurally valid JSON if specified.  **Note** that if the attributes are not set \\\"{}\\\" will be returned. */
  attributes?: string;
  /**  */
  state?: ConversationState;
  /** ISO8601 duration when conversation will be switched to `inactive` state. Minimum value for this timer is 1 minute. */
  "timers.inactive"?: string;
  /** ISO8601 duration when conversation will be switched to `closed` state. Minimum value for this timer is 10 minutes. */
  "timers.closed"?: string;
  /** The default email address that will be used when sending outbound emails in this conversation. */
  "bindings.email.address"?: string;
  /** The default name that will be used when sending outbound emails in this conversation. */
  "bindings.email.name"?: string;
}
/**
 * Options to pass to each
 */
export interface ConversationListInstanceEachOptions {
  /** Specifies the beginning of the date range for filtering Conversations based on their creation date. Conversations that were created on or after this date will be included in the results. The date must be in ISO8601 format, specifically starting at the beginning of the specified date (YYYY-MM-DDT00:00:00Z), for precise filtering. This parameter can be combined with other filters. If this filter is used, the returned list is sorted by latest conversation creation date in descending order. */
  startDate?: string;
  /** Defines the end of the date range for filtering conversations by their creation date. Only conversations that were created on or before this date will appear in the results.  The date must be in ISO8601 format, specifically capturing up to the end of the specified date (YYYY-MM-DDT23:59:59Z), to ensure that conversations from the entire end day are included. This parameter can be combined with other filters. If this filter is used, the returned list is sorted by latest conversation creation date in descending order. */
  endDate?: string;
  /** State for sorting and filtering list of Conversations. Can be `active`, `inactive` or `closed` */
  state?: ConversationState;
  /** How many resources to return in each list page. The default is 50, and the maximum is 100. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: ConversationInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface ConversationListInstanceOptions {
  /** Specifies the beginning of the date range for filtering Conversations based on their creation date. Conversations that were created on or after this date will be included in the results. The date must be in ISO8601 format, specifically starting at the beginning of the specified date (YYYY-MM-DDT00:00:00Z), for precise filtering. This parameter can be combined with other filters. If this filter is used, the returned list is sorted by latest conversation creation date in descending order. */
  startDate?: string;
  /** Defines the end of the date range for filtering conversations by their creation date. Only conversations that were created on or before this date will appear in the results.  The date must be in ISO8601 format, specifically capturing up to the end of the specified date (YYYY-MM-DDT23:59:59Z), to ensure that conversations from the entire end day are included. This parameter can be combined with other filters. If this filter is used, the returned list is sorted by latest conversation creation date in descending order. */
  endDate?: string;
  /** State for sorting and filtering list of Conversations. Can be `active`, `inactive` or `closed` */
  state?: ConversationState;
  /** How many resources to return in each list page. The default is 50, and the maximum is 100. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface ConversationListInstancePageOptions {
  /** Specifies the beginning of the date range for filtering Conversations based on their creation date. Conversations that were created on or after this date will be included in the results. The date must be in ISO8601 format, specifically starting at the beginning of the specified date (YYYY-MM-DDT00:00:00Z), for precise filtering. This parameter can be combined with other filters. If this filter is used, the returned list is sorted by latest conversation creation date in descending order. */
  startDate?: string;
  /** Defines the end of the date range for filtering conversations by their creation date. Only conversations that were created on or before this date will appear in the results.  The date must be in ISO8601 format, specifically capturing up to the end of the specified date (YYYY-MM-DDT23:59:59Z), to ensure that conversations from the entire end day are included. This parameter can be combined with other filters. If this filter is used, the returned list is sorted by latest conversation creation date in descending order. */
  endDate?: string;
  /** State for sorting and filtering list of Conversations. Can be `active`, `inactive` or `closed` */
  state?: ConversationState;
  /** How many resources to return in each list page. The default is 50, and the maximum is 100. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface ConversationContext {
  messages: MessageListInstance;
  participants: ParticipantListInstance;
  webhooks: WebhookListInstance;

  /**
   * Remove a ConversationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;
  /**
   * Remove a ConversationInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConversationInstance
   */
  remove(
    params: ConversationContextRemoveOptions,
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a ConversationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConversationInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ConversationInstance) => any
  ): Promise<ConversationInstance>;

  /**
   * Update a ConversationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConversationInstance
   */
  update(
    callback?: (error: Error | null, item?: ConversationInstance) => any
  ): Promise<ConversationInstance>;
  /**
   * Update a ConversationInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConversationInstance
   */
  update(
    params: ConversationContextUpdateOptions,
    callback?: (error: Error | null, item?: ConversationInstance) => any
  ): Promise<ConversationInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ConversationContextSolution {
  sid: string;
}

export class ConversationContextImpl implements ConversationContext {
  protected _solution: ConversationContextSolution;
  protected _uri: string;

  protected _messages?: MessageListInstance;
  protected _participants?: ParticipantListInstance;
  protected _webhooks?: WebhookListInstance;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/Conversations/${sid}`;
  }

  get messages(): MessageListInstance {
    this._messages =
      this._messages || MessageListInstance(this._version, this._solution.sid);
    return this._messages;
  }

  get participants(): ParticipantListInstance {
    this._participants =
      this._participants ||
      ParticipantListInstance(this._version, this._solution.sid);
    return this._participants;
  }

  get webhooks(): WebhookListInstance {
    this._webhooks =
      this._webhooks || WebhookListInstance(this._version, this._solution.sid);
    return this._webhooks;
  }

  remove(
    params?:
      | ConversationContextRemoveOptions
      | ((error: Error | null, item?: boolean) => any),
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    const headers: any = {};
    if (params["xTwilioWebhookEnabled"] !== undefined)
      headers["X-Twilio-Webhook-Enabled"] = params["xTwilioWebhookEnabled"];

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
        params: data,
        headers,
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(
    callback?: (error: Error | null, item?: ConversationInstance) => any
  ): Promise<ConversationInstance> {
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
        new ConversationInstance(
          operationVersion,
          payload,
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
    params?:
      | ConversationContextUpdateOptions
      | ((error: Error | null, item?: ConversationInstance) => any),
    callback?: (error: Error | null, item?: ConversationInstance) => any
  ): Promise<ConversationInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["dateCreated"] !== undefined)
      data["DateCreated"] = serialize.iso8601DateTime(params["dateCreated"]);
    if (params["dateUpdated"] !== undefined)
      data["DateUpdated"] = serialize.iso8601DateTime(params["dateUpdated"]);
    if (params["attributes"] !== undefined)
      data["Attributes"] = params["attributes"];
    if (params["messagingServiceSid"] !== undefined)
      data["MessagingServiceSid"] = params["messagingServiceSid"];
    if (params["state"] !== undefined) data["State"] = params["state"];
    if (params["timers.inactive"] !== undefined)
      data["Timers.Inactive"] = params["timers.inactive"];
    if (params["timers.closed"] !== undefined)
      data["Timers.Closed"] = params["timers.closed"];
    if (params["uniqueName"] !== undefined)
      data["UniqueName"] = params["uniqueName"];
    if (params["bindings.email.address"] !== undefined)
      data["Bindings.Email.Address"] = params["bindings.email.address"];
    if (params["bindings.email.name"] !== undefined)
      data["Bindings.Email.Name"] = params["bindings.email.name"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    headers["Accept"] = "application/json";
    if (params["xTwilioWebhookEnabled"] !== undefined)
      headers["X-Twilio-Webhook-Enabled"] = params["xTwilioWebhookEnabled"];

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
        new ConversationInstance(
          operationVersion,
          payload,
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

interface ConversationPayload extends TwilioResponsePayload {
  conversations: ConversationResource[];
}

interface ConversationResource {
  account_sid: string;
  chat_service_sid: string;
  messaging_service_sid: string;
  sid: string;
  friendly_name: string;
  unique_name: string;
  attributes: string;
  state: ConversationState;
  date_created: Date;
  date_updated: Date;
  timers: any;
  url: string;
  links: Record<string, string>;
  bindings: any;
}

export class ConversationInstance {
  protected _solution: ConversationContextSolution;
  protected _context?: ConversationContext;

  constructor(
    protected _version: V1,
    payload: ConversationResource,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.chatServiceSid = payload.chat_service_sid;
    this.messagingServiceSid = payload.messaging_service_sid;
    this.sid = payload.sid;
    this.friendlyName = payload.friendly_name;
    this.uniqueName = payload.unique_name;
    this.attributes = payload.attributes;
    this.state = payload.state;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.timers = payload.timers;
    this.url = payload.url;
    this.links = payload.links;
    this.bindings = payload.bindings;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The unique ID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this conversation.
   */
  accountSid: string;
  /**
   * The unique ID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) this conversation belongs to.
   */
  chatServiceSid: string;
  /**
   * The unique ID of the [Messaging Service](https://www.twilio.com/docs/messaging/api/service-resource) this conversation belongs to.
   */
  messagingServiceSid: string;
  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid: string;
  /**
   * The human-readable name of this conversation, limited to 256 characters. Optional.
   */
  friendlyName: string;
  /**
   * An application-defined string that uniquely identifies the resource. It can be used to address the resource in place of the resource\'s `sid` in the URL.
   */
  uniqueName: string;
  /**
   * An optional string metadata field you can use to store any data you wish. The string value must contain structurally valid JSON if specified.  **Note** that if the attributes are not set \"{}\" will be returned.
   */
  attributes: string;
  state: ConversationState;
  /**
   * The date that this resource was created.
   */
  dateCreated: Date;
  /**
   * The date that this resource was last updated.
   */
  dateUpdated: Date;
  /**
   * Timer date values representing state update for this conversation.
   */
  timers: any;
  /**
   * An absolute API resource URL for this conversation.
   */
  url: string;
  /**
   * Contains absolute URLs to access the [participants](https://www.twilio.com/docs/conversations/api/conversation-participant-resource), [messages](https://www.twilio.com/docs/conversations/api/conversation-message-resource) and [webhooks](https://www.twilio.com/docs/conversations/api/conversation-scoped-webhook-resource) of this conversation.
   */
  links: Record<string, string>;
  bindings: any;

  private get _proxy(): ConversationContext {
    this._context =
      this._context ||
      new ConversationContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a ConversationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;
  /**
   * Remove a ConversationInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConversationInstance
   */
  remove(
    params: ConversationContextRemoveOptions,
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  remove(
    params?: any,
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(params, callback);
  }

  /**
   * Fetch a ConversationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConversationInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ConversationInstance) => any
  ): Promise<ConversationInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a ConversationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConversationInstance
   */
  update(
    callback?: (error: Error | null, item?: ConversationInstance) => any
  ): Promise<ConversationInstance>;
  /**
   * Update a ConversationInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConversationInstance
   */
  update(
    params: ConversationContextUpdateOptions,
    callback?: (error: Error | null, item?: ConversationInstance) => any
  ): Promise<ConversationInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: ConversationInstance) => any
  ): Promise<ConversationInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the messages.
   */
  messages(): MessageListInstance {
    return this._proxy.messages;
  }

  /**
   * Access the participants.
   */
  participants(): ParticipantListInstance {
    return this._proxy.participants;
  }

  /**
   * Access the webhooks.
   */
  webhooks(): WebhookListInstance {
    return this._proxy.webhooks;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      chatServiceSid: this.chatServiceSid,
      messagingServiceSid: this.messagingServiceSid,
      sid: this.sid,
      friendlyName: this.friendlyName,
      uniqueName: this.uniqueName,
      attributes: this.attributes,
      state: this.state,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      timers: this.timers,
      url: this.url,
      links: this.links,
      bindings: this.bindings,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface ConversationSolution {}

export interface ConversationListInstance {
  _version: V1;
  _solution: ConversationSolution;
  _uri: string;

  (sid: string): ConversationContext;
  get(sid: string): ConversationContext;

  /**
   * Create a ConversationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConversationInstance
   */
  create(
    callback?: (error: Error | null, item?: ConversationInstance) => any
  ): Promise<ConversationInstance>;
  /**
   * Create a ConversationInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConversationInstance
   */
  create(
    params: ConversationListInstanceCreateOptions,
    callback?: (error: Error | null, item?: ConversationInstance) => any
  ): Promise<ConversationInstance>;

  /**
   * Streams ConversationInstance records from the API.
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
   * @param { ConversationListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: ConversationInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: ConversationListInstanceEachOptions,
    callback?: (item: ConversationInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of ConversationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: ConversationPage) => any
  ): Promise<ConversationPage>;
  /**
   * Lists ConversationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ConversationListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: ConversationInstance[]) => any
  ): Promise<ConversationInstance[]>;
  list(
    params: ConversationListInstanceOptions,
    callback?: (error: Error | null, items: ConversationInstance[]) => any
  ): Promise<ConversationInstance[]>;
  /**
   * Retrieve a single page of ConversationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ConversationListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: ConversationPage) => any
  ): Promise<ConversationPage>;
  page(
    params: ConversationListInstancePageOptions,
    callback?: (error: Error | null, items: ConversationPage) => any
  ): Promise<ConversationPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function ConversationListInstance(
  version: V1
): ConversationListInstance {
  const instance = ((sid) => instance.get(sid)) as ConversationListInstance;

  instance.get = function get(sid): ConversationContext {
    return new ConversationContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Conversations`;

  instance.create = function create(
    params?:
      | ConversationListInstanceCreateOptions
      | ((error: Error | null, items: ConversationInstance) => any),
    callback?: (error: Error | null, items: ConversationInstance) => any
  ): Promise<ConversationInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["uniqueName"] !== undefined)
      data["UniqueName"] = params["uniqueName"];
    if (params["dateCreated"] !== undefined)
      data["DateCreated"] = serialize.iso8601DateTime(params["dateCreated"]);
    if (params["dateUpdated"] !== undefined)
      data["DateUpdated"] = serialize.iso8601DateTime(params["dateUpdated"]);
    if (params["messagingServiceSid"] !== undefined)
      data["MessagingServiceSid"] = params["messagingServiceSid"];
    if (params["attributes"] !== undefined)
      data["Attributes"] = params["attributes"];
    if (params["state"] !== undefined) data["State"] = params["state"];
    if (params["timers.inactive"] !== undefined)
      data["Timers.Inactive"] = params["timers.inactive"];
    if (params["timers.closed"] !== undefined)
      data["Timers.Closed"] = params["timers.closed"];
    if (params["bindings.email.address"] !== undefined)
      data["Bindings.Email.Address"] = params["bindings.email.address"];
    if (params["bindings.email.name"] !== undefined)
      data["Bindings.Email.Name"] = params["bindings.email.name"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    headers["Accept"] = "application/json";
    if (params["xTwilioWebhookEnabled"] !== undefined)
      headers["X-Twilio-Webhook-Enabled"] = params["xTwilioWebhookEnabled"];

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new ConversationInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | ConversationListInstancePageOptions
      | ((error: Error | null, items: ConversationPage) => any),
    callback?: (error: Error | null, items: ConversationPage) => any
  ): Promise<ConversationPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["startDate"] !== undefined)
      data["StartDate"] = params["startDate"];
    if (params["endDate"] !== undefined) data["EndDate"] = params["endDate"];
    if (params["state"] !== undefined) data["State"] = params["state"];
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
        new ConversationPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: ConversationPage) => any
  ): Promise<ConversationPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new ConversationPage(instance._version, payload, instance._solution)
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

export class ConversationPage extends Page<
  V1,
  ConversationPayload,
  ConversationResource,
  ConversationInstance
> {
  /**
   * Initialize the ConversationPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: ConversationSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of ConversationInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ConversationResource): ConversationInstance {
    return new ConversationInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
