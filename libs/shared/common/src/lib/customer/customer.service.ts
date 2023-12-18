import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, map, Observable, take, toArray } from 'rxjs';
import { Customer } from './customer.type';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  #http = inject(HttpClient);

  getCustomer(customerId: string): Observable<Customer> {
    return this.#http.get<{ value: Customer; }>(`/sap/c4c/api/v1/account-service/accounts/${customerId}?$select=attachments,correspondenceLanguage,country,customerABCClassification,customerABCClassificationDescription,customerRole,customerRoleDescription,defaultAddress,defaultCommunication,defaultExternalCustomerId,displayId,extensions,firstLineName,formattedName,industrialSector,industrialSectorDescription,lifeCycleStatus,lifeCycleStatusDescription,ownerFormattedName,ownerId,primaryContactDisplayId,primaryContactformattedName,primaryContactId,region,secondLineName&thumbnailSize=M`)
      .pipe(map((res: { value: Customer }) => res.value));
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getTicketHistory(userId: string, numberOfTickets: number) {
    return from([
      {
        service: {
          name: 'Serviceticket',
        },
        title:
          'Messeeinrichtungen | Intelligente Messsysteme | Allgemeine & technische Anfrage',
        date: new Date(),
        status: 'In Bearbeitung',
        glyph: 'task',
      },
      {
        service: {
          name: 'Serviceticket',
        },
        title:
          'Messeeinrichtungen | Intelligente Messsysteme | Allgemeine & technische Anfrage',
        date: new Date(),
        status: 'In Bearbeitung',
        glyph: 'task',
      },
      {
        service: {
          name: 'Serviceticket',
        },
        title: 'Adressmutation | Einzug',
        date: new Date(),
        status: 'In Bearbeitung',
        glyph: 'task',
      },
      {
        service: {
          name: 'Serviceticket',
        },
        title: 'Transfer',
        date: new Date(),
        status: 'Abgeschlossen',
        glyph: 'task',
      },
      {
        service: {
          name: 'Serviceticket',
        },
        title:
          'E-Mobilität | Meine Ladestation Private | Aktivierung E-Mob Private',
        date: new Date(),
        status: 'In Bearbeitung',
        glyph: 'task',
      },
      {
        service: {
          name: 'Serviceticket',
        },
        title: 'Adressmutation | Einzug',
        date: new Date(),
        status: 'In Bearbeitung',
        glyph: 'task',
      },
      {
        service: {
          name: 'Serviceticket',
        },
        title:
          'E-Mobilität | Meine Ladestation Private | Aktivierung E-Mob Private',
        date: new Date(),
        status: 'In Bearbeitung',
        glyph: 'task',
      },
      {
        service: {
          name: 'Serviceticket',
        },
        title:
          'Solarprodukte & Eingenproduktion | ewz.eigenverbrauch | Auszug ZEV',
        date: new Date(),
        status: 'In Bearbeitung',
        glyph: 'task',
      },
      {
        service: {
          name: 'Serviceticket',
        },
        title:
          'Solarprodukte & Eingenproduktion | ewz.eigenverbrauch | Auszug ZEV',
        date: new Date(),
        status: 'In Bearbeitung',
        glyph: 'task',
      },
      {
        service: {
          name: 'Serviceticket',
        },
        title:
          'Solarprodukte & Eingenproduktion | ewz.eigenverbrauch | Auszug ZEV',
        date: new Date(),
        status: 'In Bearbeitung',
        glyph: 'task',
      },
    ]).pipe(take(numberOfTickets), toArray());
  }
}
