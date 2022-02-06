import {MoreVert} from "@material-ui/icons"
import "./post.css"

export default function Post() {
    return (
        <div>
            <div className="post">
                <div className="postWrapper">
                    <div className="postTop">
                        <div className="postTopLeft">
                            <img className="postPro" src="/assets/person/1.jpg" alt=""/>
                            <span className="postusername">Josh Jacobs</span>
                            <span className="postDate">5 mins ago</span>
                        </div>
                        <div className="postTopRight">
                            <MoreVert />
                        </div>
                    </div>
                    <div className="postCenter">
                        <span className="postText">Hey! Its my first post :)</span>
                        <img src="/assets/post/1.jpg" alt="" />
                    </div>
                    <div className="postBottom">
                        <div className="postBottomLeft">
                            <img className="likeIcon" src="assets/like.png" alt=""/>
                            <img className="heartIcon" src="assets/heart.png" alt=""/>
                            <span className="postlikeCounter">32 people like it</span>
                        </div>
                        <div className="postBottomRight">
                            <span className="postCommentText"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
