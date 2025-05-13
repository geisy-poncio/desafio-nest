import { Body, Controller, Delete, Get, Param, Post, Query } from "@nestjs/common"
import { ToDoService } from "./todo.service"
import { ToDo } from "./interfaces/todo.interface"
import { CreateToDoDto } from "./dtos/create-todo.dto"
import { GetAllToDoDto } from "./dtos/get-all-todo.dto"
import { DeleteToDoDto } from "./dtos/delete-todo.dto"

@Controller("todos")
export class ToDoController {
    constructor(private readonly toDoService: ToDoService) { }

    @Post()
    create(@Body() dto: CreateToDoDto): { message: string, data: ToDo } {
        const toDos = this.toDoService.create(dto)

        return {
            message: "ToDo successfully created",
            data: toDos,
        }
    }

    @Get()
    getAll(@Query() dto: GetAllToDoDto): { message: string, data: Array<ToDo> } {
        const toDos = this.toDoService.getAll(dto)

        return {
            message: "ToDos successfully found",
            data: toDos,
        }
    }

    @Delete(":todoId")
    delete(@Param() dto: DeleteToDoDto): void {
        this.toDoService.delete(dto)
    }
}
