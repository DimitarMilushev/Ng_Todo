import { ITask } from "./Task";

export interface IList {
    id: string,
    name: string,
    tasks: Array<ITask>
}