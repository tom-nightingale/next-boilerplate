export type Maybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Block = {
  __typename?: "Block";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  children?: Maybe<Array<Maybe<Span>>>;
  style?: Maybe<Scalars["String"]>;
  list?: Maybe<Scalars["String"]>;
};

export type BlockOrImageBlockOrLinebreakOrQuoteOrTickList =
  | Block
  | ImageBlock
  | Linebreak
  | Quote
  | TickList;

export type BooleanFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars["Boolean"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars["Boolean"]>;
};

export type Client = Document & {
  __typename?: "Client";
  /** Document ID */
  _id?: Maybe<Scalars["ID"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]>;
  _key?: Maybe<Scalars["String"]>;
  /** The name of the client/project */
  name?: Maybe<Scalars["String"]>;
  /** A short introduction to what we did for this client */
  intro?: Maybe<Scalars["String"]>;
  image?: Maybe<Image>;
};

export type ClientFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  intro?: Maybe<StringFilter>;
  image?: Maybe<ImageFilter>;
};

export type ClientLogo = {
  __typename?: "ClientLogo";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  /** Company name */
  title?: Maybe<Scalars["String"]>;
  image?: Maybe<Image>;
};

export type ClientLogoFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  image?: Maybe<ImageFilter>;
};

export type ClientLogoSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  image?: Maybe<ImageSorting>;
};

export type ClientSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  intro?: Maybe<SortOrder>;
  image?: Maybe<ImageSorting>;
};

export type DateFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars["Date"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars["Date"]>;
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars["Date"]>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars["Date"]>;
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars["Date"]>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars["Date"]>;
};

export type DatetimeFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars["DateTime"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars["DateTime"]>;
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars["DateTime"]>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars["DateTime"]>;
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars["DateTime"]>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars["DateTime"]>;
};

/** A Sanity document */
export type Document = {
  /** Document ID */
  _id?: Maybe<Scalars["ID"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]>;
};

export type DocumentFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
};

export type DocumentSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
};

export type Fact = {
  __typename?: "Fact";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  /** The prefix for the number, for example '£' */
  prefix?: Maybe<Scalars["String"]>;
  /** The number to count to. This will start at 0 and animate to the number on the front-end when a user scrolls to the fact */
  countTo?: Maybe<Scalars["String"]>;
  /** The suffix for the number, for example 'm' would signal: £9(m) million */
  suffix?: Maybe<Scalars["String"]>;
  /** Fact title */
  title?: Maybe<Scalars["String"]>;
  /** Add a brief description */
  description?: Maybe<Scalars["String"]>;
  image?: Maybe<Image>;
};

export type FactFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  prefix?: Maybe<StringFilter>;
  countTo?: Maybe<StringFilter>;
  suffix?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  image?: Maybe<ImageFilter>;
};

export type FactSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  prefix?: Maybe<SortOrder>;
  countTo?: Maybe<SortOrder>;
  suffix?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  image?: Maybe<ImageSorting>;
};

export type File = {
  __typename?: "File";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  asset?: Maybe<SanityFileAsset>;
};

export type FileFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  asset?: Maybe<SanityFileAssetFilter>;
};

export type FileSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
};

export type FloatFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars["Float"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars["Float"]>;
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars["Float"]>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars["Float"]>;
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars["Float"]>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars["Float"]>;
};

export type Geopoint = {
  __typename?: "Geopoint";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  lat?: Maybe<Scalars["Float"]>;
  lng?: Maybe<Scalars["Float"]>;
  alt?: Maybe<Scalars["Float"]>;
};

export type GeopointFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  lat?: Maybe<FloatFilter>;
  lng?: Maybe<FloatFilter>;
  alt?: Maybe<FloatFilter>;
};

export type GeopointSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  lat?: Maybe<SortOrder>;
  lng?: Maybe<SortOrder>;
  alt?: Maybe<SortOrder>;
};

