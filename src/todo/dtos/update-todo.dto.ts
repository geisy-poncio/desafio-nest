import { IsEnum, IsNotEmpty, IsString, IsUUID, MaxLength } from "class-validator"
import { UUID } from "crypto"
import { toDoStatus } from "../entities/todo-status.entities"

export class UpdateToDoDto {
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

export class UpdateToDoParams {
    @IsNotEmpty()
    @IsUUID()
    todoId: UUID
}