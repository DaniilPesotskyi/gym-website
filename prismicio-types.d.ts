// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Footer → Socials*
 */
export interface FooterDocumentDataSocialsItem {
  /**
   * Label field in *Footer → Socials*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.socials[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Link field in *Footer → Socials*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.socials[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Content for Footer documents
 */
interface FooterDocumentData {
  /**
   * Tagline field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.tagline
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tagline: prismic.KeyTextField;

  /**
   * Copy field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.copy
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  copy: prismic.KeyTextField;

  /**
   * Developer field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.developer
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  developer: prismic.KeyTextField;

  /**
   * Pages Label field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.pages_label
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  pages_label: prismic.KeyTextField;

  /**
   * Socials Label field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.socials_label
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  socials_label: prismic.KeyTextField;

  /**
   * Socials field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.socials[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  socials: prismic.GroupField<Simplify<FooterDocumentDataSocialsItem>>;
}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FooterDocumentData>,
    "footer",
    Lang
  >;

type HomepageDocumentDataSlicesSlice =
  | FaqSlice
  | ContactsSlice
  | SubscriptionsSlice
  | TeamSlice
  | ServicesSlice
  | BenefitsSlice
  | HeroSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

/**
 * Item in *Member → Socials*
 */
export interface MemberDocumentDataSocialsItem {
  /**
   * Icon field in *Member → Socials*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: member.socials[].icon
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  icon: prismic.SelectField<"instagram" | "2">;

  /**
   * Link field in *Member → Socials*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: member.socials[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Content for Member documents
 */
interface MemberDocumentData {
  /**
   * Image field in *Member*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: member.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Name field in *Member*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: member.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name: prismic.RichTextField;

  /**
   * Position field in *Member*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: member.position
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  position: prismic.KeyTextField;

  /**
   * Work Experience field in *Member*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: member.work_experience
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  work_experience: prismic.KeyTextField;

  /**
   * Short Description field in *Member*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: member.short_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  short_description: prismic.RichTextField;

  /**
   * Description field in *Member*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: member.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Socials field in *Member*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: member.socials[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  socials: prismic.GroupField<Simplify<MemberDocumentDataSocialsItem>>;
}

/**
 * Member document from Prismic
 *
 * - **API ID**: `member`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MemberDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<MemberDocumentData>, "member", Lang>;

type PageDocumentDataSlicesSlice = never;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Item in *Settings → Navigation*
 */
export interface SettingsDocumentDataNavigationItem {
  /**
   * Label field in *Settings → Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Link field in *Settings → Navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Navigation field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigation: prismic.GroupField<Simplify<SettingsDocumentDataNavigationItem>>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes =
  | FooterDocument
  | HomepageDocument
  | MemberDocument
  | PageDocument
  | SettingsDocument;

/**
 * Primary content in *Benefits → Primary*
 */
export interface BenefitsSliceDefaultPrimary {
  /**
   * Heading field in *Benefits → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: benefits.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;
}

/**
 * Primary content in *Benefits → Items*
 */
export interface BenefitsSliceDefaultItem {
  /**
   * Icon field in *Benefits → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: benefits.items[].icon
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  icon: prismic.SelectField<"a" | "b" | "c">;

  /**
   * Title field in *Benefits → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: benefits.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Default variation for Benefits Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BenefitsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BenefitsSliceDefaultPrimary>,
  Simplify<BenefitsSliceDefaultItem>
>;

/**
 * Slice variation for *Benefits*
 */
type BenefitsSliceVariation = BenefitsSliceDefault;

/**
 * Benefits Shared Slice
 *
 * - **API ID**: `benefits`
 * - **Description**: Benefits
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BenefitsSlice = prismic.SharedSlice<
  "benefits",
  BenefitsSliceVariation
>;

/**
 * Primary content in *Contacts → Primary*
 */
export interface ContactsSliceDefaultPrimary {
  /**
   * Heading field in *Contacts → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contacts.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;
}

/**
 * Primary content in *Contacts → Items*
 */
export interface ContactsSliceDefaultItem {
  /**
   * Contact field in *Contacts → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contacts.items[].contact
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  contact: prismic.KeyTextField;

  /**
   * Icon field in *Contacts → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: contacts.items[].icon
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  icon: prismic.SelectField<"Location" | "Email" | "Number">;
}

/**
 * Default variation for Contacts Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContactsSliceDefaultPrimary>,
  Simplify<ContactsSliceDefaultItem>
>;

/**
 * Slice variation for *Contacts*
 */
type ContactsSliceVariation = ContactsSliceDefault;

/**
 * Contacts Shared Slice
 *
 * - **API ID**: `contacts`
 * - **Description**: Contacts
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactsSlice = prismic.SharedSlice<
  "contacts",
  ContactsSliceVariation
>;

/**
 * Primary content in *Faq → Primary*
 */
export interface FaqSliceDefaultPrimary {
  /**
   * Heading field in *Faq → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;
}

/**
 * Primary content in *Faq → Items*
 */
export interface FaqSliceDefaultItem {
  /**
   * Question field in *Faq → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.items[].question
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  question: prismic.RichTextField;

  /**
   * Answer field in *Faq → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.items[].answer
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  answer: prismic.RichTextField;
}

/**
 * Default variation for Faq Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FaqSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FaqSliceDefaultPrimary>,
  Simplify<FaqSliceDefaultItem>
>;

/**
 * Slice variation for *Faq*
 */
type FaqSliceVariation = FaqSliceDefault;

/**
 * Faq Shared Slice
 *
 * - **API ID**: `faq`
 * - **Description**: Faq
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FaqSlice = prismic.SharedSlice<"faq", FaqSliceVariation>;

/**
 * Primary content in *Hero → Items*
 */
export interface HeroSliceDefaultItem {
  /**
   * Heading field in *Hero → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.items[].heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Image field in *Hero → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<HeroSliceDefaultItem>
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *Services → Primary*
 */
export interface ServicesSliceDefaultPrimary {
  /**
   * Heading field in *Services → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: services.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * First Image field in *Services → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: services.primary.first_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  first_image: prismic.ImageField<never>;

  /**
   * Second Image field in *Services → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: services.primary.second_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  second_image: prismic.ImageField<never>;

  /**
   * Third Image field in *Services → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: services.primary.third_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  third_image: prismic.ImageField<never>;
}

/**
 * Primary content in *Services → Items*
 */
export interface ServicesSliceDefaultItem {
  /**
   * Title field in *Services → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: services.items[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Description field in *Services → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: services.items[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Default variation for Services Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ServicesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ServicesSliceDefaultPrimary>,
  Simplify<ServicesSliceDefaultItem>
>;

/**
 * Slice variation for *Services*
 */
type ServicesSliceVariation = ServicesSliceDefault;

/**
 * Services Shared Slice
 *
 * - **API ID**: `services`
 * - **Description**: Services
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ServicesSlice = prismic.SharedSlice<
  "services",
  ServicesSliceVariation
>;

/**
 * Primary content in *Subscriptions → Primary*
 */
export interface SubscriptionsSliceDefaultPrimary {
  /**
   * Heading field in *Subscriptions → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: subscriptions.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Button Label field in *Subscriptions → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: subscriptions.primary.button_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_label: prismic.KeyTextField;

  /**
   * Button Link field in *Subscriptions → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: subscriptions.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;
}

/**
 * Primary content in *Subscriptions → Items*
 */
export interface SubscriptionsSliceDefaultItem {
  /**
   * Title field in *Subscriptions → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: subscriptions.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Price field in *Subscriptions → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: subscriptions.items[].price
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  price: prismic.KeyTextField;

  /**
   * Color field in *Subscriptions → Items*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: subscriptions.items[].color
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  color: prismic.ColorField;
}

/**
 * Default variation for Subscriptions Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SubscriptionsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SubscriptionsSliceDefaultPrimary>,
  Simplify<SubscriptionsSliceDefaultItem>
>;

/**
 * Slice variation for *Subscriptions*
 */
type SubscriptionsSliceVariation = SubscriptionsSliceDefault;

/**
 * Subscriptions Shared Slice
 *
 * - **API ID**: `subscriptions`
 * - **Description**: Subscriptions
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SubscriptionsSlice = prismic.SharedSlice<
  "subscriptions",
  SubscriptionsSliceVariation
>;

/**
 * Primary content in *Team → Primary*
 */
export interface TeamSliceDefaultPrimary {
  /**
   * Heading field in *Team → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: team.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Subtitle field in *Team → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: team.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subtitle: prismic.RichTextField;

  /**
   * Button Label field in *Team → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: team.primary.button_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_label: prismic.KeyTextField;

  /**
   * Button Link field in *Team → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: team.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;
}

/**
 * Primary content in *Team → Items*
 */
export interface TeamSliceDefaultItem {
  /**
   * Member field in *Team → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: team.items[].member
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  member: prismic.ContentRelationshipField<"member">;
}

/**
 * Default variation for Team Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TeamSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TeamSliceDefaultPrimary>,
  Simplify<TeamSliceDefaultItem>
>;

/**
 * Full Fledged variation for Team Slice
 *
 * - **API ID**: `fullFledged`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TeamSliceFullFledged = prismic.SharedSliceVariation<
  "fullFledged",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *Team*
 */
type TeamSliceVariation = TeamSliceDefault | TeamSliceFullFledged;

/**
 * Team Shared Slice
 *
 * - **API ID**: `team`
 * - **Description**: Team
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TeamSlice = prismic.SharedSlice<"team", TeamSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      FooterDocument,
      FooterDocumentData,
      FooterDocumentDataSocialsItem,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      MemberDocument,
      MemberDocumentData,
      MemberDocumentDataSocialsItem,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataNavigationItem,
      AllDocumentTypes,
      BenefitsSlice,
      BenefitsSliceDefaultPrimary,
      BenefitsSliceDefaultItem,
      BenefitsSliceVariation,
      BenefitsSliceDefault,
      ContactsSlice,
      ContactsSliceDefaultPrimary,
      ContactsSliceDefaultItem,
      ContactsSliceVariation,
      ContactsSliceDefault,
      FaqSlice,
      FaqSliceDefaultPrimary,
      FaqSliceDefaultItem,
      FaqSliceVariation,
      FaqSliceDefault,
      HeroSlice,
      HeroSliceDefaultItem,
      HeroSliceVariation,
      HeroSliceDefault,
      ServicesSlice,
      ServicesSliceDefaultPrimary,
      ServicesSliceDefaultItem,
      ServicesSliceVariation,
      ServicesSliceDefault,
      SubscriptionsSlice,
      SubscriptionsSliceDefaultPrimary,
      SubscriptionsSliceDefaultItem,
      SubscriptionsSliceVariation,
      SubscriptionsSliceDefault,
      TeamSlice,
      TeamSliceDefaultPrimary,
      TeamSliceDefaultItem,
      TeamSliceVariation,
      TeamSliceDefault,
      TeamSliceFullFledged,
    };
  }
}
