import type { Schema, Struct } from '@strapi/strapi';

export interface FaqFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_faq_faq_items';
  info: {
    displayName: 'FAQ Item';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    faq_id: Schema.Attribute.String;
    question: Schema.Attribute.String;
  };
}

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

export interface SharedBenefitItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_benefit_items';
  info: {
    displayName: 'benefit-item';
  };
  attributes: {
    cardDescription: Schema.Attribute.Text;
    cardTitle: Schema.Attribute.String;
    number: Schema.Attribute.String;
  };
}

export interface SharedFeature extends Struct.ComponentSchema {
  collectionName: 'components_shared_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface SharedHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_banners';
  info: {
    displayName: 'hero-banner';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    ctaTarget: Schema.Attribute.Enumeration<['_blank', '_self']>;
    ctaText: Schema.Attribute.String;
    ctaUrl: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    highlight: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    overlay: Schema.Attribute.Boolean;
    rightImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    showLogo: Schema.Attribute.Boolean;
    textColor: Schema.Attribute.Enumeration<['light', 'dark']>;
    title: Schema.Attribute.String;
  };
}

export interface SharedTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonials';
  info: {
    displayName: 'Testimonial';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    designation: Schema.Attribute.String;
    name: Schema.Attribute.String;
    rating: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      >;
    text: Schema.Attribute.Blocks;
  };
}

export interface SuccessStoryTestimonialStory extends Struct.ComponentSchema {
  collectionName: 'components_success_story_testimonial_stories';
  info: {
    displayName: 'testimonialStory';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
  };
}

export interface SuccessStoryVideoStory extends Struct.ComponentSchema {
  collectionName: 'components_success_story_video_stories';
  info: {
    displayName: 'videoStory';
  };
  attributes: {
    thumbnail: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    videoUrl: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UniversityLogoItemTopUniversities
  extends Struct.ComponentSchema {
  collectionName: 'components_university_logo_item_top_universities';
  info: {
    displayName: 'topUniversities';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    priority: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'faq.faq-item': FaqFaqItem;
      'footer-destinations.destinations': FooterDestinationsDestinations;
      'footer.destination-item': FooterDestinationItem;
      'footer.footer-link': FooterFooterLink;
      'footer.footer-section': FooterFooterSection;
      'menu.item': MenuItem;
      'menu.section': MenuSection;
      'shared.benefit-item': SharedBenefitItem;
      'shared.feature': SharedFeature;
      'shared.hero-banner': SharedHeroBanner;
      'shared.testimonial': SharedTestimonial;
      'success-story.testimonial-story': SuccessStoryTestimonialStory;
      'success-story.video-story': SuccessStoryVideoStory;
      'university-logo-item.top-universities': UniversityLogoItemTopUniversities;
    }
  }
}
