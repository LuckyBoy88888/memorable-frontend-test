import { FieldsSelection, Observable } from "@genql/runtime";

export type Scalars = {
  ID: string;
  String: string;
  DateTime: any;
  Int: number;
  Float: number;
  Boolean: boolean;
};

export interface Query {
  /** Returns the Business Asset available in integration for business Account */
  getBrandAssets: BrandAssetsResponse;
  /** Returns the Business Account platforms State */
  getPlatformConnections: PlatformState[];
  /** Returns the Business Asset available in integration for business Account */
  getBusinessAccountAssets: IntegrationsAssets;
  /** Get brand creative Analytics metrics summary */
  getCreativeAnalyticsSummary?: MetricsSummary;
  /** Get brand creative Analytics insights */
  getInsights?: Insight[];
  /** Get brand tag Usage Report */
  getTagsByUsage?: TreeNode[];
  /** Get brand creative Analytics highlights */
  getHighlights?: Highlight[];
  /** Get Tag Ranking */
  getTagRanking?: TagOverallMetrics[];
  /** Get Ad Profile with campaign and channel differences */
  getAdProfile?: AdProfile;
  /** Get tag Summary by campaign and channel */
  getTagSummary?: TagSummary[];
  /** Get tag Usage Ranking */
  getTagUsageRanking?: TagMetric[];
  /** Get Creative Performance over Time */
  getCreativePerformanceOverTime?: DataPerformanceEntry[];
  /** Get tag performance over time */
  getTagPerformanceOverTime?: PerformanceDataEntry[];
  /** Get tag performance over time for all channels */
  getTagPerformanceOverTimeAllChannel?: PerformanceDataEntry[];
  /** Get all brand Tags in tree form */
  getBrandTags?: TreeNode[];
  /** Get Creative Profile */
  getCreativeProfile?: CreativeProfile;
  /** Get Performance Metrics */
  getPerformanceMetrics?: ChannelPerformanceMetrics[];
  /** List Folders and creatives from specific folder */
  listFolder: CreativeLibraryFolder;
  /** Validate Invitation Code */
  validateInvitationCode: Scalars["String"];
  /** Get logged in user or NULL if it is not logged in */
  getLoggedInUser?: User;
  __typename: "Query";
}

export interface BrandAssetsResponse {
  adAccounts?: AdAccount[];
  socialAccounts?: SocialAccount[];
  __typename: "BrandAssetsResponse";
}

export interface AdAccount {
  id: Scalars["ID"];
  originalId: Scalars["String"];
  platform: Platform;
  type: AdAccountType;
  name?: Scalars["String"];
  __typename: "AdAccount";
}

export type Platform = "META" | "TIKTOK";

/** AdAccountType */
export type AdAccountType = "MetaAdAccount" | "TiktokAdAccount";

export interface SocialAccount {
  id: Scalars["ID"];
  originalId: Scalars["String"];
  platform: Platform;
  type: SocialAccountType;
  name?: Scalars["String"];
  __typename: "SocialAccount";
}

/** SocialAccountType */
export type SocialAccountType =
  | "FacebookPage"
  | "InstagramAccount"
  | "TiktokAccount";

export interface PlatformState {
  platform: Platform;
  status: ConnectionState;
  userEmail?: Scalars["String"];
  expirationDate?: Scalars["DateTime"];
  createdAt?: Scalars["DateTime"];
  updatedAt?: Scalars["DateTime"];
  totalAds?: Scalars["Int"];
  totalCreatives?: Scalars["Int"];
  extractedAds?: Scalars["Int"];
  extractedCreatives?: Scalars["Int"];
  __typename: "PlatformState";
}

export type ConnectionState = "OK" | "ERROR";

export interface IntegrationsAssets {
  adAccounts?: AdAccount[];
  socialAccounts?: SocialAccount[];
  __typename: "IntegrationsAssets";
}

export interface MetricsSummary {
  creativesTotal: Scalars["Int"];
  adsTotal: Scalars["Int"];
  spendTotal: Scalars["Int"];
  metrics?: Metrics;
  __typename: "MetricsSummary";
}

export interface Metrics {
  spend?: MetricValue;
  usage?: MetricValue;
  impressions?: MetricValue;
  adRecallRate?: MetricValue;
  reach?: MetricValue;
  bai?: MetricValue;
  engagement?: MetricValue;
  engagementRate?: MetricValue;
  costPerEngagement?: MetricValue;
  videoViews?: MetricValue;
  videoThroughRate?: MetricValue;
  costPerCompletedView?: MetricValue;
  clicks?: MetricValue;
  clickThroughRate?: MetricValue;
  costPerClick?: MetricValue;
  frequency?: MetricValue;
  costPerMille?: MetricValue;
  conversion?: MetricValue;
  conversionRate?: MetricValue;
  costPerAcquisition?: MetricValue;
  leads?: MetricValue;
  leadRate?: MetricValue;
  costPerLead?: MetricValue;
  appInstall?: MetricValue;
  appInstallRate?: MetricValue;
  costPerAppInstall?: MetricValue;
  fiveSecondsIndex?: MetricValue;
  textSaliencyScore?: MetricValue;
  logoSaliencyScore?: MetricValue;
  __typename: "Metrics";
}

export interface MetricValue {
  value: Scalars["Float"];
  __typename: "MetricValue";
}

/** Campaign objectives */
export type CampaignObjective =
  | "AWARENESS"
  | "ENGAGEMENT"
  | "VIDEO_VIEWS"
  | "TRAFFIC"
  | "LEAD_GENERATION"
  | "CONVERSIONS"
  | "PRODUCT_SALES"
  | "APP_PROMOTION"
  | "CROSS_OBJECTIVE";

/** All SuperClass enum Values */
export type SuperClass =
  | "VISUAL_VALUES"
  | "SCENE"
  | "PEOPLE"
  | "OVERLAY_TEXT"
  | "METADATA"
  | "BRAND_ELEMENTS"
  | "ELEMENTS"
  | "AUDIO"
  | "AD_COPY"
  | "SPEECH";

/** Channels */
export type Channel = "facebook" | "instagram" | "tiktok" | "crossChannel";

export interface Insight {
  tag: Tag;
  spend: Scalars["Float"];
  usage: Scalars["Int"];
  campaignObjective: CampaignObjective;
  result?: MetricVariance;
  costResult?: MetricVariance;
  expectedImpact?: Scalars["Int"];
  channel?: Channel;
  __typename: "Insight";
}

export interface Tag {
  tagSuperClass?: Scalars["String"];
  tagClass: Scalars["String"];
  tagValue: Scalars["String"];
  importance?: Scalars["Float"];
  __typename: "Tag";
}

export interface MetricVariance {
  metric: Metric;
  variance?: Scalars["Float"];
  value?: Scalars["Float"];
  average?: Scalars["Float"];
  __typename: "MetricVariance";
}

/** All metric enum values */
export type Metric =
  | "impressions"
  | "adRecallRate"
  | "reach"
  | "frequency"
  | "costPerMille"
  | "engagement"
  | "engagementRate"
  | "costPerEngagement"
  | "videoViews"
  | "videoThroughRate"
  | "costPerCompletedView"
  | "clicks"
  | "clickThroughRate"
  | "costPerClick"
  | "conversion"
  | "conversionRate"
  | "costPerAcquisition"
  | "costPerAppInstall"
  | "costPerLead"
  | "leadRate"
  | "appInstallRate"
  | "usage"
  | "spend"
  | "bai"
  | "fiveSecondsIndex"
  | "textSaliencyScore"
  | "logoSaliencyScore"
  | "leads"
  | "appInstall";

export interface TreeNode {
  key: Scalars["String"];
  nestedTotal?: Scalars["Int"];
  children: TreeNode[];
  __typename: "TreeNode";
}

export interface Highlight {
  advertisementId: Scalars["String"];
  fileType: FileType;
  url: Scalars["String"];
  campaignObjective: CampaignObjective;
  result: MetricVariance;
  costResult: MetricVariance;
  channel: Channel[];
  __typename: "Highlight";
}

export type FileType = "IMAGE" | "VIDEO";

export interface TagOverallMetrics {
  tag: Tag;
  channels: Channel[];
  tip?: Tip;
  creativesTotal: TotalValue;
  adsTotal: TotalValue;
  spendTotal: TotalValue;
  impressionsTotal: TotalValue;
  engagementRate: MetricVariance;
  costPerEngagement: MetricVariance;
  videoThroughRate: MetricVariance;
  clickThroughRate: MetricVariance;
  leadRate: MetricVariance;
  conversionRate: MetricVariance;
  appInstallRate: MetricVariance;
  costPerMille: MetricVariance;
  costPerClick: MetricVariance;
  costPerLead: MetricVariance;
  costPerAcquisition: MetricVariance;
  costPerAppInstall: MetricVariance;
  costPerCompletedView: MetricVariance;
  frequency: MetricVariance;
  __typename: "TagOverallMetrics";
}

export interface Tip {
  value: TipValue;
  detail: TipDetail;
  placeHolders?: TipPlaceHolder[];
  __typename: "Tip";
}

/** Tip Value */
export type TipValue = "noTip";

/** Tip Detail */
export type TipDetail = "noTip";

export interface TipPlaceHolder {
  value: Scalars["String"];
  key: Scalars["String"];
  type: PlaceHolderType;
  __typename: "TipPlaceHolder";
}

/** Place Holder Type */
export type PlaceHolderType =
  | "STRING"
  | "NUMBER"
  | "PERCENTAGE"
  | "CURRENCY"
  | "METRIC"
  | "METRIC_LIST";

export interface TotalValue {
  value?: Scalars["Float"];
  total?: Scalars["Float"];
  __typename: "TotalValue";
}

/** Tag Ranking Column */
export type TagRankingOrderingColumn =
  | "tagImpressions"
  | "tagSpend"
  | "frequencyValue"
  | "engagementRateValue"
  | "videoThroughRateValue"
  | "clickThroughRateValue"
  | "leadRateValue"
  | "conversionRateValue"
  | "appInstallRateValue"
  | "costPerMileValue"
  | "costPerEngagementValue"
  | "costPerCompletedVideoValue"
  | "costPerClickValue"
  | "costPerLeadValue"
  | "costPerAcquisitionValue"
  | "costPerAppInstallValue";

/** Ordering direction */
export type OrderingDirection = "ASC" | "DESC";

export interface AdProfile {
  advertisementId?: Scalars["String"];
  name?: Scalars["String"];
  fileType?: FileType;
  url?: Scalars["String"];
  campaignObjective?: CampaignObjective;
  channel?: Channel[];
  heatMapUrl?: Scalars["String"];
  metrics?: Metrics;
  tags?: Tag[];
  __typename: "AdProfile";
}

export interface TagSummary {
  campaignObjective?: CampaignObjective;
  channel?: Channel;
  creativesTotal?: Scalars["Float"];
  adsTotal?: Scalars["Float"];
  spendTotal?: Scalars["Float"];
  frequency?: MetricRange;
  costPerMile?: MetricRange;
  engagementRate?: MetricRange;
  costPerEngagement?: MetricRange;
  videoThroughRate?: MetricRange;
  costPerCompletedVideo?: MetricRange;
  clickThroughRate?: MetricRange;
  costPerClick?: MetricRange;
  leadRate?: MetricRange;
  costPerLead?: MetricRange;
  conversionRate?: MetricRange;
  costPerAcquisition?: MetricRange;
  appInstallRate?: MetricRange;
  costPerAppInstall?: MetricRange;
  __typename: "TagSummary";
}

export interface MetricRange {
  max: Scalars["Float"];
  min: Scalars["Float"];
  __typename: "MetricRange";
}

export interface TagMetric {
  tag: Tag;
  channel?: Channel;
  metrics: Metrics;
  __typename: "TagMetric";
}

export interface DataPerformanceEntry {
  date: Scalars["String"];
  data: SerialData;
  __typename: "DataPerformanceEntry";
}

export interface SerialData {
  main_0?: Scalars["Float"];
  metric_0?: Scalars["Float"];
  main_1?: Scalars["Float"];
  metric_1?: Scalars["Float"];
  main_2?: Scalars["Float"];
  metric_2?: Scalars["Float"];
  main_3?: Scalars["Float"];
  metric_3?: Scalars["Float"];
  main_4?: Scalars["Float"];
  __typename: "SerialData";
}

export interface PerformanceDataEntry {
  date: Scalars["String"];
  data: SerialEntry[];
  __typename: "PerformanceDataEntry";
}

export interface SerialEntry {
  key: Scalars["String"];
  main?: Scalars["Float"];
  metric?: Scalars["Float"];
  __typename: "SerialEntry";
}

/** Scale */
export type Scale = "days" | "weeks";

export interface CreativeProfile {
  creativeId?: Scalars["String"];
  name?: Scalars["String"];
  fileType?: FileType;
  url?: Scalars["String"];
  clipEmbeddingUrl?: Scalars["String"];
  heatMapUrl?: Scalars["String"];
  metrics?: CreativeMetrics;
  tags?: Tag[];
  __typename: "CreativeProfile";
}

export interface CreativeMetrics {
  adRecallRate?: CreativeMetricValue;
  bai?: CreativeMetricValue;
  fiveSecondsIndex?: CreativeMetricValue;
  textSaliencyScore?: CreativeMetricValue;
  logoSaliencyScore?: CreativeMetricValue;
  __typename: "CreativeMetrics";
}

export interface CreativeMetricValue {
  value?: Scalars["Float"];
  labeledValue?: LabeledMetricValue;
  __typename: "CreativeMetricValue";
}

/** Labeled Metric Value */
export type LabeledMetricValue = "unknown" | "low" | "mid" | "high";

export interface ChannelPerformanceMetrics {
  channel: Channel;
  metrics?: PerformanceMetrics;
  __typename: "ChannelPerformanceMetrics";
}

export interface PerformanceMetrics {
  engagementRate?: CreativeMetricValue;
  videoThroughRate?: CreativeMetricValue;
  clickThroughRate?: CreativeMetricValue;
  __typename: "PerformanceMetrics";
}

export interface CreativeLibraryFolder {
  id: Scalars["Float"];
  parentId?: Scalars["Float"];
  path: Scalars["String"];
  folders?: CreativeLibraryFolder[];
  creatives?: CreativeLibraryItem[];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  __typename: "CreativeLibraryFolder";
}

export interface CreativeLibraryItem {
  creativeId: Scalars["String"];
  name: Scalars["String"];
  fileType: Scalars["String"];
  url: Scalars["String"];
  clipEmbeddingUrl?: Scalars["String"];
  status: CreativeStatus;
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  __typename: "CreativeLibraryItem";
}

/** Creative Status */
export type CreativeStatus =
  | "ConversionPending"
  | "MemorabilityPending"
  | "TaggingPending"
  | "SaliencyPending"
  | "Ready";

export interface User {
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  email: Scalars["String"];
  name?: Scalars["String"];
  isAdmin: Scalars["Boolean"];
  businessAccount?: BusinessAccount;
  termsAndConditionsAccepted?: Scalars["DateTime"];
  emailVerified: Scalars["Boolean"];
  isContractValid: Scalars["Boolean"];
  __typename: "User";
}

export interface BusinessAccount {
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  businessName: Scalars["String"];
  users: User[];
  brands?: Brand[];
  businessLogoUrl?: Scalars["String"];
  businessPhone?: Scalars["String"];
  website?: Scalars["String"];
  address?: Scalars["String"];
  __typename: "BusinessAccount";
}

export interface Brand {
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  name: Scalars["String"];
  logoUrl?: Scalars["String"];
  sector?: Sector[];
  adAccounts?: Scalars["String"][];
  socialAccounts?: Scalars["String"][];
  status?: BrandStatus;
  businessAccount: BusinessAccount;
  __typename: "Brand";
}

export interface SectorItem {
  id: number,
  name?: string,
  count?: number
}

export type Sector =
  | "ApparelAndAccessories"
  | "BeautyAndPersonalCare"
  | "FoodAndBeverage"
  | "HomeAndGarden"
  | "SportsAndFitness"
  | "HomeAppliances"
  | "HomeImprovement"
  | "HouseholdSupplies"
  | "PetCare"
  | "TobaccoAndSmokingAccessories"
  | "ToysAndGames"
  | "OilAndGas"
  | "RenewableEnergy"
  | "Utilities"
  | "BankingAndLending"
  | "Insurance"
  | "InvestmentAndWealthManagement"
  | "PharmaceuticalsAndBiotechnology"
  | "MedicalDevices"
  | "HealthcareServices"
  | "ConstructionAndEngineering"
  | "AerospaceAndDefense"
  | "TransportationEquipment"
  | "SoftwareAndITServices"
  | "HardwareAndElectronics"
  | "InternetServices"
  | "TelecommunicationsEquipment"
  | "TelecommunicationsServices"
  | "NetworkingEquipment"
  | "AirlinesAndAirTransportation"
  | "HotelsAndResorts"
  | "RestaurantsAndFoodServices"
  | "TravelAgenciesAndTourOperators"
  | "AmusementParksAndAttractions"
  | "TelevisionBroadcastingAndProduction"
  | "FilmProductionAndDistribution"
  | "MusicRecordingAndProduction"
  | "Publishing"
  | "Gaming"
  | "ResidentialRealEstate"
  | "CommercialRealEstate"
  | "RealEstateInvestmentTrusts"
  | "RealEstateDevelopmentAndConstruction"
  | "PublicAndPrivateSchools"
  | "CollegesAndUniversities"
  | "OnlineEducationPlatforms"
  | "VocationalAndTechnicalSchools"
  | "CorporateTrainingAndDevelopment";

/** Brand Status */
export type BrandStatus =
  | "IN_PROGRESS"
  | "DATA_READY"
  | "MODEL_TRAINING"
  | "READY";

