/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Taskrouter
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
import { ActivityListInstance } from "./workspace/activity";
import { EventListInstance } from "./workspace/event";
import { TaskListInstance } from "./workspace/task";
import { TaskChannelListInstance } from "./workspace/taskChannel";
import { TaskQueueListInstance } from "./workspace/taskQueue";
import { WorkerListInstance } from "./workspace/worker";
import { WorkflowListInstance } from "./workspace/workflow";
import { WorkspaceCumulativeStatisticsListInstance } from "./workspace/workspaceCumulativeStatistics";
import { WorkspaceRealTimeStatisticsListInstance } from "./workspace/workspaceRealTimeStatistics";
import { WorkspaceStatisticsListInstance } from "./workspace/workspaceStatistics";

/**
 * The type of TaskQueue to prioritize when Workers are receiving Tasks from both types of TaskQueues. Can be: `LIFO` or `FIFO` and the default is `FIFO`. For more information, see [Queue Ordering](https://www.twilio.com/docs/taskrouter/queue-ordering-last-first-out-lifo).
 */
export type WorkspaceQueueOrder = "FIFO" | "LIFO";

/**
 * Options to pass to update a WorkspaceInstance
 */
export interface WorkspaceContextUpdateOptions {
  /** The SID of the Activity that will be used when new Workers are created in the Workspace. */
  defaultActivitySid?: string;
  /** The URL we should call when an event occurs. See [Workspace Events](https://www.twilio.com/docs/taskrouter/api/event) for more information. This parameter supports Twilio\\\'s [Webhooks (HTTP callbacks) Connection Overrides](https://www.twilio.com/docs/usage/webhooks/webhooks-connection-overrides). */
  eventCallbackUrl?: string;
  /** The list of Workspace events for which to call event_callback_url. For example if `EventsFilter=task.created,task.canceled,worker.activity.update`, then TaskRouter will call event_callback_url only when a task is created, canceled, or a Worker activity is updated. */
  eventsFilter?: string;
  /** A descriptive string that you create to describe the Workspace resource. For example: `Sales Call Center` or `Customer Support Team`. */
  friendlyName?: string;
  /** Whether to enable multi-tasking. Can be: `true` to enable multi-tasking, or `false` to disable it. However, all workspaces should be maintained as multi-tasking. There is no default when omitting this parameter. A multi-tasking Workspace can\\\'t be updated to single-tasking unless it is not a Flex Project and another (legacy) single-tasking Workspace exists. Multi-tasking allows Workers to handle multiple Tasks simultaneously. In multi-tasking mode, each Worker can receive parallel reservations up to the per-channel maximums defined in the Workers section. In single-tasking mode (legacy mode), each Worker will only receive a new reservation when the previous task is completed. Learn more at [Multitasking](https://www.twilio.com/docs/taskrouter/multitasking). */
  multiTaskEnabled?: boolean;
  /** The SID of the Activity that will be assigned to a Worker when a Task reservation times out without a response. */
  timeoutActivitySid?: string;
  /**  */
  prioritizeQueueOrder?: WorkspaceQueueOrder;
}

/**
 * Options to pass to create a WorkspaceInstance
 */
export interface WorkspaceListInstanceCreateOptions {
  /** A descriptive string that you create to describe the Workspace resource. It can be up to 64 characters long. For example: `Customer Support` or `2014 Election Campaign`. */
  friendlyName: string;
  /** The URL we should call when an event occurs. If provided, the Workspace will publish events to this URL, for example, to collect data for reporting. See [Workspace Events](https://www.twilio.com/docs/taskrouter/api/event) for more information. This parameter supports Twilio\\\'s [Webhooks (HTTP callbacks) Connection Overrides](https://www.twilio.com/docs/usage/webhooks/webhooks-connection-overrides). */
  eventCallbackUrl?: string;
  /** The list of Workspace events for which to call event_callback_url. For example, if `EventsFilter=task.created, task.canceled, worker.activity.update`, then TaskRouter will call event_callback_url only when a task is created, canceled, or a Worker activity is updated. */
  eventsFilter?: string;
  /** Whether to enable multi-tasking. Can be: `true` to enable multi-tasking, or `false` to disable it. However, all workspaces should be created as multi-tasking. The default is `true`. Multi-tasking allows Workers to handle multiple Tasks simultaneously. When enabled (`true`), each Worker can receive parallel reservations up to the per-channel maximums defined in the Workers section. In single-tasking mode (legacy mode), each Worker will only receive a new reservation when the previous task is completed. Learn more at [Multitasking](https://www.twilio.com/docs/taskrouter/multitasking). */
  multiTaskEnabled?: boolean;
  /** An available template name. Can be: `NONE` or `FIFO` and the default is `NONE`. Pre-configures the Workspace with the Workflow and Activities specified in the template. `NONE` will create a Workspace with only a set of default activities. `FIFO` will configure TaskRouter with a set of default activities and a single TaskQueue for first-in, first-out distribution, which can be useful when you are getting started with TaskRouter. */
  template?: string;
  /**  */
  prioritizeQueueOrder?: WorkspaceQueueOrder;
}
/**
 * Options to pass to each
 */
