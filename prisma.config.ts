// import { defineConfig } from "@prisma/config";

// export default defineConfig({
//   seed: {
//     run: async () => {
//       // Prisma هيشغل نفس الأمر اللي كنت كاتبه في package.json
//       await import("ts-node").then(async (tsNode) => {
//         await tsNode.register({
//           compilerOptions: { module: "CommonJS" },
//         });
//         await import("./prisma/seed");
//       });
//     },
//   },
// });
