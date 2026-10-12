import { Route, 
    createBrowserRouter,
     createRoutesFromElements, 
     RouterProvider} 
     from 'react-router-dom';
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListings from './components/jobListings'
import ViewAllJobs from './components/ViewAllJobs'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route index element={<h1>my app</h1>} />
  )
)

const App = () => {
  return <RouterProvider router={router} />;
  {/*return (
    router && <RouterProvider router={router} />
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
    </>
  );*/}
}
export default App;