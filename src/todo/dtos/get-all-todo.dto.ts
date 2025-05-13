import { IsEnum, IsOptional } from "class-validator"
import { toDoStatus } from "../interfaces/todo.interface"

export class GetAllToDoDto {
    @IsOptional()
    @IsEnum(toDoStatus)
    status: toDoStatus
}
