import { Request, Response } from 'express';

import EventService from '../services/EventService';
import GuestService from '../services/GuestService';

class EventController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const { description, start_date, end_date, guest } = req.body;

      const { id } = req.user;

      const eventService = new EventService();

      const event = await eventService.create({
        user_id: id,
        description,
        start_date,
        end_date
      });

      if(guest) {
        const guestService = new GuestService();

        var invites = await guestService.create(guest, event.id);
      }

      return res.json({ event, invites });
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  }

  async list(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.user;

      const eventService = new EventService();

      const events = await eventService.list(id);

      return res.json(events);
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const user_id = req.user.id;

      const { id } = req.params;

      const { description, start_date, end_date, guest } = req.body;

      const eventService = new EventService();

      const event = await eventService.update(id, { user_id, description, start_date, end_date });

      if (guest) {
        const guestService = new GuestService();

        var invites = await guestService.create(guest, event.id);
      }

      return res.json({ event, invites });
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const user_id = req.user.id;
      const { id } = req.params;

      const eventService = new EventService();

      const message = await eventService.delete(id, user_id);

      return res.json(message);
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  }
}

export default new EventController();
