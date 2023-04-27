import styles from './Style.module.css'
export const Details = ()=>{
    return(
        <>
            <div className={styles.container}>
               <p className={styles.containerText}>{data.companyName}</p>
            </div>
            <div className={styles.containerBottom}>
                <div className={styles.preHeading}>
                <p className={styles.lightText}>{data.jobType}</p>
                </div>
                <div className={styles.heading}>
                    <div>
                    <p className={styles.boldText}>{data.position}</p>
                    <p className={styles.locationText}>{data.location}</p>
                    </div>
                    <div>
                        <button className={styles.edit}>Edit Job</button>
                    </div>
                </div>
                <div className={styles.perks}>
                    <div>
                        <p className={styles.lightText}>Stipend</p>
                        <p className={styles.lightText}>{data.salary}</p>
                    </div>
                    <div>
                        <p className={styles.lightText}>Duration</p>
                        <p className={styles.lightText}>6 Months</p>
                    </div>
                </div>
                <div className={styles.info}>
                    <h2>About Company</h2>
                    <p>{data.about}</p>
                </div>
                <div className={styles.info}>
                    <h2>Skill(s) Required</h2>
                    {data.skills.map((skill)=>{
                        return (
                            <span className={styles.skill} key={skill}>{skill}</span>
                        )
                    }
                    )}
                </div>
                <div className={styles.info}>
                    <h2>About the job/internship</h2>
                    <p>{data.description}</p>
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
  "remote": "yes",
  "location": "New York, NY",
  "description": "We're looking for a talented front-end developer to join our team.",
  "about": "Acme Inc. is a leading provider of software solutions for businesses around the world. With a focus on innovation and quality, we're committed to delivering exceptional value to our customers.",
  "skills": ["HTML", "CSS", "JavaScript", "React"]
}
