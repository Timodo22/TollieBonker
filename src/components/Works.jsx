import { motion } from "framer-motion";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { Tilt } from "react-tilt";
import React from "react";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("right", "spring", index * 0.5, 0, 75)} >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
          }}

        className='w-[300px] green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <motion.div
          
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl'
            />
            



            <h3 className='text-white text-[20px] font-bold text-center'>{name}</h3>
            <p className='text-white text-[14px] text-center'>{description}</p>
            {/* Add tags or other content for ProjectCard */}
          </div>
        </motion.div>
      </Tilt>
    </motion.div>
  );
};




const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>what have we done so far</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          In here we showcase some projects we have done in the past. And we will post our future projects. We do IT projects for small individuals or small/starting businesses. Our goal is helping people with there IT problems and help with the setup of your website/webshop.
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      
    </>
  );
};

export default SectionWrapper(Works, 'Works');
