import { useCore } from '@myorg/core';

export function useRenderer() {
  useCore();
  console.log(`core renderer`);
}