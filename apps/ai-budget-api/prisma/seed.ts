import prisma from '../src/config/db';
import { seedUsers } from '../src/seeds/users.seed';

async function main() {
  await seedUsers(10);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
