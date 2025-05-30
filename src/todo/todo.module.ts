import { Module } from "@nestjs/common"
import { ToDoController } from "./todo.controller"
import { ToDoService } from "./todo.service"

@Module({
    imports: [],
    controllers: [ToDoController],
    providers: [ToDoService],
})
export class ToDoModule {}
