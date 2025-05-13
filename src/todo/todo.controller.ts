import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common"
import { ToDoService } from "./todo.service"
import { ToDo } from "./interfaces/todo.interface"
import { CreateToDoDto } from "./dtos/create-todo.dto"
import { GetAllToDoDto } from "./dtos/get-all-todo.dto"
import { UpdateToDoDto, UpdateToDoParams } from "./dtos/update-todo.dto"
import { DeleteToDoDto } from "./dtos/delete-todo.dto"

@Controller("todos")
export class ToDoController {
    constructor(private readonly toDoService: ToDoService) { }

    @Post()
    create(@Body() dto: CreateToDoDto): { message: string, data: ToDo } {
        const toDo = this.toDoService.create(dto)

        return {
            message: "ToDo successfully created",
            data: toDo,
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

    @Put(":todoId")
    update(@Param() params: UpdateToDoParams, @Body() dto: UpdateToDoDto): { message: string, data: ToDo } {
        const toDo = this.toDoService.update(params, dto)

        return {
            message: "ToDo successfully updated",
            data: toDo,
        }
    }
}
