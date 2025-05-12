
import React from 'react';
import { Link } from 'react-router-dom';
import { Job } from '../types/job';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Briefcase } from 'lucide-react';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 border-t-4 border-t-primary animate-fade-in">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-semibold text-primary">{job.title}</CardTitle>
          <Badge 
            variant={job.type === 'Full-time' ? 'default' : 
                   job.type === 'Internship' ? 'secondary' : 
                   job.type === 'Contract' ? 'outline' : 'secondary'}
            className={job.type === 'Full-time' ? 'bg-accent hover:bg-accent/90' : ''}
          >
            {job.type}
          </Badge>
        </div>
        <CardDescription className="text-lg font-medium flex items-center gap-1">
          <Briefcase className="h-4 w-4" />
          {job.company}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center text-muted-foreground mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{job.location}</span>
        </div>
        <p className="line-clamp-2 text-sm text-muted-foreground">
          {job.description}
        </p>
      </CardContent>
      <CardFooter className="pt-0">
        <Link 
          to={`/jobs/${job.id}`}
          className="text-primary hover:text-primary/80 font-medium text-sm inline-flex items-center"
        >
          View Details 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
