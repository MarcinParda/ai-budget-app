import { faker } from '@faker-js/faker';
import prisma from '../config/db';

export async function seedUsers(numUsers: number) {
  const users = Array.from({ length: numUsers - 1 }, () => ({
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  }));
  const testUser = {
    username: 'test',
    email: 'test@test.test',
    password: 'test',
  };
  users.push(testUser);

  await prisma.user.createMany({ data: users });
}