export interface Mutation {
  /** Creates a business Account for the provided business admin */
  createBrand: Brand;
  /** Updates optional fields of a brand */
  updateBrand: Brand;
  /** Updates assets of a brand */
  updateBrandAssets: AssetChecks;
  /** Uploads brand logo */
  requestLogoUploadData: UploadDataResponse;
  /** Creates a business Account for the provided business admin */
  createBusinessAccount: BusinessAccount;
  /** Updates optional fields of a business Account */
  updateBusinessAccount: BusinessAccount;
  /** Cancel Business Account */
  cancelBusinessAccount: BusinessAccount;
  /** Receives a Oauth Code for completing linking with Integrations */
  createPlatformIntegration: IntegrationsAssets;
  /** Receives a Oauth Code for completing linking with Integrations */
  deletePlatformIntegration: Scalars["Boolean"];
  /** Request uploadData to upload the file to the storage */
  requestUploadData: UploadDataResponse;
  /** Save in the right folder the creative with the given id. The creative must be uploaded before calling this mutation */
  saveCreative: CreativeLibraryItem;
  /** Create a Folder in a given folder. If the folder is not specified, the folder will be created in the root folder */
  createFolder: CreativeLibraryFolder;
  /** Generate referral invitations */
  createReferralInvitations: Invitation[];
  /** Delete Invitation Code */
  deleteInvitation: Scalars["Boolean"];
  /** Log in user */
  logIn: LoggedInUser;
  /** Refresh log in token */
  refreshLogInToken: Scalars["String"];
  /** Update user profile. If setting new password and current password is invalid, BAD_REQUEST is thrown */
  updateUserProfile: User;
  /** Accept terms and conditions for current user */
  acceptTermsAndConditions: Scalars["Boolean"];
  /** Create the new User using a Invitation Code */
  signUp: User;
  /** Logout user */
  logout: Scalars["Boolean"];
  __typename: "Mutation";
}

export interface AssetChecks {
  unrelatedSocialAccountId?: Scalars["String"][];
  __typename: "AssetChecks";
}

export interface UploadDataResponse {
  id: Scalars["String"];
  originalUrl: Scalars["String"];
  presignedData: PresignedData;
  __typename: "UploadDataResponse";
}

export interface PresignedData {
  url: Scalars["String"];
  fields: Scalars["String"];
  __typename: "PresignedData";
}

export interface Invitation {
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  code: Scalars["String"];
  email?: Scalars["String"];
  type: InvitationType;
  isAdmin: Scalars["Boolean"];
  expirationDate?: Scalars["DateTime"];
  __typename: "Invitation";
}

/** All invitation type enum values */
export type InvitationType = "referral" | "internal";

export interface LoggedInUser {
  sessionToken: Scalars["String"];
  __typename: "LoggedInUser";
}

export interface QueryRequest {
  /** Returns the Business Asset available in integration for business Account */
  getBrandAssets?: [{ brandId: Scalars["String"] }, BrandAssetsResponseRequest];
  /** Returns the Business Account platforms State */
  getPlatformConnections?: PlatformStateRequest;
  /** Returns the Business Asset available in integration for business Account */
  getBusinessAccountAssets?: IntegrationsAssetsRequest;
  /** Get brand creative Analytics metrics summary */
  getCreativeAnalyticsSummary?: [
    { filter: CreativeAnalyticFilter },
    MetricsSummaryRequest,
  ];
  /** Get brand creative Analytics insights */
  getInsights?: [{ filter: CreativeAnalyticFilter }, InsightRequest];
  /** Get brand tag Usage Report */
  getTagsByUsage?: [{ filter: CreativeAnalyticFilter }, TreeNodeRequest];
  /** Get brand creative Analytics highlights */
  getHighlights?: [{ filter: CreativeAnalyticFilter }, HighlightRequest];
  /** Get Tag Ranking */
  getTagRanking?: [
    {
      tagFilter?: TagFilterInput[] | null;
      orderingColumn?: TagRankingOrderingInput | null;
      filter: CreativeAnalyticFilter;
    },
    TagOverallMetricsRequest,
  ];
  /** Get Ad Profile with campaign and channel differences */
  getAdProfile?: [
    { filter: CreativeAnalyticFilter; adId: Scalars["String"] },
    AdProfileRequest,
  ];
  /** Get tag Summary by campaign and channel */
  getTagSummary?: [{ filter: CreativeAnalyticFilter }, TagSummaryRequest];
  /** Get tag Usage Ranking */
  getTagUsageRanking?: [{ filter: CreativeAnalyticFilter }, TagMetricRequest];
  /** Get Creative Performance over Time */
  getCreativePerformanceOverTime?: [
    {
      metric: Scalars["String"];
      adId: Scalars["String"];
      filter: CreativeAnalyticFilter;
    },
    DataPerformanceEntryRequest,
  ];
  /** Get tag performance over time */
  getTagPerformanceOverTime?: [
    {
      scale?: Scale | null;
      metric: Scalars["String"];
      filter: CreativeAnalyticFilter;
    },
    PerformanceDataEntryRequest,
  ];
  /** Get tag performance over time for all channels */
  getTagPerformanceOverTimeAllChannel?: [
    {
      scale?: Scale | null;
      metric: Scalars["String"];
      filter: CreativeAnalyticFilter;
    },
    PerformanceDataEntryRequest,
  ];
  /** Get all brand Tags in tree form */
  getBrandTags?: [{ brandId: Scalars["String"] }, TreeNodeRequest];
  /** Get Creative Profile */
  getCreativeProfile?: [
    { filter: CreativeProfileInput },
    CreativeProfileRequest,
  ];
  /** Get Performance Metrics */
  getPerformanceMetrics?: [
    { filter: PerformanceMetricFiltersInput; brandId: Scalars["String"] },
    ChannelPerformanceMetricsRequest,
  ];
  /** List Folders and creatives from specific folder */
  listFolder?: [{ input: CreativeLibraryFilter }, CreativeLibraryFolderRequest];
  /** Validate Invitation Code */
  validateInvitationCode?: [{ invitationCode: Scalars["String"] }];
  /** Get logged in user or NULL if it is not logged in */
  getLoggedInUser?: UserRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface BrandAssetsResponseRequest {
  adAccounts?: AdAccountRequest;
  socialAccounts?: SocialAccountRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface AdAccountRequest {
  id?: boolean | number;
  originalId?: boolean | number;
  platform?: boolean | number;
  type?: boolean | number;
  name?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface SocialAccountRequest {
  id?: boolean | number;
  originalId?: boolean | number;
  platform?: boolean | number;
  type?: boolean | number;
  name?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface PlatformStateRequest {
  platform?: boolean | number;
  status?: boolean | number;
  userEmail?: boolean | number;
  expirationDate?: boolean | number;
  createdAt?: boolean | number;
  updatedAt?: boolean | number;
  totalAds?: boolean | number;
  totalCreatives?: boolean | number;
  extractedAds?: boolean | number;
  extractedCreatives?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface IntegrationsAssetsRequest {
  adAccounts?: AdAccountRequest;
  socialAccounts?: SocialAccountRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface MetricsSummaryRequest {
  creativesTotal?: boolean | number;
  adsTotal?: boolean | number;
  spendTotal?: boolean | number;
  metrics?: MetricsRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface MetricsRequest {
  spend?: MetricValueRequest;
  usage?: MetricValueRequest;
  impressions?: MetricValueRequest;
  adRecallRate?: MetricValueRequest;
  reach?: MetricValueRequest;
  bai?: MetricValueRequest;
  engagement?: MetricValueRequest;
  engagementRate?: MetricValueRequest;
  costPerEngagement?: MetricValueRequest;
  videoViews?: MetricValueRequest;
  videoThroughRate?: MetricValueRequest;
  costPerCompletedView?: MetricValueRequest;
  clicks?: MetricValueRequest;
  clickThroughRate?: MetricValueRequest;
  costPerClick?: MetricValueRequest;
  frequency?: MetricValueRequest;
  costPerMille?: MetricValueRequest;
  conversion?: MetricValueRequest;
  conversionRate?: MetricValueRequest;
  costPerAcquisition?: MetricValueRequest;
  leads?: MetricValueRequest;
  leadRate?: MetricValueRequest;
  costPerLead?: MetricValueRequest;
  appInstall?: MetricValueRequest;
  appInstallRate?: MetricValueRequest;
  costPerAppInstall?: MetricValueRequest;
  fiveSecondsIndex?: MetricValueRequest;
  textSaliencyScore?: MetricValueRequest;
  logoSaliencyScore?: MetricValueRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface MetricValueRequest {
  value?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface CreativeAnalyticFilter {
  brandId: Scalars["ID"];
  range?: TimeRange | null;
  campaignObjective?: CampaignObjective | null;
  superClass?: SuperClass | null;
  tags?: TagInput[] | null;
  channels?: Channel[] | null;
}

export interface TimeRange {
  init?: Scalars["DateTime"] | null;
  end?: Scalars["DateTime"] | null;
}

export interface TagInput {
  tagSuperClass?: Scalars["String"] | null;
  tagClass: Scalars["String"];
  tagValue: Scalars["String"];
  channel?: Channel | null;
}

export interface InsightRequest {
  tag?: TagRequest;
  spend?: boolean | number;
  usage?: boolean | number;
  campaignObjective?: boolean | number;
  result?: MetricVarianceRequest;
  costResult?: MetricVarianceRequest;
  expectedImpact?: boolean | number;
  channel?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface TagRequest {
  tagSuperClass?: boolean | number;
  tagClass?: boolean | number;
  tagValue?: boolean | number;
  importance?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface MetricVarianceRequest {
  metric?: boolean | number;
  variance?: boolean | number;
  value?: boolean | number;
  average?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface TreeNodeRequest {
  key?: boolean | number;
  nestedTotal?: boolean | number;
  children?: TreeNodeRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface HighlightRequest {
  advertisementId?: boolean | number;
  fileType?: boolean | number;
  url?: boolean | number;
  campaignObjective?: boolean | number;
  result?: MetricVarianceRequest;
  costResult?: MetricVarianceRequest;
  channel?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface TagOverallMetricsRequest {
  tag?: TagRequest;
  channels?: boolean | number;
  tip?: TipRequest;
  creativesTotal?: TotalValueRequest;
  adsTotal?: TotalValueRequest;
  spendTotal?: TotalValueRequest;
  impressionsTotal?: TotalValueRequest;
  engagementRate?: MetricVarianceRequest;
  costPerEngagement?: MetricVarianceRequest;
  videoThroughRate?: MetricVarianceRequest;
  clickThroughRate?: MetricVarianceRequest;
  leadRate?: MetricVarianceRequest;
  conversionRate?: MetricVarianceRequest;
  appInstallRate?: MetricVarianceRequest;
  costPerMille?: MetricVarianceRequest;
  costPerClick?: MetricVarianceRequest;
  costPerLead?: MetricVarianceRequest;
  costPerAcquisition?: MetricVarianceRequest;
  costPerAppInstall?: MetricVarianceRequest;
  costPerCompletedView?: MetricVarianceRequest;
  frequency?: MetricVarianceRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface TipRequest {
  value?: boolean | number;
  detail?: boolean | number;
  placeHolders?: TipPlaceHolderRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface TipPlaceHolderRequest {
  value?: boolean | number;
  key?: boolean | number;
  type?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface TotalValueRequest {
  value?: boolean | number;
  total?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface TagFilterInput {
  tagSuperClass?: Scalars["String"] | null;
  tagClass?: Scalars["String"] | null;
  tagValue?: Scalars["String"] | null;
}

export interface TagRankingOrderingInput {
  orderingColumn: TagRankingOrderingColumn;
  orderingDirection?: OrderingDirection | null;
  pageNumber?: Scalars["Int"] | null;
  pageSize?: Scalars["Int"] | null;
}

export interface AdProfileRequest {
  advertisementId?: boolean | number;
  name?: boolean | number;
  fileType?: boolean | number;
  url?: boolean | number;
  campaignObjective?: boolean | number;
  channel?: boolean | number;
  heatMapUrl?: boolean | number;
  metrics?: MetricsRequest;
  tags?: TagRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface TagSummaryRequest {
  campaignObjective?: boolean | number;
  channel?: boolean | number;
  creativesTotal?: boolean | number;
  adsTotal?: boolean | number;
  spendTotal?: boolean | number;
  frequency?: MetricRangeRequest;
  costPerMile?: MetricRangeRequest;
  engagementRate?: MetricRangeRequest;
  costPerEngagement?: MetricRangeRequest;
  videoThroughRate?: MetricRangeRequest;
  costPerCompletedVideo?: MetricRangeRequest;
  clickThroughRate?: MetricRangeRequest;
  costPerClick?: MetricRangeRequest;
  leadRate?: MetricRangeRequest;
  costPerLead?: MetricRangeRequest;
  conversionRate?: MetricRangeRequest;
  costPerAcquisition?: MetricRangeRequest;
  appInstallRate?: MetricRangeRequest;
  costPerAppInstall?: MetricRangeRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface MetricRangeRequest {
  max?: boolean | number;
  min?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface TagMetricRequest {
  tag?: TagRequest;
  channel?: boolean | number;
  metrics?: MetricsRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface DataPerformanceEntryRequest {
  date?: boolean | number;
  data?: SerialDataRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface SerialDataRequest {
  main_0?: boolean | number;
  metric_0?: boolean | number;
  main_1?: boolean | number;
  metric_1?: boolean | number;
  main_2?: boolean | number;
  metric_2?: boolean | number;
  main_3?: boolean | number;
  metric_3?: boolean | number;
  main_4?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface PerformanceDataEntryRequest {
  date?: boolean | number;
  data?: SerialEntryRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface SerialEntryRequest {
  key?: boolean | number;
  main?: boolean | number;
  metric?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface CreativeProfileRequest {
  creativeId?: boolean | number;
  name?: boolean | number;
  fileType?: boolean | number;
  url?: boolean | number;
  clipEmbeddingUrl?: boolean | number;
  heatMapUrl?: boolean | number;
  metrics?: CreativeMetricsRequest;
  tags?: TagRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface CreativeMetricsRequest {
  adRecallRate?: CreativeMetricValueRequest;
  bai?: CreativeMetricValueRequest;
  fiveSecondsIndex?: CreativeMetricValueRequest;
  textSaliencyScore?: CreativeMetricValueRequest;
  logoSaliencyScore?: CreativeMetricValueRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface CreativeMetricValueRequest {
  value?: boolean | number;
  labeledValue?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface CreativeProfileInput {
  brandId: Scalars["ID"];
  creativeId: Scalars["ID"];
}

export interface ChannelPerformanceMetricsRequest {
  channel?: boolean | number;
  metrics?: PerformanceMetricsRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface PerformanceMetricsRequest {
  engagementRate?: CreativeMetricValueRequest;
  videoThroughRate?: CreativeMetricValueRequest;
  clickThroughRate?: CreativeMetricValueRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface PerformanceMetricFiltersInput {
  targetingAgeMax: Scalars["Int"];
  targetingAgeMin: Scalars["Int"];
  campaignObjective: CampaignObjective;
  targetingGenders: Scalars["Int"];
  spendUsd: Scalars["Int"];
  clipEmbeddingUrl: Scalars["String"];
}

export interface CreativeLibraryFolderRequest {
  id?: boolean | number;
  parentId?: boolean | number;
  path?: boolean | number;
  folders?: CreativeLibraryFolderRequest;
  creatives?: CreativeLibraryItemRequest;
  createdAt?: boolean | number;
  updatedAt?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface CreativeLibraryItemRequest {
  creativeId?: boolean | number;
  name?: boolean | number;
  fileType?: boolean | number;
  url?: boolean | number;
  clipEmbeddingUrl?: boolean | number;
  status?: boolean | number;
  createdAt?: boolean | number;
  updatedAt?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface CreativeLibraryFilter {
  brandId: Scalars["String"];
  folderId?: Scalars["Int"] | null;
}

export interface UserRequest {
  id?: boolean | number;
  createdAt?: boolean | number;
  updatedAt?: boolean | number;
  email?: boolean | number;
  name?: boolean | number;
  isAdmin?: boolean | number;
  businessAccount?: BusinessAccountRequest;
  termsAndConditionsAccepted?: boolean | number;
  emailVerified?: boolean | number;
  isContractValid?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface BusinessAccountRequest {
  id?: boolean | number;
  createdAt?: boolean | number;
  updatedAt?: boolean | number;
  businessName?: boolean | number;
  users?: UserRequest;
  brands?: BrandRequest;
  businessLogoUrl?: boolean | number;
  businessPhone?: boolean | number;
  website?: boolean | number;
  address?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface BrandRequest {
  id?: boolean | number;
  createdAt?: boolean | number;
  updatedAt?: boolean | number;
  name?: boolean | number;
  logoUrl?: boolean | number;
  sector?: boolean | number;
  adAccounts?: boolean | number;
  socialAccounts?: boolean | number;
  status?: boolean | number;
  businessAccount?: BusinessAccountRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface MutationRequest {
  /** Creates a business Account for the provided business admin */
  createBrand?: [{ input: CreateBrandInput }, BrandRequest];
  /** Updates optional fields of a brand */
  updateBrand?: [
    { input: UpdateBrandInput; brandId: Scalars["String"] },
    BrandRequest,
  ];
  /** Updates assets of a brand */
  updateBrandAssets?: [
    { input: BrandAssetsInput; brandId: Scalars["String"] },
    AssetChecksRequest,
  ];
  /** Uploads brand logo */
  requestLogoUploadData?: [
    { input: UploadRequestInput },
    UploadDataResponseRequest,
  ];
  /** Creates a business Account for the provided business admin */
  createBusinessAccount?: [
    { input: CreateBusinessAccountInput },
    BusinessAccountRequest,
  ];
  /** Updates optional fields of a business Account */
  updateBusinessAccount?: [
    { input: UpdateBusinessAccountInput },
    BusinessAccountRequest,
  ];
  /** Cancel Business Account */
  cancelBusinessAccount?: BusinessAccountRequest;
  /** Receives a Oauth Code for completing linking with Integrations */
  createPlatformIntegration?: [
    {
      redirectUri?: Scalars["String"] | null;
      authCode: Scalars["String"];
      platform: Platform;
    },
    IntegrationsAssetsRequest,
  ];
  /** Receives a Oauth Code for completing linking with Integrations */
  deletePlatformIntegration?: [{ platform: Platform }];
  /** Request uploadData to upload the file to the storage */
  requestUploadData?: [
    { input: UploadRequestInput },
    UploadDataResponseRequest,
  ];
  /** Save in the right folder the creative with the given id. The creative must be uploaded before calling this mutation */
  saveCreative?: [{ input: CreativeInput }, CreativeLibraryItemRequest];
  /** Create a Folder in a given folder. If the folder is not specified, the folder will be created in the root folder */
  createFolder?: [{ input: FolderInput }, CreativeLibraryFolderRequest];
  /** Generate referral invitations */
  createReferralInvitations?: [
    { numberOfInvitations: Scalars["Float"] },
    InvitationRequest,
  ];
  /** Delete Invitation Code */
  deleteInvitation?: [{ invitationCode: Scalars["String"] }];
  /** Log in user */
  logIn?: [{ input: AuthenticationInput }, LoggedInUserRequest];
  /** Refresh log in token */
  refreshLogInToken?: boolean | number;
  /** Update user profile. If setting new password and current password is invalid, BAD_REQUEST is thrown */
  updateUserProfile?: [{ input: UserProfileInput }, UserRequest];
  /** Accept terms and conditions for current user */
  acceptTermsAndConditions?: boolean | number;
  /** Create the new User using a Invitation Code */
  signUp?: [{ code: Scalars["String"]; user: SignUpInput }, UserRequest];
  /** Logout user */
  logout?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface CreateBrandInput {
  name: Scalars["String"];
  logoUrl?: Scalars["String"] | null;
  sector: Sector[];
}

export interface UpdateBrandInput {
  name?: Scalars["String"] | null;
  logoUrl?: Scalars["String"] | null;
  sector?: Sector[] | null;
}

export interface AssetChecksRequest {
  unrelatedSocialAccountId?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface BrandAssetsInput {
  adAccount?: AdAccountInput[] | null;
  socialAccount?: SocialAccountInput[] | null;
}

export interface AdAccountInput {
  id?: Scalars["Int"] | null;
  type: AdAccountType;
}

export interface SocialAccountInput {
  id?: Scalars["String"] | null;
  type: SocialAccountType;
}

export interface UploadDataResponseRequest {
  id?: boolean | number;
  originalUrl?: boolean | number;
  presignedData?: PresignedDataRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface PresignedDataRequest {
  url?: boolean | number;
  fields?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface UploadRequestInput {
  mimeType: Scalars["String"];
  extension: Scalars["String"];
}

export interface CreateBusinessAccountInput {
  businessName: Scalars["String"];
}

export interface UpdateBusinessAccountInput {
  businessName?: Scalars["String"] | null;
  address?: Scalars["String"] | null;
  businessPhone?: Scalars["String"] | null;
  website?: Scalars["String"] | null;
  businessLogoUrl?: Scalars["String"] | null;
}

export interface CreativeInput {
  creativeId: Scalars["String"];
  name: Scalars["String"];
  folderId: Scalars["Float"];
  brandId: Scalars["String"];
}

export interface FolderInput {
  name: Scalars["String"];
  brandId: Scalars["String"];
  parentId: Scalars["Float"];
}

export interface InvitationRequest {
  id?: boolean | number;
  createdAt?: boolean | number;
  updatedAt?: boolean | number;
  code?: boolean | number;
  email?: boolean | number;
  type?: boolean | number;
  isAdmin?: boolean | number;
  expirationDate?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface LoggedInUserRequest {
  sessionToken?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface AuthenticationInput {
  email: Scalars["String"];
  password: Scalars["String"];
}

export interface UserProfileInput {
  name?: Scalars["String"] | null;
  /** Required if 'New Password' is sent. Must match current user password. */
  currentPassword?: Scalars["String"] | null;
  /** Requires 'Current Password' to also be sent */
  newPassword?: Scalars["String"] | null;
}

export interface SignUpInput {
  name: Scalars["String"];
  email: Scalars["String"];
  password: Scalars["String"];
}

const Query_possibleTypes: string[] = ["Query"];
export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"');
  return Query_possibleTypes.includes(obj.__typename);
};

const BrandAssetsResponse_possibleTypes: string[] = ["BrandAssetsResponse"];
export const isBrandAssetsResponse = (
  obj?: { __typename?: any } | null,
): obj is BrandAssetsResponse => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBrandAssetsResponse"');
  return BrandAssetsResponse_possibleTypes.includes(obj.__typename);
};

const AdAccount_possibleTypes: string[] = ["AdAccount"];
export const isAdAccount = (
  obj?: { __typename?: any } | null,
): obj is AdAccount => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isAdAccount"');
  return AdAccount_possibleTypes.includes(obj.__typename);
};

const SocialAccount_possibleTypes: string[] = ["SocialAccount"];
export const isSocialAccount = (
  obj?: { __typename?: any } | null,
): obj is SocialAccount => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isSocialAccount"');
  return SocialAccount_possibleTypes.includes(obj.__typename);
};

const PlatformState_possibleTypes: string[] = ["PlatformState"];
export const isPlatformState = (
  obj?: { __typename?: any } | null,
): obj is PlatformState => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isPlatformState"');
  return PlatformState_possibleTypes.includes(obj.__typename);
};

const IntegrationsAssets_possibleTypes: string[] = ["IntegrationsAssets"];
export const isIntegrationsAssets = (
  obj?: { __typename?: any } | null,
): obj is IntegrationsAssets => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isIntegrationsAssets"');
  return IntegrationsAssets_possibleTypes.includes(obj.__typename);
};

const MetricsSummary_possibleTypes: string[] = ["MetricsSummary"];
export const isMetricsSummary = (
  obj?: { __typename?: any } | null,
): obj is MetricsSummary => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isMetricsSummary"');
  return MetricsSummary_possibleTypes.includes(obj.__typename);
};

const Metrics_possibleTypes: string[] = ["Metrics"];
export const isMetrics = (
  obj?: { __typename?: any } | null,
): obj is Metrics => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isMetrics"');
  return Metrics_possibleTypes.includes(obj.__typename);
};

const MetricValue_possibleTypes: string[] = ["MetricValue"];
export const isMetricValue = (
  obj?: { __typename?: any } | null,
): obj is MetricValue => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isMetricValue"');
  return MetricValue_possibleTypes.includes(obj.__typename);
};

const Insight_possibleTypes: string[] = ["Insight"];
export const isInsight = (
  obj?: { __typename?: any } | null,
): obj is Insight => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isInsight"');
  return Insight_possibleTypes.includes(obj.__typename);
};

const Tag_possibleTypes: string[] = ["Tag"];
export const isTag = (obj?: { __typename?: any } | null): obj is Tag => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isTag"');
  return Tag_possibleTypes.includes(obj.__typename);
};

const MetricVariance_possibleTypes: string[] = ["MetricVariance"];
export const isMetricVariance = (
  obj?: { __typename?: any } | null,
): obj is MetricVariance => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isMetricVariance"');
  return MetricVariance_possibleTypes.includes(obj.__typename);
};

const TreeNode_possibleTypes: string[] = ["TreeNode"];
export const isTreeNode = (
  obj?: { __typename?: any } | null,
): obj is TreeNode => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isTreeNode"');
  return TreeNode_possibleTypes.includes(obj.__typename);
};

const Highlight_possibleTypes: string[] = ["Highlight"];
export const isHighlight = (
  obj?: { __typename?: any } | null,
): obj is Highlight => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isHighlight"');
  return Highlight_possibleTypes.includes(obj.__typename);
};

const TagOverallMetrics_possibleTypes: string[] = ["TagOverallMetrics"];
export const isTagOverallMetrics = (
  obj?: { __typename?: any } | null,
): obj is TagOverallMetrics => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isTagOverallMetrics"');
  return TagOverallMetrics_possibleTypes.includes(obj.__typename);
};

const Tip_possibleTypes: string[] = ["Tip"];
export const isTip = (obj?: { __typename?: any } | null): obj is Tip => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isTip"');
  return Tip_possibleTypes.includes(obj.__typename);
};

const TipPlaceHolder_possibleTypes: string[] = ["TipPlaceHolder"];
export const isTipPlaceHolder = (
  obj?: { __typename?: any } | null,
): obj is TipPlaceHolder => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isTipPlaceHolder"');
  return TipPlaceHolder_possibleTypes.includes(obj.__typename);
};

const TotalValue_possibleTypes: string[] = ["TotalValue"];
export const isTotalValue = (
  obj?: { __typename?: any } | null,
): obj is TotalValue => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isTotalValue"');
  return TotalValue_possibleTypes.includes(obj.__typename);
};

const AdProfile_possibleTypes: string[] = ["AdProfile"];
export const isAdProfile = (
  obj?: { __typename?: any } | null,
): obj is AdProfile => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isAdProfile"');
  return AdProfile_possibleTypes.includes(obj.__typename);
};

const TagSummary_possibleTypes: string[] = ["TagSummary"];
export const isTagSummary = (
  obj?: { __typename?: any } | null,
): obj is TagSummary => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isTagSummary"');
  return TagSummary_possibleTypes.includes(obj.__typename);
};

const MetricRange_possibleTypes: string[] = ["MetricRange"];
export const isMetricRange = (
  obj?: { __typename?: any } | null,
): obj is MetricRange => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isMetricRange"');
  return MetricRange_possibleTypes.includes(obj.__typename);
};

const TagMetric_possibleTypes: string[] = ["TagMetric"];
export const isTagMetric = (
  obj?: { __typename?: any } | null,
): obj is TagMetric => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isTagMetric"');
  return TagMetric_possibleTypes.includes(obj.__typename);
};

const DataPerformanceEntry_possibleTypes: string[] = ["DataPerformanceEntry"];
export const isDataPerformanceEntry = (
  obj?: { __typename?: any } | null,
): obj is DataPerformanceEntry => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isDataPerformanceEntry"');
  return DataPerformanceEntry_possibleTypes.includes(obj.__typename);
};

const SerialData_possibleTypes: string[] = ["SerialData"];
export const isSerialData = (
  obj?: { __typename?: any } | null,
): obj is SerialData => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isSerialData"');
  return SerialData_possibleTypes.includes(obj.__typename);
};

const PerformanceDataEntry_possibleTypes: string[] = ["PerformanceDataEntry"];
export const isPerformanceDataEntry = (
  obj?: { __typename?: any } | null,
): obj is PerformanceDataEntry => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isPerformanceDataEntry"');
  return PerformanceDataEntry_possibleTypes.includes(obj.__typename);
};

const SerialEntry_possibleTypes: string[] = ["SerialEntry"];
export const isSerialEntry = (
  obj?: { __typename?: any } | null,
): obj is SerialEntry => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isSerialEntry"');
  return SerialEntry_possibleTypes.includes(obj.__typename);
};

const CreativeProfile_possibleTypes: string[] = ["CreativeProfile"];
export const isCreativeProfile = (
  obj?: { __typename?: any } | null,
): obj is CreativeProfile => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isCreativeProfile"');
  return CreativeProfile_possibleTypes.includes(obj.__typename);
};

const CreativeMetrics_possibleTypes: string[] = ["CreativeMetrics"];
export const isCreativeMetrics = (
  obj?: { __typename?: any } | null,
): obj is CreativeMetrics => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isCreativeMetrics"');
  return CreativeMetrics_possibleTypes.includes(obj.__typename);
};

const CreativeMetricValue_possibleTypes: string[] = ["CreativeMetricValue"];
export const isCreativeMetricValue = (
  obj?: { __typename?: any } | null,
): obj is CreativeMetricValue => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isCreativeMetricValue"');
  return CreativeMetricValue_possibleTypes.includes(obj.__typename);
};

const ChannelPerformanceMetrics_possibleTypes: string[] = [
  "ChannelPerformanceMetrics",
];
export const isChannelPerformanceMetrics = (
  obj?: { __typename?: any } | null,
): obj is ChannelPerformanceMetrics => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isChannelPerformanceMetrics"');
  return ChannelPerformanceMetrics_possibleTypes.includes(obj.__typename);
};

const PerformanceMetrics_possibleTypes: string[] = ["PerformanceMetrics"];
export const isPerformanceMetrics = (
  obj?: { __typename?: any } | null,
): obj is PerformanceMetrics => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isPerformanceMetrics"');
  return PerformanceMetrics_possibleTypes.includes(obj.__typename);
};

const CreativeLibraryFolder_possibleTypes: string[] = ["CreativeLibraryFolder"];
export const isCreativeLibraryFolder = (
  obj?: { __typename?: any } | null,
): obj is CreativeLibraryFolder => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isCreativeLibraryFolder"');
  return CreativeLibraryFolder_possibleTypes.includes(obj.__typename);
};

const CreativeLibraryItem_possibleTypes: string[] = ["CreativeLibraryItem"];
export const isCreativeLibraryItem = (
  obj?: { __typename?: any } | null,
): obj is CreativeLibraryItem => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isCreativeLibraryItem"');
  return CreativeLibraryItem_possibleTypes.includes(obj.__typename);
};

const User_possibleTypes: string[] = ["User"];
export const isUser = (obj?: { __typename?: any } | null): obj is User => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUser"');
  return User_possibleTypes.includes(obj.__typename);
};

const BusinessAccount_possibleTypes: string[] = ["BusinessAccount"];
export const isBusinessAccount = (
  obj?: { __typename?: any } | null,
): obj is BusinessAccount => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBusinessAccount"');
  return BusinessAccount_possibleTypes.includes(obj.__typename);
};

const Brand_possibleTypes: string[] = ["Brand"];
export const isBrand = (obj?: { __typename?: any } | null): obj is Brand => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isBrand"');
  return Brand_possibleTypes.includes(obj.__typename);
};

const Mutation_possibleTypes: string[] = ["Mutation"];
export const isMutation = (
  obj?: { __typename?: any } | null,
): obj is Mutation => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isMutation"');
  return Mutation_possibleTypes.includes(obj.__typename);
};

const AssetChecks_possibleTypes: string[] = ["AssetChecks"];
export const isAssetChecks = (
  obj?: { __typename?: any } | null,
): obj is AssetChecks => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isAssetChecks"');
  return AssetChecks_possibleTypes.includes(obj.__typename);
};

const UploadDataResponse_possibleTypes: string[] = ["UploadDataResponse"];
export const isUploadDataResponse = (
  obj?: { __typename?: any } | null,
): obj is UploadDataResponse => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isUploadDataResponse"');
  return UploadDataResponse_possibleTypes.includes(obj.__typename);
};

const PresignedData_possibleTypes: string[] = ["PresignedData"];
export const isPresignedData = (
  obj?: { __typename?: any } | null,
): obj is PresignedData => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isPresignedData"');
  return PresignedData_possibleTypes.includes(obj.__typename);
};

const Invitation_possibleTypes: string[] = ["Invitation"];
export const isInvitation = (
  obj?: { __typename?: any } | null,
): obj is Invitation => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isInvitation"');
  return Invitation_possibleTypes.includes(obj.__typename);
};

const LoggedInUser_possibleTypes: string[] = ["LoggedInUser"];
export const isLoggedInUser = (
  obj?: { __typename?: any } | null,
): obj is LoggedInUser => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isLoggedInUser"');
  return LoggedInUser_possibleTypes.includes(obj.__typename);
};

