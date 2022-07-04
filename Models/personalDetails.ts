
import { Language } from "./language";
import { BreakDuration } from "./breakduration";
import { SocialMedia } from "./socialMedia";
import { User } from "./user";

export class PersonalDetails {
    personalDetailsId: number=0;
    profileId: number=0;
    profilePhoto:string='';
    name: string='';
    objective: string='';
    dateOfBirth: string='';
    nationality: string='';
    mailAddress: string='';
    dateOfJoining: string='';
    languageid: number=0;
    breakDurationid: number=0;
    socialmediaid: number=0;

    
    // createdOn: string | null;
    // createdBy: number | null;
    // updatedOn: string | null;
    // updatedBy: number | null;
    userId!: number;
    language!: Language | null;
    breakDuration!: BreakDuration | null;
    socialmedia!: SocialMedia | null;
    // education: Education[] | null;
    // projects: Projects[] | null;
    // skills: Skills[] | null;
    users!: User | null;
    isActive: boolean=true;
}