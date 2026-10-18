import { useState, useEffect } from 'react';
import JobListComponet from './jobListComponet'
import Spinners from './Spinners';

const JobListings = ({homePage = false}) => {
    const [jobsState, setJobsState] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            const apiUrl = homePage 
            ? `http://localhost:5000/jobs?_limit=3`
            : `http://localhost:5000/jobs`;

            try {
                const response = await fetch(apiUrl);
                const fetchedJobs = await response.json();
                setJobsState(fetchedJobs);
            } catch (error) {
                console.log(`failed to fetch jobs error`, error);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();}, []);
return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                {homePage ? 'Recent Jobs' : 'Browse jobs'}
                </h2>
                {loading ? (<Spinners loading={loading} />) 
                : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {jobsState.map((job) => (
                        <JobListComponet key={job.id} job={job} />
                    ))}
                </div>
                )}
            </div>
        </section>
    );
};  
export default JobListings
