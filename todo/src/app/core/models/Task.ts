import { Status } from "../enums/Status";

export interface ITask {
    id: string,
    userId: string,
    title: string,
    status: Status
}