import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy messages
  const post1 = await prisma.message.upsert({
    update: {},
    create: {
      content: 'Support for MongoDB has been one of the most requested features since the initial release of...',
      published: false,
    },
  });

  const post2 = await prisma.message.upsert({
    update: {},
    create: {
      content: 'Our engineers have been working hard, issuing new releases with many improvements...',
      published: true,
    },
  });

  console.log({ post1, post2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });