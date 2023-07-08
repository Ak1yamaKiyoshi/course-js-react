import { configureStore } from '@reduxjs/toolkit'
import blogReducer from './blogReducer'
import adminReducer from './adminReducer'
import blogRoutesReducer from './blogRoutesReducer'


export default configureStore({
  reducer: {
    blogs: blogReducer,
    admins: adminReducer,
    blogRoutes:  blogRoutesReducer
  },
})