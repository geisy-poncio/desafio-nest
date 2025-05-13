import { IsEnum, IsOptional } from "class-validator"
import { toDoStatus } from "../entities/todo-status.entities"

export class GetAllToDoDto {
    @IsOptional()
    @IsEnum(toDoStatus)
    status: toDoStatus
}
