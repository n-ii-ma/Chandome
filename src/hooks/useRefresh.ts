import { useState, useCallback } from "react";

export const useRefresh = (refetch: () => Promise<void>) => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = useCallback(async () => {
    try {
      setIsRefreshing(true);
      await refetch();
    } catch (error) {
    } finally {
      setIsRefreshing(false);
    }
  }, [refetch]);

  return { isRefreshing, handleRefresh };
};