export type Global = Document & {
  __typename?: "Global";
  /** Document ID */
  _id?: Maybe<Scalars["ID"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]>;
  _key?: Maybe<Scalars["String"]>;
  clientLogos?: Maybe<Array<Maybe<ClientLogo>>>;
  newsletterImage?: Maybe<Image>;
  seo?: Maybe<Seo>;
};

export type GlobalFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  newsletterImage?: Maybe<ImageFilter>;
  seo?: Maybe<SeoFilter>;
};

export type GlobalSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  newsletterImage?: Maybe<ImageSorting>;
  seo?: Maybe<SeoSorting>;
};

export type Home = Document & {
  __typename?: "Home";
  /** Document ID */
  _id?: Maybe<Scalars["ID"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]>;
  _key?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  canvasTitle?: Maybe<Scalars["String"]>;
  canvasSubtitle?: Maybe<Scalars["String"]>;
  canvasImage?: Maybe<Image>;
  facts?: Maybe<Array<Maybe<Fact>>>;
  seo?: Maybe<Seo>;
};

export type HomeFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  canvasTitle?: Maybe<StringFilter>;
  canvasSubtitle?: Maybe<StringFilter>;
  canvasImage?: Maybe<ImageFilter>;
  seo?: Maybe<SeoFilter>;
};

export type HomeSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  canvasTitle?: Maybe<SortOrder>;
  canvasSubtitle?: Maybe<SortOrder>;
  canvasImage?: Maybe<ImageSorting>;
  seo?: Maybe<SeoSorting>;
};

export type IdFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars["ID"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars["ID"]>;
  /** Checks if the value matches the given word/words. */
  matches?: Maybe<Scalars["ID"]>;
  in?: Maybe<Array<Scalars["ID"]>>;
  nin?: Maybe<Array<Scalars["ID"]>>;
};

export type Image = {
  __typename?: "Image";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  asset?: Maybe<SanityImageAsset>;
  hotspot?: Maybe<SanityImageHotspot>;
  crop?: Maybe<SanityImageCrop>;
};

export type ImageBlock = {
  __typename?: "ImageBlock";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  Image?: Maybe<Image>;
  caption?: Maybe<Scalars["String"]>;
};

export type ImageBlockFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  Image?: Maybe<ImageFilter>;
  caption?: Maybe<StringFilter>;
};

export type ImageBlockSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  Image?: Maybe<ImageSorting>;
  caption?: Maybe<SortOrder>;
};

export type ImageFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  asset?: Maybe<SanityImageAssetFilter>;
  hotspot?: Maybe<SanityImageHotspotFilter>;
  crop?: Maybe<SanityImageCropFilter>;
};

export type ImageSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  hotspot?: Maybe<SanityImageHotspotSorting>;
  crop?: Maybe<SanityImageCropSorting>;
};

export type IntFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars["Int"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars["Int"]>;
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars["Int"]>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars["Int"]>;
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars["Int"]>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars["Int"]>;
};

export type Linebreak = {
  __typename?: "Linebreak";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  break?: Maybe<Scalars["String"]>;
};

export type LinebreakFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  break?: Maybe<StringFilter>;
};

export type LinebreakSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  break?: Maybe<SortOrder>;
};

export type Meta = {
  __typename?: "Meta";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  /** Meta Label, for example, 'Author' */
  label?: Maybe<Scalars["String"]>;
  values?: Maybe<Array<Maybe<MetaValue>>>;
};

export type MetaFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  label?: Maybe<StringFilter>;
};

export type MetaSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  label?: Maybe<SortOrder>;
};

export type MetaValue = {
  __typename?: "MetaValue";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  /** Meta Value */
  label?: Maybe<Scalars["String"]>;
  /** Would you like to show an icon with this value? */
  showIcon?: Maybe<Scalars["Boolean"]>;
  /** Is this a custom icon (i.e. not part of the Google Material Icon Library) */
  customIcon?: Maybe<Scalars["Boolean"]>;
  /** Name of the icon to show (Either from Google Material Icon Library, or a custom icon) */
  iconName?: Maybe<Scalars["String"]>;
};

export type MetaValueFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  label?: Maybe<StringFilter>;
  showIcon?: Maybe<BooleanFilter>;
  customIcon?: Maybe<BooleanFilter>;
  iconName?: Maybe<StringFilter>;
};

