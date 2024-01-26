import { AppDataSource } from "../data-source";
import { Color } from "../entity";

export class ColorController {
  private colorRepository = AppDataSource.getRepository(Color);

  async all() {
    return this.colorRepository.find();
  }
}
