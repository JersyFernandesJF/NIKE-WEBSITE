import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity";
const { sendMail } = require("../constants/services");

const crypto = require("crypto");
const jwt = require("jsonwebtoken");

export class UserController {
  private userRepository = AppDataSource.getRepository(User);

  async createUser(request: Request, response: Response) {
    const { email, password } = request.body;
    let user = await this.userRepository.findOne({ where: { email } });

    if (user) {
      return response.status(409).json({ message: "User alerady exists" });
    }
    try {
      const salt = crypto.randomBytes(16);
      crypto.pbkdf2(password, salt, 310000, 32, "sha256");
    } catch (err) {
      console.log(err);
      response.status(400).json(err);
    }
  }
  async loginUser(request: Request, respose: Response) {
    const { token, id, role } = request.body;

    respose
      .cookie("jwt", token, {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
        httpOnly: true,
      })
      .status(201)
      .json({ id: id, role: role });
  }

  async checkUser(request: Request, response: Response) {
    if (request.body) {
      response.status(200).json(request.body);
    } else response.sendStatus(400);
  }

  async resetPasswordRequest(request: Request, response: Response) {
    const { email } = request.body;
    const user = await this.userRepository.findOne({ where: { email } });

    if (user) {
      const token = await crypto.randomBytes(48).toString("hex");
      user.resetPasswordToken = token;
      await this.userRepository.save(user);
      const resetPasswordLink =
        "http://localhost:3000//resetPassword?token=" +
        token +
        "&email=" +
        email;
      const subject = "reset password for Nike";
      const html = `<p>Click <a href=${resetPasswordLink}>here</a> to Reset your password</p>`;
      if (email) {
        const res = await sendMail({ to: email, subject, html });
        response.json(response);
      } else response.sendStatus(400);
    } else response.sendStatus(400);
  }
}
