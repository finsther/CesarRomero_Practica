import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { Organization } from './entities/organization.entity';

@Injectable()
export class OrganizationService {

  constructor(@InjectRepository(Organization) private readonly repository: Repository<Organization>) { }

  async getAll(): Promise<Organization[]> {
    return this.repository.find();
  }

  async findByID(id: number): Promise<Organization> {
    const orgExist = await this.repository.findOneBy({ id: id });

    if (!orgExist) throw new NotFoundException('No existe esa organizacion con el ID: ' + id);

    return orgExist;
  }

  async create(body: CreateOrganizationDto): Promise<Organization> {
    const organization: Organization = new Organization();

    organization.name = body.name;
    organization.status = body.status;

    return this.repository.save(organization);
  }

  async update(id: number, organizationDto: UpdateOrganizationDto): Promise<Organization> {
    await this.repository.update({ id }, organizationDto);
    return this.repository.findOneBy({ id: id })
  }

  async remove(id: number): Promise<string> {
    const orgExist = await this.repository.findOneBy({ id: id });

    if (!orgExist) throw new NotFoundException('No existe esa organizacion con el ID: ' + id);

    await this.repository.delete({ id: id });

    return "organizacion eliminada"
  }
}
