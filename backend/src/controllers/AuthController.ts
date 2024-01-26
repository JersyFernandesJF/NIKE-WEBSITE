import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity";

const crypto = require("crypto");

export class UserController {
  private userRepository = AppDataSource.getRepository(User);

  async save(request: Request, response: Response) {
    const { email, password } = request.body;
    let user = await this.userRepository.findOne({ where: { email } });

    if (user) {
      return response.status(409).json({ message: "User alerady exists" });
    }
    try {
      const salt = crypto.randomBytes(16);
      crypto.pbkdf2(
        password,
        salt,
        310000,
        32,
        "sha256",
        async function (err, hashedPassword: string) {
          user = new User({
            ...request.body,
            password: hashedPassword,
            salt,
          });

          this.userRepository.save(user);
        }
      );
    } catch (err) {
      console.log(err);
      response.status(400).json(err);
    }
  }
}
