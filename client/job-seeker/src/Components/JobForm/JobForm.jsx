import { useState } from 'react'
import styles from './Style.module.css'
import { useNavigate } from 'react-router';
export const JobForm=()=> {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    companyName: "",
    logoURL: "",
    position: "",
    salary: "",
    jobType: "",
    remote: "",
    location: "",
    description: "",
    about: "",
    skills: ""
  });
  console.log(formData)
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };


  const handleSubmit = async (event) => {
  event.preventDefault();

  // Check if all fields are filled in
  if (
    !formData.companyName ||
    !formData.logoURL ||
    !formData.position ||
    !formData.salary ||
    !formData.jobType ||
    !formData.remote ||
    !formData.location ||
    !formData.description ||
    !formData.about ||
    !formData.skills
  ) {
    alert("Please fill in all fields.");
    return;
  }

  // Set the bearer token
  const token = window.localStorage.getItem("token");
  const recruiterName = window.localStorage.getItem("name")
  if(!token){
    alert("Login to create a job")
    return
}
 const data = {...formData, name:recruiterName}
  // Send the POST request
  try {
    const response = await fetch("http://localhost:3000/api/job/job-posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      alert("An error ocurred, please try again");
    }

    const responseData = await response.json();
    console.log(responseData);
    alert("Job created successfully")
    navigate("/listing")

  } catch (error) {
    console.error("There was a problem with the request:", error);
  }

}
  return (
    <div className={styles.container}>
    <h1 className={styles.h1}>Add job description</h1>
    <div className={styles.jobForm}>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="companyName">Company Name:</label>
        <input className={styles.input} type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Enter company name" />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="logoURL">Logo URL:</label>
        <input className={styles.input} type="text" name="logoURL" value={formData.logoURL} onChange={handleChange} placeholder="Enter logo URL" />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="position">Position:</label>
        <input className={styles.input} type="text" name="position" value={formData.position} onChange={handleChange} placeholder="Enter job position" />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="salary">Salary:</label>
        <input className={styles.input} type="text" name="salary" value={formData.salary} onChange={handleChange} placeholder="Enter job salary" />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="jobType">Job Type:</label>
        <select className={styles.input} name="jobType" value={formData.jobType} onChange={handleChange}>
          <option value="">Select job type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
        </select>     
     </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="remote">Remote:</label>
        <select className={styles.input} name="remote" value={formData.remote} onChange={handleChange}>
        <option value="Remote">Remote</option>
        <option value="Office">Office</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="location">Location:</label>
        <input className={styles.input} type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Enter job location" />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="description">Description:</label>
        <textarea className={styles.input} name="description" value={formData.description} onChange={handleChange} placeholder="Enter job description" />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="about">About:</label>
        <textarea className={styles.input} name="about" value={formData.about} onChange={handleChange} placeholder="Enter company description" />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="skills">Skills:</label>
        <input className={styles.input} type="text" name="skills" value={formData.skills} onChange={handleChange} placeholder='skills'/>
      </div>
    
    </div>
    <button className={styles.cancel}>Cancel</button>
    <button onClick={handleSubmit} className={styles.add}>+ Add Job</button>
    </div>
    )
   } 
