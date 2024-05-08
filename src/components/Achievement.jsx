import React, { useState, useEffect, useRef } from 'react';

const AchievementSection = () => {
  const achievementSectionRef = useRef(null); // Reference to the achievement section
  const [achievements, setAchievements] = useState([0, 0, 0, 0]); // Array to hold 4 achievement numbers
  const [isIntersecting, setIsIntersecting] = useState(false); // State to track if the section is intersecting

  useEffect(() => {
    const targetAchievements = [100, 50, 200, 150]; // Target achievement numbers
    const incrementInterval = 10; // Increment interval in milliseconds
    const maxCount = 325; // Maximum count to reach
    const incrementAmounts = targetAchievements.map(target => target / maxCount);

    let counts = achievements.map(() => 0); // Current counts for each achievement
    let observer;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    if (achievementSectionRef.current) {
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      observer.observe(achievementSectionRef.current);
    }

    const interval = setInterval(() => {
      if (isIntersecting) {
        const newAchievements = counts.map((count, index) => {
          if (count < targetAchievements[index]) {
            counts[index] += incrementAmounts[index];
            return Math.min(counts[index], targetAchievements[index]);
          } else {
            return targetAchievements[index];
          }
        });

        setAchievements(newAchievements);

        if (counts.every((count, index) => count >= targetAchievements[index])) {
          clearInterval(interval);
        }
      }
    }, incrementInterval);

    // Clear interval on component unmount
    return () => {
      clearInterval(interval);
      if (observer) observer.disconnect();
    };
  }, [isIntersecting]); // Run effect when isIntersecting changes



    const achievementTitle = ["Client Served", "Positive Reviews", "Team Members", "Project Completed"]
    const icons = ["fa-regular fa-copy", "fa-solid fa-file-circle-check", "fa-solid fa-face-smile", "fa-solid fa-group-arrows-rotate"]

  return (
    <div ref={achievementSectionRef} className='py-[50px]'>
      
      <div className='flex justify-around text-center'>
        {achievements.map((achievement, index) => (
          <div key={index} className='border w-[180px] py-[25px] rounded hover:bg-[#ff5757] hover:text-[#fff]'>
            <i className={icons[index]} />
            <p className='font-semibold mb-2 text-[30px]'>{Math.floor(achievement)}</p>
            <h3 className='font-semibold'>{achievementTitle[index]}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementSection;
