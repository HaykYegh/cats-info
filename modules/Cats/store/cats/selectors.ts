import { RootState } from '@/store';

export const catsSelector = (state: RootState) => state.catsSlice.data;
export const catsLoadingSelector = (state: RootState) =>
  state.catsSlice.loading;
