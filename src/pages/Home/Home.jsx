import React from 'react';
import { motion } from 'framer-motion';
import styles from './Home.module.css';
import Banner from '../../components/Banner/Banner';
import About from '../About/About';
import Actions from '../Actions/Actions';
import Projets from '../../components/Projets/Projets';
import MissionSection from '../../components/MissionSection/MissionSection';
import FormsContainer from '../../components/FormsContainer/FormsContainer';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Banner />
      </motion.div>

      <svg className={styles.svgSeparator} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#fdca1d" d="M0,320L1440,160L1440,320L0,320Z"></path>
      </svg>

      {/* Projets */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.sectionAngled}
      >
        <Projets />
      </motion.div>

      <svg className={styles.svgSeparator} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#222" d="M0,0L1440,160L1440,0L0,0Z"></path>
      </svg>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className={styles.sectionAngled}
      >
        <Actions />
      </motion.div>

      <svg className={styles.svgSeparator} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#fdca1d" d="M0,320L1440,160L1440,320L0,320Z"></path>
      </svg>

      {/* MissionSection */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className={styles.sectionAngled}
      >
        <MissionSection />
      </motion.div>

      <svg className={styles.svgSeparator} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#222" d="M0,0L1440,160L1440,0L0,0Z"></path>
      </svg>

      {/* About */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className={styles.sectionAngled}
      >
        <About />
      </motion.div>

      <svg className={styles.svgSeparator} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#fdca1d" d="M0,320L1440,160L1440,320L0,320Z"></path>
      </svg>

      {/* FormsContainer */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className={styles.sectionAngled}
      >
        <FormsContainer />
      </motion.div>
    </div>
  );
};

export default Home;
