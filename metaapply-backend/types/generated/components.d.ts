import type { Schema, Struct } from '@strapi/strapi';

export interface FooterDestinationsDestinations extends Struct.ComponentSchema {
  collectionName: 'components_footer_destinations_destinations';
  info: {
    displayName: 'Destinations';
  };
  attributes: {
    items: Schema.Attribute.Component<'footer.destination-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface FooterDestinationItem extends Struct.ComponentSchema {
  collectionName: 'components_footer_destination_items';
  info: {
    displayName: 'destination-item';
  };
  attributes: {
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface FooterFooterLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_links';
  info: {
    displayName: 'footer-link';
  };
  attributes: {
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface FooterFooterSection extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_sections';
  info: {
    displayName: 'footer-section';
  };
  attributes: {
    key: Schema.Attribute.String;
    links: Schema.Attribute.Component<'footer.footer-link', true>;
    title: Schema.Attribute.String;
  };
}

export interface MenuItem extends Struct.ComponentSchema {
  collectionName: 'components_menu_items';
  info: {
    displayName: 'Item';
  };
  attributes: {
    label: Schema.Attribute.String;
    order: Schema.Attribute.Integer;
    url: Schema.Attribute.String;
  };
}

export interface MenuSection extends Struct.ComponentSchema {
  collectionName: 'components_menu_sections';
  info: {
    displayName: 'Section';
  };
  attributes: {
    items: Schema.Attribute.Component<'menu.item', true>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'footer-destinations.destinations': FooterDestinationsDestinations;
      'footer.destination-item': FooterDestinationItem;
      'footer.footer-link': FooterFooterLink;
      'footer.footer-section': FooterFooterSection;
      'menu.item': MenuItem;
      'menu.section': MenuSection;
    }
  }
}
