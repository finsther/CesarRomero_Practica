import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organization } from './entities/organization.entity';
import { Repozitory } from './entities/repozitory.entity';

@Injectable()
export class RepoService {

  constructor(@InjectRepository(Repozitory) private readonly repository: Repository<Repozitory>) { }

  async findRepositories(id: number): Promise<Repozitory> {
    const orgExist = await this.repository.findOneBy({ id: id });

    if (!orgExist) throw new NotFoundException('La Tribu no se encuentra registrada');

    return orgExist;
  }

  async getAllReposByTribeID(id: number) {
    const data = await this.repository
      .createQueryBuilder('repositories')
      .innerJoinAndSelect('repositories.metric', 'metrics')
      .leftJoinAndSelect('repositories.tribe', 'tribes')
      .leftJoinAndSelect('tribes.organization', 'organizations')
      .select([
        'repositories.id',
        'repositories.name',
        'tribes.name',
        'metrics.coverage',
        'metrics.codeSmells',
        'metrics.bugs',
        'metrics.vulnerabilities',
        'metrics.hotspot',
        'repositories.state'
      ])
      .where("tribes.id = :id", { id: id })
      .getMany();

    if (data.length == 0) {
      throw new NotFoundException('La Tribu no se encuentra registrada');
    }

    return data;
  }
}
