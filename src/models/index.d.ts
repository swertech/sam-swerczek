import {
  ModelInit,
  MutableModel,
  PersistentModelConstructor,
} from "@aws-amplify/datastore";

type ContactMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

type BookingMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

type VenueMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

export declare class Contact {
  readonly id: string;
  readonly name?: string;
  readonly email?: string;
  readonly phone?: string;
  readonly Bookings?: (Booking | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Contact, ContactMetaData>);
  static copyOf(
    source: Contact,
    mutator: (
      draft: MutableModel<Contact, ContactMetaData>
    ) => MutableModel<Contact, ContactMetaData> | void
  ): Contact;
}

export declare class Booking {
  readonly id: string;
  readonly start_time?: string;
  readonly venueID?: string;
  readonly contactID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Booking, BookingMetaData>);
  static copyOf(
    source: Booking,
    mutator: (
      draft: MutableModel<Booking, BookingMetaData>
    ) => MutableModel<Booking, BookingMetaData> | void
  ): Booking;
}

export declare class Venue {
  readonly id: string;
  readonly venue_name?: string;
  readonly Venue_Booking?: (Booking | null)[];
  readonly address?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Venue, VenueMetaData>);
  static copyOf(
    source: Venue,
    mutator: (
      draft: MutableModel<Venue, VenueMetaData>
    ) => MutableModel<Venue, VenueMetaData> | void
  ): Venue;
}
