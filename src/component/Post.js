import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Moment from "react-moment";

const Post = () => {
    let { id } = useParams();
    let history = useHistory();

    const [post, setPost] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("http://localhost:5000/posts/" + id)
            .then((res) => res.json())
            .then((result) => {
                if (!result) {
                    history.push("/404");
                }
                setIsLoaded(true);
                setPost(result);
            });
    });

    if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {
        return (
            <div>
                <h1>{post.title}</h1>
                <em>
                    <Moment format="DD/MM/YYYY - HH:mm">
                        {post.publishedAt}
                    </Moment>
                </em>
                <p>{post.text}</p>
            </div>
        );
    }
};

export default Post;
