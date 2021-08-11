import { Request, Response } from 'express';

import GuestService from '../services/GuestService';

class GuestController {
  async list(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.user;

      const guestService = new GuestService();

      const guests = await guestService.list(id);

      return res.json(guests);
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const user_id = req.user.id;
      const event_id = req.params.id;

      const guestService = new GuestService();

      const message = await guestService.delete(event_id, user_id);

      return res.json(message);
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  }
}

export default new GuestController();
