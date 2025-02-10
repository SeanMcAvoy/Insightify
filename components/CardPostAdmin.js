import ButtonDeletePost from "./ButtonDeletePost";

const CardPostAdmin = ({ post }) => {
  return (
    <li className="bg-base-100 rounded-3xl p-6 flex justify-between items-center gap-1">
      <div>
        <div className="font-bold mb-1">{post.title}</div>
        <div
          className={`opacity-80 leading-relaxed max-h-32 ${
            post.description.length > 100
              ? "overflow-scroll overflow-x-hidden"
              : "overflow-hidden"
          }`}
        >
          {post.description}
        </div>
      </div>
      <ButtonDeletePost postId={post._id.toString()} />
    </li>
  );
};

export default CardPostAdmin;
