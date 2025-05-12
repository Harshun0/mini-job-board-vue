
export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
}

export interface JobFilters {
  location: string;
  type: string;
  page: number;
}
