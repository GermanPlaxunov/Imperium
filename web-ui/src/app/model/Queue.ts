import {Status} from "./Status";

export interface QueueDto extends Status{
  currentActor: string;
  queue: string[];
}

export class Queue{
  private _currentActor: string;
  private _queue: string[];

  constructor(currentActor: string, queue: string[]) {
    this._currentActor = currentActor;
    this._queue = queue;
  }

  get currentActor(): string {
    return this._currentActor;
  }

  set currentActor(value: string) {
    this._currentActor = value;
  }

  get queue(): string[] {
    return this._queue;
  }

  set queue(value: string[]) {
    this._queue = value;
  }
}
