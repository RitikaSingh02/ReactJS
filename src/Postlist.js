import Axios from 'axios';
import React from 'react' 

class Postlist  extends React.Component {
    constructor(props) {
    super(props);
    this.state={
        posts:[],
        };
    }

    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            this.setState({posts:response.data});
            console.log(response)})
        .catch(error=>{
            console.log(error);
        })
    }
    render(){
    const {posts}=this.state;
    console.log(posts)

        return(
            <div>
                List of posts
                {
                    posts.length?
                posts.map(post=><div key={post.id}>{post.title}</div>):
                null
                }
            </div>
        );
    }
}
export default Postlist