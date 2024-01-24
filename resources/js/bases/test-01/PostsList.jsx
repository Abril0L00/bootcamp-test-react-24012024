

export const PostsList = ({post}) => {
    
    return (
        <>
        <div>
            <h5>Title:</h5>
            <span>{post.title}</span>
            <h5> Body: </h5>
            <p className="mt-0">{post.body}</p>
            <hr/>
        </div>
        </>
    );
}