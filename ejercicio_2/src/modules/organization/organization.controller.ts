import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { ApiTags } from '@nestjs/swagger';
import { Organization } from './entities/organization.entity';

@Controller('/api/organizations')
@ApiTags('organization')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @Post()
  create(@Body() body: CreateOrganizationDto): Promise<Organization> {
    return this.organizationService.create(body);
  }

  @Get()
  getAll() {
    return this.organizationService.getAll();
  }

  @Get(':id')
  findByID(@Param('id') id: number) {
    return this.organizationService.findByID(id);
  }

  @Patch(':id')
  update(@Param('id',) id: number, @Body() updateOrganizationDto: UpdateOrganizationDto) {
    return this.organizationService.update(id, updateOrganizationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.organizationService.remove(id);
  }
}
