<svelte:head>
  <title>Arlon Taruc - Portfolio</title>
  <meta name="description" content="Portfolio of Arlon Taruc - Designer and Developer" />
</svelte:head>

<div class="home-container">
  <!-- Upper Left: Design Philosophy -->
  <div class="philosophy">
    <h3>DESIGN PHILOSOPHY</h3>
    <p>
      Creating meaningful digital experiences through thoughtful design and
      clean code. I believe in simplicity, functionality, and user-centered solutions.
    </p>
  </div>

  <!-- Upper Right: Skills -->
  <div class="skills">
    <h3>SKILLS</h3>
    <ul>
      <li>UI/UX Design</li>
      <li>Web Development</li>
      <li>JavaScript / TypeScript</li>
      <li>React / Svelte</li>
      <li>HTML / CSS</li>
      <li>Responsive Design</li>
      <li>Prototyping</li>
      <li>Design Systems</li>
    </ul>
  </div>

  <!-- Center: Name -->
  <div class="name-container">
    <h1>ARLON TARUC</h1>
  </div>

  <!-- Navigation to Projects -->
  <div class="nav-hint">
    <a href="/projects">View Projects →</a>
  </div>
</div>

<style>
  .home-container {
    min-height: 100vh;
    background-color: #0a0a0a;
    color: white;
    position: relative;
    padding: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr auto;
    gap: 2rem;
  }

  .philosophy {
    grid-column: 1;
    grid-row: 1;
    max-width: 400px;
  }

  .philosophy h3 {
    font-size: 0.9rem;
    letter-spacing: 0.1em;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  .philosophy p {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #e0e0e0;
  }

  .skills {
    grid-column: 2;
    grid-row: 1;
    justify-self: end;
    max-width: 300px;
  }

  .skills h3 {
    font-size: 0.9rem;
    letter-spacing: 0.1em;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  .skills ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .skills li {
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
    color: #e0e0e0;
  }

  .name-container {
    grid-column: 1 / -1;
    grid-row: 2;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .name-container h1 {
    font-size: clamp(3rem, 10vw, 8rem);
    font-weight: 800;
    letter-spacing: 0.05em;
    margin: 0;
    text-align: center;
  }

  .nav-hint {
    grid-column: 1 / -1;
    grid-row: 3;
    text-align: center;
    padding-bottom: 2rem;
  }

  .nav-hint a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    letter-spacing: 0.05em;
    transition: opacity 0.3s ease;
  }

  .nav-hint a:hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    .home-container {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto auto 1fr auto;
      padding: 1.5rem;
    }

    .philosophy {
      grid-column: 1;
      grid-row: 1;
      max-width: 100%;
    }

    .skills {
      grid-column: 1;
      grid-row: 2;
      justify-self: start;
      max-width: 100%;
    }

    .name-container {
      grid-column: 1;
      grid-row: 4;
    }

    .nav-hint {
      grid-row: 5;
    }
  }
</style> 