import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RepoService } from './repo.service';

@Controller('api/repos/tribe/')
@ApiTags('repo')
export class RepoController {
  constructor(private readonly repoService: RepoService) {}

  @Get(':id')
  getRepositoriesByTribe(@Param('id') id: number) {
    return this.repoService.getAllReposByTribeID(id);
  }
}