export interface QueryPromiseChain {
  /** Returns the Business Asset available in integration for business Account */
  getBrandAssets: (args: {
    brandId: Scalars["String"];
  }) => BrandAssetsResponsePromiseChain & {
    get: <R extends BrandAssetsResponseRequest>(
      request: R,
      defaultValue?: FieldsSelection<BrandAssetsResponse, R>,
    ) => Promise<FieldsSelection<BrandAssetsResponse, R>>;
  };

  /** Returns the Business Account platforms State */
  getPlatformConnections: {
    get: <R extends PlatformStateRequest>(
      request: R,
      defaultValue?: FieldsSelection<PlatformState, R>[],
    ) => Promise<FieldsSelection<PlatformState, R>[]>;
  };

  /** Returns the Business Asset available in integration for business Account */
  getBusinessAccountAssets: IntegrationsAssetsPromiseChain & {
    get: <R extends IntegrationsAssetsRequest>(
      request: R,
      defaultValue?: FieldsSelection<IntegrationsAssets, R>,
    ) => Promise<FieldsSelection<IntegrationsAssets, R>>;
  };

  /** Get brand creative Analytics metrics summary */
  getCreativeAnalyticsSummary: (args: {
    filter: CreativeAnalyticFilter;
  }) => MetricsSummaryPromiseChain & {
    get: <R extends MetricsSummaryRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricsSummary, R> | undefined,
    ) => Promise<FieldsSelection<MetricsSummary, R> | undefined>;
  };

  /** Get brand creative Analytics insights */
  getInsights: (args: { filter: CreativeAnalyticFilter }) => {
    get: <R extends InsightRequest>(
      request: R,
      defaultValue?: FieldsSelection<Insight, R>[] | undefined,
    ) => Promise<FieldsSelection<Insight, R>[] | undefined>;
  };

  /** Get brand tag Usage Report */
  getTagsByUsage: (args: { filter: CreativeAnalyticFilter }) => {
    get: <R extends TreeNodeRequest>(
      request: R,
      defaultValue?: FieldsSelection<TreeNode, R>[] | undefined,
    ) => Promise<FieldsSelection<TreeNode, R>[] | undefined>;
  };

  /** Get brand creative Analytics highlights */
  getHighlights: (args: { filter: CreativeAnalyticFilter }) => {
    get: <R extends HighlightRequest>(
      request: R,
      defaultValue?: FieldsSelection<Highlight, R>[] | undefined,
    ) => Promise<FieldsSelection<Highlight, R>[] | undefined>;
  };

  /** Get Tag Ranking */
  getTagRanking: (args: {
    tagFilter?: TagFilterInput[] | null;
    orderingColumn?: TagRankingOrderingInput | null;
    filter: CreativeAnalyticFilter;
  }) => {
    get: <R extends TagOverallMetricsRequest>(
      request: R,
      defaultValue?: FieldsSelection<TagOverallMetrics, R>[] | undefined,
    ) => Promise<FieldsSelection<TagOverallMetrics, R>[] | undefined>;
  };

  /** Get Ad Profile with campaign and channel differences */
  getAdProfile: (args: {
    filter: CreativeAnalyticFilter;
    adId: Scalars["String"];
  }) => AdProfilePromiseChain & {
    get: <R extends AdProfileRequest>(
      request: R,
      defaultValue?: FieldsSelection<AdProfile, R> | undefined,
    ) => Promise<FieldsSelection<AdProfile, R> | undefined>;
  };

  /** Get tag Summary by campaign and channel */
  getTagSummary: (args: { filter: CreativeAnalyticFilter }) => {
    get: <R extends TagSummaryRequest>(
      request: R,
      defaultValue?: FieldsSelection<TagSummary, R>[] | undefined,
    ) => Promise<FieldsSelection<TagSummary, R>[] | undefined>;
  };

  /** Get tag Usage Ranking */
  getTagUsageRanking: (args: { filter: CreativeAnalyticFilter }) => {
    get: <R extends TagMetricRequest>(
      request: R,
      defaultValue?: FieldsSelection<TagMetric, R>[] | undefined,
    ) => Promise<FieldsSelection<TagMetric, R>[] | undefined>;
  };

  /** Get Creative Performance over Time */
  getCreativePerformanceOverTime: (args: {
    metric: Scalars["String"];
    adId: Scalars["String"];
    filter: CreativeAnalyticFilter;
  }) => {
    get: <R extends DataPerformanceEntryRequest>(
      request: R,
      defaultValue?: FieldsSelection<DataPerformanceEntry, R>[] | undefined,
    ) => Promise<FieldsSelection<DataPerformanceEntry, R>[] | undefined>;
  };

  /** Get tag performance over time */
  getTagPerformanceOverTime: (args: {
    scale?: Scale | null;
    metric: Scalars["String"];
    filter: CreativeAnalyticFilter;
  }) => {
    get: <R extends PerformanceDataEntryRequest>(
      request: R,
      defaultValue?: FieldsSelection<PerformanceDataEntry, R>[] | undefined,
    ) => Promise<FieldsSelection<PerformanceDataEntry, R>[] | undefined>;
  };

  /** Get tag performance over time for all channels */
  getTagPerformanceOverTimeAllChannel: (args: {
    scale?: Scale | null;
    metric: Scalars["String"];
    filter: CreativeAnalyticFilter;
  }) => {
    get: <R extends PerformanceDataEntryRequest>(
      request: R,
      defaultValue?: FieldsSelection<PerformanceDataEntry, R>[] | undefined,
    ) => Promise<FieldsSelection<PerformanceDataEntry, R>[] | undefined>;
  };

  /** Get all brand Tags in tree form */
  getBrandTags: (args: { brandId: Scalars["String"] }) => {
    get: <R extends TreeNodeRequest>(
      request: R,
      defaultValue?: FieldsSelection<TreeNode, R>[] | undefined,
    ) => Promise<FieldsSelection<TreeNode, R>[] | undefined>;
  };

  /** Get Creative Profile */
  getCreativeProfile: (args: {
    filter: CreativeProfileInput;
  }) => CreativeProfilePromiseChain & {
    get: <R extends CreativeProfileRequest>(
      request: R,
      defaultValue?: FieldsSelection<CreativeProfile, R> | undefined,
    ) => Promise<FieldsSelection<CreativeProfile, R> | undefined>;
  };

  /** Get Performance Metrics */
  getPerformanceMetrics: (args: {
    filter: PerformanceMetricFiltersInput;
    brandId: Scalars["String"];
  }) => {
    get: <R extends ChannelPerformanceMetricsRequest>(
      request: R,
      defaultValue?:
        | FieldsSelection<ChannelPerformanceMetrics, R>[]
        | undefined,
    ) => Promise<FieldsSelection<ChannelPerformanceMetrics, R>[] | undefined>;
  };

  /** List Folders and creatives from specific folder */
  listFolder: (args: {
    input: CreativeLibraryFilter;
  }) => CreativeLibraryFolderPromiseChain & {
    get: <R extends CreativeLibraryFolderRequest>(
      request: R,
      defaultValue?: FieldsSelection<CreativeLibraryFolder, R>,
    ) => Promise<FieldsSelection<CreativeLibraryFolder, R>>;
  };

  /** Validate Invitation Code */
  validateInvitationCode: (args: { invitationCode: Scalars["String"] }) => {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Promise<Scalars["String"]>;
  };

  /** Get logged in user or NULL if it is not logged in */
  getLoggedInUser: UserPromiseChain & {
    get: <R extends UserRequest>(
      request: R,
      defaultValue?: FieldsSelection<User, R> | undefined,
    ) => Promise<FieldsSelection<User, R> | undefined>;
  };
}

