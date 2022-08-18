<?php 
  /*Template Name:About page */
  get_header();
?>

<div class="post-page">
  <div class="container">
    <h1><?php echo the_title(); ?></h1>
    <?php the_content(); ?>

    <blockquote>
      Доброго вечора ми з України
      <span>Петро Щур</span>
    </blockquote>
    <pre>
      <code class="language-js">
      import prism from '../libs/prismjs/prism';

      console.log('prism', prism);
      import FrontPage from './frontPage'

      new FrontPage()

      const root == document.querySelector(':root')

      // root.style.setProperty('--bg-color', 'white')
      console.log(getComputedStyle(root))
    </code>
  </pre>
  <h2>Ніщо не зупинить ідею, час якої настав</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, pariatur excepturi? Amet possimus saepe maxime impedit, officiis omnis et quidem consectetur? Reprehenderit officia consequuntur quod molestiae laudantium earum omnis voluptas.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, pariatur excepturi? Amet possimus saepe maxime impedit, officiis omnis et quidem consectetur? Reprehenderit officia consequuntur quod molestiae laudantium earum omnis voluptas.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, pariatur excepturi? Amet possimus saepe maxime impedit, officiis omnis et quidem consectetur? Reprehenderit officia consequuntur quod molestiae laudantium earum omnis voluptas.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, pariatur excepturi? Amet possimus saepe maxime impedit, officiis omnis et quidem consectetur? Reprehenderit officia consequuntur quod molestiae laudantium earum omnis voluptas.</p>
  </div>


</div>

<?php 
  get_footer();
?>