const nodeEnv = process.env.NODE_ENV;
const environment = {
  isDevelopment: nodeEnv === 'development',
  isProduction: nodeEnv === 'production',
};

export const constants = {
  environment,
};
