import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards'; 
import JobListings from '../components/jobListings';
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
    </div>
  )
}

export default HomePage