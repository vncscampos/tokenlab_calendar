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

  async read(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const userService = new UserService();

      const { email, name, created_at } = await userService.read(id);

      return res.json({ name, email, created_at });
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.user;

      const { name, email, password } = req.body;

      const userService = new UserService();

      const { updated_at } = await userService.update(id, name, email, password);

      return res.json({ name, email, updated_at });
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.user;

      const userService = new UserService();

      const message = await userService.delete(id);

      return res.json(message);
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  }
}

export default new UserController();
