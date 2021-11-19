import React from 'react';
import { useState } from 'react';
import './Home.css';

const Home = () => {
    const [boolian, setBoolian] = useState(false);

    return (
        <div className="page-container">
            <h1>Home</h1>
        </div>
    );
};

export default Home;