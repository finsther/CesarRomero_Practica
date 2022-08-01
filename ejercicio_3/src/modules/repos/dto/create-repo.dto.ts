import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateRepoDto {
    @IsNotEmpty()
    id: number;

    @ApiProperty({ description: 'Name', default: "Centro Digital" })
    @IsNotEmpty()
    name: string;

    @ApiProperty({ description: 'Status', default: 1 })
    @IsNotEmpty()
    status: number;
}
