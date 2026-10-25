import { Route, 
    createBrowserRouter,
     createRoutesFromElements, 
     RouterProvider} 
     from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './Layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import PageForJob, { JobLoader } from './pages/PageForJob';
import AddJobPage from './pages/AddJobPage';


const App = () => {
const addJob = async (newJob) => {
      const res = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
          'content-Type': 'application/json'},
        body: JSON.stringify(newJob)
      });
      
      return;
  };

  //Delete buttton
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
        method: 'DELETE',
      });
      
      return;
  }
  //Page Routers for each page on the app
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage  />} />
        <Route path="/jobs/:id" 
        element={<PageForJob 
        deleteJob={deleteJob} />} 
        loader={JobLoader} 
        />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path="/add-job/:id" element={<AddJobPage addJobSubmit={addJob}/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />;
  }
export default App;


