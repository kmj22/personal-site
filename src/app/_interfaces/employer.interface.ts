export interface Employer {
  name: string;
  start_date: Date;
  end_date?: Date;
  job_title: string;
  description: string[] | string;
  image: string;
  url_slug: string;
}
