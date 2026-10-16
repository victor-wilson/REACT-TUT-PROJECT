import { useState, useEffect } from 'react';
import jobs from './jobs.json'
import JobListComponet from './jobListComponet'

const JobListings = ({homePage = false}) => {
    const [jobsState, setJobsState] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {}, []);

  return (
       <>
        {/* Browse Jobs */}
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                {homePage ? 'Recent Jobs' : 'Browse jobs'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Job Listing 1 */}
                {jobList.map((job) => (
                    <JobListComponet key={job.id} job={job} />
                ))}
                </div>
            </div>
        </section>
       </>)}
export default JobListings