export type MetaValueSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  label?: Maybe<SortOrder>;
  showIcon?: Maybe<SortOrder>;
  customIcon?: Maybe<SortOrder>;
  iconName?: Maybe<SortOrder>;
};

export type Post = Document & {
  __typename?: "Post";
  /** Document ID */
  _id?: Maybe<Scalars["ID"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]>;
  _key?: Maybe<Scalars["String"]>;
  order?: Maybe<Scalars["Float"]>;
  /** Which date should we attribute to this article? */
  publishedDate?: Maybe<Scalars["Date"]>;
  canvasTitle?: Maybe<Scalars["String"]>;
  canvasSubtitle?: Maybe<Scalars["String"]>;
  canvasImage?: Maybe<Image>;
  meta?: Maybe<Array<Maybe<Meta>>>;
  title?: Maybe<Scalars["String"]>;
  subtitle?: Maybe<Scalars["String"]>;
  contentBlocksRaw?: Maybe<Scalars["JSON"]>;
  /** e.g. '5 min read' */
  readingTime?: Maybe<Scalars["String"]>;
  slug?: Maybe<Slug>;
  seo?: Maybe<Seo>;
};

export type PostFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  order?: Maybe<FloatFilter>;
  publishedDate?: Maybe<DateFilter>;
  canvasTitle?: Maybe<StringFilter>;
  canvasSubtitle?: Maybe<StringFilter>;
  canvasImage?: Maybe<ImageFilter>;
  title?: Maybe<StringFilter>;
  subtitle?: Maybe<StringFilter>;
  readingTime?: Maybe<StringFilter>;
  slug?: Maybe<SlugFilter>;
  seo?: Maybe<SeoFilter>;
};

export type PostSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  order?: Maybe<SortOrder>;
  publishedDate?: Maybe<SortOrder>;
  canvasTitle?: Maybe<SortOrder>;
  canvasSubtitle?: Maybe<SortOrder>;
  canvasImage?: Maybe<ImageSorting>;
  title?: Maybe<SortOrder>;
  subtitle?: Maybe<SortOrder>;
  readingTime?: Maybe<SortOrder>;
  slug?: Maybe<SlugSorting>;
  seo?: Maybe<SeoSorting>;
};

export type Quote = {
  __typename?: "Quote";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  /** Quote */
  quote?: Maybe<Scalars["String"]>;
  /** Author */
  author?: Maybe<Scalars["String"]>;
  /** Author Role */
  authorRole?: Maybe<Scalars["String"]>;
};

export type QuoteFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  quote?: Maybe<StringFilter>;
  author?: Maybe<StringFilter>;
  authorRole?: Maybe<StringFilter>;
};

export type QuoteSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  quote?: Maybe<SortOrder>;
  author?: Maybe<SortOrder>;
  authorRole?: Maybe<SortOrder>;
};

export type RootQuery = {
  __typename?: "RootQuery";
  Global?: Maybe<Global>;
  Home?: Maybe<Home>;
  Vertical?: Maybe<Vertical>;
  Post?: Maybe<Post>;
  Client?: Maybe<Client>;
  SanityImageAsset?: Maybe<SanityImageAsset>;
  SanityFileAsset?: Maybe<SanityFileAsset>;
  Document?: Maybe<Document>;
  allGlobal: Array<Global>;
  allHome: Array<Home>;
  allVertical: Array<Vertical>;
  allPost: Array<Post>;
  allClient: Array<Client>;
  allSanityImageAsset: Array<SanityImageAsset>;
  allSanityFileAsset: Array<SanityFileAsset>;
  allDocument: Array<Document>;
};

export type RootQueryGlobalArgs = {
  id: Scalars["ID"];
};

export type RootQueryHomeArgs = {
  id: Scalars["ID"];
};

export type RootQueryVerticalArgs = {
  id: Scalars["ID"];
};

export type RootQueryPostArgs = {
  id: Scalars["ID"];
};

export type RootQueryClientArgs = {
  id: Scalars["ID"];
};

