import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams
} from 'react-router-dom';




function NotFound() {
  return (
    <div>
      <h1>Not found!</h1>
      <p>Sorry your page was not found!</p>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome Home!</h1>
    </div>
  );
}

function About() {
  return (
    <div style = {{ padding: 20 }}>
      <h2>About View</h2>
      <p>ABOUT Paragraph...Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

function Launch() {
  return (
    <div>
      <h1>Launch</h1>
      <Outlet />
    </div>
  );
}

function LaunchIndex() {
  return (
    <ul>
      {Object.entries(shoes).map(([slug, { name, img }]) => (
        <li key={slug}>
          <Link to={`/launch/${slug}`}>
            <h2>{name}</h2>
            <img src={img} alt={name} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

function LaunchShoe() {
  const { slug } = useParams();
  const shoe = shoes[slug];

  if (!shoe) {
    return <h2>Not Found!</h2>;
  }

  const { name, img } = shoe;

  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt={name} />
    </div>
  );
}

const shoes = {
  "air-jordan-3-valor-blue": {
    name: "VALOUR BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "jordan-mars-270-london": {
    name: "JORDAN MARS 270 LONDON",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "air-jordan-1-zoom-racer-blue": {
    name: "RACER BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  }
};


















const BlogPosts = {
  '1': {
    title: 'First Blog Post',
    description: 'Lorem ipsum dolor sit amet, consectetur adip.'
  },
  '2': {
    title: 'Second Blog Post',
    description: 'Hello React Router v6'
  }
};

function Posts() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Blog</h2>
      {/* render any matching child */}
      <Outlet />
    </div>
  );
}

function PostLists() {
  return (
    <ul>
      {Object.entries(BlogPosts).map(([slug, { title }]) => (
        <li key={slug}>
          <Link to = {`/posts/${slug}`}>
            <h3>{title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Post() {
  const { slug } = useParams();
  const post = BlogPosts[slug];
  const { title, description } = post;
  return (
    <div style={{ padding: 20 }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function App() {
  return (
    <div className = "App">
      {/* <header className = "App-header">
      </header> */}
      <Router>
        <nav style={{ margin: 10 }}>
          <Link to="/" style={{ padding: 5 }}>
            Home
          </Link>
          <Link to="/about" style={{ padding: 5 }}>
            About
          </Link>
          <Link to="/posts" style={{ padding: 5 }}>
            Posts
          </Link>
        </nav>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/about" element = {<About />} />
          <Route path="posts" element={<Posts />}>
            <Route path="/" element={<PostLists />} />
            <Route path=":slug" element={<Post />} />
          </Route>
          <Route path="/" element={<Home />} />
            <Route path="launch" element={<Launch />}>
            <Route path="/" element={<LaunchIndex />} />
            <Route path=":slug" element={<LaunchShoe />} />
            </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <div className = "max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
        <div className = "ml-6 pt-1">
          <h1 className = "text-2xl our-red leading-tight">
            Tailwind and Create React App
          </h1>
          <p className = "text-base text-gray-700 leading-normal">
            Building apps together
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;