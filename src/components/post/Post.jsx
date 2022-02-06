import "./post.css"
import {MoreVert} from "@material-ui/icons"

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
                        <div className="postBottomLeft"></div>
                        <div className="postBottomRight"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
