// import React, { useState, useEffect } from 'react';
// import './styles.css';

// const PostsData = [
//   {
//     "category": "News",
//     "title": "CNN Acquire BEME",
//     "text": "CNN purchased Casey Neistat's Beme app for $25million.",
//     "image": "https://source.unsplash.com/user/erondu/600x400"
//   },
//   {
//     "category": "Travel",
//     "title": "Nomad Lifestyle",
//     "text": "Learn our tips and tricks on living a nomadic lifestyle",
//     "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
//   },
//   {
//     "category": "Development",
//     "title": "React and the WP-API",
//     "text": "The first ever decoupled starter theme for React & the WP-API",
//     "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
//   },
//   {
//     "category": "Development",
//     "title": "React and the WP-API",
//     "text": "The first ever decoupled starter theme for React & the WP-API",
//     "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
//   }
// ];

// const Title = () => (
//   <section className="app-title">
//     <div className="app-title-content">
//       <h1>Latest News</h1>
//       <p>Covering March & April 2015</p>
//       <p>
//         Design from <i className="fa fa-dribbble"></i>
//       </p>
//     </div>
//   </section>
// );

// const Button = () => (
//   <button className="button button-primary">
//     <i className="fa fa-chevron-right"></i> Find out more
//   </button>
// );

// const CardHeader = ({ image, category }) => {
//   const style = {
//     backgroundImage: `url(${image})`
//   };
//   return (
//     <header style={style} className="card-header">
//       <h4 className="card-header--title">{category}</h4>
//     </header>
//   );
// };

// const CardBody = ({ title, text }) => (
//   <div className="card-body">
//     <p className="date">March 20 2015</p>
//     <h2>{title}</h2>
//     <p className="body-content">{text}</p>
//     <Button />
//   </div>
// );

// const Card = ({ details }) => (
//   <article className="card">
//     <CardHeader category={details.category} image={details.image} />
//     <CardBody title={details.title} text={details.text} />
//   </article>
// );

// const Main = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     setPosts(PostsData);
//   }, []);

//   return (
//     <div>
//       <header className="app-header" />
//       <Title />
//       <div className="app-card-list" id="app-card-list">
//         {posts.map((post, index) => (
//           <Card key={index} details={post} />
//         ))}
//       </div>
//     </div>
//   );
// };

// const App = () => (
//   <div>
//     <Main />
//   </div>
// );

// export default App;


import React, { useState, useEffect } from 'react';
import './styles.css';

const Title = () => (
  <section className="app-title">
    <div className="app-title-content">
      <h1>Latest News</h1>
      <p>Covering March & April 2015</p>
      <p>
        Design from <i className="fa fa-dribbble"></i>
      </p>
    </div>
  </section>
);

const Button = () => (
  <button className="button button-primary">
    <i className="fa fa-chevron-right"></i> Find out more
  </button>
);

const CardHeader = ({ image, category }) => {
  const style = {
    backgroundImage: `url(${image})`
  };
  return (
    <header style={style} className="card-header">
      <h4 className="card-header--title">{category}</h4>
    </header>
  );
};

const CardBody = ({ title, text }) => (
  <div className="card-body">
    <p className="date">Data</p>
    <h2>{title}</h2>
    <p className="body-content">{text}</p>
    <Button />
  </div>
);

const Card = ({ details }) => (
  <article className="card">
    <CardHeader category={details.category} image={details.image} />
    <CardBody title={details.title} text={details.text} />
  </article>
);

const Main = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        const transformedData = data.results.map(character => ({
          category: "",
          title: character.name,
          text: `Status: ${character.status}, Species: ${character.species}`,
          image: character.image
        }));
        setPosts(transformedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <header className="app-header" />
      <Title />
      <div className="app-card-list" id="app-card-list">
        {posts.map((post, index) => (
          <Card key={index} details={post} />
        ))}
      </div>
    </div>
  );
};

const App = () => (
  <div>
    <Main />
  </div>
);

export default App;
