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
  findAll() {
    return this.organizationService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.organizationService.findOne(name);
  }

  @Patch(':name')
  update(@Param('name',) name: string, @Body() updateOrganizationDto: UpdateOrganizationDto) {
    return this.organizationService.update(name, updateOrganizationDto);
  }

  @Delete(':name')
  remove(@Param('name') name: string) {
    return this.organizationService.remove(name);
  }
}
