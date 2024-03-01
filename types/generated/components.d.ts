import type { Schema, Attribute } from '@strapi/strapi';

export interface MenuMenuButton extends Schema.Component {
  collectionName: 'components_menu_menu_buttons';
  info: {
    displayName: 'MenuButton';
    icon: 'cursor';
  };
  attributes: {
    buttonText: Attribute.String & Attribute.Required;
    url: Attribute.String;
    buttonType: Attribute.Enumeration<
      ['primary', 'secondary', 'outline-primary']
    >;
  };
}

export interface MenuMenuLink extends Schema.Component {
  collectionName: 'components_menu_menu_links';
  info: {
    displayName: 'MenuLink';
    icon: 'link';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface PageComponentsChooseUsCard extends Schema.Component {
  collectionName: 'components_page_components_choose_us_cards';
  info: {
    displayName: 'ChooseUsCard';
    icon: 'cast';
  };
  attributes: {
    icon: Attribute.Media;
    title: Attribute.String;
    content: Attribute.Text;
    color: Attribute.Enumeration<['primary', 'dark']>;
  };
}

export interface PageComponentsContactSection extends Schema.Component {
  collectionName: 'components_page_components_contact_sections';
  info: {
    displayName: 'ContactSection';
    icon: 'envelop';
  };
  attributes: {
    heading: Attribute.Component<'section-heading.section-heading'>;
    cta: Attribute.Component<'menu.menu-button'>;
    features: Attribute.Component<'page-components.feature-line', true>;
  };
}

export interface PageComponentsFeatureLine extends Schema.Component {
  collectionName: 'components_page_components_feature_lines';
  info: {
    displayName: 'FeatureLine';
    icon: 'check';
  };
  attributes: {
    icon: Attribute.Media;
    text: Attribute.String & Attribute.Required;
  };
}

export interface PageComponentsHomeAboutSection extends Schema.Component {
  collectionName: 'components_page_components_home_about_sections';
  info: {
    displayName: 'HomeAboutSection';
    icon: 'user';
    description: '';
  };
  attributes: {
    SectionHeading: Attribute.Component<'section-heading.section-heading'>;
    aboutHeading: Attribute.Component<'section-heading.section-heading'>;
    FeatureLine: Attribute.Component<'page-components.feature-line', true>;
    CtaSection: Attribute.Component<'menu.menu-button'>;
  };
}

export interface PageComponentsHomeChooseUsSection extends Schema.Component {
  collectionName: 'components_page_components_home_choose_us_sections';
  info: {
    displayName: 'HomeChooseUsSection';
    icon: 'layout';
  };
  attributes: {
    chooseus: Attribute.Component<'section-heading.section-heading', true>;
    ctaSection: Attribute.Component<'menu.menu-button', true>;
    cards: Attribute.Component<'page-components.choose-us-card', true>;
  };
}

export interface PageComponentsHomeHeader extends Schema.Component {
  collectionName: 'components_page_components_home_headers';
  info: {
    displayName: 'HomeHeader';
    icon: 'calendar';
  };
  attributes: {
    SectionHeading: Attribute.Component<'section-heading.section-heading'>;
    featuredText: Attribute.String;
    lead: Attribute.Text;
    CtaSection: Attribute.Component<'menu.menu-button', true>;
  };
}

export interface PageComponentsHomePackagesSection extends Schema.Component {
  collectionName: 'components_page_components_home_packages_sections';
  info: {
    displayName: 'HomePackagesSection';
    icon: 'cube';
  };
  attributes: {
    heading: Attribute.Component<'section-heading.section-heading'>;
    cards: Attribute.Component<'page-components.package-card', true>;
  };
}

export interface PageComponentsHomeVmvSection extends Schema.Component {
  collectionName: 'components_page_components_home_vmv_sections';
  info: {
    displayName: 'HomeVMVSection';
    icon: 'check';
  };
  attributes: {
    heading: Attribute.Component<'section-heading.section-heading'>;
    cards: Attribute.Component<'vision-mission-values.vmv-card', true>;
  };
}

export interface PageComponentsPackageCard extends Schema.Component {
  collectionName: 'components_page_components_package_cards';
  info: {
    displayName: 'PackageCard';
    icon: 'grid';
  };
  attributes: {
    title: Attribute.String;
    features: Attribute.Component<'page-components.feature-line', true>;
    cta: Attribute.Component<'menu.menu-button'>;
    featured: Attribute.Boolean;
  };
}

export interface SectionHeadingSectionHeading extends Schema.Component {
  collectionName: 'components_section_heading_section_headings';
  info: {
    displayName: 'Section Heading';
    icon: 'hashtag';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    lead: Attribute.Text;
    subtitle: Attribute.String;
    type: Attribute.String & Attribute.Required;
  };
}

export interface VisionMissionValuesVmvCard extends Schema.Component {
  collectionName: 'components_vision_mission_values_vmv_cards';
  info: {
    displayName: 'VMV Card';
    icon: 'television';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    content: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'menu.menu-button': MenuMenuButton;
      'menu.menu-link': MenuMenuLink;
      'page-components.choose-us-card': PageComponentsChooseUsCard;
      'page-components.contact-section': PageComponentsContactSection;
      'page-components.feature-line': PageComponentsFeatureLine;
      'page-components.home-about-section': PageComponentsHomeAboutSection;
      'page-components.home-choose-us-section': PageComponentsHomeChooseUsSection;
      'page-components.home-header': PageComponentsHomeHeader;
      'page-components.home-packages-section': PageComponentsHomePackagesSection;
      'page-components.home-vmv-section': PageComponentsHomeVmvSection;
      'page-components.package-card': PageComponentsPackageCard;
      'section-heading.section-heading': SectionHeadingSectionHeading;
      'vision-mission-values.vmv-card': VisionMissionValuesVmvCard;
    }
  }
}
