<?php 
  /*Template Name:About page */
  get_header();
?>

<div class="about-screen">
  <div class="container">
    <h1><?php echo the_title(); ?></h1>
    <?php the_content(); ?>
  </div>
</div>

<?php 
  get_footer();
?>