export interface IResumeInfo {
  organization: IOrganization;
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  responsibilities?: string[];
}

export interface IOrganization {
  name: string;
  logo?: string;
  url?: string;
}

export interface ISkill {
  name: string;
  icon: string;
  proficiency?: string;
  experience?: string;
}