export interface QueryObservableChain {
  /** Returns the Business Asset available in integration for business Account */
  getBrandAssets: (args: {
    brandId: Scalars["String"];
  }) => BrandAssetsResponseObservableChain & {
    get: <R extends BrandAssetsResponseRequest>(
      request: R,
      defaultValue?: FieldsSelection<BrandAssetsResponse, R>,
    ) => Observable<FieldsSelection<BrandAssetsResponse, R>>;
  };

  /** Returns the Business Account platforms State */
  getPlatformConnections: {
    get: <R extends PlatformStateRequest>(
      request: R,
      defaultValue?: FieldsSelection<PlatformState, R>[],
    ) => Observable<FieldsSelection<PlatformState, R>[]>;
  };

  /** Returns the Business Asset available in integration for business Account */
  getBusinessAccountAssets: IntegrationsAssetsObservableChain & {
    get: <R extends IntegrationsAssetsRequest>(
      request: R,
      defaultValue?: FieldsSelection<IntegrationsAssets, R>,
    ) => Observable<FieldsSelection<IntegrationsAssets, R>>;
  };

  /** Get brand creative Analytics metrics summary */
  getCreativeAnalyticsSummary: (args: {
    filter: CreativeAnalyticFilter;
  }) => MetricsSummaryObservableChain & {
    get: <R extends MetricsSummaryRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricsSummary, R> | undefined,
    ) => Observable<FieldsSelection<MetricsSummary, R> | undefined>;
  };

  /** Get brand creative Analytics insights */
  getInsights: (args: { filter: CreativeAnalyticFilter }) => {
    get: <R extends InsightRequest>(
      request: R,
      defaultValue?: FieldsSelection<Insight, R>[] | undefined,
    ) => Observable<FieldsSelection<Insight, R>[] | undefined>;
  };

  /** Get brand tag Usage Report */
  getTagsByUsage: (args: { filter: CreativeAnalyticFilter }) => {
    get: <R extends TreeNodeRequest>(
      request: R,
      defaultValue?: FieldsSelection<TreeNode, R>[] | undefined,
    ) => Observable<FieldsSelection<TreeNode, R>[] | undefined>;
  };

  /** Get brand creative Analytics highlights */
  getHighlights: (args: { filter: CreativeAnalyticFilter }) => {
    get: <R extends HighlightRequest>(
      request: R,
      defaultValue?: FieldsSelection<Highlight, R>[] | undefined,
    ) => Observable<FieldsSelection<Highlight, R>[] | undefined>;
  };

  /** Get Tag Ranking */
  getTagRanking: (args: {
    tagFilter?: TagFilterInput[] | null;
    orderingColumn?: TagRankingOrderingInput | null;
    filter: CreativeAnalyticFilter;
  }) => {
    get: <R extends TagOverallMetricsRequest>(
      request: R,
      defaultValue?: FieldsSelection<TagOverallMetrics, R>[] | undefined,
    ) => Observable<FieldsSelection<TagOverallMetrics, R>[] | undefined>;
  };

  /** Get Ad Profile with campaign and channel differences */
  getAdProfile: (args: {
    filter: CreativeAnalyticFilter;
    adId: Scalars["String"];
  }) => AdProfileObservableChain & {
    get: <R extends AdProfileRequest>(
      request: R,
      defaultValue?: FieldsSelection<AdProfile, R> | undefined,
    ) => Observable<FieldsSelection<AdProfile, R> | undefined>;
  };

  /** Get tag Summary by campaign and channel */
  getTagSummary: (args: { filter: CreativeAnalyticFilter }) => {
    get: <R extends TagSummaryRequest>(
      request: R,
      defaultValue?: FieldsSelection<TagSummary, R>[] | undefined,
    ) => Observable<FieldsSelection<TagSummary, R>[] | undefined>;
  };

  /** Get tag Usage Ranking */
  getTagUsageRanking: (args: { filter: CreativeAnalyticFilter }) => {
    get: <R extends TagMetricRequest>(
      request: R,
      defaultValue?: FieldsSelection<TagMetric, R>[] | undefined,
    ) => Observable<FieldsSelection<TagMetric, R>[] | undefined>;
  };

  /** Get Creative Performance over Time */
  getCreativePerformanceOverTime: (args: {
    metric: Scalars["String"];
    adId: Scalars["String"];
    filter: CreativeAnalyticFilter;
  }) => {
    get: <R extends DataPerformanceEntryRequest>(
      request: R,
      defaultValue?: FieldsSelection<DataPerformanceEntry, R>[] | undefined,
    ) => Observable<FieldsSelection<DataPerformanceEntry, R>[] | undefined>;
  };

  /** Get tag performance over time */
  getTagPerformanceOverTime: (args: {
    scale?: Scale | null;
    metric: Scalars["String"];
    filter: CreativeAnalyticFilter;
  }) => {
    get: <R extends PerformanceDataEntryRequest>(
      request: R,
      defaultValue?: FieldsSelection<PerformanceDataEntry, R>[] | undefined,
    ) => Observable<FieldsSelection<PerformanceDataEntry, R>[] | undefined>;
  };

  /** Get tag performance over time for all channels */
  getTagPerformanceOverTimeAllChannel: (args: {
    scale?: Scale | null;
    metric: Scalars["String"];
    filter: CreativeAnalyticFilter;
  }) => {
    get: <R extends PerformanceDataEntryRequest>(
      request: R,
      defaultValue?: FieldsSelection<PerformanceDataEntry, R>[] | undefined,
    ) => Observable<FieldsSelection<PerformanceDataEntry, R>[] | undefined>;
  };

  /** Get all brand Tags in tree form */
  getBrandTags: (args: { brandId: Scalars["String"] }) => {
    get: <R extends TreeNodeRequest>(
      request: R,
      defaultValue?: FieldsSelection<TreeNode, R>[] | undefined,
    ) => Observable<FieldsSelection<TreeNode, R>[] | undefined>;
  };

  /** Get Creative Profile */
  getCreativeProfile: (args: {
    filter: CreativeProfileInput;
  }) => CreativeProfileObservableChain & {
    get: <R extends CreativeProfileRequest>(
      request: R,
      defaultValue?: FieldsSelection<CreativeProfile, R> | undefined,
    ) => Observable<FieldsSelection<CreativeProfile, R> | undefined>;
  };

  /** Get Performance Metrics */
  getPerformanceMetrics: (args: {
    filter: PerformanceMetricFiltersInput;
    brandId: Scalars["String"];
  }) => {
    get: <R extends ChannelPerformanceMetricsRequest>(
      request: R,
      defaultValue?:
        | FieldsSelection<ChannelPerformanceMetrics, R>[]
        | undefined,
    ) => Observable<
      FieldsSelection<ChannelPerformanceMetrics, R>[] | undefined
    >;
  };

  /** List Folders and creatives from specific folder */
  listFolder: (args: {
    input: CreativeLibraryFilter;
  }) => CreativeLibraryFolderObservableChain & {
    get: <R extends CreativeLibraryFolderRequest>(
      request: R,
      defaultValue?: FieldsSelection<CreativeLibraryFolder, R>,
    ) => Observable<FieldsSelection<CreativeLibraryFolder, R>>;
  };

  /** Validate Invitation Code */
  validateInvitationCode: (args: { invitationCode: Scalars["String"] }) => {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Observable<Scalars["String"]>;
  };

  /** Get logged in user or NULL if it is not logged in */
  getLoggedInUser: UserObservableChain & {
    get: <R extends UserRequest>(
      request: R,
      defaultValue?: FieldsSelection<User, R> | undefined,
    ) => Observable<FieldsSelection<User, R> | undefined>;
  };
}

export interface BrandAssetsResponsePromiseChain {
  adAccounts: {
    get: <R extends AdAccountRequest>(
      request: R,
      defaultValue?: FieldsSelection<AdAccount, R>[] | undefined,
    ) => Promise<FieldsSelection<AdAccount, R>[] | undefined>;
  };
  socialAccounts: {
    get: <R extends SocialAccountRequest>(
      request: R,
      defaultValue?: FieldsSelection<SocialAccount, R>[] | undefined,
    ) => Promise<FieldsSelection<SocialAccount, R>[] | undefined>;
  };
}

export interface BrandAssetsResponseObservableChain {
  adAccounts: {
    get: <R extends AdAccountRequest>(
      request: R,
      defaultValue?: FieldsSelection<AdAccount, R>[] | undefined,
    ) => Observable<FieldsSelection<AdAccount, R>[] | undefined>;
  };
  socialAccounts: {
    get: <R extends SocialAccountRequest>(
      request: R,
      defaultValue?: FieldsSelection<SocialAccount, R>[] | undefined,
    ) => Observable<FieldsSelection<SocialAccount, R>[] | undefined>;
  };
}

export interface AdAccountPromiseChain {
  id: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["ID"],
    ) => Promise<Scalars["ID"]>;
  };
  originalId: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Promise<Scalars["String"]>;
  };
  platform: {
    get: (
      request?: boolean | number,
      defaultValue?: Platform,
    ) => Promise<Platform>;
  };
  type: {
    get: (
      request?: boolean | number,
      defaultValue?: AdAccountType,
    ) => Promise<AdAccountType>;
  };
  name: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined,
    ) => Promise<Scalars["String"] | undefined>;
  };
}

export interface AdAccountObservableChain {
  id: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["ID"],
    ) => Observable<Scalars["ID"]>;
  };
  originalId: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Observable<Scalars["String"]>;
  };
  platform: {
    get: (
      request?: boolean | number,
      defaultValue?: Platform,
    ) => Observable<Platform>;
  };
  type: {
    get: (
      request?: boolean | number,
      defaultValue?: AdAccountType,
    ) => Observable<AdAccountType>;
  };
  name: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined,
    ) => Observable<Scalars["String"] | undefined>;
  };
}

export interface SocialAccountPromiseChain {
  id: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["ID"],
    ) => Promise<Scalars["ID"]>;
  };
  originalId: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Promise<Scalars["String"]>;
  };
  platform: {
    get: (
      request?: boolean | number,
      defaultValue?: Platform,
    ) => Promise<Platform>;
  };
  type: {
    get: (
      request?: boolean | number,
      defaultValue?: SocialAccountType,
    ) => Promise<SocialAccountType>;
  };
  name: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined,
    ) => Promise<Scalars["String"] | undefined>;
  };
}

export interface SocialAccountObservableChain {
  id: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["ID"],
    ) => Observable<Scalars["ID"]>;
  };
  originalId: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Observable<Scalars["String"]>;
  };
  platform: {
    get: (
      request?: boolean | number,
      defaultValue?: Platform,
    ) => Observable<Platform>;
  };
  type: {
    get: (
      request?: boolean | number,
      defaultValue?: SocialAccountType,
    ) => Observable<SocialAccountType>;
  };
  name: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined,
    ) => Observable<Scalars["String"] | undefined>;
  };
}

export interface PlatformStatePromiseChain {
  platform: {
    get: (
      request?: boolean | number,
      defaultValue?: Platform,
    ) => Promise<Platform>;
  };
  status: {
    get: (
      request?: boolean | number,
      defaultValue?: ConnectionState,
    ) => Promise<ConnectionState>;
  };
  userEmail: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined,
    ) => Promise<Scalars["String"] | undefined>;
  };
  expirationDate: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["DateTime"] | undefined,
    ) => Promise<Scalars["DateTime"] | undefined>;
  };
  createdAt: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["DateTime"] | undefined,
    ) => Promise<Scalars["DateTime"] | undefined>;
  };
  updatedAt: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["DateTime"] | undefined,
    ) => Promise<Scalars["DateTime"] | undefined>;
  };
  totalAds: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Int"] | undefined,
    ) => Promise<Scalars["Int"] | undefined>;
  };
  totalCreatives: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Int"] | undefined,
    ) => Promise<Scalars["Int"] | undefined>;
  };
  extractedAds: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Int"] | undefined,
    ) => Promise<Scalars["Int"] | undefined>;
  };
  extractedCreatives: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Int"] | undefined,
    ) => Promise<Scalars["Int"] | undefined>;
  };
}

export interface PlatformStateObservableChain {
  platform: {
    get: (
      request?: boolean | number,
      defaultValue?: Platform,
    ) => Observable<Platform>;
  };
  status: {
    get: (
      request?: boolean | number,
      defaultValue?: ConnectionState,
    ) => Observable<ConnectionState>;
  };
  userEmail: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined,
    ) => Observable<Scalars["String"] | undefined>;
  };
  expirationDate: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["DateTime"] | undefined,
    ) => Observable<Scalars["DateTime"] | undefined>;
  };
  createdAt: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["DateTime"] | undefined,
    ) => Observable<Scalars["DateTime"] | undefined>;
  };
  updatedAt: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["DateTime"] | undefined,
    ) => Observable<Scalars["DateTime"] | undefined>;
  };
  totalAds: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Int"] | undefined,
    ) => Observable<Scalars["Int"] | undefined>;
  };
  totalCreatives: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Int"] | undefined,
    ) => Observable<Scalars["Int"] | undefined>;
  };
  extractedAds: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Int"] | undefined,
    ) => Observable<Scalars["Int"] | undefined>;
  };
  extractedCreatives: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Int"] | undefined,
    ) => Observable<Scalars["Int"] | undefined>;
  };
}

export interface IntegrationsAssetsPromiseChain {
  adAccounts: {
    get: <R extends AdAccountRequest>(
      request: R,
      defaultValue?: FieldsSelection<AdAccount, R>[] | undefined,
    ) => Promise<FieldsSelection<AdAccount, R>[] | undefined>;
  };
  socialAccounts: {
    get: <R extends SocialAccountRequest>(
      request: R,
      defaultValue?: FieldsSelection<SocialAccount, R>[] | undefined,
    ) => Promise<FieldsSelection<SocialAccount, R>[] | undefined>;
  };
}

export interface IntegrationsAssetsObservableChain {
  adAccounts: {
    get: <R extends AdAccountRequest>(
      request: R,
      defaultValue?: FieldsSelection<AdAccount, R>[] | undefined,
    ) => Observable<FieldsSelection<AdAccount, R>[] | undefined>;
  };
  socialAccounts: {
    get: <R extends SocialAccountRequest>(
      request: R,
      defaultValue?: FieldsSelection<SocialAccount, R>[] | undefined,
    ) => Observable<FieldsSelection<SocialAccount, R>[] | undefined>;
  };
}

export interface MetricsSummaryPromiseChain {
  creativesTotal: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Int"],
    ) => Promise<Scalars["Int"]>;
  };
  adsTotal: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Int"],
    ) => Promise<Scalars["Int"]>;
  };
  spendTotal: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Int"],
    ) => Promise<Scalars["Int"]>;
  };
  metrics: MetricsPromiseChain & {
    get: <R extends MetricsRequest>(
      request: R,
      defaultValue?: FieldsSelection<Metrics, R> | undefined,
    ) => Promise<FieldsSelection<Metrics, R> | undefined>;
  };
}

