import { NotFoundException } from "@nestjs/common"

export class ToDoNotFoundException extends NotFoundException {
    constructor() {
        super("ToDo not found")
    }
}
