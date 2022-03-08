const bootstrap = async () => {
  if (process.env.APP_ENV !== 'local') {
    // add ssm for non-local envs
  } else {
    const dotenv = await import('dotenv');
    dotenv.config();
  }
  await import('./index');
};

bootstrap().catch((err) => {
  console.error(err);
});
