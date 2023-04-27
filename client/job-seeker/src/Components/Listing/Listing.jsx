import styles from './Style.module.css'
export const Listing = ()=>{
    return(
        <>
            <div className={styles.container}>
                <div className={styles.containerTop}>
                <input className={styles.inputTop}  type="text" name='search' placeholder='Type any job title'/>
                </div>
                <div className={styles.containerBottom}>
                <select className={styles.inputSelect} name="remote">
                    <option value="">Skills</option>
                    <option value="remote">Remote</option>
                    <option value="office">Office</option>
                </select>
                {data.skills.map((skill)=>{
                        return (
                            <span className={styles.chip} key={skill}>{skill}</span>
                        )
                    }
                    )}
                <button className={styles.edit}>Add Job</button>
                </div>
            </div>
            <div className={styles.list}>
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
                            {data.skills.map((skill)=>{
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

