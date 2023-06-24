import * as React from 'react';

type UseAsyncButtonParams = {
  onPress?: () => Promise<void>;
};

export function useAsyncButton({ onPress }: UseAsyncButtonParams) {
  const [processing, setProcessing] = React.useState(false);

  const handlePress = async () => {
    try {
      setProcessing(true);

      await onPress?.();
    } catch {
    } finally {
      setProcessing(false);
    }
  };

  return { handlePress, processing };
}