export interface MetricsSummaryObservableChain {
  creativesTotal: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Int"],
    ) => Observable<Scalars["Int"]>;
  };
  adsTotal: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Int"],
    ) => Observable<Scalars["Int"]>;
  };
  spendTotal: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Int"],
    ) => Observable<Scalars["Int"]>;
  };
  metrics: MetricsObservableChain & {
    get: <R extends MetricsRequest>(
      request: R,
      defaultValue?: FieldsSelection<Metrics, R> | undefined,
    ) => Observable<FieldsSelection<Metrics, R> | undefined>;
  };
}

export interface MetricsPromiseChain {
  spend: MetricValuePromiseChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Promise<FieldsSelection<MetricValue, R> | undefined>;
  };
  usage: MetricValuePromiseChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Promise<FieldsSelection<MetricValue, R> | undefined>;
  };
  impressions: MetricValuePromiseChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Promise<FieldsSelection<MetricValue, R> | undefined>;
  };
  adRecallRate: MetricValuePromiseChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Promise<FieldsSelection<MetricValue, R> | undefined>;
  };
  reach: MetricValuePromiseChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Promise<FieldsSelection<MetricValue, R> | undefined>;
  };
  bai: MetricValuePromiseChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Promise<FieldsSelection<MetricValue, R> | undefined>;
  };
  engagement: MetricValuePromiseChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Promise<FieldsSelection<MetricValue, R> | undefined>;
  };
  engagementRate: MetricValuePromiseChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Promise<FieldsSelection<MetricValue, R> | undefined>;
  };
  costPerEngagement: MetricValuePromiseChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Promise<FieldsSelection<MetricValue, R> | undefined>;
  };
  videoViews: MetricValuePromiseChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Promise<FieldsSelection<MetricValue, R> | undefined>;
  };
  videoThroughRate: MetricValuePromiseChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Promise<FieldsSelection<MetricValue, R> | undefined>;
  };
  costPerCompletedView: MetricValuePromiseChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Promise<FieldsSelection<MetricValue, R> | undefined>;
  };
  clicks: MetricValuePromiseChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Promise<FieldsSelection<MetricValue, R> | undefined>;
  };
  clickThroughRate: MetricValuePromiseChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Promise<FieldsSelection<MetricValue, R> | undefined>;
  };
  costPerClick: MetricValuePromiseChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Promise<FieldsSelection<MetricValue, R> | undefined>;
  };
  frequency: MetricValuePromiseChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Promise<FieldsSelection<MetricValue, R> | undefined>;
  };
  costPerMille: MetricValuePromiseChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Promise<FieldsSelection<MetricValue, R> | undefined>;
  };
  conversion: MetricValuePromiseChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Promise<FieldsSelection<MetricValue, R> | undefined>;
  };
  conversionRate: MetricValuePromiseChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Promise<FieldsSelection<MetricValue, R> | undefined>;
  };
  costPerAcquisition: MetricValuePromiseChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Promise<FieldsSelection<MetricValue, R> | undefined>;
  };
  leads: MetricValuePromiseChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Promise<FieldsSelection<MetricValue, R> | undefined>;
  };
  leadRate: MetricValuePromiseChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Promise<FieldsSelection<MetricValue, R> | undefined>;
  };
  costPerLead: MetricValuePromiseChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Promise<FieldsSelection<MetricValue, R> | undefined>;
  };
  appInstall: MetricValuePromiseChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Promise<FieldsSelection<MetricValue, R> | undefined>;
  };
  appInstallRate: MetricValuePromiseChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Promise<FieldsSelection<MetricValue, R> | undefined>;
  };
  costPerAppInstall: MetricValuePromiseChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Promise<FieldsSelection<MetricValue, R> | undefined>;
  };
  fiveSecondsIndex: MetricValuePromiseChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Promise<FieldsSelection<MetricValue, R> | undefined>;
  };
  textSaliencyScore: MetricValuePromiseChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Promise<FieldsSelection<MetricValue, R> | undefined>;
  };
  logoSaliencyScore: MetricValuePromiseChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Promise<FieldsSelection<MetricValue, R> | undefined>;
  };
}

export interface MetricsObservableChain {
  spend: MetricValueObservableChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Observable<FieldsSelection<MetricValue, R> | undefined>;
  };
  usage: MetricValueObservableChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Observable<FieldsSelection<MetricValue, R> | undefined>;
  };
  impressions: MetricValueObservableChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Observable<FieldsSelection<MetricValue, R> | undefined>;
  };
  adRecallRate: MetricValueObservableChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Observable<FieldsSelection<MetricValue, R> | undefined>;
  };
  reach: MetricValueObservableChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Observable<FieldsSelection<MetricValue, R> | undefined>;
  };
  bai: MetricValueObservableChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Observable<FieldsSelection<MetricValue, R> | undefined>;
  };
  engagement: MetricValueObservableChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Observable<FieldsSelection<MetricValue, R> | undefined>;
  };
  engagementRate: MetricValueObservableChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Observable<FieldsSelection<MetricValue, R> | undefined>;
  };
  costPerEngagement: MetricValueObservableChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Observable<FieldsSelection<MetricValue, R> | undefined>;
  };
  videoViews: MetricValueObservableChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Observable<FieldsSelection<MetricValue, R> | undefined>;
  };
  videoThroughRate: MetricValueObservableChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Observable<FieldsSelection<MetricValue, R> | undefined>;
  };
  costPerCompletedView: MetricValueObservableChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Observable<FieldsSelection<MetricValue, R> | undefined>;
  };
  clicks: MetricValueObservableChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Observable<FieldsSelection<MetricValue, R> | undefined>;
  };
  clickThroughRate: MetricValueObservableChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Observable<FieldsSelection<MetricValue, R> | undefined>;
  };
  costPerClick: MetricValueObservableChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Observable<FieldsSelection<MetricValue, R> | undefined>;
  };
  frequency: MetricValueObservableChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Observable<FieldsSelection<MetricValue, R> | undefined>;
  };
  costPerMille: MetricValueObservableChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Observable<FieldsSelection<MetricValue, R> | undefined>;
  };
  conversion: MetricValueObservableChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Observable<FieldsSelection<MetricValue, R> | undefined>;
  };
  conversionRate: MetricValueObservableChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Observable<FieldsSelection<MetricValue, R> | undefined>;
  };
  costPerAcquisition: MetricValueObservableChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Observable<FieldsSelection<MetricValue, R> | undefined>;
  };
  leads: MetricValueObservableChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Observable<FieldsSelection<MetricValue, R> | undefined>;
  };
  leadRate: MetricValueObservableChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Observable<FieldsSelection<MetricValue, R> | undefined>;
  };
  costPerLead: MetricValueObservableChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Observable<FieldsSelection<MetricValue, R> | undefined>;
  };
  appInstall: MetricValueObservableChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Observable<FieldsSelection<MetricValue, R> | undefined>;
  };
  appInstallRate: MetricValueObservableChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Observable<FieldsSelection<MetricValue, R> | undefined>;
  };
  costPerAppInstall: MetricValueObservableChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Observable<FieldsSelection<MetricValue, R> | undefined>;
  };
  fiveSecondsIndex: MetricValueObservableChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Observable<FieldsSelection<MetricValue, R> | undefined>;
  };
  textSaliencyScore: MetricValueObservableChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Observable<FieldsSelection<MetricValue, R> | undefined>;
  };
  logoSaliencyScore: MetricValueObservableChain & {
    get: <R extends MetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricValue, R> | undefined,
    ) => Observable<FieldsSelection<MetricValue, R> | undefined>;
  };
}

export interface MetricValuePromiseChain {
  value: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"],
    ) => Promise<Scalars["Float"]>;
  };
}

export interface MetricValueObservableChain {
  value: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"],
    ) => Observable<Scalars["Float"]>;
  };
}

export interface InsightPromiseChain {
  tag: TagPromiseChain & {
    get: <R extends TagRequest>(
      request: R,
      defaultValue?: FieldsSelection<Tag, R>,
    ) => Promise<FieldsSelection<Tag, R>>;
  };
  spend: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"],
    ) => Promise<Scalars["Float"]>;
  };
  usage: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Int"],
    ) => Promise<Scalars["Int"]>;
  };
  campaignObjective: {
    get: (
      request?: boolean | number,
      defaultValue?: CampaignObjective,
    ) => Promise<CampaignObjective>;
  };
  result: MetricVariancePromiseChain & {
    get: <R extends MetricVarianceRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricVariance, R> | undefined,
    ) => Promise<FieldsSelection<MetricVariance, R> | undefined>;
  };
  costResult: MetricVariancePromiseChain & {
    get: <R extends MetricVarianceRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricVariance, R> | undefined,
    ) => Promise<FieldsSelection<MetricVariance, R> | undefined>;
  };
  expectedImpact: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Int"] | undefined,
    ) => Promise<Scalars["Int"] | undefined>;
  };
  channel: {
    get: (
      request?: boolean | number,
      defaultValue?: Channel | undefined,
    ) => Promise<Channel | undefined>;
  };
}

export interface InsightObservableChain {
  tag: TagObservableChain & {
    get: <R extends TagRequest>(
      request: R,
      defaultValue?: FieldsSelection<Tag, R>,
    ) => Observable<FieldsSelection<Tag, R>>;
  };
  spend: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"],
    ) => Observable<Scalars["Float"]>;
  };
  usage: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Int"],
    ) => Observable<Scalars["Int"]>;
  };
  campaignObjective: {
    get: (
      request?: boolean | number,
      defaultValue?: CampaignObjective,
    ) => Observable<CampaignObjective>;
  };
  result: MetricVarianceObservableChain & {
    get: <R extends MetricVarianceRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricVariance, R> | undefined,
    ) => Observable<FieldsSelection<MetricVariance, R> | undefined>;
  };
  costResult: MetricVarianceObservableChain & {
    get: <R extends MetricVarianceRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricVariance, R> | undefined,
    ) => Observable<FieldsSelection<MetricVariance, R> | undefined>;
  };
  expectedImpact: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Int"] | undefined,
    ) => Observable<Scalars["Int"] | undefined>;
  };
  channel: {
    get: (
      request?: boolean | number,
      defaultValue?: Channel | undefined,
    ) => Observable<Channel | undefined>;
  };
}

export interface TagPromiseChain {
  tagSuperClass: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined,
    ) => Promise<Scalars["String"] | undefined>;
  };
  tagClass: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Promise<Scalars["String"]>;
  };
  tagValue: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Promise<Scalars["String"]>;
  };
  importance: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Promise<Scalars["Float"] | undefined>;
  };
}

export interface TagObservableChain {
  tagSuperClass: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined,
    ) => Observable<Scalars["String"] | undefined>;
  };
  tagClass: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Observable<Scalars["String"]>;
  };
  tagValue: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Observable<Scalars["String"]>;
  };
  importance: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Observable<Scalars["Float"] | undefined>;
  };
}

export interface MetricVariancePromiseChain {
  metric: {
    get: (request?: boolean | number, defaultValue?: Metric) => Promise<Metric>;
  };
  variance: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Promise<Scalars["Float"] | undefined>;
  };
  value: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Promise<Scalars["Float"] | undefined>;
  };
  average: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Promise<Scalars["Float"] | undefined>;
  };
}

export interface MetricVarianceObservableChain {
  metric: {
    get: (
      request?: boolean | number,
      defaultValue?: Metric,
    ) => Observable<Metric>;
  };
  variance: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Observable<Scalars["Float"] | undefined>;
  };
  value: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Observable<Scalars["Float"] | undefined>;
  };
  average: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Observable<Scalars["Float"] | undefined>;
  };
}

export interface TreeNodePromiseChain {
  key: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Promise<Scalars["String"]>;
  };
  nestedTotal: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Int"] | undefined,
    ) => Promise<Scalars["Int"] | undefined>;
  };
  children: {
    get: <R extends TreeNodeRequest>(
      request: R,
      defaultValue?: FieldsSelection<TreeNode, R>[],
    ) => Promise<FieldsSelection<TreeNode, R>[]>;
  };
}

export interface TreeNodeObservableChain {
  key: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Observable<Scalars["String"]>;
  };
  nestedTotal: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Int"] | undefined,
    ) => Observable<Scalars["Int"] | undefined>;
  };
  children: {
    get: <R extends TreeNodeRequest>(
      request: R,
      defaultValue?: FieldsSelection<TreeNode, R>[],
    ) => Observable<FieldsSelection<TreeNode, R>[]>;
  };
}

export interface HighlightPromiseChain {
  advertisementId: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Promise<Scalars["String"]>;
  };
  fileType: {
    get: (
      request?: boolean | number,
      defaultValue?: FileType,
    ) => Promise<FileType>;
  };
  url: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Promise<Scalars["String"]>;
  };
  campaignObjective: {
    get: (
      request?: boolean | number,
      defaultValue?: CampaignObjective,
    ) => Promise<CampaignObjective>;
  };
  result: MetricVariancePromiseChain & {
    get: <R extends MetricVarianceRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricVariance, R>,
    ) => Promise<FieldsSelection<MetricVariance, R>>;
  };
  costResult: MetricVariancePromiseChain & {
    get: <R extends MetricVarianceRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricVariance, R>,
    ) => Promise<FieldsSelection<MetricVariance, R>>;
  };
  channel: {
    get: (
      request?: boolean | number,
      defaultValue?: Channel[],
    ) => Promise<Channel[]>;
  };
}

export interface HighlightObservableChain {
  advertisementId: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Observable<Scalars["String"]>;
  };
  fileType: {
    get: (
      request?: boolean | number,
      defaultValue?: FileType,
    ) => Observable<FileType>;
  };
  url: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Observable<Scalars["String"]>;
  };
  campaignObjective: {
    get: (
      request?: boolean | number,
      defaultValue?: CampaignObjective,
    ) => Observable<CampaignObjective>;
  };
  result: MetricVarianceObservableChain & {
    get: <R extends MetricVarianceRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricVariance, R>,
    ) => Observable<FieldsSelection<MetricVariance, R>>;
  };
  costResult: MetricVarianceObservableChain & {
    get: <R extends MetricVarianceRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricVariance, R>,
    ) => Observable<FieldsSelection<MetricVariance, R>>;
  };
  channel: {
    get: (
      request?: boolean | number,
      defaultValue?: Channel[],
    ) => Observable<Channel[]>;
  };
}

export interface TagOverallMetricsPromiseChain {
  tag: TagPromiseChain & {
    get: <R extends TagRequest>(
      request: R,
      defaultValue?: FieldsSelection<Tag, R>,
    ) => Promise<FieldsSelection<Tag, R>>;
  };
  channels: {
    get: (
      request?: boolean | number,
      defaultValue?: Channel[],
    ) => Promise<Channel[]>;
  };
  tip: TipPromiseChain & {
    get: <R extends TipRequest>(
      request: R,
      defaultValue?: FieldsSelection<Tip, R> | undefined,
    ) => Promise<FieldsSelection<Tip, R> | undefined>;
  };
  creativesTotal: TotalValuePromiseChain & {
    get: <R extends TotalValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<TotalValue, R>,
    ) => Promise<FieldsSelection<TotalValue, R>>;
  };
  adsTotal: TotalValuePromiseChain & {
    get: <R extends TotalValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<TotalValue, R>,
    ) => Promise<FieldsSelection<TotalValue, R>>;
  };
  spendTotal: TotalValuePromiseChain & {
    get: <R extends TotalValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<TotalValue, R>,
    ) => Promise<FieldsSelection<TotalValue, R>>;
  };
  impressionsTotal: TotalValuePromiseChain & {
    get: <R extends TotalValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<TotalValue, R>,
    ) => Promise<FieldsSelection<TotalValue, R>>;
  };
  engagementRate: MetricVariancePromiseChain & {
    get: <R extends MetricVarianceRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricVariance, R>,
    ) => Promise<FieldsSelection<MetricVariance, R>>;
  };
  costPerEngagement: MetricVariancePromiseChain & {
    get: <R extends MetricVarianceRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricVariance, R>,
    ) => Promise<FieldsSelection<MetricVariance, R>>;
  };
  videoThroughRate: MetricVariancePromiseChain & {
    get: <R extends MetricVarianceRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricVariance, R>,
    ) => Promise<FieldsSelection<MetricVariance, R>>;
  };
  clickThroughRate: MetricVariancePromiseChain & {
    get: <R extends MetricVarianceRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricVariance, R>,
    ) => Promise<FieldsSelection<MetricVariance, R>>;
  };
  leadRate: MetricVariancePromiseChain & {
    get: <R extends MetricVarianceRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricVariance, R>,
    ) => Promise<FieldsSelection<MetricVariance, R>>;
  };
  conversionRate: MetricVariancePromiseChain & {
    get: <R extends MetricVarianceRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricVariance, R>,
    ) => Promise<FieldsSelection<MetricVariance, R>>;
  };
  appInstallRate: MetricVariancePromiseChain & {
    get: <R extends MetricVarianceRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricVariance, R>,
    ) => Promise<FieldsSelection<MetricVariance, R>>;
  };
  costPerMille: MetricVariancePromiseChain & {
    get: <R extends MetricVarianceRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricVariance, R>,
    ) => Promise<FieldsSelection<MetricVariance, R>>;
  };
  costPerClick: MetricVariancePromiseChain & {
    get: <R extends MetricVarianceRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricVariance, R>,
    ) => Promise<FieldsSelection<MetricVariance, R>>;
  };
  costPerLead: MetricVariancePromiseChain & {
    get: <R extends MetricVarianceRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricVariance, R>,
    ) => Promise<FieldsSelection<MetricVariance, R>>;
  };
  costPerAcquisition: MetricVariancePromiseChain & {
    get: <R extends MetricVarianceRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricVariance, R>,
    ) => Promise<FieldsSelection<MetricVariance, R>>;
  };
  costPerAppInstall: MetricVariancePromiseChain & {
    get: <R extends MetricVarianceRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricVariance, R>,
    ) => Promise<FieldsSelection<MetricVariance, R>>;
  };
  costPerCompletedView: MetricVariancePromiseChain & {
    get: <R extends MetricVarianceRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricVariance, R>,
    ) => Promise<FieldsSelection<MetricVariance, R>>;
  };
  frequency: MetricVariancePromiseChain & {
    get: <R extends MetricVarianceRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricVariance, R>,
    ) => Promise<FieldsSelection<MetricVariance, R>>;
  };
}

