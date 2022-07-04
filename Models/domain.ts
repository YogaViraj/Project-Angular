import { Skills } from "./skills";
import { Technology } from "./technology";

export interface Domain {
    domainId: number;
    domainName: string | null;
    skills: Skills[] | null;
    technologyId: number;
    technology: Technology | null;
    isActive: boolean;
}