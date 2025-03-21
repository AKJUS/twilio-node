/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Video
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

/**
 * The status of the Participant. Can be: `connected` or `disconnected`.
 */
export type AnonymizeStatus = "connected" | "disconnected";

export interface AnonymizeContext {
  /**
   * Update a AnonymizeInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AnonymizeInstance
   */
  update(
    callback?: (error: Error | null, item?: AnonymizeInstance) => any
  ): Promise<AnonymizeInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AnonymizeContextSolution {
  roomSid: string;
  sid: string;
}

export class AnonymizeContextImpl implements AnonymizeContext {
  protected _solution: AnonymizeContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, roomSid: string, sid: string) {
    if (!isValidPathParam(roomSid)) {
      throw new Error("Parameter 'roomSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { roomSid, sid };
    this._uri = `/Rooms/${roomSid}/Participants/${sid}/Anonymize`;
  }

  update(
    callback?: (error: Error | null, item?: AnonymizeInstance) => any
  ): Promise<AnonymizeInstance> {
    const headers: any = {};
    headers["Accept"] = "application/json";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "post",
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new AnonymizeInstance(
          operationVersion,
          payload,
          instance._solution.roomSid,
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

interface AnonymizePayload extends AnonymizeResource {}

interface AnonymizeResource {
  sid: string;
  room_sid: string;
  account_sid: string;
  status: AnonymizeStatus;
  identity: string;
  date_created: Date;
  date_updated: Date;
  start_time: Date;
  end_time: Date;
  duration: number;
  url: string;
}

export class AnonymizeInstance {
  protected _solution: AnonymizeContextSolution;
  protected _context?: AnonymizeContext;

  constructor(
    protected _version: V1,
    payload: AnonymizeResource,
    roomSid: string,
    sid: string
  ) {
    this.sid = payload.sid;
    this.roomSid = payload.room_sid;
    this.accountSid = payload.account_sid;
    this.status = payload.status;
    this.identity = payload.identity;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.startTime = deserialize.iso8601DateTime(payload.start_time);
    this.endTime = deserialize.iso8601DateTime(payload.end_time);
    this.duration = deserialize.integer(payload.duration);
    this.url = payload.url;

    this._solution = { roomSid, sid };
  }

  /**
   * The unique string that we created to identify the RoomParticipant resource.
   */
  sid: string;
  /**
   * The SID of the participant\'s room.
   */
  roomSid: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the RoomParticipant resource.
   */
  accountSid: string;
  status: AnonymizeStatus;
  /**
   * The SID of the participant.
   */
  identity: string;
  /**
   * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;
  /**
   * The time of participant connected to the room in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#UTC) format.
   */
  startTime: Date;
  /**
   * The time when the participant disconnected from the room in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#UTC) format.
   */
  endTime: Date;
  /**
   * The duration in seconds that the participant was `connected`. Populated only after the participant is `disconnected`.
   */
  duration: number;
  /**
   * The absolute URL of the resource.
   */
  url: string;

  private get _proxy(): AnonymizeContext {
    this._context =
      this._context ||
      new AnonymizeContextImpl(
        this._version,
        this._solution.roomSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Update a AnonymizeInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AnonymizeInstance
   */
  update(
    callback?: (error: Error | null, item?: AnonymizeInstance) => any
  ): Promise<AnonymizeInstance> {
    return this._proxy.update(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      roomSid: this.roomSid,
      accountSid: this.accountSid,
      status: this.status,
      identity: this.identity,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      startTime: this.startTime,
      endTime: this.endTime,
      duration: this.duration,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface AnonymizeSolution {
  roomSid: string;
  sid: string;
}

export interface AnonymizeListInstance {
  _version: V1;
  _solution: AnonymizeSolution;
  _uri: string;

  (): AnonymizeContext;
  get(): AnonymizeContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function AnonymizeListInstance(
  version: V1,
  roomSid: string,
  sid: string
): AnonymizeListInstance {
  if (!isValidPathParam(roomSid)) {
    throw new Error("Parameter 'roomSid' is not valid.");
  }

  if (!isValidPathParam(sid)) {
    throw new Error("Parameter 'sid' is not valid.");
  }

  const instance = (() => instance.get()) as AnonymizeListInstance;

  instance.get = function get(): AnonymizeContext {
    return new AnonymizeContextImpl(version, roomSid, sid);
  };

  instance._version = version;
  instance._solution = { roomSid, sid };
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
