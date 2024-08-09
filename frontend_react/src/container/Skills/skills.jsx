import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import { client, urlFor } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./skills.scss";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';
    const experiencesQuery = '*[_type == "experiences"]';
    client
      .fetch(skillsQuery)
      .then((data) => {
        console.log("skills: ", data);
        setSkills(data);
      })
      .catch((error) => {
        console.log("error:", error);
      });
    client
      .fetch(experiencesQuery)
      .then((data) => {
        console.log("experiences: ", data);
        setExperiences(data);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  }, []);
  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-exp">
          {experiences?.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works?.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      // data-tooltip-content={work.name}
                      data-tooltip-id={work.name}
                      // data-tip
                      // data-d
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <Tooltip id={work.name} variant="light">
                      {work.desc}
                    </Tooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};
export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
