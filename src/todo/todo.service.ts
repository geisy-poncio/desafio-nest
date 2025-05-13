import { Injectable } from "@nestjs/common"
import { ToDo } from "./entities/todo.entities"
import { CreateToDoDto } from "./dtos/create-todo.dto"
import { GetAllToDoDto } from "./dtos/get-all-todo.dto"
import { ToDoNotFoundException } from "src/exceptions/todo-not-found.exception"
import { UpdateToDoDto, UpdateToDoParams } from "./dtos/update-todo.dto"
import { DeleteToDoDto } from "./dtos/delete-todo.dto"

@Injectable()
export class ToDoService {
    private toDoStorage: { [id: string]: ToDo } = {}

    create(dto: CreateToDoDto): ToDo {
        const newToDo = {
            id: crypto.randomUUID(),
            title: dto.title,
            body: dto.body,
            status: dto.status,
        }
        this.toDoStorage[newToDo.id] = newToDo

        return newToDo
    }

    getAll(dto: GetAllToDoDto): Array<ToDo> {
        return Object.values(this.toDoStorage).filter(toDo => !dto.status || toDo.status === dto.status)
    }

    getById(id: string): ToDo {
        const toDo = this.toDoStorage[id]

        if (!toDo) {
            throw new ToDoNotFoundException()
        }

        return toDo
    }

    delete(dto: DeleteToDoDto): void {
        this.getById(dto.todoId)
        delete this.toDoStorage[dto.todoId]
    }

    update(params: UpdateToDoParams, dto: UpdateToDoDto): ToDo {
        const toDo = this.getById(params.todoId)
        this.toDoStorage[params.todoId] = {
            ...toDo,
            title: dto.title,
            body: dto.body,
            status: dto.status,
        }

        return this.toDoStorage[params.todoId]
    }
}
