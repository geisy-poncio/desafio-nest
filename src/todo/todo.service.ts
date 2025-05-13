import { Injectable } from "@nestjs/common"
import { ToDo } from "./interfaces/todo.interface"
import { CreateToDoDto } from "./dtos/create-todo.dto"
import { GetAllToDoDto } from "./dtos/get-all-todo.dto"

@Injectable()
export class ToDoService {
    private toDoStore: { [id: string]: ToDo } = {}

    create(dto: CreateToDoDto): ToDo {
        const newToDo = {
            id: crypto.randomUUID(),
            title: dto.title,
            body: dto.body,
            status: dto.status,
        }
        this.toDoStore[newToDo.id] = newToDo

        return newToDo
    }

    getAll(dto: GetAllToDoDto): Array<ToDo> {
        return Object.values(this.toDoStore).filter(toDo => !dto.status || toDo.status === dto.status)
    }
}
