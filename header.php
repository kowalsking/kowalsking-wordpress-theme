<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package kowalsking
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/prod/css/main.min.css" />
  
	<?php wp_head(); ?>
</head>

<body <?php body_class();?> >

<div class="main">
    <header class="header">
      <div class="container">
          <a href="/" class="logo">K</a>
        <ul class="menu">
          <li>
            <a href="/articles">
              articles
            </a>
          </li>
          <li>
            <a href="/about">
              about
            </a>
          </li>
          <li>
            <a href="/contact">
              contact
            </a>
          </li>
        </ul>
      </div>
    </header>

