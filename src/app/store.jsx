import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../features/userSlice.jsx'

export const store = configureStore({
  reducer: {
      user : userSlice,
  },
})
