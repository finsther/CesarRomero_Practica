import { Injectable } from '@nestjs/common';
import { Root } from './app.mock';

@Injectable()
export class AppService {

  private repositories: Root = {
    repositories: [    {
      id: 1,
      state: 604,
    },
    {
      id: 2,
      state: 605,
    },
    {
      id: 3,
      state: 606,
    },]
  };

  getAllRepositories(): Root {
    return this.repositories;
  }
}
