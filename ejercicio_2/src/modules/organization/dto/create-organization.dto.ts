
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateOrganizationDto {

    @IsNotEmpty()
    id: number;

    @ApiProperty({ description: 'Name', default: "ACME INC" })
    @IsNotEmpty()
    name: string;

    @ApiProperty({ description: 'Status', default: 1 })
    @IsNotEmpty()
    status: number;
}
