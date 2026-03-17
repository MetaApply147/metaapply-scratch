import type { Schema, Struct } from '@strapi/strapi';

export interface MenuItem extends Struct.ComponentSchema {
  collectionName: 'components_menu_items';
  info: {
    displayName: 'Item';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'menu.item': MenuItem;
    }
  }
}
