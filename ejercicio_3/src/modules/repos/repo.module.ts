import { Module } from '@nestjs/common';
import { RepoService } from './repo.service';
import { RepoController } from './repo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repozitory } from './entities/repozitory.entity';
import { Metric } from './entities/metrics.entity';
import { Tribe } from './entities/tribe.entity';
import { Organization } from './entities/organization.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Repozitory, Metric, Tribe, Organization]),
  ],
  controllers: [RepoController],
  providers: [RepoService]
})
export class RepoModule { }
