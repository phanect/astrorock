console.log(`
  This is a dummy script to prevent failure of \`tsc\` command.
  Currently, tsconfig.json at the project root ignores modules/frontend/**/* because \`tsc\` command cannot validate *.astro files. Instead, the directory is validated by \`astro check\` command. However, there are no other *.ts and *.js files outside of the directory, so \`tsc --noEmit\` command fails without this file.

  This file can be safely deleted after any *.ts or *.js file(s) are created outside of the modules/frontend/ directory.
`);
