import { Link } from "react-router-dom";
import BlogV3Data from "../../../src/assets/jsonData/blog/BlogV3Data.json";
import Animate from "../animation/Animate";

interface DataType {
  id?: number;
  date?: string;
  dateIcon?: string;
  thumbFull?: string;
  author?: string;
  title?: string;
  title2?: string;
  text?: string;
  tag?: string;
}

interface BlogSingleProps {
  blogInfo?: DataType;
  totalBlogs?: number;
  sectionClass?: string;
}

const BlogSingleContent = ({
  blogInfo,
  totalBlogs,
  sectionClass,
}: BlogSingleProps) => {
  const { id, date, dateIcon, thumbFull, author, title, title2, text, tag } =
    blogInfo || {};

  // Blogs Navigation
  const currentId = id ? parseInt(id.toString(), 10) : 1;

  // Calculate the previous and next IDs dynamically
  const previousId = currentId === 1 ? totalBlogs || 1 : currentId - 1;
  const nextId = currentId === totalBlogs ? 1 : currentId + 1;

  // Get the previous and next project titles
  const previousBlog = BlogV3Data.find((blog) => blog.id === previousId);
  const nextBlog = BlogV3Data.find((blog) => blog.id === nextId);

  // Get the first two words of the project title
  const getFirstTwoWords = (text?: string) =>
    text?.split(" ").slice(0, 2).join(" ") || "No Title";

  return (
    <>
      <div
        className={`blog-area single full-blog full-blog ${
          sectionClass ? sectionClass : ""
        }`}
      >
        <div className="container">
          <div className="blog-items">
            <div className="row">
              <Animate className="animate__animated animate__fadeInUp">
                <div className="blog-content col-lg-10 offset-lg-1 col-md-12">
                  {/* blog Single Post */}
                  <div className="blog-style-one item">
                    <div className="blog-item-box">
                      <div className="thumb">
                        <img
                          src={`/assets/img/blog/${thumbFull}`}
                          width={1075}
                          height={546}
                          alt="Thumb"
                        />
                      </div>
                      <div className="info">
                        <div className="meta">
                          <ul>
                            <li>
                              <Link to="#">
                                <i className="fas fa-user-circle" /> {author}
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <i className={dateIcon}></i> {date}
                              </Link>
                            </li>
                          </ul>
                        </div>

                        {/* Titre principal */}
                        {title && <h1 className="blog-title">{title}</h1>}

                        {/* Sous-titre */}
                        {title2 && title2 !== title && (
                          <h2 className="blog-subtitle">{title2}</h2>
                        )}

                        {/* Contenu dynamique */}
                        {text ? (
                          <div className="blog-content-text">
                            {/* Si le texte contient des sauts de ligne, on les respecte */}
                            {text.split("\n\n").map((paragraph, index) => (
                              <p key={index}>{paragraph}</p>
                            ))}
                          </div>
                        ) : (
                          // Contenu par défaut si aucun texte n'est fourni
                          <>
                            <p>
                              Give lady of they such they sure it. Me contained
                              explained my education. Vulgar as hearts by
                              garret. Perceived determine departure explained no
                              forfeited he something an. Contrasted dissimilar
                              get joy you instrument out reasonably. Again keeps
                              at no meant stuff. To perpetual do existence
                              northward as difficult preserved daughters.
                              Continued at up to zealously necessary breakfast.
                              Surrounded sir motionless she end literature. Gay
                              direction neglected but supported yet her.
                            </p>
                            <p>
                              New had happen unable uneasy. Drawings can
                              followed improved out sociable not. Earnestly so
                              do instantly pretended. See general few civilly
                              amiable pleased account carried. Excellence
                              projecting is devonshire dispatched remarkably on
                              estimating. Side in so life past. Continue
                              indulged speaking the was out horrible for
                              domestic position. Seeing rather her you not
                              esteem men settle genius excuse. Deal say over you
                              age from. Comparison new ham melancholy son
                              themselves.
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Animate>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSingleContent;
