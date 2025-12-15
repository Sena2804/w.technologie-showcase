import { Link } from "react-router-dom";

interface DataType {
    id?: number;
    thumb?: string;
    title2?: string;
    date?: string;
    author?: string;
    dateIcon?: string;
    authorIcon?: string;
    text?: string;
    btnText?: string;
    btnIcon?: string;
    animationDelay?: string;
}

const SingleBlog3Column = ({ blog }: { blog: DataType }) => {
    const { id, thumb, title2, date, author } = blog

    return (
        <>
            <div className="home-blog-style-one">
                <div className="thumb">
                    <Link to={`/blog-single/${id}`}>
                        <img src={`/assets/img/blog/${thumb}`} width={800} height={600} alt="Thumb" />
                    </Link>
                    <div className="info">
                        <div className="meta">
                            <ul>
                                <li>
                                    <Link to="#">{author}</Link>
                                </li>
                                <li>{date}</li>
                            </ul>
                        </div>
                        <h2 className="post-title">
                            <Link to={`/blog-single/${id}`}>{title2}</Link>
                        </h2>
                        <Link to={`/blog-single/${id}`} className="button-regular">
                            Lire plus
                            <i className="fas fa-long-arrow-right" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlog3Column;