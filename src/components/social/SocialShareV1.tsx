import { Link } from "react-router-dom";

interface Props {
    linkedin?: string;
}

const SocialShareV1 = ({ linkedin }: Props) => {
    return (
        <>
            {linkedin && (
                <li>
                    <a href={linkedin} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in" />
                    </a>
                </li>
            )}

            <li>
                <a href="https://www.instagram.com/wpoint_tech/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram" />
                </a>
            </li>

            <li>
                <a
                    href="https://www.facebook.com/people/WTECH/61581542858227/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-facebook-f" />
                </a>
            </li>
        </>
    );
};

export default SocialShareV1;
