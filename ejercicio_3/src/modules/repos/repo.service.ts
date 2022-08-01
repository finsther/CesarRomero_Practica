import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organization } from './entities/organization.entity';
import { Repozitory } from './entities/repozitory.entity';
import { Tribe } from './entities/tribe.entity';

@Injectable()
export class RepoService {

  constructor(@InjectRepository(Organization) private readonly repository: Repository<Organization>) { }

  async findRepositories(id: number): Promise<Organization> {
    const orgExist = await this.repository.findOneBy({ id: id });

    if (!orgExist) throw new NotFoundException('La Tribu no se encuentra registrada');

    return orgExist;
  }

  async getAllReposByTribeID(id: number) {
    const data = await this.repository
      .createQueryBuilder('organizations')
      .leftJoinAndSelect('organizations.tribes', 'tribes')
      .leftJoinAndSelect('tribes.repositories', 'repositories')
      .leftJoinAndSelect('repositories.metric', 'metrics')
      .where("tribes.id = :id", { id: id })
      .getOne();

    if (!data) throw new NotFoundException('La Tribu no se encuentra registrada');

    return data;
  }
}
