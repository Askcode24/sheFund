import React, { useState, useCallback } from 'react';

// Custom hook for input handling
export function useInput<T = string>(initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as T);
  }, []);
  return { value, onChange, setValue };
}

// Custom hook for toggling boolean state
export function useToggle(initial: boolean = false) {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState((s) => !s), []);
  return [state, toggle] as const;
}
