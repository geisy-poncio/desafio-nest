import { Injectable } from "@nestjs/common"
import { ToDo } from "./interfaces/todo.interface"
import { CreateToDoDto } from "./dtos/create-todo.dto"
import { GetAllToDoDto } from "./dtos/get-all-todo.dto"
import { ToDoNotFoundException } from "src/exceptions/todo-not-found.exception"
import { DeleteToDoDto } from "./dtos/delete-todo.dto"

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

    getById(id: string): ToDo { 
        const toDo = this.toDoStore[id]
        
        if (!toDo) { 
            throw new ToDoNotFoundException()
        }

        return toDo
    }

    delete(dto: DeleteToDoDto): void {
        this.getById(dto.todoId)
        delete this.toDoStore[dto.todoId]
    } 
}
