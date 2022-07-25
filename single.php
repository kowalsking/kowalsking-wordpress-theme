<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package kowalsking
 */

get_header();
?>

    <div class="post-page">
        <div class="container">
            <article>
                <h1><?php the_title(); ?></h1>
                <time class="post-time" datetime="<?php echo get_the_date('Y-m-d'); ?>"><?php echo get_the_date(get_option('date_format_custom')); ?></time>
                <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

                    <?php the_content(); ?>

                <?php endwhile; endif; ?>
            </article>
        </div>
    </div>

<?php
get_footer();