export interface TagOverallMetricsObservableChain {
  tag: TagObservableChain & {
    get: <R extends TagRequest>(
      request: R,
      defaultValue?: FieldsSelection<Tag, R>,
    ) => Observable<FieldsSelection<Tag, R>>;
  };
  channels: {
    get: (
      request?: boolean | number,
      defaultValue?: Channel[],
    ) => Observable<Channel[]>;
  };
  tip: TipObservableChain & {
    get: <R extends TipRequest>(
      request: R,
      defaultValue?: FieldsSelection<Tip, R> | undefined,
    ) => Observable<FieldsSelection<Tip, R> | undefined>;
  };
  creativesTotal: TotalValueObservableChain & {
    get: <R extends TotalValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<TotalValue, R>,
    ) => Observable<FieldsSelection<TotalValue, R>>;
  };
  adsTotal: TotalValueObservableChain & {
    get: <R extends TotalValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<TotalValue, R>,
    ) => Observable<FieldsSelection<TotalValue, R>>;
  };
  spendTotal: TotalValueObservableChain & {
    get: <R extends TotalValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<TotalValue, R>,
    ) => Observable<FieldsSelection<TotalValue, R>>;
  };
  impressionsTotal: TotalValueObservableChain & {
    get: <R extends TotalValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<TotalValue, R>,
    ) => Observable<FieldsSelection<TotalValue, R>>;
  };
  engagementRate: MetricVarianceObservableChain & {
    get: <R extends MetricVarianceRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricVariance, R>,
    ) => Observable<FieldsSelection<MetricVariance, R>>;
  };
  costPerEngagement: MetricVarianceObservableChain & {
    get: <R extends MetricVarianceRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricVariance, R>,
    ) => Observable<FieldsSelection<MetricVariance, R>>;
  };
  videoThroughRate: MetricVarianceObservableChain & {
    get: <R extends MetricVarianceRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricVariance, R>,
    ) => Observable<FieldsSelection<MetricVariance, R>>;
  };
  clickThroughRate: MetricVarianceObservableChain & {
    get: <R extends MetricVarianceRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricVariance, R>,
    ) => Observable<FieldsSelection<MetricVariance, R>>;
  };
  leadRate: MetricVarianceObservableChain & {
    get: <R extends MetricVarianceRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricVariance, R>,
    ) => Observable<FieldsSelection<MetricVariance, R>>;
  };
  conversionRate: MetricVarianceObservableChain & {
    get: <R extends MetricVarianceRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricVariance, R>,
    ) => Observable<FieldsSelection<MetricVariance, R>>;
  };
  appInstallRate: MetricVarianceObservableChain & {
    get: <R extends MetricVarianceRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricVariance, R>,
    ) => Observable<FieldsSelection<MetricVariance, R>>;
  };
  costPerMille: MetricVarianceObservableChain & {
    get: <R extends MetricVarianceRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricVariance, R>,
    ) => Observable<FieldsSelection<MetricVariance, R>>;
  };
  costPerClick: MetricVarianceObservableChain & {
    get: <R extends MetricVarianceRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricVariance, R>,
    ) => Observable<FieldsSelection<MetricVariance, R>>;
  };
  costPerLead: MetricVarianceObservableChain & {
    get: <R extends MetricVarianceRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricVariance, R>,
    ) => Observable<FieldsSelection<MetricVariance, R>>;
  };
  costPerAcquisition: MetricVarianceObservableChain & {
    get: <R extends MetricVarianceRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricVariance, R>,
    ) => Observable<FieldsSelection<MetricVariance, R>>;
  };
  costPerAppInstall: MetricVarianceObservableChain & {
    get: <R extends MetricVarianceRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricVariance, R>,
    ) => Observable<FieldsSelection<MetricVariance, R>>;
  };
  costPerCompletedView: MetricVarianceObservableChain & {
    get: <R extends MetricVarianceRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricVariance, R>,
    ) => Observable<FieldsSelection<MetricVariance, R>>;
  };
  frequency: MetricVarianceObservableChain & {
    get: <R extends MetricVarianceRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricVariance, R>,
    ) => Observable<FieldsSelection<MetricVariance, R>>;
  };
}

export interface TipPromiseChain {
  value: {
    get: (
      request?: boolean | number,
      defaultValue?: TipValue,
    ) => Promise<TipValue>;
  };
  detail: {
    get: (
      request?: boolean | number,
      defaultValue?: TipDetail,
    ) => Promise<TipDetail>;
  };
  placeHolders: {
    get: <R extends TipPlaceHolderRequest>(
      request: R,
      defaultValue?: FieldsSelection<TipPlaceHolder, R>[] | undefined,
    ) => Promise<FieldsSelection<TipPlaceHolder, R>[] | undefined>;
  };
}

export interface TipObservableChain {
  value: {
    get: (
      request?: boolean | number,
      defaultValue?: TipValue,
    ) => Observable<TipValue>;
  };
  detail: {
    get: (
      request?: boolean | number,
      defaultValue?: TipDetail,
    ) => Observable<TipDetail>;
  };
  placeHolders: {
    get: <R extends TipPlaceHolderRequest>(
      request: R,
      defaultValue?: FieldsSelection<TipPlaceHolder, R>[] | undefined,
    ) => Observable<FieldsSelection<TipPlaceHolder, R>[] | undefined>;
  };
}

export interface TipPlaceHolderPromiseChain {
  value: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Promise<Scalars["String"]>;
  };
  key: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Promise<Scalars["String"]>;
  };
  type: {
    get: (
      request?: boolean | number,
      defaultValue?: PlaceHolderType,
    ) => Promise<PlaceHolderType>;
  };
}

export interface TipPlaceHolderObservableChain {
  value: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Observable<Scalars["String"]>;
  };
  key: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Observable<Scalars["String"]>;
  };
  type: {
    get: (
      request?: boolean | number,
      defaultValue?: PlaceHolderType,
    ) => Observable<PlaceHolderType>;
  };
}

export interface TotalValuePromiseChain {
  value: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Promise<Scalars["Float"] | undefined>;
  };
  total: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Promise<Scalars["Float"] | undefined>;
  };
}

export interface TotalValueObservableChain {
  value: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Observable<Scalars["Float"] | undefined>;
  };
  total: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Observable<Scalars["Float"] | undefined>;
  };
}

export interface AdProfilePromiseChain {
  advertisementId: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined,
    ) => Promise<Scalars["String"] | undefined>;
  };
  name: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined,
    ) => Promise<Scalars["String"] | undefined>;
  };
  fileType: {
    get: (
      request?: boolean | number,
      defaultValue?: FileType | undefined,
    ) => Promise<FileType | undefined>;
  };
  url: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined,
    ) => Promise<Scalars["String"] | undefined>;
  };
  campaignObjective: {
    get: (
      request?: boolean | number,
      defaultValue?: CampaignObjective | undefined,
    ) => Promise<CampaignObjective | undefined>;
  };
  channel: {
    get: (
      request?: boolean | number,
      defaultValue?: Channel[] | undefined,
    ) => Promise<Channel[] | undefined>;
  };
  heatMapUrl: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined,
    ) => Promise<Scalars["String"] | undefined>;
  };
  metrics: MetricsPromiseChain & {
    get: <R extends MetricsRequest>(
      request: R,
      defaultValue?: FieldsSelection<Metrics, R> | undefined,
    ) => Promise<FieldsSelection<Metrics, R> | undefined>;
  };
  tags: {
    get: <R extends TagRequest>(
      request: R,
      defaultValue?: FieldsSelection<Tag, R>[] | undefined,
    ) => Promise<FieldsSelection<Tag, R>[] | undefined>;
  };
}

export interface AdProfileObservableChain {
  advertisementId: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined,
    ) => Observable<Scalars["String"] | undefined>;
  };
  name: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined,
    ) => Observable<Scalars["String"] | undefined>;
  };
  fileType: {
    get: (
      request?: boolean | number,
      defaultValue?: FileType | undefined,
    ) => Observable<FileType | undefined>;
  };
  url: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined,
    ) => Observable<Scalars["String"] | undefined>;
  };
  campaignObjective: {
    get: (
      request?: boolean | number,
      defaultValue?: CampaignObjective | undefined,
    ) => Observable<CampaignObjective | undefined>;
  };
  channel: {
    get: (
      request?: boolean | number,
      defaultValue?: Channel[] | undefined,
    ) => Observable<Channel[] | undefined>;
  };
  heatMapUrl: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined,
    ) => Observable<Scalars["String"] | undefined>;
  };
  metrics: MetricsObservableChain & {
    get: <R extends MetricsRequest>(
      request: R,
      defaultValue?: FieldsSelection<Metrics, R> | undefined,
    ) => Observable<FieldsSelection<Metrics, R> | undefined>;
  };
  tags: {
    get: <R extends TagRequest>(
      request: R,
      defaultValue?: FieldsSelection<Tag, R>[] | undefined,
    ) => Observable<FieldsSelection<Tag, R>[] | undefined>;
  };
}

export interface TagSummaryPromiseChain {
  campaignObjective: {
    get: (
      request?: boolean | number,
      defaultValue?: CampaignObjective | undefined,
    ) => Promise<CampaignObjective | undefined>;
  };
  channel: {
    get: (
      request?: boolean | number,
      defaultValue?: Channel | undefined,
    ) => Promise<Channel | undefined>;
  };
  creativesTotal: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Promise<Scalars["Float"] | undefined>;
  };
  adsTotal: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Promise<Scalars["Float"] | undefined>;
  };
  spendTotal: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Promise<Scalars["Float"] | undefined>;
  };
  frequency: MetricRangePromiseChain & {
    get: <R extends MetricRangeRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricRange, R> | undefined,
    ) => Promise<FieldsSelection<MetricRange, R> | undefined>;
  };
  costPerMile: MetricRangePromiseChain & {
    get: <R extends MetricRangeRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricRange, R> | undefined,
    ) => Promise<FieldsSelection<MetricRange, R> | undefined>;
  };
  engagementRate: MetricRangePromiseChain & {
    get: <R extends MetricRangeRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricRange, R> | undefined,
    ) => Promise<FieldsSelection<MetricRange, R> | undefined>;
  };
  costPerEngagement: MetricRangePromiseChain & {
    get: <R extends MetricRangeRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricRange, R> | undefined,
    ) => Promise<FieldsSelection<MetricRange, R> | undefined>;
  };
  videoThroughRate: MetricRangePromiseChain & {
    get: <R extends MetricRangeRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricRange, R> | undefined,
    ) => Promise<FieldsSelection<MetricRange, R> | undefined>;
  };
  costPerCompletedVideo: MetricRangePromiseChain & {
    get: <R extends MetricRangeRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricRange, R> | undefined,
    ) => Promise<FieldsSelection<MetricRange, R> | undefined>;
  };
  clickThroughRate: MetricRangePromiseChain & {
    get: <R extends MetricRangeRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricRange, R> | undefined,
    ) => Promise<FieldsSelection<MetricRange, R> | undefined>;
  };
  costPerClick: MetricRangePromiseChain & {
    get: <R extends MetricRangeRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricRange, R> | undefined,
    ) => Promise<FieldsSelection<MetricRange, R> | undefined>;
  };
  leadRate: MetricRangePromiseChain & {
    get: <R extends MetricRangeRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricRange, R> | undefined,
    ) => Promise<FieldsSelection<MetricRange, R> | undefined>;
  };
  costPerLead: MetricRangePromiseChain & {
    get: <R extends MetricRangeRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricRange, R> | undefined,
    ) => Promise<FieldsSelection<MetricRange, R> | undefined>;
  };
  conversionRate: MetricRangePromiseChain & {
    get: <R extends MetricRangeRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricRange, R> | undefined,
    ) => Promise<FieldsSelection<MetricRange, R> | undefined>;
  };
  costPerAcquisition: MetricRangePromiseChain & {
    get: <R extends MetricRangeRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricRange, R> | undefined,
    ) => Promise<FieldsSelection<MetricRange, R> | undefined>;
  };
  appInstallRate: MetricRangePromiseChain & {
    get: <R extends MetricRangeRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricRange, R> | undefined,
    ) => Promise<FieldsSelection<MetricRange, R> | undefined>;
  };
  costPerAppInstall: MetricRangePromiseChain & {
    get: <R extends MetricRangeRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricRange, R> | undefined,
    ) => Promise<FieldsSelection<MetricRange, R> | undefined>;
  };
}

export interface TagSummaryObservableChain {
  campaignObjective: {
    get: (
      request?: boolean | number,
      defaultValue?: CampaignObjective | undefined,
    ) => Observable<CampaignObjective | undefined>;
  };
  channel: {
    get: (
      request?: boolean | number,
      defaultValue?: Channel | undefined,
    ) => Observable<Channel | undefined>;
  };
  creativesTotal: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Observable<Scalars["Float"] | undefined>;
  };
  adsTotal: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Observable<Scalars["Float"] | undefined>;
  };
  spendTotal: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Observable<Scalars["Float"] | undefined>;
  };
  frequency: MetricRangeObservableChain & {
    get: <R extends MetricRangeRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricRange, R> | undefined,
    ) => Observable<FieldsSelection<MetricRange, R> | undefined>;
  };
  costPerMile: MetricRangeObservableChain & {
    get: <R extends MetricRangeRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricRange, R> | undefined,
    ) => Observable<FieldsSelection<MetricRange, R> | undefined>;
  };
  engagementRate: MetricRangeObservableChain & {
    get: <R extends MetricRangeRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricRange, R> | undefined,
    ) => Observable<FieldsSelection<MetricRange, R> | undefined>;
  };
  costPerEngagement: MetricRangeObservableChain & {
    get: <R extends MetricRangeRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricRange, R> | undefined,
    ) => Observable<FieldsSelection<MetricRange, R> | undefined>;
  };
  videoThroughRate: MetricRangeObservableChain & {
    get: <R extends MetricRangeRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricRange, R> | undefined,
    ) => Observable<FieldsSelection<MetricRange, R> | undefined>;
  };
  costPerCompletedVideo: MetricRangeObservableChain & {
    get: <R extends MetricRangeRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricRange, R> | undefined,
    ) => Observable<FieldsSelection<MetricRange, R> | undefined>;
  };
  clickThroughRate: MetricRangeObservableChain & {
    get: <R extends MetricRangeRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricRange, R> | undefined,
    ) => Observable<FieldsSelection<MetricRange, R> | undefined>;
  };
  costPerClick: MetricRangeObservableChain & {
    get: <R extends MetricRangeRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricRange, R> | undefined,
    ) => Observable<FieldsSelection<MetricRange, R> | undefined>;
  };
  leadRate: MetricRangeObservableChain & {
    get: <R extends MetricRangeRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricRange, R> | undefined,
    ) => Observable<FieldsSelection<MetricRange, R> | undefined>;
  };
  costPerLead: MetricRangeObservableChain & {
    get: <R extends MetricRangeRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricRange, R> | undefined,
    ) => Observable<FieldsSelection<MetricRange, R> | undefined>;
  };
  conversionRate: MetricRangeObservableChain & {
    get: <R extends MetricRangeRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricRange, R> | undefined,
    ) => Observable<FieldsSelection<MetricRange, R> | undefined>;
  };
  costPerAcquisition: MetricRangeObservableChain & {
    get: <R extends MetricRangeRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricRange, R> | undefined,
    ) => Observable<FieldsSelection<MetricRange, R> | undefined>;
  };
  appInstallRate: MetricRangeObservableChain & {
    get: <R extends MetricRangeRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricRange, R> | undefined,
    ) => Observable<FieldsSelection<MetricRange, R> | undefined>;
  };
  costPerAppInstall: MetricRangeObservableChain & {
    get: <R extends MetricRangeRequest>(
      request: R,
      defaultValue?: FieldsSelection<MetricRange, R> | undefined,
    ) => Observable<FieldsSelection<MetricRange, R> | undefined>;
  };
}

export interface MetricRangePromiseChain {
  max: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"],
    ) => Promise<Scalars["Float"]>;
  };
  min: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"],
    ) => Promise<Scalars["Float"]>;
  };
}

export interface MetricRangeObservableChain {
  max: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"],
    ) => Observable<Scalars["Float"]>;
  };
  min: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"],
    ) => Observable<Scalars["Float"]>;
  };
}

export interface TagMetricPromiseChain {
  tag: TagPromiseChain & {
    get: <R extends TagRequest>(
      request: R,
      defaultValue?: FieldsSelection<Tag, R>,
    ) => Promise<FieldsSelection<Tag, R>>;
  };
  channel: {
    get: (
      request?: boolean | number,
      defaultValue?: Channel | undefined,
    ) => Promise<Channel | undefined>;
  };
  metrics: MetricsPromiseChain & {
    get: <R extends MetricsRequest>(
      request: R,
      defaultValue?: FieldsSelection<Metrics, R>,
    ) => Promise<FieldsSelection<Metrics, R>>;
  };
}

export interface TagMetricObservableChain {
  tag: TagObservableChain & {
    get: <R extends TagRequest>(
      request: R,
      defaultValue?: FieldsSelection<Tag, R>,
    ) => Observable<FieldsSelection<Tag, R>>;
  };
  channel: {
    get: (
      request?: boolean | number,
      defaultValue?: Channel | undefined,
    ) => Observable<Channel | undefined>;
  };
  metrics: MetricsObservableChain & {
    get: <R extends MetricsRequest>(
      request: R,
      defaultValue?: FieldsSelection<Metrics, R>,
    ) => Observable<FieldsSelection<Metrics, R>>;
  };
}

export interface DataPerformanceEntryPromiseChain {
  date: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Promise<Scalars["String"]>;
  };
  data: SerialDataPromiseChain & {
    get: <R extends SerialDataRequest>(
      request: R,
      defaultValue?: FieldsSelection<SerialData, R>,
    ) => Promise<FieldsSelection<SerialData, R>>;
  };
}

export interface DataPerformanceEntryObservableChain {
  date: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Observable<Scalars["String"]>;
  };
  data: SerialDataObservableChain & {
    get: <R extends SerialDataRequest>(
      request: R,
      defaultValue?: FieldsSelection<SerialData, R>,
    ) => Observable<FieldsSelection<SerialData, R>>;
  };
}

export interface SerialDataPromiseChain {
  main_0: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Promise<Scalars["Float"] | undefined>;
  };
  metric_0: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Promise<Scalars["Float"] | undefined>;
  };
  main_1: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Promise<Scalars["Float"] | undefined>;
  };
  metric_1: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Promise<Scalars["Float"] | undefined>;
  };
  main_2: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Promise<Scalars["Float"] | undefined>;
  };
  metric_2: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Promise<Scalars["Float"] | undefined>;
  };
  main_3: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Promise<Scalars["Float"] | undefined>;
  };
  metric_3: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Promise<Scalars["Float"] | undefined>;
  };
  main_4: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Promise<Scalars["Float"] | undefined>;
  };
}

