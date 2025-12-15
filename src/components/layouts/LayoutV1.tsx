import FooterV3 from "../footer/FooterV3";
import HeaderV3 from "../header/HeaderV3";

interface LayoutProps {
    children?: React.ReactNode;
}

const LayoutV1 = ({ children }: LayoutProps) => {
    return (
        <>
            <div className="smooth-scroll-container">
                <HeaderV3 />
                {children}
                <FooterV3 />
            </div>
        </>
    );
};

export default LayoutV1;