export type RootQuerySanityImageAssetArgs = {
  id: Scalars["ID"];
};

export type RootQuerySanityFileAssetArgs = {
  id: Scalars["ID"];
};

export type RootQueryDocumentArgs = {
  id: Scalars["ID"];
};

export type RootQueryAllGlobalArgs = {
  where?: Maybe<GlobalFilter>;
  sort?: Maybe<Array<GlobalSorting>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
};

export type RootQueryAllHomeArgs = {
  where?: Maybe<HomeFilter>;
  sort?: Maybe<Array<HomeSorting>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
};

export type RootQueryAllVerticalArgs = {
  where?: Maybe<VerticalFilter>;
  sort?: Maybe<Array<VerticalSorting>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
};

export type RootQueryAllPostArgs = {
  where?: Maybe<PostFilter>;
  sort?: Maybe<Array<PostSorting>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
};

export type RootQueryAllClientArgs = {
  where?: Maybe<ClientFilter>;
  sort?: Maybe<Array<ClientSorting>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
};

export type RootQueryAllSanityImageAssetArgs = {
  where?: Maybe<SanityImageAssetFilter>;
  sort?: Maybe<Array<SanityImageAssetSorting>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
};

export type RootQueryAllSanityFileAssetArgs = {
  where?: Maybe<SanityFileAssetFilter>;
  sort?: Maybe<Array<SanityFileAssetSorting>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
};

export type RootQueryAllDocumentArgs = {
  where?: Maybe<DocumentFilter>;
  sort?: Maybe<Array<DocumentSorting>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
};

export type SanityAssetSourceData = {
  __typename?: "SanityAssetSourceData";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  /** A canonical name for the source this asset is originating from */
  name?: Maybe<Scalars["String"]>;
  /** The unique ID for the asset within the originating source so you can programatically find back to it */
  id?: Maybe<Scalars["String"]>;
  /** A URL to find more information about this asset in the originating source */
  url?: Maybe<Scalars["String"]>;
};

export type SanityAssetSourceDataFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  url?: Maybe<StringFilter>;
};

export type SanityAssetSourceDataSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
};

export type SanityFileAsset = Document & {
  __typename?: "SanityFileAsset";
  /** Document ID */
  _id?: Maybe<Scalars["ID"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]>;
  _key?: Maybe<Scalars["String"]>;
  originalFilename?: Maybe<Scalars["String"]>;
  label?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  altText?: Maybe<Scalars["String"]>;
  sha1hash?: Maybe<Scalars["String"]>;
  extension?: Maybe<Scalars["String"]>;
  mimeType?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["Float"]>;
  assetId?: Maybe<Scalars["String"]>;
  path?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  source?: Maybe<SanityAssetSourceData>;
};

export type SanityFileAssetFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  originalFilename?: Maybe<StringFilter>;
  label?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  altText?: Maybe<StringFilter>;
  sha1hash?: Maybe<StringFilter>;
  extension?: Maybe<StringFilter>;
  mimeType?: Maybe<StringFilter>;
  size?: Maybe<FloatFilter>;
  assetId?: Maybe<StringFilter>;
  path?: Maybe<StringFilter>;
  url?: Maybe<StringFilter>;
  source?: Maybe<SanityAssetSourceDataFilter>;
};

export type SanityFileAssetSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  originalFilename?: Maybe<SortOrder>;
  label?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  altText?: Maybe<SortOrder>;
  sha1hash?: Maybe<SortOrder>;
  extension?: Maybe<SortOrder>;
  mimeType?: Maybe<SortOrder>;
  size?: Maybe<SortOrder>;
  assetId?: Maybe<SortOrder>;
  path?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
  source?: Maybe<SanityAssetSourceDataSorting>;
};

export type SanityImageAsset = Document & {
  __typename?: "SanityImageAsset";
  /** Document ID */
  _id?: Maybe<Scalars["ID"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]>;
  _key?: Maybe<Scalars["String"]>;
  originalFilename?: Maybe<Scalars["String"]>;
  label?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  altText?: Maybe<Scalars["String"]>;
  sha1hash?: Maybe<Scalars["String"]>;
  extension?: Maybe<Scalars["String"]>;
  mimeType?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["Float"]>;
  assetId?: Maybe<Scalars["String"]>;
  uploadId?: Maybe<Scalars["String"]>;
  path?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  metadata?: Maybe<SanityImageMetadata>;
  source?: Maybe<SanityAssetSourceData>;
};

