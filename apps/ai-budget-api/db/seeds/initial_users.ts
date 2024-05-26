import { Knex } from 'knex';
import { faker } from '@faker-js/faker';

export async function seed(knex: Knex): Promise<void> {
  const testUser = {
    username: 'test',
    email: 'test@test.test',
    password: 'test',
  };
  const users = Array.from({ length: 20 }, () => {
    return {
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
  });
  users.push(testUser);

  await knex('users').insert(users);
}
