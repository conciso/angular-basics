import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { Customer, CustomerIds } from './customer.type';
import { CustomerService } from './customer.service';

@Injectable({
  providedIn: 'root',
})
export class CustomerMockService extends CustomerService {
  override getCustomer(customerId: string): Observable<Customer> {
    if (customerId === CustomerIds.HeBe) {
      return of({
        lifeCycleStatus: 'ACTIVE',
        isProspect: false,
        customerRole: 'CRM000',
        formattedName: 'HeBe Cell Corp',
        isNaturalPerson: false,
        blockingReasons: {
          isSalesSupportBlocked: false,
        },
        firstLineName: 'HeBe Cell Corp',
        ownerId: '11ed5c36-a06e-d77e-afdb-812995010a00',
        primaryContactId: '11ed6188-c52f-c27e-afdb-814184010a00',
        adminData: {
          createdOn: '2022-11-11T06:15:52.964Z',
          createdBy: '675e06d1-5c39-11ed-a15e-4d2309d02b21',
          createdByName: 'Jens Sturmhöfel',
          updatedOn: '2023-04-25T12:16:28.700Z',
          updatedBy: '675e06d1-5c39-11ed-a15e-4d2309d02b21',
          updatedByName: 'Jens Sturmhöfel',
        },
        id: '11ed6188-4b88-b94e-afdb-814184010a00',
        displayId: '1000000',
        isBusinessPurposeCompleted: false,
        extensions: {
          versorgungsstatus_lgw82d1p: '36',
        },
        defaultAddress: {
          country: 'US',
          region: {
            country: 'US',
            region: 'MA',
          },
          cityName: 'Natick',
          isPostOfficeBoxAddress: false,
          formattedPostalAddressDescription: 'Natick MA / US',
          countryDescription: 'Vereinigte Staaten von Amerika',
          regionDescription: 'Massachusetts',
        },
        ownerFormattedName: 'Jens Sturmhöfel',
        primaryContactDisplayId: '1000010',
        primaryContactformattedName: 'Adrian Winter',
        addresses: [
          {
            isDefaultAddress: true,
            country: 'US',
            region: {
              country: 'US',
              region: 'MA',
            },
            cityName: 'Natick',
            isPostOfficeBoxAddress: false,
            formattedPostalAddressDescription: 'Natick MA / US',
            id: '11ed6188-4b8b-c68e-afdb-814184010a00',
            parentId: '11ed6188-4b88-b94e-afdb-814184010a00',
            addressId: '11ed6188-4b8e-fade-afdb-814184010a00',
            countryDescription: 'Vereinigte Staaten von Amerika',
            regionDescription: 'Massachusetts',
          },
        ],
        salesArrangements: [
          {
            blockingReasons: {
              isSalesSupportBlocked: false,
            },
            id: '11eda911-0711-89be-afdb-812faf010a00',
            salesOrganizationId: '11eda6f2-63c4-7dae-afdb-812faf010a00',
            isMarkedForDeletion: false,
            isCompleteDeliveryRequested: false,
            salesOrganizationDisplayId: 'SO_0001',
            salesOrganizationName: 'Miltenyi Biotec Inc.',
          },
        ],
        hasContactPersons: [
          {
            contactId: '11ed6188-c52f-c27e-afdb-814184010a00',
            id: '11ed69bf-2dd7-331e-afdb-814184010a00',
            isDefault: true,
            contactDisplayId: '1000010',
            contactFormattedName: 'Adrian Winter',
          },
          {
            contactId: '11ed91c2-28b6-49ee-afdb-810aa7010a00',
            id: '11ed91c2-2924-4dfe-afdb-810aa7010a00',
            isDefault: false,
            contactDisplayId: '1000020',
            contactFormattedName: 'Marcel Hesselbach B.A.',
          },
          {
            contactId: '11ed91c6-b1cf-ce0e-afdb-810aa7010a00',
            id: '11ed91c6-b1dc-030e-afdb-810aa7010a00',
            isDefault: false,
            contactDisplayId: '1000021',
            contactFormattedName: 'Marcel Hesselbach B.A.',
          },
          {
            contactId: '11ed91c7-115f-755e-afdb-8144cc010a00',
            id: '11ed91c7-11cc-b61e-afdb-8144cc010a00',
            isDefault: false,
            contactDisplayId: '1000030',
            contactFormattedName: 'Marcel Hesselbach B.A.',
          },
          {
            contactId: '11ed9b14-9151-a48e-afdb-8102c2010a00',
            id: '11ed9b14-9250-c50e-afdb-8102c2010a00',
            isDefault: false,
            contactDisplayId: '1000060',
            contactFormattedName: 'Robert White',
          },
          {
            contactId: '11ed6188-c52f-c27e-afdb-814184010a00',
            id: '11ee45f5-7e91-057e-afdb-8129bc020a00',
            isDefault: false,
            contactDisplayId: '1000010',
            contactFormattedName: 'Adrian Winter',
          },
        ],
        accountTeamMembers: [
          {
            employeeId: '11ed5c36-a06e-d77e-afdb-812995010a00',
            role: 'BUR011-1',
            isDefault: true,
            id: '11ed6188-4be7-2cfe-afdb-814184010a00',
            validFrom: '0001-01-01',
            validTo: '9999-12-31',
            employeeDisplayId: '1',
            employeeFormattedName: 'Jens Sturmhöfel',
            roleDescription: 'Hat zuständigen Mitarbeiter - Vertrieb',
          },
        ],
        lifeCycleStatusDescription: 'Aktiv',
        customerRoleDescription: 'Kunde',
        attachments: [
          {
            id: '3822298a-a6f3-11ed-aff8-8130070a183a',
            title: 'hebecell.png',
            fileName: 'hebecell.png',
            category: 'DOCUMENT',
            type: '10016',
            contentType: 'image/png',
            fileSize: 35259,
            url: 'https://prod-frankfurt-documents.s3.dualstack.eu-central-1.amazonaws.com/documents/635bd457eb6ce963dbeae8b3/441/11ed6188-4b88-b94e-afdb-814184010a00/3822298a-a6f3-11ed-aff8-8130070a183a/thumbnails/hebecell_40.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240205T124612Z&X-Amz-SignedHeaders=host&X-Amz-Credential=AKIA23U5LJRGCFBHRWER%2F20240205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Expires=600&X-Amz-Signature=04a9f523a456ce797cb528b2e3f504ec840d14161ca0a7ec15b49b9c7819edcd',
          },
        ],
        ticketHistory: [],
      }).pipe(
        switchMap((Customer) =>
          this.getTicketHistory(Customer.id, 10).pipe(
            map((historyData) => ({
              ...Customer,
              ticketHistory: historyData,
            }))
          )
        )
      );
    } else {
      return of({
        ownerId: 'Owner',
        ownerFormattedName: 'Owner',
        attachments: [],
        lifeCycleStatus: 'ACTIVE',
        isProspect: false,
        customerRole: 'CRM000',
        formattedName: 'Klaus König GmbH',
        customerABCClassification: 'B',
        isNaturalPerson: false,
        blockingReasons: {
          isSalesSupportBlocked: false,
        },
        firstLineName: 'Klaus König GmbH',
        industrialSector: '21',
        primaryContactId: '11ed9b14-9151-a48e-afdb-8102c2010a00',
        adminData: {
          createdOn: '2023-01-13T13:37:29.760Z',
          createdBy: '3daa129b-926d-11ed-abe9-5515f291783d',
          createdByName: 'Timo Nüssler',
          updatedOn: '2023-08-28T22:53:05.495Z',
          updatedBy: '514bfb1b-45f2-11ee-b4d9-6585ec413f6b',
          updatedByName: 'Adele Vance',
        },
        id: '11ed9347-6c6e-971e-afdb-8102c2010a00',
        displayId: '1000040',
        isBusinessPurposeCompleted: false,
        extensions: {
          versorgungsstatus_lgw82d1p: 'Aktiv',
        },
        defaultAddress: {
          country: 'DE',
          region: {
            country: 'DE',
            region: '05',
          },
          postalCode: '48145',
          cityName: 'Münster',
          streetName: 'Opernplatz',
          houseId: '33',
          isPostOfficeBoxAddress: false,
          correspondenceLanguage: 'de',
          formattedPostalAddressDescription:
            'Opernplatz 33 / 48145 Münster / DE',
          countryDescription: 'Deutschland',
          regionDescription: 'Nordrhein-Westfalen',
          correspondenceLanguageDescription: 'Deutsch',
        },
        defaultCommunication: {
          phoneFormattedNumber: '+49 171341224',
          phoneNormalisedNumber: '+49171341224',
        },
        primaryContactDisplayId: '1000060',
        primaryContactformattedName: 'Robert White',
        addresses: [
          {
            isDefaultAddress: true,
            country: 'DE',
            region: {
              country: 'DE',
              region: '05',
            },
            cityName: 'Münster',
            streetName: 'Opernplatz',
            houseId: '33',
            postalCode: '48145',
            isPostOfficeBoxAddress: false,
            formattedPostalAddressDescription:
              'Opernplatz 33 / 48145 Münster / DE',
            correspondenceLanguage: 'de',
            phoneFormattedNumber: '+49 171341224',
            phoneNormalisedNumber: '+49171341224',
            id: '11ed9347-6c6f-0c4e-afdb-8102c2010a00',
            parentId: '11ed9347-6c6e-971e-afdb-8102c2010a00',
            addressId: '11ed9347-6c6f-335e-afdb-8102c2010a00',
            countryDescription: 'Deutschland',
            regionDescription: 'Nordrhein-Westfalen',
            correspondenceLanguageDescription: 'Deutsch',
          },
        ],
        hasContactPersons: [
          {
            contactId: '11ed9b14-9151-a48e-afdb-8102c2010a00',
            id: '11ee45f5-6d52-a75e-afdb-814a96020a00',
            isDefault: true,
            contactDisplayId: '1000060',
            contactFormattedName: 'Robert White',
          },
        ],
        relationships: [
          {
            relationshipId: '11edbcf8-cf0a-1e0e-afdb-81a226020a00',
            isDefault: false,
            adminData: {
              createdOn: '2023-03-07T15:00:32.984Z',
              createdBy: 'd20617f7-adf9-11ed-9df0-fd30fe300a7e',
              createdByName: 'Alexander Hunger',
              updatedOn: '2023-03-07T15:00:32.984Z',
              updatedBy: 'd20617f7-adf9-11ed-9df0-fd30fe300a7e',
              updatedByName: 'Alexander Hunger',
            },
            id: '11eeb39e-d99d-ba5e-afdb-812142020a00',
            directedRelationshipRole: 'BUR002-2',
            businessPartnerId: '11ed9325-c526-815e-afdb-8102c2010a00',
            businessPartnerDisplayId: '1000031',
            businessPartnerFormattedName: 'Markus Schmidt',
            directedRelationshipRoleDescription: 'Ist Kontaktpartner für',
          },
        ],
        lifeCycleStatusDescription: 'Aktiv',
        customerRoleDescription: 'Kunde',
        customerABCClassificationDescription: 'Kunde B',
        industrialSectorDescription: 'Bergbau',
        ticketHistory: [],
      }).pipe(
        switchMap((Customer) =>
          this.getTicketHistory(Customer.id, 5).pipe(
            map((historyData) => ({
              ...Customer,
              ticketHistory: historyData,
            }))
          )
        )
      );
    }
  }
}
