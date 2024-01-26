import { AppDataSource } from "../data-source";
import { Size } from "../entity";

export class SizeController {
  private sizeRepository = AppDataSource.getRepository(Size);

  async all() {
    return this.sizeRepository.find();
  }
}
