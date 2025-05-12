
import React from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';
import { JobFilters } from '@/types/job';

interface JobFiltersProps {
  locations: string[];
  types: string[];
  currentFilters: JobFilters;
  onFilterChange: (filters: Partial<JobFilters>) => void;
}

const JobFiltersComponent: React.FC<JobFiltersProps> = ({
  locations,
  types,
  currentFilters,
  onFilterChange,
}) => {
  const handleLocationChange = (value: string) => {
    onFilterChange({ location: value });
  };

  const handleTypeChange = (value: string) => {
    onFilterChange({ type: value });
  };

  const clearFilters = () => {
    onFilterChange({ location: '', type: '', page: 1 });
  };

  const hasActiveFilters = currentFilters.location || currentFilters.type;

  return (
    <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium flex items-center">
          <Filter className="h-5 w-5 mr-2" />
          Filters
        </h2>
        {hasActiveFilters && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={clearFilters}
          >
            Clear All
          </Button>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="location-filter">Location</Label>
          <Select 
            value={currentFilters.location} 
            onValueChange={handleLocationChange}
          >
            <SelectTrigger id="location-filter">
              <SelectValue placeholder="All Locations" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all-locations">All Locations</SelectItem>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="type-filter">Job Type</Label>
          <Select 
            value={currentFilters.type} 
            onValueChange={handleTypeChange}
          >
            <SelectTrigger id="type-filter">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all-types">All Types</SelectItem>
                {types.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default JobFiltersComponent;