export type SanityImageAssetFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  originalFilename?: Maybe<StringFilter>;
  label?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  altText?: Maybe<StringFilter>;
  sha1hash?: Maybe<StringFilter>;
  extension?: Maybe<StringFilter>;
  mimeType?: Maybe<StringFilter>;
  size?: Maybe<FloatFilter>;
  assetId?: Maybe<StringFilter>;
  uploadId?: Maybe<StringFilter>;
  path?: Maybe<StringFilter>;
  url?: Maybe<StringFilter>;
  metadata?: Maybe<SanityImageMetadataFilter>;
  source?: Maybe<SanityAssetSourceDataFilter>;
};

export type SanityImageAssetSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  originalFilename?: Maybe<SortOrder>;
  label?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  altText?: Maybe<SortOrder>;
  sha1hash?: Maybe<SortOrder>;
  extension?: Maybe<SortOrder>;
  mimeType?: Maybe<SortOrder>;
  size?: Maybe<SortOrder>;
  assetId?: Maybe<SortOrder>;
  uploadId?: Maybe<SortOrder>;
  path?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
  metadata?: Maybe<SanityImageMetadataSorting>;
  source?: Maybe<SanityAssetSourceDataSorting>;
};

export type SanityImageCrop = {
  __typename?: "SanityImageCrop";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  top?: Maybe<Scalars["Float"]>;
  bottom?: Maybe<Scalars["Float"]>;
  left?: Maybe<Scalars["Float"]>;
  right?: Maybe<Scalars["Float"]>;
};

export type SanityImageCropFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  top?: Maybe<FloatFilter>;
  bottom?: Maybe<FloatFilter>;
  left?: Maybe<FloatFilter>;
  right?: Maybe<FloatFilter>;
};

export type SanityImageCropSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  top?: Maybe<SortOrder>;
  bottom?: Maybe<SortOrder>;
  left?: Maybe<SortOrder>;
  right?: Maybe<SortOrder>;
};

export type SanityImageDimensions = {
  __typename?: "SanityImageDimensions";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
};

export type SanityImageDimensionsFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  height?: Maybe<FloatFilter>;
  width?: Maybe<FloatFilter>;
  aspectRatio?: Maybe<FloatFilter>;
};

export type SanityImageDimensionsSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  height?: Maybe<SortOrder>;
  width?: Maybe<SortOrder>;
  aspectRatio?: Maybe<SortOrder>;
};

export type SanityImageHotspot = {
  __typename?: "SanityImageHotspot";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
};

export type SanityImageHotspotFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  x?: Maybe<FloatFilter>;
  y?: Maybe<FloatFilter>;
  height?: Maybe<FloatFilter>;
  width?: Maybe<FloatFilter>;
};

export type SanityImageHotspotSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  x?: Maybe<SortOrder>;
  y?: Maybe<SortOrder>;
  height?: Maybe<SortOrder>;
  width?: Maybe<SortOrder>;
};

export type SanityImageMetadata = {
  __typename?: "SanityImageMetadata";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  location?: Maybe<Geopoint>;
  dimensions?: Maybe<SanityImageDimensions>;
  palette?: Maybe<SanityImagePalette>;
  lqip?: Maybe<Scalars["String"]>;
  blurHash?: Maybe<Scalars["String"]>;
  hasAlpha?: Maybe<Scalars["Boolean"]>;
  isOpaque?: Maybe<Scalars["Boolean"]>;
};

export type SanityImageMetadataFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  location?: Maybe<GeopointFilter>;
  dimensions?: Maybe<SanityImageDimensionsFilter>;
  palette?: Maybe<SanityImagePaletteFilter>;
  lqip?: Maybe<StringFilter>;
  blurHash?: Maybe<StringFilter>;
  hasAlpha?: Maybe<BooleanFilter>;
  isOpaque?: Maybe<BooleanFilter>;
};