export interface WorkspaceListInstanceEachOptions {
  /** The `friendly_name` of the Workspace resources to read. For example `Customer Support` or `2014 Election Campaign`. */
  friendlyName?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: WorkspaceInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface WorkspaceListInstanceOptions {
  /** The `friendly_name` of the Workspace resources to read. For example `Customer Support` or `2014 Election Campaign`. */
  friendlyName?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface WorkspaceListInstancePageOptions {
  /** The `friendly_name` of the Workspace resources to read. For example `Customer Support` or `2014 Election Campaign`. */
  friendlyName?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface WorkspaceContext {
  activities: ActivityListInstance;
  events: EventListInstance;
  tasks: TaskListInstance;
  taskChannels: TaskChannelListInstance;
  taskQueues: TaskQueueListInstance;
  workers: WorkerListInstance;
  workflows: WorkflowListInstance;
  cumulativeStatistics: WorkspaceCumulativeStatisticsListInstance;
  realTimeStatistics: WorkspaceRealTimeStatisticsListInstance;
  statistics: WorkspaceStatisticsListInstance;

  /**
   * Remove a WorkspaceInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a WorkspaceInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WorkspaceInstance
   */
  fetch(
    callback?: (error: Error | null, item?: WorkspaceInstance) => any
  ): Promise<WorkspaceInstance>;

  /**
   * Update a WorkspaceInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WorkspaceInstance
   */
  update(
    callback?: (error: Error | null, item?: WorkspaceInstance) => any
  ): Promise<WorkspaceInstance>;
  /**
   * Update a WorkspaceInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WorkspaceInstance
   */
  update(
    params: WorkspaceContextUpdateOptions,
    callback?: (error: Error | null, item?: WorkspaceInstance) => any
  ): Promise<WorkspaceInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface WorkspaceContextSolution {
  sid: string;
}

export class WorkspaceContextImpl implements WorkspaceContext {
  protected _solution: WorkspaceContextSolution;
  protected _uri: string;

  protected _activities?: ActivityListInstance;
  protected _events?: EventListInstance;
  protected _tasks?: TaskListInstance;
  protected _taskChannels?: TaskChannelListInstance;
  protected _taskQueues?: TaskQueueListInstance;
  protected _workers?: WorkerListInstance;
  protected _workflows?: WorkflowListInstance;
  protected _cumulativeStatistics?: WorkspaceCumulativeStatisticsListInstance;
  protected _realTimeStatistics?: WorkspaceRealTimeStatisticsListInstance;
  protected _statistics?: WorkspaceStatisticsListInstance;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/Workspaces/${sid}`;
  }

  get activities(): ActivityListInstance {
    this._activities =
      this._activities ||
      ActivityListInstance(this._version, this._solution.sid);
    return this._activities;
  }

  get events(): EventListInstance {
    this._events =
      this._events || EventListInstance(this._version, this._solution.sid);
    return this._events;
  }

  get tasks(): TaskListInstance {
    this._tasks =
      this._tasks || TaskListInstance(this._version, this._solution.sid);
    return this._tasks;
  }

  get taskChannels(): TaskChannelListInstance {
    this._taskChannels =
      this._taskChannels ||
      TaskChannelListInstance(this._version, this._solution.sid);
    return this._taskChannels;
  }

  get taskQueues(): TaskQueueListInstance {
    this._taskQueues =
      this._taskQueues ||
      TaskQueueListInstance(this._version, this._solution.sid);
    return this._taskQueues;
  }

  get workers(): WorkerListInstance {
    this._workers =
      this._workers || WorkerListInstance(this._version, this._solution.sid);
    return this._workers;
  }

  get workflows(): WorkflowListInstance {
    this._workflows =
      this._workflows ||
      WorkflowListInstance(this._version, this._solution.sid);
    return this._workflows;
  }

  get cumulativeStatistics(): WorkspaceCumulativeStatisticsListInstance {
    this._cumulativeStatistics =
      this._cumulativeStatistics ||
      WorkspaceCumulativeStatisticsListInstance(
        this._version,
        this._solution.sid
      );
    return this._cumulativeStatistics;
  }

  get realTimeStatistics(): WorkspaceRealTimeStatisticsListInstance {
    this._realTimeStatistics =
      this._realTimeStatistics ||
      WorkspaceRealTimeStatisticsListInstance(
        this._version,
        this._solution.sid
      );
    return this._realTimeStatistics;
  }

  get statistics(): WorkspaceStatisticsListInstance {
    this._statistics =
      this._statistics ||
      WorkspaceStatisticsListInstance(this._version, this._solution.sid);
    return this._statistics;
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
    callback?: (error: Error | null, item?: WorkspaceInstance) => any
  ): Promise<WorkspaceInstance> {
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
        new WorkspaceInstance(operationVersion, payload, instance._solution.sid)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?:
      | WorkspaceContextUpdateOptions
      | ((error: Error | null, item?: WorkspaceInstance) => any),
    callback?: (error: Error | null, item?: WorkspaceInstance) => any
  ): Promise<WorkspaceInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["defaultActivitySid"] !== undefined)
      data["DefaultActivitySid"] = params["defaultActivitySid"];
    if (params["eventCallbackUrl"] !== undefined)
      data["EventCallbackUrl"] = params["eventCallbackUrl"];
    if (params["eventsFilter"] !== undefined)
      data["EventsFilter"] = params["eventsFilter"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["multiTaskEnabled"] !== undefined)
      data["MultiTaskEnabled"] = serialize.bool(params["multiTaskEnabled"]);
    if (params["timeoutActivitySid"] !== undefined)
      data["TimeoutActivitySid"] = params["timeoutActivitySid"];
    if (params["prioritizeQueueOrder"] !== undefined)
      data["PrioritizeQueueOrder"] = params["prioritizeQueueOrder"];

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
        new WorkspaceInstance(operationVersion, payload, instance._solution.sid)
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

interface WorkspacePayload extends TwilioResponsePayload {
  workspaces: WorkspaceResource[];
}

interface WorkspaceResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  default_activity_name: string;
  default_activity_sid: string;
  event_callback_url: string;
  events_filter: string;
  friendly_name: string;
  multi_task_enabled: boolean;
  sid: string;
  timeout_activity_name: string;
  timeout_activity_sid: string;
  prioritize_queue_order: WorkspaceQueueOrder;
  url: string;
  links: Record<string, string>;
}

export class WorkspaceInstance {
  protected _solution: WorkspaceContextSolution;
  protected _context?: WorkspaceContext;

  constructor(
    protected _version: V1,
    payload: WorkspaceResource,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.defaultActivityName = payload.default_activity_name;
    this.defaultActivitySid = payload.default_activity_sid;
    this.eventCallbackUrl = payload.event_callback_url;
    this.eventsFilter = payload.events_filter;
    this.friendlyName = payload.friendly_name;
    this.multiTaskEnabled = payload.multi_task_enabled;
    this.sid = payload.sid;
    this.timeoutActivityName = payload.timeout_activity_name;
    this.timeoutActivitySid = payload.timeout_activity_sid;
    this.prioritizeQueueOrder = payload.prioritize_queue_order;
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Workspace resource.
   */
  accountSid: string;
  /**
   * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;
  /**
   * The name of the default activity.
   */
  defaultActivityName: string;
  /**
   * The SID of the Activity that will be used when new Workers are created in the Workspace.
   */
  defaultActivitySid: string;
  /**
   * The URL we call when an event occurs. If provided, the Workspace will publish events to this URL, for example, to collect data for reporting. See [Workspace Events](https://www.twilio.com/docs/taskrouter/api/event) for more information. This parameter supports Twilio\'s [Webhooks (HTTP callbacks) Connection Overrides](https://www.twilio.com/docs/usage/webhooks/webhooks-connection-overrides).
   */
  eventCallbackUrl: string;
  /**
   * The list of Workspace events for which to call `event_callback_url`. For example, if `EventsFilter=task.created, task.canceled, worker.activity.update`, then TaskRouter will call event_callback_url only when a task is created, canceled, or a Worker activity is updated.
   */
  eventsFilter: string;
  /**
   * The string that you assigned to describe the Workspace resource. For example `Customer Support` or `2014 Election Campaign`.
   */
  friendlyName: string;
  /**
   * Whether multi-tasking is enabled. The default is `true`, which enables multi-tasking. Multi-tasking allows Workers to handle multiple Tasks simultaneously. When enabled (`true`), each Worker can receive parallel reservations up to the per-channel maximums defined in the Workers section. In single-tasking each Worker would only receive a new reservation when the previous task is completed. Learn more at [Multitasking](https://www.twilio.com/docs/taskrouter/multitasking).
   */
  multiTaskEnabled: boolean;
  /**
   * The unique string that we created to identify the Workspace resource.
   */
  sid: string;
  /**
   * The name of the timeout activity.
   */
  timeoutActivityName: string;
  /**
   * The SID of the Activity that will be assigned to a Worker when a Task reservation times out without a response.
   */
  timeoutActivitySid: string;
  prioritizeQueueOrder: WorkspaceQueueOrder;
  /**
   * The absolute URL of the Workspace resource.
   */
  url: string;
  /**
   * The URLs of related resources.
   */
  links: Record<string, string>;

  private get _proxy(): WorkspaceContext {
    this._context =
      this._context ||
      new WorkspaceContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a WorkspaceInstance
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
   * Fetch a WorkspaceInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WorkspaceInstance
   */
  fetch(
    callback?: (error: Error | null, item?: WorkspaceInstance) => any
  ): Promise<WorkspaceInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a WorkspaceInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WorkspaceInstance
   */
  update(
    callback?: (error: Error | null, item?: WorkspaceInstance) => any
  ): Promise<WorkspaceInstance>;
  /**
   * Update a WorkspaceInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WorkspaceInstance
   */
  update(
    params: WorkspaceContextUpdateOptions,
    callback?: (error: Error | null, item?: WorkspaceInstance) => any
  ): Promise<WorkspaceInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: WorkspaceInstance) => any
  ): Promise<WorkspaceInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the activities.
   */
  activities(): ActivityListInstance {
    return this._proxy.activities;
  }

  /**
   * Access the events.
   */
  events(): EventListInstance {
    return this._proxy.events;
  }

  /**
   * Access the tasks.
   */
  tasks(): TaskListInstance {
    return this._proxy.tasks;
  }

  /**
   * Access the taskChannels.
   */
  taskChannels(): TaskChannelListInstance {
    return this._proxy.taskChannels;
  }

  /**
   * Access the taskQueues.
   */
  taskQueues(): TaskQueueListInstance {
    return this._proxy.taskQueues;
  }

  /**
   * Access the workers.
   */
  workers(): WorkerListInstance {
    return this._proxy.workers;
  }

  /**
   * Access the workflows.
   */
  workflows(): WorkflowListInstance {
    return this._proxy.workflows;
  }

  /**
   * Access the cumulativeStatistics.
   */
  cumulativeStatistics(): WorkspaceCumulativeStatisticsListInstance {
    return this._proxy.cumulativeStatistics;
  }

  /**
   * Access the realTimeStatistics.
   */
  realTimeStatistics(): WorkspaceRealTimeStatisticsListInstance {
    return this._proxy.realTimeStatistics;
  }

  /**
   * Access the statistics.
   */
  statistics(): WorkspaceStatisticsListInstance {
    return this._proxy.statistics;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      defaultActivityName: this.defaultActivityName,
      defaultActivitySid: this.defaultActivitySid,
      eventCallbackUrl: this.eventCallbackUrl,
      eventsFilter: this.eventsFilter,
      friendlyName: this.friendlyName,
      multiTaskEnabled: this.multiTaskEnabled,
      sid: this.sid,
      timeoutActivityName: this.timeoutActivityName,
      timeoutActivitySid: this.timeoutActivitySid,
      prioritizeQueueOrder: this.prioritizeQueueOrder,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface WorkspaceSolution {}

export interface WorkspaceListInstance {
  _version: V1;
  _solution: WorkspaceSolution;
  _uri: string;

  (sid: string): WorkspaceContext;
  get(sid: string): WorkspaceContext;

  /**
   * Create a WorkspaceInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WorkspaceInstance
   */
  create(
    params: WorkspaceListInstanceCreateOptions,
    callback?: (error: Error | null, item?: WorkspaceInstance) => any
  ): Promise<WorkspaceInstance>;

  /**
   * Streams WorkspaceInstance records from the API.
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
   * @param { WorkspaceListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: WorkspaceInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: WorkspaceListInstanceEachOptions,
    callback?: (item: WorkspaceInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of WorkspaceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: WorkspacePage) => any
  ): Promise<WorkspacePage>;
  /**
   * Lists WorkspaceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { WorkspaceListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: WorkspaceInstance[]) => any
  ): Promise<WorkspaceInstance[]>;
  list(
    params: WorkspaceListInstanceOptions,
    callback?: (error: Error | null, items: WorkspaceInstance[]) => any
  ): Promise<WorkspaceInstance[]>;
  /**
   * Retrieve a single page of WorkspaceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { WorkspaceListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: WorkspacePage) => any
  ): Promise<WorkspacePage>;
  page(
    params: WorkspaceListInstancePageOptions,
    callback?: (error: Error | null, items: WorkspacePage) => any
  ): Promise<WorkspacePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function WorkspaceListInstance(version: V1): WorkspaceListInstance {
  const instance = ((sid) => instance.get(sid)) as WorkspaceListInstance;

  instance.get = function get(sid): WorkspaceContext {
    return new WorkspaceContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Workspaces`;

  instance.create = function create(
    params: WorkspaceListInstanceCreateOptions,
    callback?: (error: Error | null, items: WorkspaceInstance) => any
  ): Promise<WorkspaceInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["friendlyName"] === null ||
      params["friendlyName"] === undefined
    ) {
      throw new Error("Required parameter \"params['friendlyName']\" missing.");
    }

    let data: any = {};

    data["FriendlyName"] = params["friendlyName"];
    if (params["eventCallbackUrl"] !== undefined)
      data["EventCallbackUrl"] = params["eventCallbackUrl"];
    if (params["eventsFilter"] !== undefined)
      data["EventsFilter"] = params["eventsFilter"];
    if (params["multiTaskEnabled"] !== undefined)
      data["MultiTaskEnabled"] = serialize.bool(params["multiTaskEnabled"]);
    if (params["template"] !== undefined) data["Template"] = params["template"];
    if (params["prioritizeQueueOrder"] !== undefined)
      data["PrioritizeQueueOrder"] = params["prioritizeQueueOrder"];

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
      (payload) => new WorkspaceInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | WorkspaceListInstancePageOptions
      | ((error: Error | null, items: WorkspacePage) => any),
    callback?: (error: Error | null, items: WorkspacePage) => any
  ): Promise<WorkspacePage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
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
        new WorkspacePage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: WorkspacePage) => any
  ): Promise<WorkspacePage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new WorkspacePage(instance._version, payload, instance._solution)
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

export class WorkspacePage extends Page<
  V1,
  WorkspacePayload,
  WorkspaceResource,
  WorkspaceInstance
> {
  /**
   * Initialize the WorkspacePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: WorkspaceSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of WorkspaceInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: WorkspaceResource): WorkspaceInstance {
    return new WorkspaceInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
