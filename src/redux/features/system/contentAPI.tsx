import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IBlogCardResponse, IGetBlogResponse, IErrorResponse, IStatsResponse } from '../../types/response.types';

export const contentApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    getAllBlogsService: builder.query<IBlogCardResponse, void>({
      query: () => '/blog/getAllBlogs',
    }),
    getRecentBlogsService: builder.query<IBlogCardResponse, void>({
      query: () => '/blog/getRecentBlogs',
    }),
    getBlogService: builder.query<IGetBlogResponse, string>({
      query: (id) => `/blog/getBlog/${id}`,
    }),
    getStatsService: builder.query<IStatsResponse, void>({
        query: () => `/content/stats`,
    }),
    // upvoteBlogService: builder.query<IGetBlogResponse, string | undefined>({
    //   query: (id) => `/blog/${id}/upvote`,
    //   // Add a function to provide headers
    //   providesTags: (result, error, id) => [{ type: 'Blog', id }],
    // }),
  }),
});

export const {
  useGetAllBlogsServiceQuery,
  useGetRecentBlogsServiceQuery,
  useGetBlogServiceQuery,
  useGetStatsServiceQuery
//   useUpvoteBlogServiceMutation,
} = contentApi;