export type SanityImageMetadataSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  location?: Maybe<GeopointSorting>;
  dimensions?: Maybe<SanityImageDimensionsSorting>;
  palette?: Maybe<SanityImagePaletteSorting>;
  lqip?: Maybe<SortOrder>;
  blurHash?: Maybe<SortOrder>;
  hasAlpha?: Maybe<SortOrder>;
  isOpaque?: Maybe<SortOrder>;
};

export type SanityImagePalette = {
  __typename?: "SanityImagePalette";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  darkMuted?: Maybe<SanityImagePaletteSwatch>;
  lightVibrant?: Maybe<SanityImagePaletteSwatch>;
  darkVibrant?: Maybe<SanityImagePaletteSwatch>;
  vibrant?: Maybe<SanityImagePaletteSwatch>;
  dominant?: Maybe<SanityImagePaletteSwatch>;
  lightMuted?: Maybe<SanityImagePaletteSwatch>;
  muted?: Maybe<SanityImagePaletteSwatch>;
};

export type SanityImagePaletteFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  darkMuted?: Maybe<SanityImagePaletteSwatchFilter>;
  lightVibrant?: Maybe<SanityImagePaletteSwatchFilter>;
  darkVibrant?: Maybe<SanityImagePaletteSwatchFilter>;
  vibrant?: Maybe<SanityImagePaletteSwatchFilter>;
  dominant?: Maybe<SanityImagePaletteSwatchFilter>;
  lightMuted?: Maybe<SanityImagePaletteSwatchFilter>;
  muted?: Maybe<SanityImagePaletteSwatchFilter>;
};

export type SanityImagePaletteSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  darkMuted?: Maybe<SanityImagePaletteSwatchSorting>;
  lightVibrant?: Maybe<SanityImagePaletteSwatchSorting>;
  darkVibrant?: Maybe<SanityImagePaletteSwatchSorting>;
  vibrant?: Maybe<SanityImagePaletteSwatchSorting>;
  dominant?: Maybe<SanityImagePaletteSwatchSorting>;
  lightMuted?: Maybe<SanityImagePaletteSwatchSorting>;
  muted?: Maybe<SanityImagePaletteSwatchSorting>;
};

export type SanityImagePaletteSwatch = {
  __typename?: "SanityImagePaletteSwatch";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  background?: Maybe<Scalars["String"]>;
  foreground?: Maybe<Scalars["String"]>;
  population?: Maybe<Scalars["Float"]>;
  title?: Maybe<Scalars["String"]>;
};

export type SanityImagePaletteSwatchFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  background?: Maybe<StringFilter>;
  foreground?: Maybe<StringFilter>;
  population?: Maybe<FloatFilter>;
  title?: Maybe<StringFilter>;
};

export type SanityImagePaletteSwatchSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  background?: Maybe<SortOrder>;
  foreground?: Maybe<SortOrder>;
  population?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
};

export type Sanity_DocumentFilter = {
  /** All documents referencing the given document ID. */
  references?: Maybe<Scalars["ID"]>;
  /** All documents that are drafts. */
  is_draft?: Maybe<Scalars["Boolean"]>;
};

export type Seo = {
  __typename?: "Seo";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  /** Title used for search engines and browsers. */
  metaTitle?: Maybe<Scalars["String"]>;
  /** Description for search engines. */
  metaDesc?: Maybe<Scalars["String"]>;
  keywords?: Maybe<Array<Maybe<Scalars["String"]>>>;
  shareGraphic?: Maybe<Image>;
  twitterImage?: Maybe<Image>;
};

export type SeoFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  metaTitle?: Maybe<StringFilter>;
  metaDesc?: Maybe<StringFilter>;
  shareGraphic?: Maybe<ImageFilter>;
  twitterImage?: Maybe<ImageFilter>;
};

export type SeoSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  metaTitle?: Maybe<SortOrder>;
  metaDesc?: Maybe<SortOrder>;
  shareGraphic?: Maybe<ImageSorting>;
  twitterImage?: Maybe<ImageSorting>;
};

