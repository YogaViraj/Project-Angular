import { PersonalDetails } from "./personalDetails";
import { College } from "./college";

export interface Education {
    educationId: number;
    degree: string;
    course: string;
    starting_Year: string;
    ending_Year: string;
    starting: number | null;
    ending: number | null;
    percentage: number;
    personaldetailsid: number;
    collegeid: number;
    personalDetails: PersonalDetails | null;
    createdOn: string | null;
    createdBy: number | null;
    updatedOn: string | null;
    updatedBy: number | null;
    college: College | null;
    isActive: boolean;
}