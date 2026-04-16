import type { Core } from '@strapi/strapi';

const config: Core.Config.Api = {
  rest: {
    defaultLimit: 100,
    maxLimit: 200,
    withCount: true,
  },
};

export default config;
