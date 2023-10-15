import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const postResponse = await PostService.getById(params.id)
        setPost(postResponse.data)
        const commentsResponse = await PostService.getCommentsByPostId(params.id)
        setComments(commentsResponse.data)
    })

    useEffect(() => {
        fetchPostById()
    }, []);

    return (
        <div>
            <h1>Post #{params.id}</h1>
            {isLoading
                ? <Loader/>
                : <div>{post.title} <br/> {post.body}</div>
            }

            <h1>Коментарии</h1>
            <div>
                {comments.map(comm =>
                    <div key={comm.id} style={{marginTop: 15}}>
                        <h5>{comm.name}</h5>
                        {comm.body} <hr/>
                    </div>
                )}
            </div>


        </div>
    );
};

export default PostIdPage;