export type Slug = {
  __typename?: "Slug";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  current?: Maybe<Scalars["String"]>;
};

export type SlugFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  current?: Maybe<StringFilter>;
};

export type SlugSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  current?: Maybe<SortOrder>;
};

export enum SortOrder {
  /** Sorts on the value in ascending order. */
  Asc = "ASC",
  /** Sorts on the value in descending order. */
  Desc = "DESC",
}

export type Span = {
  __typename?: "Span";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  marks?: Maybe<Array<Maybe<Scalars["String"]>>>;
  text?: Maybe<Scalars["String"]>;
};

export type StringFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars["String"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars["String"]>;
  /** Checks if the value matches the given word/words. */
  matches?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Scalars["String"]>>;
  nin?: Maybe<Array<Scalars["String"]>>;
};

export type TickItem = {
  __typename?: "TickItem";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  /** The title of this tick item. Will be bigger than the content on the front end. */
  title?: Maybe<Scalars["String"]>;
  /** The content of this tick item. */
  content?: Maybe<Scalars["String"]>;
};

export type TickItemFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  content?: Maybe<StringFilter>;
};

export type TickItemSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  content?: Maybe<SortOrder>;
};

export type TickList = {
  __typename?: "TickList";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  ticklist?: Maybe<Array<Maybe<TickItem>>>;
};

export type TickListFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
};

export type TickListSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
};

export type Vertical = Document & {
  __typename?: "Vertical";
  /** Document ID */
  _id?: Maybe<Scalars["ID"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]>;
  _key?: Maybe<Scalars["String"]>;
  order?: Maybe<Scalars["Float"]>;
  canvasTitle?: Maybe<Scalars["String"]>;
  canvasSubtitle?: Maybe<Scalars["String"]>;
  canvasImage?: Maybe<Image>;
  meta?: Maybe<Array<Maybe<Meta>>>;
  title?: Maybe<Scalars["String"]>;
  contentBlocksRaw?: Maybe<Scalars["JSON"]>;
  client?: Maybe<Array<Maybe<Client>>>;
  slug?: Maybe<Slug>;
  seo?: Maybe<Seo>;
};

export type VerticalFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  order?: Maybe<FloatFilter>;
  canvasTitle?: Maybe<StringFilter>;
  canvasSubtitle?: Maybe<StringFilter>;
  canvasImage?: Maybe<ImageFilter>;
  title?: Maybe<StringFilter>;
  slug?: Maybe<SlugFilter>;
  seo?: Maybe<SeoFilter>;
};

export type VerticalSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  order?: Maybe<SortOrder>;
  canvasTitle?: Maybe<SortOrder>;
  canvasSubtitle?: Maybe<SortOrder>;
  canvasImage?: Maybe<ImageSorting>;
  title?: Maybe<SortOrder>;
  slug?: Maybe<SlugSorting>;
  seo?: Maybe<SeoSorting>;
};

export type GetHomeQueryVariables = Exact<{ [key: string]: never }>;

export type GetHomeQuery = {
  __typename?: "RootQuery";
  allHome: Array<{
    __typename?: "Home";
    canvasSubtitle?: string | null | undefined;
    canvasTitle?: string | null | undefined;
    canvasImage?:
      | {
          __typename?: "Image";
          asset?:
            | {
                __typename?: "SanityImageAsset";
                url?: string | null | undefined;
                altText?: string | null | undefined;
              }
            | null
            | undefined;
        }
      | null
      | undefined;
    facts?:
      | Array<
          | {
              __typename?: "Fact";
              countTo?: string | null | undefined;
              description?: string | null | undefined;
              title?: string | null | undefined;
              prefix?: string | null | undefined;
              suffix?: string | null | undefined;
              image?:
                | {
                    __typename?: "Image";
                    asset?:
                      | {
                          __typename?: "SanityImageAsset";
                          url?: string | null | undefined;
                          altText?: string | null | undefined;
                        }
                      | null
                      | undefined;
                  }
                | null
                | undefined;
            }
          | null
          | undefined
        >
      | null
      | undefined;
  }>;
};
