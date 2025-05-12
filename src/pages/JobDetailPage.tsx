
import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useJobs } from '@/hooks/useJobs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, ArrowLeft, Briefcase, Building } from 'lucide-react';

const JobDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { getJobById } = useJobs();
  const navigate = useNavigate();
  
  const job = id ? getJobById(id) : undefined;

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  if (!job) {
    return (
      <div className="container mx-auto py-12 px-4 max-w-3xl text-center">
        <h1 className="text-3xl font-bold mb-4">Oops! Job not found</h1>
        <p className="text-muted-foreground mb-8">
          The job you're looking for doesn't exist or has been removed.
        </p>
        <Button onClick={() => navigate('/')}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Job Listings
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-3xl">
      <Link 
        to="/"
        className="inline-flex items-center text-muted-foreground hover:text-primary mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Job Listings
      </Link>

      <Card className="border-t-4 border-t-primary">
        <CardHeader>
          <div className="flex flex-wrap justify-between items-start gap-4">
            <div>
              <CardTitle className="text-2xl sm:text-3xl mb-2">{job.title}</CardTitle>
              <CardDescription className="text-lg font-medium flex items-center">
                <Building className="h-4 w-4 mr-1" /> {job.company}
              </CardDescription>
            </div>
            <Badge variant="outline" className="text-sm">
              {job.type}
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="flex items-center text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{job.location}</span>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <Briefcase className="h-5 w-5 mr-2" />
              Description
            </h3>
            <p className="text-muted-foreground">{job.description}</p>
          </div>
        </CardContent>
        
        <CardFooter>
          <Button className="w-full sm:w-auto">Apply Now</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default JobDetailPage;
