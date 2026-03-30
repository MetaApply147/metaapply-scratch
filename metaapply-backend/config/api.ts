import type { Core } from '@strapi/strapi';

const config: Core.Config.Api = {
  rest: {
    defaultLimit: 50,
    maxLimit: 100,
    withCount: true,
  },
};

export default config;
