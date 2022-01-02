import {v4 as uuidv4} from 'uuid'

const projects = [
    {
      id: uuidv4(),
      title: 'QuizJS',
      desc:
        'A fullstack quiz application to test your knowledge in Javascript, React, and HTML/CSS. Created with React and Material UI for frontend and Firebase for backend.',
      img: 'https://res.cloudinary.com/orawee/image/upload/v1640990691/Screen_Shot_2021-12-31_at_2.44.35_PM_hilinb.png',
    },
    {
      id: uuidv4(),
      title: 'Travelgram',
      desc:
        'A fullstack web application that will allow people to share their travel experience to a community of other travelers. Created with React and Material UI for frontend, Express and MongoDB for backend.',
      img: 'https://user-images.githubusercontent.com/90231932/144096351-cc57a32a-1999-4556-a9a5-6a8e8fe94e2b.png',
    },
    {
      id: uuidv4(),
      title: 'Studio Ghibli Database',
      desc:
        'A web application to search and view additional details for Studio Ghibli films. Created with React and Material UI.',
      img: 'https://res.cloudinary.com/orawee/image/upload/v1636126672/StudioGhibli/Screen_Shot_2021-11-05_at_8.31.51_AM_fcadud.png',
    }
  ];
  
  export default projects;
  