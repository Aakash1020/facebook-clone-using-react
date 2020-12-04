import React from 'react';
import "./styles/Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from './Post';

function Feed() {
    return <div className="feed">
            <StoryReel/>
            <MessageSender/>
            <Post 
            profilePic="https://images.yourstory.com/cs/7/4c455a90a21411e98b07315772315642/NikunjLotiafinal2-1583931963548.png?fm=png&auto=format"
            message="WOW, This works"
            timestamp="Timestamp"
            username="BeYounick"
            image="https://cdn.shopify.com/s/files/1/0068/7990/3780/articles/Blog_feat._image_4_800x500.jpg?v=1552165946"
            />
            <Post 
            profilePic="https://images.yourstory.com/cs/7/4c455a90a21411e98b07315772315642/NikunjLotiafinal2-1583931963548.png?fm=png&auto=format"
            message="WOW, This works"
            timestamp="Timestamp"
            username="BeYounick"
            image="https://cdn.shopify.com/s/files/1/0068/7990/3780/articles/Blog_feat._image_4_800x500.jpg?v=1552165946"
            />
            <Post 
            profilePic="https://images.yourstory.com/cs/7/4c455a90a21411e98b07315772315642/NikunjLotiafinal2-1583931963548.png?fm=png&auto=format"
            message="WOW, This works"
            timestamp="Timestamp"
            username="BeYounick"
            image="https://cdn.shopify.com/s/files/1/0068/7990/3780/articles/Blog_feat._image_4_800x500.jpg?v=1552165946"
            />
           
        </div>
    
}

export default Feed
