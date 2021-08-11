import { v4 as uuid } from 'uuid';
import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';

import User from './User';
import Event from './Event';

@Entity('guests')
class Guest {
  @PrimaryColumn()
  id: string;

  @JoinColumn({ name: 'user_id' })
  @ManyToOne(() => User)
  user: User;

  @Column()
  user_id: string;

  @JoinColumn({ name: 'event_id' })
  @ManyToOne(() => Event)
  event: Event;

  @Column()
  event_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Guest;
