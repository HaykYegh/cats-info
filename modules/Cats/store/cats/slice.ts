import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CatsItem, ICatsState } from '@/modules/Cats/store/cats/types';

const initialState: ICatsState = {
  data: [],
  loading: false,
};

export const catsSlice = createSlice({
  name: 'catsSlice',
  initialState,
  reducers: {
    setCatsData: (
      state: ICatsState,
      { payload }: PayloadAction<CatsItem[]>
    ) => {
      state.data = payload;
    },
    addCatsData: (
      state: ICatsState,
      { payload }: PayloadAction<CatsItem[]>
    ) => {
      state.data = state.data.concat(payload);
    },
    setLoading: (state: ICatsState, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
  },
});

export const { setCatsData, addCatsData, setLoading } = catsSlice.actions;
