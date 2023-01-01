import { Specification } from '../../../entities/specification';
import { ISpecificationRepository } from '../../../repositories/specification/specification.repository.interface';

export class ListSpecificationsUseCase {
  constructor(private specificationsRepository: ISpecificationRepository) {}
  async execute(): Promise<Specification[] | null> {
    const findAll = await this.specificationsRepository.findAll();
    return findAll;
  }
}