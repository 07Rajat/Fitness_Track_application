import React from 'react';

const Blog = () => {
  return (
    <div className="blog-container">
      <h1>Fitness Blogs</h1>
      <div className="blog-post">
      <h2>Tips for Starting Your Fitness Journey</h2>
      <ul>
        <li>Set realistic goals: Start with achievable goals that you can gradually build upon over time.</li>
        <li>Find activities you enjoy: Explore different types of exercises and activities to find what you love doing.</li>
      </ul>
        <p>
          For more details, watch the video: <br/>
          <a
            href="https://www.youtube.com/watch?v=p0RR4LWlt5w"
            target="_blank"
            rel="noopener noreferrer"
          >
            Starting Your Fitness Journey
          </a>
        </p>
      </div>
      <div className="blog-post">
      <h2>Cardio vs. Weight Training: Which is Better?</h2>
      <ul>
        <li>Cardio exercises, such as running or cycling, focus on increasing cardiovascular endurance and burning calories.</li>
        <li>Weight training, also known as strength training or resistance training, involves lifting weights or using resistance bands to build muscle strength and size.</li>
        <li>Cardio workouts are effective for improving cardiovascular health, increasing stamina, and burning fat.</li>
       </ul>
        <p>
          Watch the video: <br/>
          <a
            href="https://www.youtube.com/watch?v=_Slrc6qqilM"
            target="_blank"
            rel="noopener noreferrer"
          >
            Healthy Breakfast Ideas
          </a>
        </p>
      </div>
      <div className="blog-post">
        <h2>Meal Prep Ideas for Busy People</h2>
        <ul>
        <li>Prepare large batches of grains, such as rice or quinoa, to use throughout the week.</li>
        <li>Chop and store fresh vegetables in sealed containers for easy access when cooking.</li>
        <li>Cook proteins like chicken, tofu, or beans in advance and portion them into individual servings.</li>
        </ul>
        <p>
          Learn more in this video: <br/>
          <a
            href="https://www.youtube.com/watch?v=_Slrc6qqilM"
            target="_blank"
            rel="noopener noreferrer"
          >
            Benefits of Whole Foods
          </a>
        </p>
      </div>
    </div>
  );
};

export default Blog;
