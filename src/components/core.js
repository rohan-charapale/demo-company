import React from 'react';
import './core.css'
import { useState } from 'react';

function List() {
  const articles = [
    {
      id: 1,
      thumbnail: 'https://source.unsplash.com/325x200/?technology',
      category: 'Technology',
      duration: '2 hours ago',
      title: 'Title of technology',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
    {
      id: 2,
      thumbnail: 'https://source.unsplash.com/325x200/?education',
      category: 'Education',
      duration: '2 hours ago',
      title: 'Title of education',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
    {
        id: 3,
        thumbnail: 'https://source.unsplash.com/325x200/?lifestyle',
        category: 'Lifestyle',
        duration: '2 hours ago',
        title: 'Title of Lifestyle',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
    {
        id: 4,
        thumbnail: 'https://source.unsplash.com/325x200/?healthcare',
        category: 'Healthcare',
        duration: '2 hours ago',
        title: 'Title of Helthcare',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
    {
        id: 5,
        thumbnail: 'https://source.unsplash.com/325x200/?sport',
        category: 'Sport',
        duration: '2 hours ago',
        title: 'Title of Sport',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      },
      {
        id: 6,
        thumbnail: 'https://source.unsplash.com/325x200/?food',
        category: 'Food',
        duration: '2 hours ago',
        title: 'Title of Food',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      },
      {
          id: 7,
          thumbnail: 'https://source.unsplash.com/325x200/?lifestyle',
          category: 'Lifestyle',
          duration: '2 hours ago',
          title: 'Title of lifestyle',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      },
      {
          id: 8,
          thumbnail: 'https://source.unsplash.com/325x200/?healthcare',
          category: 'Healthcare',
          duration: '2 hours ago',
          title: 'Title of healthcare',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      },
      {
        id: 9,
        thumbnail: 'https://source.unsplash.com/325x200/?technology',
        category: 'Technology',
        duration: '2 hours ago',
        title: 'Title of technology',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      },
      {
        id: 10,
        thumbnail: 'https://source.unsplash.com/325x200/?food',
        category: 'Food',
        duration: '2 hours ago',
        title: 'Title of Food',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      },
      {
          id: 11,
          thumbnail: 'https://source.unsplash.com/325x200/?food',
          category: 'Food',
          duration: '2 hours ago',
          title: 'Title of Food',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      },
      {
          id: 12,
          thumbnail: 'https://source.unsplash.com/325x200/?sport',
          category: 'Sport',
          duration: '2 hours ago',
          title: 'Title of Sport',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      },
      {
        id: 13,
        thumbnail: 'https://source.unsplash.com/325x200/?technology',
        category: 'Technology',
        duration: '2 hours ago',
        title: 'Title of technology',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      },
      {
        id: 14,
        thumbnail: 'https://source.unsplash.com/325x200/?education',
        category: 'Education',
        duration: '2 hours ago',
        title: 'Title of education',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      },
      {
          id: 15,
          thumbnail: 'https://source.unsplash.com/325x200/?lifestyle',
          category: 'Lifestyle',
          duration: '2 hours ago',
          title: 'Title of Lifestyle',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      },
      {
          id: 16,
          thumbnail: 'https://source.unsplash.com/325x200/?healthcare',
          category: 'Healthcare',
          duration: '2 hours ago',
          title: 'Title of Helthcare',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      },
      {
          id: 17,
          thumbnail: 'https://source.unsplash.com/325x200/?technology',
          category: 'Technology',
          duration: '2 hours ago',
          title: 'Title of technology',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
          id: 18,
          thumbnail: 'https://source.unsplash.com/325x200/?education',
          category: 'Education',
          duration: '2 hours ago',
          title: 'Title of education',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
            id: 19,
            thumbnail: 'https://source.unsplash.com/325x200/?lifestyle',
            category: 'Lifestyle',
            duration: '2 hours ago',
            title: 'Title of lifestyle',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
            id: 20,
            thumbnail: 'https://source.unsplash.com/325x200/?healthcare',
            category: 'Healthcare',
            duration: '2 hours ago',
            title: 'Title of healthcare',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
          id: 21,
          thumbnail: 'https://source.unsplash.com/325x200/?sport',
          category: 'Sport',
          duration: '2 hours ago',
          title: 'Title of Sport',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
          id: 22,
          thumbnail: 'https://source.unsplash.com/325x200/?food',
          category: 'Food',
          duration: '2 hours ago',
          title: 'Title of Food',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
            id: 23,
            thumbnail: 'https://source.unsplash.com/325x200/?education',
            category: 'Education',
            duration: '2 hours ago',
            title: 'Title of education',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
            ,
        },
        {
            id: 24,
            thumbnail: 'https://source.unsplash.com/325x200/?sport',
            category: 'Sport',
            duration: '2 hours ago',
            title: 'Title of Sport',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
  ];
  const categories = ['All', 'Technology', 'Education', 'Lifestyle', 'Healthcare', 'Sport', 'Food'];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredVideos = selectedCategory === 'All' ? articles : articles.filter(video => video.category === selectedCategory);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (

    <div className='core'>
        <div className="category-menu">
        {categories.map(category => (
          <li
            key={category}
            className={`category-link ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => handleCategorySelect(category)}
            style={{ backgroundColor: selectedCategory === category ? '#ffbb29' : '#1D1F25' ,
            color: selectedCategory === category ? '#000000' : '#757b8c'       
                }}
          >
            {category}
          </li>
        ))}
      </div>
    <div className="video-list">
      {filteredVideos.map(articles => (
        <div className="video-item" key={articles.id}>
          <img src={articles.thumbnail} alt="Thumbnail" className="thumbnail" />
          <div className='details'>
            <div className="info">
                <div className="category">{articles.category.toUpperCase()}</div>
                <div className="duration">{articles.duration}</div>
            </div>
            <div className="title">{articles.title}</div>
            <div className="description">{articles.description}</div>
            <li className="read-more">Read More → </li>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default List;
