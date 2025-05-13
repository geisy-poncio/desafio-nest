export interface ToDo {
    id: string
    title: string
    body: string
    status: toDoStatus
}

export enum toDoStatus {
    TODO = "todo",
    DOING = "doing",
    DONE = "done",
}
