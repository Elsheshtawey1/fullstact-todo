import { PrismaClient } from "@prisma/client";
import { faker } from '@faker-js/faker';
const prisma = new PrismaClient();

async function main() {
// add todos to db from faker
  await prisma.todo.createMany({
    data: Array.from({ length: 30 }, () => ({
      title: faker.lorem.words({min: 3, max: 10}),
      body: faker.lorem.words({min: 3, max: 10}),
    })),
  });





  // add users to db from faker
  // await prisma.user.createMany({
  //   data: Array.from({ length: 30 }, () => ({
  //     name: faker.internet.username(),
  //     email: faker.internet.email(),
  //     address: {
  //       street: faker.location.street(),
  //       city: faker.location.city(),
  //       state: faker.location.state(),
  //       zip: faker.location.zipCode(),
  //     },
  //   })),
  // });
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
