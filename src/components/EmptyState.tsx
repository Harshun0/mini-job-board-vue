
import React from 'react';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';

interface EmptyStateProps {
  onClearFilters: () => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({ onClearFilters }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 border rounded-xl bg-white/50 backdrop-blur-sm shadow-sm">
      <div className="bg-secondary/80 p-4 rounded-full mb-4">
        <Filter className="h-10 w-10 text-primary/70" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-primary">No opportunities found</h3>
      <p className="text-center text-muted-foreground mb-6 max-w-md">
        We couldn't find any jobs matching your current filters. Try adjusting your search criteria to explore more opportunities.
      </p>
      <Button onClick={onClearFilters} className="bg-primary hover:bg-primary/90">
        Reset Filters
      </Button>
    </div>
  );
};

export default EmptyState;
