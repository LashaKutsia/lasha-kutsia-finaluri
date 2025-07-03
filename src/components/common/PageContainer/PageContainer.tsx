import type { PageContainerProps } from "./types";
import './PageContainer.scss';

const PageContainer = ({ children, className = '' }: PageContainerProps) => {
    return (
        <section className={`page-container ${className}`} >
            {children}
        </section>
    );
};

export default PageContainer;
