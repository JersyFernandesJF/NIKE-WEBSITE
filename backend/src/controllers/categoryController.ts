import { AppDataSource } from "../data-source";
import { Category } from "../entity";

export class CatgoryController {
  private categoryRepository = AppDataSource.getRepository(Category);

  async all() {
    return this.categoryRepository.find();
  }
}
