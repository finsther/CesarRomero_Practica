import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { Organization } from './entities/organization.entity';

@Injectable()
export class OrganizationService {

  constructor(@InjectRepository(Organization) private readonly repository: Repository<Organization>) { }

  async findAll() {
    return this.repository.find();
  }

  async findOne(name: string) {
    const orgExist = await this.repository.findOne({
      select: {
        id: true,
        name: true,
        status: true,
      }, where: {
        name: name,
      },
    });

    if (!orgExist) throw new NotFoundException('No existe esa organizacion con ese nombre');

    return orgExist;
  }

  async create(body: CreateOrganizationDto) {
    const organization: Organization = new Organization();

    organization.id = body.id;
    organization.name = body.name;
    organization.status = body.status;

    return this.repository.save(organization);
  }

  async update(name: string, organizationDto: UpdateOrganizationDto): Promise<Organization> {
    await this.repository.update({ name }, organizationDto);
    return this.repository.findOne({
      select: {
        id: true,
        name: true,
        status: true,
      }, where: {
        name: name,
      },
    })
  }

  async remove(name: string): Promise<string> {
    const orgExist = await this.repository.findOne({
      select: {
        id: true,
        name: true,
        status: true,
      }, where: {
        name: name,
      },
    });

    if (!orgExist) throw new NotFoundException('No existe esa organizacion para eliminar');

    await this.repository.delete({ name: name });

    return "organizacion eliminada"
  }
}
