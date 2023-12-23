import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'; 

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0, 75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'></img>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>


          {/* Hier kun je inhoud voor je ServiceCard toevoegen */}
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Introduction.</h2>
        {/* Voeg hier je inhoud toe */}
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'

        
      >
        {/* Je tekstuele inhoud hier */}
        We are Tollie Bonker, a team dedicated to assisting individuals with their IT-related queries and projects.

At the Tollie Bonker Team, we welcome your requests for assistance. We aim to engage with you, understand your needs, and offer tailored advice and solutions.

By submitting your request, you're initiating a collaborative journey with our team. We will work alongside you, examining the issue at hand, and providing insights and expertise to help find the most suitable resolution.

Whether it's troubleshooting a technical problem, brainstorming ideas for a project, or seeking guidance on an IT-related task, we're here to support you. Your requests are important to us, and we're committed to offering our collective knowledge and skills to ensure that your IT experience is both seamless and rewarding.

Submit your requests today and let's begin this journey of problem-solving together. Together, we'll explore solutions and find the best path forward for your IT needs.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {/* Hier worden de servicekaarten weergegeven */}
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