export interface SerialDataObservableChain {
  main_0: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Observable<Scalars["Float"] | undefined>;
  };
  metric_0: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Observable<Scalars["Float"] | undefined>;
  };
  main_1: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Observable<Scalars["Float"] | undefined>;
  };
  metric_1: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Observable<Scalars["Float"] | undefined>;
  };
  main_2: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Observable<Scalars["Float"] | undefined>;
  };
  metric_2: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Observable<Scalars["Float"] | undefined>;
  };
  main_3: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Observable<Scalars["Float"] | undefined>;
  };
  metric_3: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Observable<Scalars["Float"] | undefined>;
  };
  main_4: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Observable<Scalars["Float"] | undefined>;
  };
}

export interface PerformanceDataEntryPromiseChain {
  date: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Promise<Scalars["String"]>;
  };
  data: {
    get: <R extends SerialEntryRequest>(
      request: R,
      defaultValue?: FieldsSelection<SerialEntry, R>[],
    ) => Promise<FieldsSelection<SerialEntry, R>[]>;
  };
}

export interface PerformanceDataEntryObservableChain {
  date: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Observable<Scalars["String"]>;
  };
  data: {
    get: <R extends SerialEntryRequest>(
      request: R,
      defaultValue?: FieldsSelection<SerialEntry, R>[],
    ) => Observable<FieldsSelection<SerialEntry, R>[]>;
  };
}

export interface SerialEntryPromiseChain {
  key: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Promise<Scalars["String"]>;
  };
  main: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Promise<Scalars["Float"] | undefined>;
  };
  metric: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Promise<Scalars["Float"] | undefined>;
  };
}

export interface SerialEntryObservableChain {
  key: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Observable<Scalars["String"]>;
  };
  main: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Observable<Scalars["Float"] | undefined>;
  };
  metric: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Observable<Scalars["Float"] | undefined>;
  };
}

export interface CreativeProfilePromiseChain {
  creativeId: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined,
    ) => Promise<Scalars["String"] | undefined>;
  };
  name: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined,
    ) => Promise<Scalars["String"] | undefined>;
  };
  fileType: {
    get: (
      request?: boolean | number,
      defaultValue?: FileType | undefined,
    ) => Promise<FileType | undefined>;
  };
  url: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined,
    ) => Promise<Scalars["String"] | undefined>;
  };
  clipEmbeddingUrl: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined,
    ) => Promise<Scalars["String"] | undefined>;
  };
  heatMapUrl: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined,
    ) => Promise<Scalars["String"] | undefined>;
  };
  metrics: CreativeMetricsPromiseChain & {
    get: <R extends CreativeMetricsRequest>(
      request: R,
      defaultValue?: FieldsSelection<CreativeMetrics, R> | undefined,
    ) => Promise<FieldsSelection<CreativeMetrics, R> | undefined>;
  };
  tags: {
    get: <R extends TagRequest>(
      request: R,
      defaultValue?: FieldsSelection<Tag, R>[] | undefined,
    ) => Promise<FieldsSelection<Tag, R>[] | undefined>;
  };
}

export interface CreativeProfileObservableChain {
  creativeId: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined,
    ) => Observable<Scalars["String"] | undefined>;
  };
  name: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined,
    ) => Observable<Scalars["String"] | undefined>;
  };
  fileType: {
    get: (
      request?: boolean | number,
      defaultValue?: FileType | undefined,
    ) => Observable<FileType | undefined>;
  };
  url: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined,
    ) => Observable<Scalars["String"] | undefined>;
  };
  clipEmbeddingUrl: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined,
    ) => Observable<Scalars["String"] | undefined>;
  };
  heatMapUrl: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined,
    ) => Observable<Scalars["String"] | undefined>;
  };
  metrics: CreativeMetricsObservableChain & {
    get: <R extends CreativeMetricsRequest>(
      request: R,
      defaultValue?: FieldsSelection<CreativeMetrics, R> | undefined,
    ) => Observable<FieldsSelection<CreativeMetrics, R> | undefined>;
  };
  tags: {
    get: <R extends TagRequest>(
      request: R,
      defaultValue?: FieldsSelection<Tag, R>[] | undefined,
    ) => Observable<FieldsSelection<Tag, R>[] | undefined>;
  };
}

export interface CreativeMetricsPromiseChain {
  adRecallRate: CreativeMetricValuePromiseChain & {
    get: <R extends CreativeMetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<CreativeMetricValue, R> | undefined,
    ) => Promise<FieldsSelection<CreativeMetricValue, R> | undefined>;
  };
  bai: CreativeMetricValuePromiseChain & {
    get: <R extends CreativeMetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<CreativeMetricValue, R> | undefined,
    ) => Promise<FieldsSelection<CreativeMetricValue, R> | undefined>;
  };
  fiveSecondsIndex: CreativeMetricValuePromiseChain & {
    get: <R extends CreativeMetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<CreativeMetricValue, R> | undefined,
    ) => Promise<FieldsSelection<CreativeMetricValue, R> | undefined>;
  };
  textSaliencyScore: CreativeMetricValuePromiseChain & {
    get: <R extends CreativeMetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<CreativeMetricValue, R> | undefined,
    ) => Promise<FieldsSelection<CreativeMetricValue, R> | undefined>;
  };
  logoSaliencyScore: CreativeMetricValuePromiseChain & {
    get: <R extends CreativeMetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<CreativeMetricValue, R> | undefined,
    ) => Promise<FieldsSelection<CreativeMetricValue, R> | undefined>;
  };
}

export interface CreativeMetricsObservableChain {
  adRecallRate: CreativeMetricValueObservableChain & {
    get: <R extends CreativeMetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<CreativeMetricValue, R> | undefined,
    ) => Observable<FieldsSelection<CreativeMetricValue, R> | undefined>;
  };
  bai: CreativeMetricValueObservableChain & {
    get: <R extends CreativeMetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<CreativeMetricValue, R> | undefined,
    ) => Observable<FieldsSelection<CreativeMetricValue, R> | undefined>;
  };
  fiveSecondsIndex: CreativeMetricValueObservableChain & {
    get: <R extends CreativeMetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<CreativeMetricValue, R> | undefined,
    ) => Observable<FieldsSelection<CreativeMetricValue, R> | undefined>;
  };
  textSaliencyScore: CreativeMetricValueObservableChain & {
    get: <R extends CreativeMetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<CreativeMetricValue, R> | undefined,
    ) => Observable<FieldsSelection<CreativeMetricValue, R> | undefined>;
  };
  logoSaliencyScore: CreativeMetricValueObservableChain & {
    get: <R extends CreativeMetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<CreativeMetricValue, R> | undefined,
    ) => Observable<FieldsSelection<CreativeMetricValue, R> | undefined>;
  };
}

export interface CreativeMetricValuePromiseChain {
  value: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Promise<Scalars["Float"] | undefined>;
  };
  labeledValue: {
    get: (
      request?: boolean | number,
      defaultValue?: LabeledMetricValue | undefined,
    ) => Promise<LabeledMetricValue | undefined>;
  };
}

export interface CreativeMetricValueObservableChain {
  value: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Observable<Scalars["Float"] | undefined>;
  };
  labeledValue: {
    get: (
      request?: boolean | number,
      defaultValue?: LabeledMetricValue | undefined,
    ) => Observable<LabeledMetricValue | undefined>;
  };
}

export interface ChannelPerformanceMetricsPromiseChain {
  channel: {
    get: (
      request?: boolean | number,
      defaultValue?: Channel,
    ) => Promise<Channel>;
  };
  metrics: PerformanceMetricsPromiseChain & {
    get: <R extends PerformanceMetricsRequest>(
      request: R,
      defaultValue?: FieldsSelection<PerformanceMetrics, R> | undefined,
    ) => Promise<FieldsSelection<PerformanceMetrics, R> | undefined>;
  };
}

export interface ChannelPerformanceMetricsObservableChain {
  channel: {
    get: (
      request?: boolean | number,
      defaultValue?: Channel,
    ) => Observable<Channel>;
  };
  metrics: PerformanceMetricsObservableChain & {
    get: <R extends PerformanceMetricsRequest>(
      request: R,
      defaultValue?: FieldsSelection<PerformanceMetrics, R> | undefined,
    ) => Observable<FieldsSelection<PerformanceMetrics, R> | undefined>;
  };
}

export interface PerformanceMetricsPromiseChain {
  engagementRate: CreativeMetricValuePromiseChain & {
    get: <R extends CreativeMetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<CreativeMetricValue, R> | undefined,
    ) => Promise<FieldsSelection<CreativeMetricValue, R> | undefined>;
  };
  videoThroughRate: CreativeMetricValuePromiseChain & {
    get: <R extends CreativeMetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<CreativeMetricValue, R> | undefined,
    ) => Promise<FieldsSelection<CreativeMetricValue, R> | undefined>;
  };
  clickThroughRate: CreativeMetricValuePromiseChain & {
    get: <R extends CreativeMetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<CreativeMetricValue, R> | undefined,
    ) => Promise<FieldsSelection<CreativeMetricValue, R> | undefined>;
  };
}

export interface PerformanceMetricsObservableChain {
  engagementRate: CreativeMetricValueObservableChain & {
    get: <R extends CreativeMetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<CreativeMetricValue, R> | undefined,
    ) => Observable<FieldsSelection<CreativeMetricValue, R> | undefined>;
  };
  videoThroughRate: CreativeMetricValueObservableChain & {
    get: <R extends CreativeMetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<CreativeMetricValue, R> | undefined,
    ) => Observable<FieldsSelection<CreativeMetricValue, R> | undefined>;
  };
  clickThroughRate: CreativeMetricValueObservableChain & {
    get: <R extends CreativeMetricValueRequest>(
      request: R,
      defaultValue?: FieldsSelection<CreativeMetricValue, R> | undefined,
    ) => Observable<FieldsSelection<CreativeMetricValue, R> | undefined>;
  };
}

export interface CreativeLibraryFolderPromiseChain {
  id: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"],
    ) => Promise<Scalars["Float"]>;
  };
  parentId: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Promise<Scalars["Float"] | undefined>;
  };
  path: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Promise<Scalars["String"]>;
  };
  folders: {
    get: <R extends CreativeLibraryFolderRequest>(
      request: R,
      defaultValue?: FieldsSelection<CreativeLibraryFolder, R>[] | undefined,
    ) => Promise<FieldsSelection<CreativeLibraryFolder, R>[] | undefined>;
  };
  creatives: {
    get: <R extends CreativeLibraryItemRequest>(
      request: R,
      defaultValue?: FieldsSelection<CreativeLibraryItem, R>[] | undefined,
    ) => Promise<FieldsSelection<CreativeLibraryItem, R>[] | undefined>;
  };
  createdAt: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["DateTime"],
    ) => Promise<Scalars["DateTime"]>;
  };
  updatedAt: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["DateTime"],
    ) => Promise<Scalars["DateTime"]>;
  };
}

export interface CreativeLibraryFolderObservableChain {
  id: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"],
    ) => Observable<Scalars["Float"]>;
  };
  parentId: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined,
    ) => Observable<Scalars["Float"] | undefined>;
  };
  path: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Observable<Scalars["String"]>;
  };
  folders: {
    get: <R extends CreativeLibraryFolderRequest>(
      request: R,
      defaultValue?: FieldsSelection<CreativeLibraryFolder, R>[] | undefined,
    ) => Observable<FieldsSelection<CreativeLibraryFolder, R>[] | undefined>;
  };
  creatives: {
    get: <R extends CreativeLibraryItemRequest>(
      request: R,
      defaultValue?: FieldsSelection<CreativeLibraryItem, R>[] | undefined,
    ) => Observable<FieldsSelection<CreativeLibraryItem, R>[] | undefined>;
  };
  createdAt: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["DateTime"],
    ) => Observable<Scalars["DateTime"]>;
  };
  updatedAt: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["DateTime"],
    ) => Observable<Scalars["DateTime"]>;
  };
}

export interface CreativeLibraryItemPromiseChain {
  creativeId: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Promise<Scalars["String"]>;
  };
  name: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Promise<Scalars["String"]>;
  };
  fileType: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Promise<Scalars["String"]>;
  };
  url: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Promise<Scalars["String"]>;
  };
  clipEmbeddingUrl: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined,
    ) => Promise<Scalars["String"] | undefined>;
  };
  status: {
    get: (
      request?: boolean | number,
      defaultValue?: CreativeStatus,
    ) => Promise<CreativeStatus>;
  };
  createdAt: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["DateTime"],
    ) => Promise<Scalars["DateTime"]>;
  };
  updatedAt: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["DateTime"],
    ) => Promise<Scalars["DateTime"]>;
  };
}

export interface CreativeLibraryItemObservableChain {
  creativeId: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Observable<Scalars["String"]>;
  };
  name: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Observable<Scalars["String"]>;
  };
  fileType: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Observable<Scalars["String"]>;
  };
  url: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Observable<Scalars["String"]>;
  };
  clipEmbeddingUrl: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined,
    ) => Observable<Scalars["String"] | undefined>;
  };
  status: {
    get: (
      request?: boolean | number,
      defaultValue?: CreativeStatus,
    ) => Observable<CreativeStatus>;
  };
  createdAt: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["DateTime"],
    ) => Observable<Scalars["DateTime"]>;
  };
  updatedAt: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["DateTime"],
    ) => Observable<Scalars["DateTime"]>;
  };
}

export interface UserPromiseChain {
  id: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["ID"],
    ) => Promise<Scalars["ID"]>;
  };
  createdAt: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["DateTime"],
    ) => Promise<Scalars["DateTime"]>;
  };
  updatedAt: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["DateTime"],
    ) => Promise<Scalars["DateTime"]>;
  };
  email: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Promise<Scalars["String"]>;
  };
  name: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined,
    ) => Promise<Scalars["String"] | undefined>;
  };
  isAdmin: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Boolean"],
    ) => Promise<Scalars["Boolean"]>;
  };
  businessAccount: BusinessAccountPromiseChain & {
    get: <R extends BusinessAccountRequest>(
      request: R,
      defaultValue?: FieldsSelection<BusinessAccount, R> | undefined,
    ) => Promise<FieldsSelection<BusinessAccount, R> | undefined>;
  };
  termsAndConditionsAccepted: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["DateTime"] | undefined,
    ) => Promise<Scalars["DateTime"] | undefined>;
  };
  emailVerified: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Boolean"],
    ) => Promise<Scalars["Boolean"]>;
  };
  isContractValid: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Boolean"],
    ) => Promise<Scalars["Boolean"]>;
  };
}

export interface UserObservableChain {
  id: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["ID"],
    ) => Observable<Scalars["ID"]>;
  };
  createdAt: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["DateTime"],
    ) => Observable<Scalars["DateTime"]>;
  };
  updatedAt: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["DateTime"],
    ) => Observable<Scalars["DateTime"]>;
  };
  email: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Observable<Scalars["String"]>;
  };
  name: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined,
    ) => Observable<Scalars["String"] | undefined>;
  };
  isAdmin: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Boolean"],
    ) => Observable<Scalars["Boolean"]>;
  };
  businessAccount: BusinessAccountObservableChain & {
    get: <R extends BusinessAccountRequest>(
      request: R,
      defaultValue?: FieldsSelection<BusinessAccount, R> | undefined,
    ) => Observable<FieldsSelection<BusinessAccount, R> | undefined>;
  };
  termsAndConditionsAccepted: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["DateTime"] | undefined,
    ) => Observable<Scalars["DateTime"] | undefined>;
  };
  emailVerified: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Boolean"],
    ) => Observable<Scalars["Boolean"]>;
  };
  isContractValid: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Boolean"],
    ) => Observable<Scalars["Boolean"]>;
  };
}

export interface BusinessAccountPromiseChain {
  id: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["ID"],
    ) => Promise<Scalars["ID"]>;
  };
  createdAt: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["DateTime"],
    ) => Promise<Scalars["DateTime"]>;
  };
  updatedAt: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["DateTime"],
    ) => Promise<Scalars["DateTime"]>;
  };
  businessName: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Promise<Scalars["String"]>;
  };
  users: {
    get: <R extends UserRequest>(
      request: R,
      defaultValue?: FieldsSelection<User, R>[],
    ) => Promise<FieldsSelection<User, R>[]>;
  };
  brands: {
    get: <R extends BrandRequest>(
      request: R,
      defaultValue?: FieldsSelection<Brand, R>[] | undefined,
    ) => Promise<FieldsSelection<Brand, R>[] | undefined>;
  };
  businessLogoUrl: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined,
    ) => Promise<Scalars["String"] | undefined>;
  };
  businessPhone: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined,
    ) => Promise<Scalars["String"] | undefined>;
  };
  website: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined,
    ) => Promise<Scalars["String"] | undefined>;
  };
  address: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined,
    ) => Promise<Scalars["String"] | undefined>;
  };
}

export interface BusinessAccountObservableChain {
  id: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["ID"],
    ) => Observable<Scalars["ID"]>;
  };
  createdAt: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["DateTime"],
    ) => Observable<Scalars["DateTime"]>;
  };
  updatedAt: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["DateTime"],
    ) => Observable<Scalars["DateTime"]>;
  };
  businessName: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Observable<Scalars["String"]>;
  };
  users: {
    get: <R extends UserRequest>(
      request: R,
      defaultValue?: FieldsSelection<User, R>[],
    ) => Observable<FieldsSelection<User, R>[]>;
  };
  brands: {
    get: <R extends BrandRequest>(
      request: R,
      defaultValue?: FieldsSelection<Brand, R>[] | undefined,
    ) => Observable<FieldsSelection<Brand, R>[] | undefined>;
  };
  businessLogoUrl: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined,
    ) => Observable<Scalars["String"] | undefined>;
  };
  businessPhone: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined,
    ) => Observable<Scalars["String"] | undefined>;
  };
  website: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined,
    ) => Observable<Scalars["String"] | undefined>;
  };
  address: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined,
    ) => Observable<Scalars["String"] | undefined>;
  };
}

