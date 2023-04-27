import styles from './Style.module.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
export const Listing = ()=>{
    const navigate = useNavigate()
    const [jobs, setJobs] = useState([])
    const [skills, setSkills] = useState([])
    console.log(skills)

    const handleSkill = (e)=>{
        if(!skills.includes(e.target.value))
        setSkills((prev)=>[...prev,e.target.value])
    }

    const handleRemove = (skill)=>{
        const index = skills.indexOf(skill)
        skills.splice(index,1)
        setSkills([...skills])
    }
    useEffect(()=>{
        const options = {method: 'GET'};
        const search = skills.join("&")
        fetch(`http://localhost:3000/api/job/job-posts?skillsRequired=${search}`, options)
        .then(response => response.json())
        .then(response => setJobs([...response.jobPosts]))
        .catch(err => console.error(err));
    },[skills])
    return(
        <>
            <div className={styles.container}>
                <div className={styles.containerTop}>
                <input className={styles.inputTop}  type="text" name='search' placeholder='Type any job title'/>
                </div>
                <div className={styles.containerBottom}>
                <select onClick={handleSkill}  className={styles.inputSelect} name="remote">
                    <option value="">Skills</option>
                    {codingSkills.map((skill) => (
                        <option key={skill} value={skill}>
                            {skill}
                        </option>
                    ))}
                </select>
                {skills.map((skill)=>{
                        return (
                            <span className={styles.chip} key={skill}>{skill}<span onClick={()=>handleRemove(skill)} className={styles.cross}>X</span></span>
                        )
                    }
                    )}
                <button onClick={()=>navigate("/addJob")}  className={styles.edit}>Add Job</button>
                </div>
            </div>
            {/* <div className={styles.bottom}> */}
            {jobs.map((data)=>{
                return(
                  <div key={data._id}  className={styles.list}>
                    <div className={styles.listLeft}>
                        <div>
                            <img src={data.logoURL}/>
                        </div>
                        <div className={styles.infoLeft}>
                            <p className={styles.position}>{data.position}</p>
                            <p className={styles.extraInfo}>
                                <span className={styles.greyText}>11-50</span>
                                <span className={styles.greyText}>{data.salary}</span>
                                <span className={styles.greyText}>{data.location}</span>
                            </p>
                            <p className={styles.extraInfo}>
                                <span className={styles.redText}>{data.remote}</span>
                                <span className={styles.redText}>{data.jobType}</span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            {data.skillsRequired.map((skill)=>{
                                return (
                                    <span className={styles.skill} key={skill}>{skill}</span>
                                )
                            }       
                        )}
                        </div>
                        <div className={styles.btnGroup}>
                            <button className={styles.edit}>Edit job</button>
                            <button className={styles.view}>View Details</button>
                        </div>
                    </div>
                 </div>
                )
            })}
            {/* </div> */}
        </>
    )
}

const data = {
  "companyName": "Acme Inc.",
  "logoURL": "https://example.com/logo.png",
  "position": "Front-end Developer",
  "salary": "$80,000",
  "jobType": "full-time",
  "remote": "remote",
  "location": "New York, NY",
  "description": "We're looking for a talented front-end developer to join our team.",
  "about": "Acme Inc. is a leading provider of software solutions for businesses around the world. With a focus on innovation and quality, we're committed to delivering exceptional value to our customers.",
  "skills": ["HTML", "CSS", "JavaScript", "React"]
}

const codingSkills = [
    'JavaScript',
    'Python',
    'Java',
    'C++',
    'Ruby',
    'PHP',
    'Swift',
    'Objective-C',
    'SQL',
    'HTML',
    'CSS',
    'css',
    "node",
    "react"
  ];