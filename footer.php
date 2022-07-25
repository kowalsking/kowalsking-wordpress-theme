<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package kowalsking
 */

?>

<?php wp_footer(); ?>

<footer>
      <div class="container">
        <div class="contacts">
          <div class="icons">
            <a href="https://t.me/kowalsking" target="_blank" class="contact_link"><i class="fab fa-telegram"></i></a>
            <a href="https://www.linkedin.com/in/dmytro-kozlenko-b74083132/" target="_blank" class="contact_link"><i class="fab fa-linkedin"></i></a>
            <a href="https://github.com/kowalsking" target="_blank" class="contact_link"><i class="fab fa-github"></i></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
  <script type="module" src="<?php echo get_template_directory_uri(); ?>/dist/app.js"></script>
  <script src="https://kit.fontawesome.com/aff95a7b22.js" crossorigin="anonymous"></script>
</body>

</html>
