import { Domain } from "./domain";
import { PersonalDetails } from "./personalDetails";

export interface Skills {
    skillId: number;
    domainId: number;
    domain: Domain | null;
    personalDetailsId: number;
    personalDetails: PersonalDetails | null;
    createdOn: string | null;
    createdBy: number | null;
    updatedOn: string | null;
    updatedBy: number | null;
    isActive: boolean;
}