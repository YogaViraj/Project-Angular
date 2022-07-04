import { Education } from "./education";

export interface College {
    collegeId: number;
    collegeName: string;
    education: Education[] | null;
    isActive: boolean;
}