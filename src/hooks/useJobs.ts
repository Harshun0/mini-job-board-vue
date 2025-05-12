
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import jobs from '../data/jobs.json';
import { Job, JobFilters } from '../types/job';

export const useJobs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const jobsPerPage = 5;

  // Get available filter options
  const allLocations = [...new Set(jobs.map(job => job.location))];
  const allTypes = [...new Set(jobs.map(job => job.type))];
  
  // Get filters from URL or use defaults
  const filters: JobFilters = {
    location: searchParams.get('location') || '',
    type: searchParams.get('type') || '',
    page: parseInt(searchParams.get('page') || '1', 10)
  };

  // Apply filters and pagination
  useEffect(() => {
    // Filter jobs
    let result = [...jobs];
    
    if (filters.location) {
      result = result.filter(job => job.location === filters.location);
    }
    
    if (filters.type) {
      result = result.filter(job => job.type === filters.type);
    }
    
    // Calculate pagination
    const totalItems = result.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / jobsPerPage));
    
    // Validate current page
    const validPage = Math.min(Math.max(1, filters.page), totalPages);
    
    // Apply pagination
    const startIndex = (validPage - 1) * jobsPerPage;
    const paginatedJobs = result.slice(startIndex, startIndex + jobsPerPage);
    
    setFilteredJobs(paginatedJobs);
    setCurrentPage(validPage);
    setTotalPages(totalPages);
    
    // Update URL if page is invalid
    if (validPage !== filters.page) {
      const newParams = new URLSearchParams(searchParams);
      newParams.set('page', validPage.toString());
      setSearchParams(newParams);
    }
  }, [filters.location, filters.type, filters.page, searchParams, setSearchParams]);

  // Update filters
  const updateFilters = (newFilters: Partial<JobFilters>) => {
    const updatedParams = new URLSearchParams(searchParams);
    
    Object.entries(newFilters).forEach(([key, value]) => {
      if (value) {
        updatedParams.set(key, value.toString());
      } else {
        updatedParams.delete(key);
      }
    });
    
    // Reset to page 1 when filters change (unless we're explicitly changing page)
    if (!('page' in newFilters)) {
      updatedParams.set('page', '1');
    }
    
    setSearchParams(updatedParams);
  };

  // Find job by ID
  const getJobById = (id: string): Job | undefined => {
    return jobs.find(job => job.id === id);
  };

  return {
    jobs: filteredJobs,
    allLocations,
    allTypes,
    filters,
    currentPage,
    totalPages,
    updateFilters,
    getJobById
  };
};
