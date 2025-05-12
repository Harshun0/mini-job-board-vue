
import React from 'react';
import { useJobs } from '@/hooks/useJobs';
import JobCard from '@/components/JobCard';
import JobFilters from '@/components/JobFilters';
import Pagination from '@/components/Pagination';
import EmptyState from '@/components/EmptyState';
import { useToast } from '@/hooks/use-toast';

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
    <div className="container mx-auto py-8 px-4 max-w-5xl">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold mb-2 text-primary">Job Board</h1>
        <p className="text-muted-foreground">Find your next career opportunity</p>
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
          <div className="grid gap-6 md:grid-cols-2">
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
  );
};

export default JobListingsPage;
