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
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";
import { ReservationListInstance } from "./task/reservation";

/**
 * The current status of the Task\'s assignment. Can be: `pending`, `reserved`, `assigned`, `canceled`, `wrapping`, or `completed`.
 */
export type TaskStatus =
  | "pending"
  | "reserved"
  | "assigned"
  | "canceled"
  | "completed"
  | "wrapping";

/**
 * Options to pass to remove a TaskInstance
 */
export interface TaskContextRemoveOptions {
  /** If provided, deletes this Task if (and only if) the [ETag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag) header of the Task matches the provided value. This matches the semantics of (and is implemented with) the HTTP [If-Match header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match). */
  ifMatch?: string;
}

/**
 * Options to pass to update a TaskInstance
 */
export interface TaskContextUpdateOptions {
  /** If provided, applies this mutation if (and only if) the [ETag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag) header of the Task matches the provided value. This matches the semantics of (and is implemented with) the HTTP [If-Match header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match). */
  ifMatch?: string;
  /** The JSON string that describes the custom attributes of the task. */
  attributes?: string;
  /**  */
  assignmentStatus?: TaskStatus;
  /** The reason that the Task was canceled or completed. This parameter is required only if the Task is canceled or completed. Setting this value queues the task for deletion and logs the reason. */
  reason?: string;
  /** The Task\\\'s new priority value. When supplied, the Task takes on the specified priority unless it matches a Workflow Target with a Priority set. Value can be 0 to 2^31^ (2,147,483,647). */
  priority?: number;
  /** When MultiTasking is enabled, specify the TaskChannel with the task to update. Can be the TaskChannel\\\'s SID or its `unique_name`, such as `voice`, `sms`, or `default`. */
  taskChannel?: string;
  /** The task\\\'s new virtual start time value. When supplied, the Task takes on the specified virtual start time. Value can\\\'t be in the future or before the year of 1900. */
  virtualStartTime?: Date;
}

/**
 * Options to pass to create a TaskInstance
 */
export interface TaskListInstanceCreateOptions {
  /** The amount of time in seconds the new task can live before being assigned. Can be up to a maximum of 2 weeks (1,209,600 seconds). The default value is 24 hours (86,400 seconds). On timeout, the `task.canceled` event will fire with description `Task TTL Exceeded`. */
  timeout?: number;
  /** The priority to assign the new task and override the default. When supplied, the new Task will have this priority unless it matches a Workflow Target with a Priority set. When not supplied, the new Task will have the priority of the matching Workflow Target. Value can be 0 to 2^31^ (2,147,483,647). */
  priority?: number;
  /** When MultiTasking is enabled, specify the TaskChannel by passing either its `unique_name` or `sid`. Default value is `default`. */
  taskChannel?: string;
  /** The SID of the Workflow that you would like to handle routing for the new Task. If there is only one Workflow defined for the Workspace that you are posting the new task to, this parameter is optional. */
  workflowSid?: string;
  /** A JSON string with the attributes of the new task. This value is passed to the Workflow\\\'s `assignment_callback_url` when the Task is assigned to a Worker. For example: `{ \\\"task_type\\\": \\\"call\\\", \\\"twilio_call_sid\\\": \\\"CAxxx\\\", \\\"customer_ticket_number\\\": \\\"12345\\\" }`. */
  attributes?: string;
  /** The virtual start time to assign the new task and override the default. When supplied, the new task will have this virtual start time. When not supplied, the new task will have the virtual start time equal to `date_created`. Value can\\\'t be in the future or before the year of 1900. */
  virtualStartTime?: Date;
  /** A SID of a Worker, Queue, or Workflow to route a Task to */
  routingTarget?: string;
  /** A boolean that indicates if the Task should respect a Worker\\\'s capacity and availability during assignment. This field can only be used when the `RoutingTarget` field is set to a Worker SID. By setting `IgnoreCapacity` to a value of `true`, `1`, or `yes`, the Task will be routed to the Worker without respecting their capacity and availability. Any other value will enforce the Worker\\\'s capacity and availability. The default value of `IgnoreCapacity` is `true` when the `RoutingTarget` is set to a Worker SID.  */
  ignoreCapacity?: string;
  /** The SID of the TaskQueue in which the Task belongs */
  taskQueueSid?: string;
}
/**
 * Options to pass to each
 */
