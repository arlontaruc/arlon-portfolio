<svelte:head>
  <title>Projects - Arlon Taruc</title>
  <meta name="description" content="Featured projects by Arlon Taruc" />
</svelte:head>

<div class="projects-container">
  <!-- Projects Header -->
  <div class="header">
    <a href="/" class="back-link">← Back</a>
    <h1>PROJECTS</h1>
  </div>

  <!-- Project 1 -->
  <section class="project project-1">
    <div class="project-content">
      <div class="project-info">
        <h2>PROJECT 1</h2>
        <h3>Design System Implementation</h3>
        <p>
          Built a comprehensive design system from scratch, including reusable
          components, design tokens, and documentation. Improved development
          speed by 40% and ensured consistency across products.
        </p>
        <div class="project-tags">
          <span>Figma</span>
          <span>React</span>
          <span>Storybook</span>
        </div>
      </div>
    </div>
    <div class="project-image">
      <img src="/accretion.png" alt="Project 1 - Design System" />
    </div>
  </section>

  <!-- Project 2 -->
  <section class="project project-2">
    <div class="project-content">
      <div class="project-info">
        <h2>PROJECT 2</h2>
        <h3>E-Commerce Platform Redesign</h3>
        <p>
          Redesigned the entire user experience for a major e-commerce platform.
          Focused on mobile-first approach, accessibility, and conversion
          optimization. Results: 25% increase in conversions.
        </p>
        <div class="project-tags">
          <span>UX Research</span>
          <span>Prototyping</span>
          <span>A/B Testing</span>
        </div>
      </div>
    </div>
    <div class="project-image project-image-placeholder">
      <div class="placeholder">Project Image Coming Soon</div>
    </div>
  </section>

  <!-- Project 3 -->
  <section class="project project-3">
    <div class="project-content">
      <div class="project-info">
        <h2>PROJECT 3</h2>
        <h3>Mobile App for Health Tracking</h3>
        <p>
          Designed and developed a health tracking mobile app with focus on
          user engagement and data visualization. Features include daily
          tracking, insights, and personalized recommendations.
        </p>
        <div class="project-tags">
          <span>Mobile Design</span>
          <span>Data Viz</span>
          <span>React Native</span>
        </div>
      </div>
    </div>
    <div class="project-image project-image-placeholder">
      <div class="placeholder">Project Image Coming Soon</div>
    </div>
  </section>
</div>

<style>
  .projects-container {
    min-height: 100vh;
    background-color: #0a0a0a;
    color: white;
    padding: 2rem;
  }

  .header {
    max-width: 1400px;
    margin: 0 auto 4rem;
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .back-link {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    transition: opacity 0.3s ease;
  }

  .back-link:hover {
    opacity: 0.7;
  }

  .header h1 {
    font-size: 2.5rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    margin: 0;
  }

  .project {
    max-width: 1400px;
    margin: 0 auto 6rem;
    display: grid;
    grid-template-rows: auto 1fr;
    min-height: 80vh;
  }

  .project-content {
    padding: 2rem 0;
  }

  .project-info h2 {
    font-size: 0.9rem;
    letter-spacing: 0.15em;
    color: #888;
    margin-bottom: 0.5rem;
  }

  .project-info h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .project-info p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #e0e0e0;
    max-width: 800px;
    margin-bottom: 1.5rem;
  }

  .project-tags {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .project-tags span {
    padding: 0.5rem 1rem;
    background-color: #1a1a1a;
    border: 1px solid #333;
    border-radius: 4px;
    font-size: 0.9rem;
  }

  .project-image {
    width: 100%;
    height: 50vh;
    min-height: 400px;
    overflow: hidden;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .project-image-placeholder {
    background-color: #1a1a1a;
    border: 1px solid #333;
  }

  .placeholder {
    color: #666;
    font-size: 1.2rem;
    letter-spacing: 0.05em;
  }

  @media (max-width: 768px) {
    .projects-container {
      padding: 1rem;
    }

    .header {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 2rem;
    }

    .header h1 {
      font-size: 2rem;
    }

    .project {
      margin-bottom: 4rem;
      min-height: auto;
    }

    .project-info h3 {
      font-size: 1.5rem;
    }

    .project-info p {
      font-size: 1rem;
    }

    .project-image {
      height: 40vh;
      min-height: 300px;
    }
  }
</style>
