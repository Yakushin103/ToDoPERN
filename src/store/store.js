import { configureStore } from '@reduxjs/toolkit'

import task from './taskList/reducer'
import user from './user/reducer'

const store = configureStore({
  reducer: {
    task,
    user
  },
})

export default store