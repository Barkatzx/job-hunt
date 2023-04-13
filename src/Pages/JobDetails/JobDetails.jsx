import React from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {
  const product = useLoaderData();
  console.log(product)
  const { id, job_description, job_responsibility, educational_requirements, experiences, job_title, salary, contact_information, location } = product;

  const handleOrder = () => {
    const storedData = JSON.parse(localStorage.getItem("orders"));
    if(storedData){
      const isAlreadyOrdered = storedData.find(item => item.id === product.id);
      if(isAlreadyOrdered){
        toast.error("You have already Applied this Job");
        return;
      }
      localStorage.setItem("orders",JSON.stringify([...storedData,product]));
      toast.success("Apply successfully!");
    } else {
      localStorage.setItem("orders",JSON.stringify([product]));
      toast.success("Apply successfully!");
    }
  }  

  return (
    <div>
       <div className='flex justify-between bg-pink-50'>
        <div>
            <img src="/public/assets/img/Vector.png" className="" alt="Left Image" /></div>
            <div className='text-center text-5xl font-semibold pt-10'>
            Job Details</div>
            <div>
            <img src="/public/assets/img/Vector-1.png" className="" alt="Right Image" /></div>
            </div>
        <ToastContainer />

        <div className="container mx-auto flex md:flex-row flex-col gap-8 mt-8 p-6 justify-between">
        <div className="w-2/4">
            <p className="mb-4"> <span className="font-bold text-lg">Job Description:</span> {job_description}</p>
            <p className="mb-4"> <span className="font-bold text-lg">Job Responsibility:</span> {job_responsibility}</p>
            <p className="mb-4"> <span className="font-bold text-lg">Educational Requirements:</span> {educational_requirements}</p>
            <p> <span className="font-bold text-lg">Experiences:</span> {experiences}</p>
        </div>
        <div className="bg-pink-50 rounded-xl p-10">
          <h2 className="font-semibold mb-4">Job Details</h2> <hr className="mb-4" />
          <p className="mb-2"> <span className="font-bold">Salary:</span> {salary}</p>
          <p className="mb-2"> <span className="font-bold">Job Title:</span> {job_title}</p>
          <div>
        <button onClick={handleOrder} className="btn btn-primary">Apply Now</button>
        </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default JobDetails;