export interface BrandPromiseChain {
  id: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["ID"],
    ) => Promise<Scalars["ID"]>;
  };
  createdAt: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["DateTime"],
    ) => Promise<Scalars["DateTime"]>;
  };
  updatedAt: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["DateTime"],
    ) => Promise<Scalars["DateTime"]>;
  };
  name: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Promise<Scalars["String"]>;
  };
  logoUrl: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined,
    ) => Promise<Scalars["String"] | undefined>;
  };
  sector: {
    get: (
      request?: boolean | number,
      defaultValue?: Sector[] | undefined,
    ) => Promise<Sector[] | undefined>;
  };
  adAccounts: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"][] | undefined,
    ) => Promise<Scalars["String"][] | undefined>;
  };
  socialAccounts: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"][] | undefined,
    ) => Promise<Scalars["String"][] | undefined>;
  };
  status: {
    get: (
      request?: boolean | number,
      defaultValue?: BrandStatus | undefined,
    ) => Promise<BrandStatus | undefined>;
  };
  businessAccount: BusinessAccountPromiseChain & {
    get: <R extends BusinessAccountRequest>(
      request: R,
      defaultValue?: FieldsSelection<BusinessAccount, R>,
    ) => Promise<FieldsSelection<BusinessAccount, R>>;
  };
}

export interface BrandObservableChain {
  id: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["ID"],
    ) => Observable<Scalars["ID"]>;
  };
  createdAt: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["DateTime"],
    ) => Observable<Scalars["DateTime"]>;
  };
  updatedAt: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["DateTime"],
    ) => Observable<Scalars["DateTime"]>;
  };
  name: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Observable<Scalars["String"]>;
  };
  logoUrl: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined,
    ) => Observable<Scalars["String"] | undefined>;
  };
  sector: {
    get: (
      request?: boolean | number,
      defaultValue?: Sector[] | undefined,
    ) => Observable<Sector[] | undefined>;
  };
  adAccounts: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"][] | undefined,
    ) => Observable<Scalars["String"][] | undefined>;
  };
  socialAccounts: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"][] | undefined,
    ) => Observable<Scalars["String"][] | undefined>;
  };
  status: {
    get: (
      request?: boolean | number,
      defaultValue?: BrandStatus | undefined,
    ) => Observable<BrandStatus | undefined>;
  };
  businessAccount: BusinessAccountObservableChain & {
    get: <R extends BusinessAccountRequest>(
      request: R,
      defaultValue?: FieldsSelection<BusinessAccount, R>,
    ) => Observable<FieldsSelection<BusinessAccount, R>>;
  };
}

export interface MutationPromiseChain {
  /** Creates a business Account for the provided business admin */
  createBrand: (args: {
    input: CreateBrandInput;
  }) => BrandPromiseChain & {
    get: <R extends BrandRequest>(
      request: R,
      defaultValue?: FieldsSelection<Brand, R>,
    ) => Promise<FieldsSelection<Brand, R>>;
  };

  /** Updates optional fields of a brand */
  updateBrand: (args: {
    input: UpdateBrandInput;
    brandId: Scalars["String"];
  }) => BrandPromiseChain & {
    get: <R extends BrandRequest>(
      request: R,
      defaultValue?: FieldsSelection<Brand, R>,
    ) => Promise<FieldsSelection<Brand, R>>;
  };

  /** Updates assets of a brand */
  updateBrandAssets: (args: {
    input: BrandAssetsInput;
    brandId: Scalars["String"];
  }) => AssetChecksPromiseChain & {
    get: <R extends AssetChecksRequest>(
      request: R,
      defaultValue?: FieldsSelection<AssetChecks, R>,
    ) => Promise<FieldsSelection<AssetChecks, R>>;
  };

  /** Uploads brand logo */
  requestLogoUploadData: (args: {
    input: UploadRequestInput;
  }) => UploadDataResponsePromiseChain & {
    get: <R extends UploadDataResponseRequest>(
      request: R,
      defaultValue?: FieldsSelection<UploadDataResponse, R>,
    ) => Promise<FieldsSelection<UploadDataResponse, R>>;
  };

  /** Creates a business Account for the provided business admin */
  createBusinessAccount: (args: {
    input: CreateBusinessAccountInput;
  }) => BusinessAccountPromiseChain & {
    get: <R extends BusinessAccountRequest>(
      request: R,
      defaultValue?: FieldsSelection<BusinessAccount, R>,
    ) => Promise<FieldsSelection<BusinessAccount, R>>;
  };

  /** Updates optional fields of a business Account */
  updateBusinessAccount: (args: {
    input: UpdateBusinessAccountInput;
  }) => BusinessAccountPromiseChain & {
    get: <R extends BusinessAccountRequest>(
      request: R,
      defaultValue?: FieldsSelection<BusinessAccount, R>,
    ) => Promise<FieldsSelection<BusinessAccount, R>>;
  };

  /** Cancel Business Account */
  cancelBusinessAccount: BusinessAccountPromiseChain & {
    get: <R extends BusinessAccountRequest>(
      request: R,
      defaultValue?: FieldsSelection<BusinessAccount, R>,
    ) => Promise<FieldsSelection<BusinessAccount, R>>;
  };

  /** Receives a Oauth Code for completing linking with Integrations */
  createPlatformIntegration: (args: {
    redirectUri?: Scalars["String"] | null;
    authCode: Scalars["String"];
    platform: Platform;
  }) => IntegrationsAssetsPromiseChain & {
    get: <R extends IntegrationsAssetsRequest>(
      request: R,
      defaultValue?: FieldsSelection<IntegrationsAssets, R>,
    ) => Promise<FieldsSelection<IntegrationsAssets, R>>;
  };

  /** Receives a Oauth Code for completing linking with Integrations */
  deletePlatformIntegration: (args: { platform: Platform }) => {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Boolean"],
    ) => Promise<Scalars["Boolean"]>;
  };

  /** Request uploadData to upload the file to the storage */
  requestUploadData: (args: {
    input: UploadRequestInput;
  }) => UploadDataResponsePromiseChain & {
    get: <R extends UploadDataResponseRequest>(
      request: R,
      defaultValue?: FieldsSelection<UploadDataResponse, R>,
    ) => Promise<FieldsSelection<UploadDataResponse, R>>;
  };

  /** Save in the right folder the creative with the given id. The creative must be uploaded before calling this mutation */
  saveCreative: (args: {
    input: CreativeInput;
  }) => CreativeLibraryItemPromiseChain & {
    get: <R extends CreativeLibraryItemRequest>(
      request: R,
      defaultValue?: FieldsSelection<CreativeLibraryItem, R>,
    ) => Promise<FieldsSelection<CreativeLibraryItem, R>>;
  };

  /** Create a Folder in a given folder. If the folder is not specified, the folder will be created in the root folder */
  createFolder: (args: {
    input: FolderInput;
  }) => CreativeLibraryFolderPromiseChain & {
    get: <R extends CreativeLibraryFolderRequest>(
      request: R,
      defaultValue?: FieldsSelection<CreativeLibraryFolder, R>,
    ) => Promise<FieldsSelection<CreativeLibraryFolder, R>>;
  };

  /** Generate referral invitations */
  createReferralInvitations: (args: {
    numberOfInvitations: Scalars["Float"];
  }) => {
    get: <R extends InvitationRequest>(
      request: R,
      defaultValue?: FieldsSelection<Invitation, R>[],
    ) => Promise<FieldsSelection<Invitation, R>[]>;
  };

  /** Delete Invitation Code */
  deleteInvitation: (args: { invitationCode: Scalars["String"] }) => {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Boolean"],
    ) => Promise<Scalars["Boolean"]>;
  };

  /** Log in user */
  logIn: (args: {
    input: AuthenticationInput;
  }) => LoggedInUserPromiseChain & {
    get: <R extends LoggedInUserRequest>(
      request: R,
      defaultValue?: FieldsSelection<LoggedInUser, R>,
    ) => Promise<FieldsSelection<LoggedInUser, R>>;
  };

  /** Refresh log in token */
  refreshLogInToken: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Promise<Scalars["String"]>;
  };

  /** Update user profile. If setting new password and current password is invalid, BAD_REQUEST is thrown */
  updateUserProfile: (args: {
    input: UserProfileInput;
  }) => UserPromiseChain & {
    get: <R extends UserRequest>(
      request: R,
      defaultValue?: FieldsSelection<User, R>,
    ) => Promise<FieldsSelection<User, R>>;
  };

  /** Accept terms and conditions for current user */
  acceptTermsAndConditions: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Boolean"],
    ) => Promise<Scalars["Boolean"]>;
  };

  /** Create the new User using a Invitation Code */
  signUp: (args: {
    code: Scalars["String"];
    user: SignUpInput;
  }) => UserPromiseChain & {
    get: <R extends UserRequest>(
      request: R,
      defaultValue?: FieldsSelection<User, R>,
    ) => Promise<FieldsSelection<User, R>>;
  };

  /** Logout user */
  logout: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Boolean"],
    ) => Promise<Scalars["Boolean"]>;
  };
}

export interface MutationObservableChain {
  /** Creates a business Account for the provided business admin */
  createBrand: (args: {
    input: CreateBrandInput;
  }) => BrandObservableChain & {
    get: <R extends BrandRequest>(
      request: R,
      defaultValue?: FieldsSelection<Brand, R>,
    ) => Observable<FieldsSelection<Brand, R>>;
  };

  /** Updates optional fields of a brand */
  updateBrand: (args: {
    input: UpdateBrandInput;
    brandId: Scalars["String"];
  }) => BrandObservableChain & {
    get: <R extends BrandRequest>(
      request: R,
      defaultValue?: FieldsSelection<Brand, R>,
    ) => Observable<FieldsSelection<Brand, R>>;
  };

  /** Updates assets of a brand */
  updateBrandAssets: (args: {
    input: BrandAssetsInput;
    brandId: Scalars["String"];
  }) => AssetChecksObservableChain & {
    get: <R extends AssetChecksRequest>(
      request: R,
      defaultValue?: FieldsSelection<AssetChecks, R>,
    ) => Observable<FieldsSelection<AssetChecks, R>>;
  };

  /** Uploads brand logo */
  requestLogoUploadData: (args: {
    input: UploadRequestInput;
  }) => UploadDataResponseObservableChain & {
    get: <R extends UploadDataResponseRequest>(
      request: R,
      defaultValue?: FieldsSelection<UploadDataResponse, R>,
    ) => Observable<FieldsSelection<UploadDataResponse, R>>;
  };

  /** Creates a business Account for the provided business admin */
  createBusinessAccount: (args: {
    input: CreateBusinessAccountInput;
  }) => BusinessAccountObservableChain & {
    get: <R extends BusinessAccountRequest>(
      request: R,
      defaultValue?: FieldsSelection<BusinessAccount, R>,
    ) => Observable<FieldsSelection<BusinessAccount, R>>;
  };

  /** Updates optional fields of a business Account */
  updateBusinessAccount: (args: {
    input: UpdateBusinessAccountInput;
  }) => BusinessAccountObservableChain & {
    get: <R extends BusinessAccountRequest>(
      request: R,
      defaultValue?: FieldsSelection<BusinessAccount, R>,
    ) => Observable<FieldsSelection<BusinessAccount, R>>;
  };

  /** Cancel Business Account */
  cancelBusinessAccount: BusinessAccountObservableChain & {
    get: <R extends BusinessAccountRequest>(
      request: R,
      defaultValue?: FieldsSelection<BusinessAccount, R>,
    ) => Observable<FieldsSelection<BusinessAccount, R>>;
  };

  /** Receives a Oauth Code for completing linking with Integrations */
  createPlatformIntegration: (args: {
    redirectUri?: Scalars["String"] | null;
    authCode: Scalars["String"];
    platform: Platform;
  }) => IntegrationsAssetsObservableChain & {
    get: <R extends IntegrationsAssetsRequest>(
      request: R,
      defaultValue?: FieldsSelection<IntegrationsAssets, R>,
    ) => Observable<FieldsSelection<IntegrationsAssets, R>>;
  };

  /** Receives a Oauth Code for completing linking with Integrations */
  deletePlatformIntegration: (args: { platform: Platform }) => {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Boolean"],
    ) => Observable<Scalars["Boolean"]>;
  };

  /** Request uploadData to upload the file to the storage */
  requestUploadData: (args: {
    input: UploadRequestInput;
  }) => UploadDataResponseObservableChain & {
    get: <R extends UploadDataResponseRequest>(
      request: R,
      defaultValue?: FieldsSelection<UploadDataResponse, R>,
    ) => Observable<FieldsSelection<UploadDataResponse, R>>;
  };

  /** Save in the right folder the creative with the given id. The creative must be uploaded before calling this mutation */
  saveCreative: (args: {
    input: CreativeInput;
  }) => CreativeLibraryItemObservableChain & {
    get: <R extends CreativeLibraryItemRequest>(
      request: R,
      defaultValue?: FieldsSelection<CreativeLibraryItem, R>,
    ) => Observable<FieldsSelection<CreativeLibraryItem, R>>;
  };

  /** Create a Folder in a given folder. If the folder is not specified, the folder will be created in the root folder */
  createFolder: (args: {
    input: FolderInput;
  }) => CreativeLibraryFolderObservableChain & {
    get: <R extends CreativeLibraryFolderRequest>(
      request: R,
      defaultValue?: FieldsSelection<CreativeLibraryFolder, R>,
    ) => Observable<FieldsSelection<CreativeLibraryFolder, R>>;
  };

  /** Generate referral invitations */
  createReferralInvitations: (args: {
    numberOfInvitations: Scalars["Float"];
  }) => {
    get: <R extends InvitationRequest>(
      request: R,
      defaultValue?: FieldsSelection<Invitation, R>[],
    ) => Observable<FieldsSelection<Invitation, R>[]>;
  };

  /** Delete Invitation Code */
  deleteInvitation: (args: { invitationCode: Scalars["String"] }) => {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Boolean"],
    ) => Observable<Scalars["Boolean"]>;
  };

  /** Log in user */
  logIn: (args: {
    input: AuthenticationInput;
  }) => LoggedInUserObservableChain & {
    get: <R extends LoggedInUserRequest>(
      request: R,
      defaultValue?: FieldsSelection<LoggedInUser, R>,
    ) => Observable<FieldsSelection<LoggedInUser, R>>;
  };

  /** Refresh log in token */
  refreshLogInToken: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Observable<Scalars["String"]>;
  };

  /** Update user profile. If setting new password and current password is invalid, BAD_REQUEST is thrown */
  updateUserProfile: (args: {
    input: UserProfileInput;
  }) => UserObservableChain & {
    get: <R extends UserRequest>(
      request: R,
      defaultValue?: FieldsSelection<User, R>,
    ) => Observable<FieldsSelection<User, R>>;
  };

  /** Accept terms and conditions for current user */
  acceptTermsAndConditions: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Boolean"],
    ) => Observable<Scalars["Boolean"]>;
  };

  /** Create the new User using a Invitation Code */
  signUp: (args: {
    code: Scalars["String"];
    user: SignUpInput;
  }) => UserObservableChain & {
    get: <R extends UserRequest>(
      request: R,
      defaultValue?: FieldsSelection<User, R>,
    ) => Observable<FieldsSelection<User, R>>;
  };

  /** Logout user */
  logout: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Boolean"],
    ) => Observable<Scalars["Boolean"]>;
  };
}

export interface AssetChecksPromiseChain {
  unrelatedSocialAccountId: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"][] | undefined,
    ) => Promise<Scalars["String"][] | undefined>;
  };
}

export interface AssetChecksObservableChain {
  unrelatedSocialAccountId: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"][] | undefined,
    ) => Observable<Scalars["String"][] | undefined>;
  };
}

export interface UploadDataResponsePromiseChain {
  id: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Promise<Scalars["String"]>;
  };
  originalUrl: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Promise<Scalars["String"]>;
  };
  presignedData: PresignedDataPromiseChain & {
    get: <R extends PresignedDataRequest>(
      request: R,
      defaultValue?: FieldsSelection<PresignedData, R>,
    ) => Promise<FieldsSelection<PresignedData, R>>;
  };
}

export interface UploadDataResponseObservableChain {
  id: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Observable<Scalars["String"]>;
  };
  originalUrl: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Observable<Scalars["String"]>;
  };
  presignedData: PresignedDataObservableChain & {
    get: <R extends PresignedDataRequest>(
      request: R,
      defaultValue?: FieldsSelection<PresignedData, R>,
    ) => Observable<FieldsSelection<PresignedData, R>>;
  };
}

export interface PresignedDataPromiseChain {
  url: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Promise<Scalars["String"]>;
  };
  fields: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Promise<Scalars["String"]>;
  };
}

export interface PresignedDataObservableChain {
  url: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Observable<Scalars["String"]>;
  };
  fields: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Observable<Scalars["String"]>;
  };
}

export interface InvitationPromiseChain {
  id: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["ID"],
    ) => Promise<Scalars["ID"]>;
  };
  createdAt: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["DateTime"],
    ) => Promise<Scalars["DateTime"]>;
  };
  updatedAt: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["DateTime"],
    ) => Promise<Scalars["DateTime"]>;
  };
  code: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Promise<Scalars["String"]>;
  };
  email: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined,
    ) => Promise<Scalars["String"] | undefined>;
  };
  type: {
    get: (
      request?: boolean | number,
      defaultValue?: InvitationType,
    ) => Promise<InvitationType>;
  };
  isAdmin: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Boolean"],
    ) => Promise<Scalars["Boolean"]>;
  };
  expirationDate: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["DateTime"] | undefined,
    ) => Promise<Scalars["DateTime"] | undefined>;
  };
}

export interface InvitationObservableChain {
  id: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["ID"],
    ) => Observable<Scalars["ID"]>;
  };
  createdAt: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["DateTime"],
    ) => Observable<Scalars["DateTime"]>;
  };
  updatedAt: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["DateTime"],
    ) => Observable<Scalars["DateTime"]>;
  };
  code: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Observable<Scalars["String"]>;
  };
  email: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined,
    ) => Observable<Scalars["String"] | undefined>;
  };
  type: {
    get: (
      request?: boolean | number,
      defaultValue?: InvitationType,
    ) => Observable<InvitationType>;
  };
  isAdmin: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Boolean"],
    ) => Observable<Scalars["Boolean"]>;
  };
  expirationDate: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["DateTime"] | undefined,
    ) => Observable<Scalars["DateTime"] | undefined>;
  };
}

export interface LoggedInUserPromiseChain {
  sessionToken: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Promise<Scalars["String"]>;
  };
}

export interface LoggedInUserObservableChain {
  sessionToken: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"],
    ) => Observable<Scalars["String"]>;
  };
}
