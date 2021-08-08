import { Request, Response } from 'express';

import AuthenticateService from '../services/AuthenticateService';

class SessionController {
  async store(req: Request, res: Response): Promise<Response> {
    try {
      const { email, password } = req.body;

      const session = new AuthenticateService();

      const { user, token } = await session.store(email, password);

      delete user.password;

      return res.json({ user, token });
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  }
}

export default new SessionController();
