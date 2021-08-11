import { Request, Response } from 'express';

import UserService from '../services/UserService';

class UserController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const { name, email, password } = req.body;

      const userService = new UserService();

      const { id, created_at, updated_at } = await userService.create(name, email, password);

      return res.json({
        id,
        name,
        email,
        created_at,
        updated_at
      });
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  }
}

export default new UserController();
