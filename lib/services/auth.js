// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/auth/' }),
  endpoints: (builder) => ({
   createUser: builder.mutation({
    query: (user)=>{
        console.log('user data', user);
        return{
            url:'',
            method: '',
            body: '',
            headers: {}
        }
    }
   })
  }),
})

export const { useCreateUserMutation } = authApi