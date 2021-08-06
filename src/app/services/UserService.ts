import { getCustomRepository, Repository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../entities/User';
import UserRepository from '../Repositories/UserRepository';

class UserService {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getCustomRepository(UserRepository);
  }

  async create(name: string, email: string, password: string) {
    const checkUserExists = await this.userRepository.findOne({ email });

    if (checkUserExists) {
      throw new Error('Email address already used.');
    }

    const hashPassword = await hash(password, 8);

    const user = this.userRepository.create({
      name,
      email,
      password: hashPassword
    });

    await this.userRepository.save(user);

    return user;
  }

  async read(id: string) {
    const user = await this.userRepository.findOne({ id });

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }

  async update(id: string, email: string, name: string, password: string) {
    const user = await this.userRepository.findOne({ id });

    if (!user) {
      throw new Error('User not found');
    }

    if (email) {
      user.email = email;
    }

    if (name) {
      user.name = name;
    }

    if (password) {
      const hashPassword = await hash(password, 8);
      user.password = hashPassword;
    }

    await this.userRepository.save(user);

    return user;
  }

  async delete(id: string) {
    const user = await this.userRepository.findOne({ id });

    if (!user) {
      throw new Error('User not found');
    }

    await this.userRepository.delete({ id });

    return { message: 'User removed '};
  }
}

export default UserService;
