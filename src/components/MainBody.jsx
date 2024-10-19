import React from 'react';
import Intro from './Intro';
import '../styles/MainBody.css';
import MainCategories from './MainCategories';
import Advertisement from './advertisement';
import logo from '../assets/images/ciyana-high-resolution-logo.png';
import Items from './Items';
import TrendingItems from './TrendingItems';
import CategoryItems from './CategoryItems';
import Footer from './Footer';

function MainBody() {
  const items = [
    {
      id: 1,
      title: 'Bluh Shoes',
      description: 'Stylish and comfortable shoes for everyday wear.',
      price: 29.99,
      imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/97/8770911/1.jpg?2332',
    },
    {
      id: 2,
      title: 'Apple Watch',
      description: 'Stay connected and track your fitness with the Apple Watch.',
      price: 19.99,
      imageUrl: 'https://static0.anpoimages.com/wordpress/wp-content/uploads/2022/09/Galaxy-S23-Ultra-CAD-3.jpg',
    },
    {
      id: 3,
      title: 'Human Hair',
      description: 'Premium quality human hair for a natural look.',
      price: 9.99,
      imageUrl: 'https://media.gettyimages.com/id/1439794613/video/woman-with-straight-shiny-brown-hair-dropping-down-cut-out-on-black-background.jpg?s=640x640&k=20&c=SAj5RTUEEjII1Me3z8ieMBykCi39pKmOEYwGuU1sn7s=',
    },
    {
      id: 4,
      title: 'Perfume',
      description: 'A captivating fragrance that lasts all day.',
      price: 49.99,
      imageUrl: 'https://www.lucian.store/cdn/shop/articles/IMG_1224.JPG?v=1568721007&width=1100.jpg',
    },
    {
      id: 5,
      title: 'Deodorant',
      description: 'Stay fresh and confident with this long-lasting deodorant.',
      price: 39.99,
      imageUrl: 'https://www.health.com/thmb/tm24iTCoac42tfoJquPkyExyqtM=/6473x0/filters:no_upscale():max_bytes(150000):strip_icc()/hlt-secret-antiperspirant-deodorant-for-women-with-pure-essential-oils_tstaples_166-cf393c190ad24a17b7c9151b90cec82c.jpg',
    },
    {
      id: 6,
      title: 'Samsung Galaxy S23',
      description: 'Experience the latest technology with the Samsung Galaxy S23.',
      price: 29.99,
      imageUrl: 'https://img.freepik.com/premium-psd/samsung-galaxy-s23-ultra-with-black-background-mockup_1332-57443.jpg',
    },
    
  ];
  return (
    <div className="main-body">
      <Intro />
      <MainCategories />
      <Advertisement mainHeading="Shop Smart, Shop Ciyana" description="Get the best deals on electronics, fashion, home, and more." buttonText="Shop Now" imageUrl={logo} altText="Shop Smart, Shop Ciyana" />
      <TrendingItems items={items} />
      <Advertisement mainHeading="Shop Smart, Shop Ciyana" description="Get the best deals on electronics, fashion, home, and more." buttonText="Shop Now" imageUrl={logo} altText="Shop Smart, Shop Ciyana" />
      <CategoryItems items={items} categoryName="Fashion" />
      <Advertisement mainHeading="Shop Smart, Shop Ciyana" description="Get the best deals on electronics, fashion, home, and more." buttonText="Shop Now" imageUrl={logo} altText="Shop Smart, Shop Ciyana" />
      <CategoryItems items={items} categoryName="Electronics" />
      <Advertisement mainHeading="Shop Smart, Shop Ciyana" description="Get the best deals on electronics, fashion, home, and more." buttonText="Shop Now" imageUrl={logo} altText="Shop Smart, Shop Ciyana" />
      <CategoryItems items={items} categoryName="Home" />
    </div>
  );
}

export default MainBody;
