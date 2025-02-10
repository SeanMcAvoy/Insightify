const CardPost = ({ post }) => {
  return (
    <li className="bg-base-100 rounded-3xl p-6 flex justify-between items-center">
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
      <button className="btn btn-square">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </li>
  );
};

export default CardPost;
