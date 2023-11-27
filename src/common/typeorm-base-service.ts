import { Repository } from 'typeorm';

export abstract class TypeOrmBaseService<T> {
  constructor(protected repo: Repository<T>) {}

  public get findOne(): Repository<T>['findOne'] {
    return this.repo.findOne.bind(this.repo);
  }

  public get findAll(): Repository<T>['find'] {
    return this.repo.find.bind(this.repo);
  }

  public get count(): Repository<T>['count'] {
    return this.repo.count.bind(this.repo);
  }
}
