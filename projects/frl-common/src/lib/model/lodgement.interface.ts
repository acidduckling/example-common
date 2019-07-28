export type Priority = 'OnSpecificDate' | 'Routine' | 'Urgent';

export type LodgementState = 'Lodged' | 'Registered';

export type RegistrationDue = 'On' | 'Before';

export type LegislationType = 'LegislativeInstrument' | 'Act' | 'NotifiableInstrument' | 'Gazette' | 'PrerogativeInstrument' | 'AdministrativeArrangementsOrder';

export interface Lodgement {
  name: string;
  lodgedDateTime: Date;
  receiptId: string;
  priority: Priority;
  lodgementState: LodgementState;
  allocatedUserName: string;
  legislationType: LegislationType;
  registrationRequirements: {
    registrationDue: RegistrationDue;
    registrationDueDate: Date;
    furtherRequirements: string;
  };
}
