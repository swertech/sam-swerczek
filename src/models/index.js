import { initSchema } from "@aws-amplify/datastore";
import { schema } from "./schema";

const { Contact, Booking, Venue } = initSchema(schema);

export { Contact, Booking, Venue };
