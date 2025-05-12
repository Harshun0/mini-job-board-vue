
import React from 'react';
import { Link } from 'react-router-dom';
import { Job } from '../types/job';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin } from 'lucide-react';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-semibold text-primary">{job.title}</CardTitle>
          <Badge variant={job.type === 'Full-time' ? 'default' : 'secondary'}>
            {job.type}
          </Badge>
        </div>
        <CardDescription className="text-lg font-medium">{job.company}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center text-muted-foreground mb-2">
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
          className="text-primary hover:text-primary/80 font-medium text-sm"
        >
          View Details →
        </Link>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
