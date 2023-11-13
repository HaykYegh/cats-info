import { createAction } from '@reduxjs/toolkit';

import type {GetCatsPayload} from './types';

export const getCats = createAction<GetCatsPayload>('getCats');
