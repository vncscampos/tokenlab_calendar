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

@Entity('events')
class Event {
  @PrimaryColumn()
  id: string;

  @Column()
  description: string;

  @JoinColumn({ name: 'user_id' })
  @ManyToOne(() => User)
  user: User;

  @Column()
  user_id: string;

  @Column()
  start_date: Date;

  @Column()
  end_date: Date;

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

export default Event;
