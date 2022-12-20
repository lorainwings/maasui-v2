if (!/pnpm/.test(process.env.npm_execpath || "")) {
  console.warn(
    `\u001b[33mThis repository requires using pnpm as the package manager ` +
      ` for scripts to work properly.\u001b[39m\n`
  );
  process.exit(1);
}

// 还有一种方式:
// npm scripts中添加
// preinstall: npx only-allow pnpm
