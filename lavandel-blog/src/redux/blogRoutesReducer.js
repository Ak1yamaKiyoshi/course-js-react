import { createSlice } from "@reduxjs/toolkit";
import Login from '../Login/Login';
import Home from '../Home/Home';
import Navigation from '../Navigation/Navigation';
import Blog from '../Blog/Blog';


export const blogRoutesReducer = createSlice({
    name: 'routes',
    initialState: {
        routes: [         
            {path:`/home/blog_${0}`, element: <> <Navigation/><Blog index={0}/></> },
            {path:`/home/blog_${1}`, element: <> <Navigation/><Blog index={1}/></> },
            {path:`/home/blog_${2}`, element: <> <Navigation/><Blog index={2}/></> },
            {path:`/home/blog_${3}`, element: <> <Navigation/><Blog index={3}/></> },
        ]
    },
    reducers: {
        add: (state) => {
            state.routes.push(
                {path:`/home/blog_${state.routes.length}`, element: <> <Navigation/><Blog index={state.routes.length}/></> }
            ) 
        },
        removeRoute: (state, index) => {
            state.routes = 
                state.routes.slice(index.payload, 1)
            
        }, 
        updateRoute: (state, obj) => {
            let index = obj.payload.index;
            let newBlog = obj.payload.new;
            let blogs = [... state.routes];
            blogs[index] = newBlog;
            state.routes = blogs;
        },
        updateAllRoutes: (state, blogs) => {
            let routes = [];
            for (let i = 0; i < blogs.payload.length; i++) {
                routes.push({path:`/home/blog_${i}`, element: <> <Navigation/><Blog index={i}/></> })
            }
            state.routes = routes
        }
    }
});

export const { add, removeRoute, updateRoute,updateAllRoutes } = blogRoutesReducer.actions;
export default blogRoutesReducer.reducer;
