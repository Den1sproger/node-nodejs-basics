const parseEnv = () => {
  let env_vars = [];

  Object.keys(process.env).forEach((variable) => {
    if (variable.startsWith('RSS_')) {
	  env_vars.push(`${variable}=${process.env[variable]}`);
	}
  })

  process.stdout.write(env_vars.join('; ') + '\n');
};

parseEnv();