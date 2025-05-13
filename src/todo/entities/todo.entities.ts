import { toDoStatus } from "./todo-status.entities"

export interface ToDo {
    id: string
    title: string
    body: string
    status: toDoStatus
}
