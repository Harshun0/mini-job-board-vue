
import React from 'react';
import { useJobs } from '@/hooks/useJobs';
import JobCard from '@/components/JobCard';
import JobFilters from '@/components/JobFilters';
import Pagination from '@/components/Pagination';
import EmptyState from '@/components/EmptyState';
import { useToast } from '@/hooks/use-toast';
import { Briefcase } from 'lucide-react';

const JobListingsPage = () => {
  const { jobs, allLocations, allTypes, filters, currentPage, totalPages, updateFilters } = useJobs();
  const { toast } = useToast();

  const handlePageChange = (page: number) => {
    updateFilters({ page });
    // Scroll to top on page change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clearFilters = () => {
    updateFilters({ location: '', type: '', page: 1 });
    toast({
      title: "Filters cleared",
      description: "Showing all available jobs",
      duration: 3000,
    });
  };

  const hasActiveFilters = filters.location || filters.type;
  const showEmptyState = jobs.length === 0 && hasActiveFilters;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto py-12 px-4 max-w-5xl">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center mb-4 bg-primary/10 p-3 rounded-full">
            <Briefcase className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Launchpad
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Find your next career opportunity and launch your professional journey
          </p>
        </div>

        <JobFilters
          locations={allLocations}
          types={allTypes}
          currentFilters={filters}
          onFilterChange={updateFilters}
        />
        
        {showEmptyState ? (
          <EmptyState onClearFilters={clearFilters} />
        ) : (
          <>
            <div className="grid gap-6 md:grid-cols-2 mt-6">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
            
            <Pagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
              onPageChange={handlePageChange} 
            />
          </>
        )}
      </div>
    </div>
  );
};

export default JobListingsPage;
