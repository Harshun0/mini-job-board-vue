
import React from 'react';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';

interface EmptyStateProps {
  onClearFilters: () => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({ onClearFilters }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 border rounded-lg bg-muted/10">
      <Filter className="h-12 w-12 text-muted-foreground mb-4" />
      <h3 className="text-xl font-semibold mb-2">No jobs found</h3>
      <p className="text-center text-muted-foreground mb-6">
        No jobs match your current filters. Try changing your search criteria.
      </p>
      <Button onClick={onClearFilters}>Clear Filters</Button>
    </div>
  );
};

export default EmptyState;