export interface TaskListInstanceEachOptions {
  /** The priority value of the Tasks to read. Returns the list of all Tasks in the Workspace with the specified priority. */
  priority?: number;
  /** The `assignment_status` of the Tasks you want to read. Can be: `pending`, `reserved`, `assigned`, `canceled`, `wrapping`, or `completed`. Returns all Tasks in the Workspace with the specified `assignment_status`. */
  assignmentStatus?: Array<string>;
  /** The SID of the Workflow with the Tasks to read. Returns the Tasks controlled by the Workflow identified by this SID. */
  workflowSid?: string;
  /** The friendly name of the Workflow with the Tasks to read. Returns the Tasks controlled by the Workflow identified by this friendly name. */
  workflowName?: string;
  /** The SID of the TaskQueue with the Tasks to read. Returns the Tasks waiting in the TaskQueue identified by this SID. */
  taskQueueSid?: string;
  /** The `friendly_name` of the TaskQueue with the Tasks to read. Returns the Tasks waiting in the TaskQueue identified by this friendly name. */
  taskQueueName?: string;
  /** The attributes of the Tasks to read. Returns the Tasks that match the attributes specified in this parameter. */
  evaluateTaskAttributes?: string;
  /** A SID of a Worker, Queue, or Workflow to route a Task to */
  routingTarget?: string;
  /** How to order the returned Task resources. By default, Tasks are sorted by ascending DateCreated. This value is specified as: `Attribute:Order`, where `Attribute` can be either `DateCreated`, `Priority`, or `VirtualStartTime` and `Order` can be either `asc` or `desc`. For example, `Priority:desc` returns Tasks ordered in descending order of their Priority. Pairings of sort orders can be specified in a comma-separated list such as `Priority:desc,DateCreated:asc`, which returns the Tasks in descending Priority order and ascending DateCreated Order. The only ordering pairing not allowed is DateCreated and VirtualStartTime. */
  ordering?: string;
  /** Whether to read Tasks with Add-ons. If `true`, returns only Tasks with Add-ons. If `false`, returns only Tasks without Add-ons. */
  hasAddons?: boolean;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: TaskInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface TaskListInstanceOptions {
  /** The priority value of the Tasks to read. Returns the list of all Tasks in the Workspace with the specified priority. */
  priority?: number;
  /** The `assignment_status` of the Tasks you want to read. Can be: `pending`, `reserved`, `assigned`, `canceled`, `wrapping`, or `completed`. Returns all Tasks in the Workspace with the specified `assignment_status`. */
  assignmentStatus?: Array<string>;
  /** The SID of the Workflow with the Tasks to read. Returns the Tasks controlled by the Workflow identified by this SID. */
  workflowSid?: string;
  /** The friendly name of the Workflow with the Tasks to read. Returns the Tasks controlled by the Workflow identified by this friendly name. */
  workflowName?: string;
  /** The SID of the TaskQueue with the Tasks to read. Returns the Tasks waiting in the TaskQueue identified by this SID. */
  taskQueueSid?: string;
  /** The `friendly_name` of the TaskQueue with the Tasks to read. Returns the Tasks waiting in the TaskQueue identified by this friendly name. */
  taskQueueName?: string;
  /** The attributes of the Tasks to read. Returns the Tasks that match the attributes specified in this parameter. */
  evaluateTaskAttributes?: string;
  /** A SID of a Worker, Queue, or Workflow to route a Task to */
  routingTarget?: string;
  /** How to order the returned Task resources. By default, Tasks are sorted by ascending DateCreated. This value is specified as: `Attribute:Order`, where `Attribute` can be either `DateCreated`, `Priority`, or `VirtualStartTime` and `Order` can be either `asc` or `desc`. For example, `Priority:desc` returns Tasks ordered in descending order of their Priority. Pairings of sort orders can be specified in a comma-separated list such as `Priority:desc,DateCreated:asc`, which returns the Tasks in descending Priority order and ascending DateCreated Order. The only ordering pairing not allowed is DateCreated and VirtualStartTime. */
  ordering?: string;
  /** Whether to read Tasks with Add-ons. If `true`, returns only Tasks with Add-ons. If `false`, returns only Tasks without Add-ons. */
  hasAddons?: boolean;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface TaskListInstancePageOptions {
  /** The priority value of the Tasks to read. Returns the list of all Tasks in the Workspace with the specified priority. */
  priority?: number;
  /** The `assignment_status` of the Tasks you want to read. Can be: `pending`, `reserved`, `assigned`, `canceled`, `wrapping`, or `completed`. Returns all Tasks in the Workspace with the specified `assignment_status`. */
  assignmentStatus?: Array<string>;
  /** The SID of the Workflow with the Tasks to read. Returns the Tasks controlled by the Workflow identified by this SID. */
  workflowSid?: string;
  /** The friendly name of the Workflow with the Tasks to read. Returns the Tasks controlled by the Workflow identified by this friendly name. */
  workflowName?: string;
  /** The SID of the TaskQueue with the Tasks to read. Returns the Tasks waiting in the TaskQueue identified by this SID. */
  taskQueueSid?: string;
  /** The `friendly_name` of the TaskQueue with the Tasks to read. Returns the Tasks waiting in the TaskQueue identified by this friendly name. */
  taskQueueName?: string;
  /** The attributes of the Tasks to read. Returns the Tasks that match the attributes specified in this parameter. */
  evaluateTaskAttributes?: string;
  /** A SID of a Worker, Queue, or Workflow to route a Task to */
  routingTarget?: string;
  /** How to order the returned Task resources. By default, Tasks are sorted by ascending DateCreated. This value is specified as: `Attribute:Order`, where `Attribute` can be either `DateCreated`, `Priority`, or `VirtualStartTime` and `Order` can be either `asc` or `desc`. For example, `Priority:desc` returns Tasks ordered in descending order of their Priority. Pairings of sort orders can be specified in a comma-separated list such as `Priority:desc,DateCreated:asc`, which returns the Tasks in descending Priority order and ascending DateCreated Order. The only ordering pairing not allowed is DateCreated and VirtualStartTime. */
  ordering?: string;
  /** Whether to read Tasks with Add-ons. If `true`, returns only Tasks with Add-ons. If `false`, returns only Tasks without Add-ons. */
  hasAddons?: boolean;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface TaskContext {
  reservations: ReservationListInstance;

  /**
   * Remove a TaskInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;
  /**
   * Remove a TaskInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskInstance
   */
  remove(
    params: TaskContextRemoveOptions,
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a TaskInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskInstance
   */
  fetch(
    callback?: (error: Error | null, item?: TaskInstance) => any
  ): Promise<TaskInstance>;

  /**
   * Update a TaskInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskInstance
   */
  update(
    callback?: (error: Error | null, item?: TaskInstance) => any
  ): Promise<TaskInstance>;
  /**
   * Update a TaskInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskInstance
   */
  update(
    params: TaskContextUpdateOptions,
    callback?: (error: Error | null, item?: TaskInstance) => any
  ): Promise<TaskInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TaskContextSolution {
  workspaceSid: string;
  sid: string;
}

export class TaskContextImpl implements TaskContext {
  protected _solution: TaskContextSolution;
  protected _uri: string;

  protected _reservations?: ReservationListInstance;

  constructor(protected _version: V1, workspaceSid: string, sid: string) {
    if (!isValidPathParam(workspaceSid)) {
      throw new Error("Parameter 'workspaceSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { workspaceSid, sid };
    this._uri = `/Workspaces/${workspaceSid}/Tasks/${sid}`;
  }

  get reservations(): ReservationListInstance {
    this._reservations =
      this._reservations ||
      ReservationListInstance(
        this._version,
        this._solution.workspaceSid,
        this._solution.sid
      );
    return this._reservations;
  }

  remove(
    params?:
      | TaskContextRemoveOptions
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
    if (params["ifMatch"] !== undefined)
      headers["If-Match"] = params["ifMatch"];

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
    callback?: (error: Error | null, item?: TaskInstance) => any
  ): Promise<TaskInstance> {
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
        new TaskInstance(
          operationVersion,
          payload,
          instance._solution.workspaceSid,
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
      | TaskContextUpdateOptions
      | ((error: Error | null, item?: TaskInstance) => any),
    callback?: (error: Error | null, item?: TaskInstance) => any
  ): Promise<TaskInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["attributes"] !== undefined)
      data["Attributes"] = params["attributes"];
    if (params["assignmentStatus"] !== undefined)
      data["AssignmentStatus"] = params["assignmentStatus"];
    if (params["reason"] !== undefined) data["Reason"] = params["reason"];
    if (params["priority"] !== undefined) data["Priority"] = params["priority"];
    if (params["taskChannel"] !== undefined)
      data["TaskChannel"] = params["taskChannel"];
    if (params["virtualStartTime"] !== undefined)
      data["VirtualStartTime"] = serialize.iso8601DateTime(
        params["virtualStartTime"]
      );

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    headers["Accept"] = "application/json";
    if (params["ifMatch"] !== undefined)
      headers["If-Match"] = params["ifMatch"];

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
        new TaskInstance(
          operationVersion,
          payload,
          instance._solution.workspaceSid,
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

interface TaskPayload extends TwilioResponsePayload {
  tasks: TaskResource[];
}

interface TaskResource {
  account_sid: string;
  age: number;
  assignment_status: TaskStatus;
  attributes: string;
  addons: string;
  date_created: Date;
  date_updated: Date;
  task_queue_entered_date: Date;
  priority: number;
  reason: string;
  sid: string;
  task_queue_sid: string;
  task_queue_friendly_name: string;
  task_channel_sid: string;
  task_channel_unique_name: string;
  timeout: number;
  workflow_sid: string;
  workflow_friendly_name: string;
  workspace_sid: string;
  url: string;
  links: Record<string, string>;
  virtual_start_time: Date;
  ignore_capacity: boolean;
  routing_target: string;
}

export class TaskInstance {
  protected _solution: TaskContextSolution;
  protected _context?: TaskContext;

  constructor(
    protected _version: V1,
    payload: TaskResource,
    workspaceSid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.age = deserialize.integer(payload.age);
    this.assignmentStatus = payload.assignment_status;
    this.attributes = payload.attributes;
    this.addons = payload.addons;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.taskQueueEnteredDate = deserialize.iso8601DateTime(
      payload.task_queue_entered_date
    );
    this.priority = deserialize.integer(payload.priority);
    this.reason = payload.reason;
    this.sid = payload.sid;
    this.taskQueueSid = payload.task_queue_sid;
    this.taskQueueFriendlyName = payload.task_queue_friendly_name;
    this.taskChannelSid = payload.task_channel_sid;
    this.taskChannelUniqueName = payload.task_channel_unique_name;
    this.timeout = deserialize.integer(payload.timeout);
    this.workflowSid = payload.workflow_sid;
    this.workflowFriendlyName = payload.workflow_friendly_name;
    this.workspaceSid = payload.workspace_sid;
    this.url = payload.url;
    this.links = payload.links;
    this.virtualStartTime = deserialize.iso8601DateTime(
      payload.virtual_start_time
    );
    this.ignoreCapacity = payload.ignore_capacity;
    this.routingTarget = payload.routing_target;

    this._solution = { workspaceSid, sid: sid || this.sid };
  }

  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Task resource.
   */
  accountSid: string;
  /**
   * The number of seconds since the Task was created.
   */
  age: number;
  assignmentStatus: TaskStatus;
  /**
   * The JSON string with custom attributes of the work. **Note** If this property has been assigned a value, it will only be displayed in FETCH action that returns a single resource. Otherwise, it will be null.
   */
  attributes: string;
  /**
   * An object that contains the [Add-on](https://www.twilio.com/docs/add-ons) data for all installed Add-ons.
   */
  addons: string;
  /**
   * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;
  /**
   * The date and time in GMT when the Task entered the TaskQueue, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  taskQueueEnteredDate: Date;
  /**
   * The current priority score of the Task as assigned to a Worker by the workflow. Tasks with higher priority values will be assigned before Tasks with lower values.
   */
  priority: number;
  /**
   * The reason the Task was canceled or completed, if applicable.
   */
  reason: string;
  /**
   * The unique string that we created to identify the Task resource.
   */
  sid: string;
  /**
   * The SID of the TaskQueue.
   */
  taskQueueSid: string;
  /**
   * The friendly name of the TaskQueue.
   */
  taskQueueFriendlyName: string;
  /**
   * The SID of the TaskChannel.
   */
  taskChannelSid: string;
  /**
   * The unique name of the TaskChannel.
   */
  taskChannelUniqueName: string;
  /**
   * The amount of time in seconds that the Task can live before being assigned.
   */
  timeout: number;
  /**
   * The SID of the Workflow that is controlling the Task.
   */
  workflowSid: string;
  /**
   * The friendly name of the Workflow that is controlling the Task.
   */
  workflowFriendlyName: string;
  /**
   * The SID of the Workspace that contains the Task.
   */
  workspaceSid: string;
  /**
   * The absolute URL of the Task resource.
   */
  url: string;
  /**
   * The URLs of related resources.
   */
  links: Record<string, string>;
  /**
   * The date and time in GMT indicating the ordering for routing of the Task specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  virtualStartTime: Date;
  /**
   * A boolean that indicates if the Task should respect a Worker\'s capacity and availability during assignment. This field can only be used when the `RoutingTarget` field is set to a Worker SID. By setting `IgnoreCapacity` to a value of `true`, `1`, or `yes`, the Task will be routed to the Worker without respecting their capacity and availability. Any other value will enforce the Worker\'s capacity and availability. The default value of `IgnoreCapacity` is `true` when the `RoutingTarget` is set to a Worker SID.
   */
  ignoreCapacity: boolean;
  /**
   * A SID of a Worker, Queue, or Workflow to route a Task to
   */
  routingTarget: string;

  private get _proxy(): TaskContext {
    this._context =
      this._context ||
      new TaskContextImpl(
        this._version,
        this._solution.workspaceSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a TaskInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;
  /**
   * Remove a TaskInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskInstance
   */
  remove(
    params: TaskContextRemoveOptions,
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  remove(
    params?: any,
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(params, callback);
  }

  /**
   * Fetch a TaskInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskInstance
   */
  fetch(
    callback?: (error: Error | null, item?: TaskInstance) => any
  ): Promise<TaskInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a TaskInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskInstance
   */
  update(
    callback?: (error: Error | null, item?: TaskInstance) => any
  ): Promise<TaskInstance>;
  /**
   * Update a TaskInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskInstance
   */
  update(
    params: TaskContextUpdateOptions,
    callback?: (error: Error | null, item?: TaskInstance) => any
  ): Promise<TaskInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: TaskInstance) => any
  ): Promise<TaskInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the reservations.
   */
  reservations(): ReservationListInstance {
    return this._proxy.reservations;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      age: this.age,
      assignmentStatus: this.assignmentStatus,
      attributes: this.attributes,
      addons: this.addons,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      taskQueueEnteredDate: this.taskQueueEnteredDate,
      priority: this.priority,
      reason: this.reason,
      sid: this.sid,
      taskQueueSid: this.taskQueueSid,
      taskQueueFriendlyName: this.taskQueueFriendlyName,
      taskChannelSid: this.taskChannelSid,
      taskChannelUniqueName: this.taskChannelUniqueName,
      timeout: this.timeout,
      workflowSid: this.workflowSid,
      workflowFriendlyName: this.workflowFriendlyName,
      workspaceSid: this.workspaceSid,
      url: this.url,
      links: this.links,
      virtualStartTime: this.virtualStartTime,
      ignoreCapacity: this.ignoreCapacity,
      routingTarget: this.routingTarget,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface TaskSolution {
  workspaceSid: string;
}

export interface TaskListInstance {
  _version: V1;
  _solution: TaskSolution;
  _uri: string;

  (sid: string): TaskContext;
  get(sid: string): TaskContext;

  /**
   * Create a TaskInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskInstance
   */
  create(
    callback?: (error: Error | null, item?: TaskInstance) => any
  ): Promise<TaskInstance>;
  /**
   * Create a TaskInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskInstance
   */
  create(
    params: TaskListInstanceCreateOptions,
    callback?: (error: Error | null, item?: TaskInstance) => any
  ): Promise<TaskInstance>;

  /**
   * Streams TaskInstance records from the API.
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
   * @param { TaskListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: TaskInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: TaskListInstanceEachOptions,
    callback?: (item: TaskInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of TaskInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: TaskPage) => any
  ): Promise<TaskPage>;
  /**
   * Lists TaskInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TaskListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: TaskInstance[]) => any
  ): Promise<TaskInstance[]>;
  list(
    params: TaskListInstanceOptions,
    callback?: (error: Error | null, items: TaskInstance[]) => any
  ): Promise<TaskInstance[]>;
  /**
   * Retrieve a single page of TaskInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TaskListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: TaskPage) => any
  ): Promise<TaskPage>;
  page(
    params: TaskListInstancePageOptions,
    callback?: (error: Error | null, items: TaskPage) => any
  ): Promise<TaskPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function TaskListInstance(
  version: V1,
  workspaceSid: string
): TaskListInstance {
  if (!isValidPathParam(workspaceSid)) {
    throw new Error("Parameter 'workspaceSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as TaskListInstance;

  instance.get = function get(sid): TaskContext {
    return new TaskContextImpl(version, workspaceSid, sid);
  };

  instance._version = version;
  instance._solution = { workspaceSid };
  instance._uri = `/Workspaces/${workspaceSid}/Tasks`;

  instance.create = function create(
    params?:
      | TaskListInstanceCreateOptions
      | ((error: Error | null, items: TaskInstance) => any),
    callback?: (error: Error | null, items: TaskInstance) => any
  ): Promise<TaskInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["timeout"] !== undefined) data["Timeout"] = params["timeout"];
    if (params["priority"] !== undefined) data["Priority"] = params["priority"];
    if (params["taskChannel"] !== undefined)
      data["TaskChannel"] = params["taskChannel"];
    if (params["workflowSid"] !== undefined)
      data["WorkflowSid"] = params["workflowSid"];
    if (params["attributes"] !== undefined)
      data["Attributes"] = params["attributes"];
    if (params["virtualStartTime"] !== undefined)
      data["VirtualStartTime"] = serialize.iso8601DateTime(
        params["virtualStartTime"]
      );
    if (params["routingTarget"] !== undefined)
      data["RoutingTarget"] = params["routingTarget"];
    if (params["ignoreCapacity"] !== undefined)
      data["IgnoreCapacity"] = params["ignoreCapacity"];
    if (params["taskQueueSid"] !== undefined)
      data["TaskQueueSid"] = params["taskQueueSid"];

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
        new TaskInstance(
          operationVersion,
          payload,
          instance._solution.workspaceSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | TaskListInstancePageOptions
      | ((error: Error | null, items: TaskPage) => any),
    callback?: (error: Error | null, items: TaskPage) => any
  ): Promise<TaskPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["priority"] !== undefined) data["Priority"] = params["priority"];
    if (params["assignmentStatus"] !== undefined)
      data["AssignmentStatus"] = serialize.map(
        params["assignmentStatus"],
        (e: string) => e
      );
    if (params["workflowSid"] !== undefined)
      data["WorkflowSid"] = params["workflowSid"];
    if (params["workflowName"] !== undefined)
      data["WorkflowName"] = params["workflowName"];
    if (params["taskQueueSid"] !== undefined)
      data["TaskQueueSid"] = params["taskQueueSid"];
    if (params["taskQueueName"] !== undefined)
      data["TaskQueueName"] = params["taskQueueName"];
    if (params["evaluateTaskAttributes"] !== undefined)
      data["EvaluateTaskAttributes"] = params["evaluateTaskAttributes"];
    if (params["routingTarget"] !== undefined)
      data["RoutingTarget"] = params["routingTarget"];
    if (params["ordering"] !== undefined) data["Ordering"] = params["ordering"];
    if (params["hasAddons"] !== undefined)
      data["HasAddons"] = serialize.bool(params["hasAddons"]);
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
      (payload) => new TaskPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: TaskPage) => any
  ): Promise<TaskPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) => new TaskPage(instance._version, payload, instance._solution)
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

export class TaskPage extends Page<
  V1,
  TaskPayload,
  TaskResource,
  TaskInstance
> {
  /**
   * Initialize the TaskPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: TaskSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of TaskInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: TaskResource): TaskInstance {
    return new TaskInstance(
      this._version,
      payload,
      this._solution.workspaceSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
