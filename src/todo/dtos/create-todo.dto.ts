import { IsEnum, IsNotEmpty, IsString, MaxLength } from "class-validator"
import { toDoStatus } from "../entities/todo-status.entities"

export class CreateToDoDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    title: string

    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    body: string

    @IsNotEmpty()
    @IsEnum(toDoStatus)
    status: toDoStatus
}
