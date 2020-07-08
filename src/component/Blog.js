import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const Blog = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/posts/all")
            .then((res) => res.json())
            .then(
                (posts) => {
                    setIsLoaded(true);
                    setItems(posts);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    if (error) {
        return <div>Erreur: erreur lors du chargement des données..</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else if (!items.length > 0) {
        return <h1>Aucun article n'à été écrit pour le moment.</h1>;
    } else {
        return (
            <ul>
                {items.map((item) => (
                    <li key={item._id}>
                        <Link to={`/blog/${item._id}`}>
                            {item.title} -{" "}
                            <em>
                                <Moment format="DD/MM/YYYY">
                                    {item.publishedAt}
                                </Moment>
                            </em>
                        </Link>
                    </li>
                ))}
            </ul>
        );
    }
};

export default Blog;
