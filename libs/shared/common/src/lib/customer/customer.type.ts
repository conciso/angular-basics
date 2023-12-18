export interface AdminData {
  createdOn: string;
  createdBy: string;
  createdByName: string;
  updatedOn: string;
  updatedBy: string;
  updatedByName: string;
}

export interface BlockingReasons {
  isSalesSupportBlocked: boolean;
}

export interface Region {
  country: string;
  region: string;
}

export interface Address {
  country: string;
  region: Region;
  postalCode?: string;
  cityName: string;
  streetName?: string;
  houseId?: string;
  isPostOfficeBoxAddress: boolean;
  formattedPostalAddressDescription: string;
  countryDescription: string;
  regionDescription: string;
  correspondenceLanguage?: string;
  correspondenceLanguageDescription?: string;
  phoneFormattedNumber?: string;
  phoneNormalisedNumber?: string;
  id?: string;
  parentId?: string;
  addressId?: string;
}

export interface ContactPerson {
  contactId: string;
  id: string;
  isDefault: boolean;
  contactDisplayId: string;
  contactFormattedName: string;
}

export interface Relationship {
  relationshipId: string;
  isDefault: boolean;
  adminData: AdminData;
  id: string;
  directedRelationshipRole: string;
  businessPartnerId: string;
  businessPartnerDisplayId: string;
  businessPartnerFormattedName: string;
  directedRelationshipRoleDescription: string;
}

export interface SalesArrangement {
  blockingReasons: BlockingReasons;
  id: string;
  salesOrganizationId: string;
  isMarkedForDeletion: boolean;
  isCompleteDeliveryRequested: boolean;
  salesOrganizationDisplayId: string;
  salesOrganizationName: string;
}

export interface AccountTeamMember {
  employeeId: string;
  role: string;
  isDefault: boolean;
  id: string;
  validFrom: string;
  validTo: string;
  employeeDisplayId: string;
  employeeFormattedName: string;
  roleDescription: string;
}

export interface Attachment {
  id: string;
  title: string;
  fileName: string;
  category: string;
  type: string;
  contentType: string;
  fileSize: number;
  url: string;
}

export interface Customer {
  ownerId?: string;
  ownerFormattedName?: string;
  attachments?: Attachment[];
  lifeCycleStatus: string;
  isProspect: boolean;
  customerRole: string;
  formattedName: string;
  customerABCClassification?: string;
  isNaturalPerson: boolean;
  blockingReasons: BlockingReasons;
  firstLineName: string;
  industrialSector?: string;
  primaryContactId: string;
  adminData: AdminData;
  id: string;
  displayId: string;
  isBusinessPurposeCompleted: boolean;
  extensions: Record<string, string>;
  defaultAddress?: Address;
  defaultCommunication?: {
    phoneFormattedNumber?: string;
    phoneNormalisedNumber?: string;
  };
  primaryContactDisplayId: string;
  primaryContactformattedName: string;
  addresses: Address[];
  hasContactPersons: ContactPerson[];
  relationships?: Relationship[];
  lifeCycleStatusDescription: string;
  customerRoleDescription: string;
  customerABCClassificationDescription?: string;
  industrialSectorDescription?: string;
  ticketHistory?: HistoryEntry[];
  salesArrangements?: SalesArrangement[];
  accountTeamMembers?: AccountTeamMember[];
}

export enum CustomerIds {
  HeBe = '11ed6188-4b88-b94e-afdb-814184010a00',
  Koenig = '11ed9347-6c6e-971e-afdb-8102c2010a00',
}

export const CustomerNames = new Map<string, string>([
  [CustomerIds.HeBe, 'HeBe Cell Corp'],
  [CustomerIds.Koenig, 'König GmbH'],
]);

export interface HistoryEntry {
  date: Date;
  service: { name: string };
  title: string;
  status: string;
}
