<?php get_header(); ?>

<div id="blog" class="articles">
    <div class="container">

        <article class="articles-list">

            <?php $i = 1; ?>
            <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                    <a class="post" href="<?php the_permalink(); ?>">
                        <h3 class="article-title"><?php the_title(); ?></h3>
                        <time class="article-date" datetime="<?php echo get_the_date('Y-m-d'); ?>"><?php echo get_the_date(get_option('date_format_custom')); ?></time>
<!--                        <p>--><?php //the_category(); ?><!--</p>-->
                    </a>
            <?php $i++; ?>
            <?php endwhile; endif; ?>

        </article>

    </div>
</div>

<?php get_footer(); ?>
