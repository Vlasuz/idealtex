import {NavLink} from "react-router-dom";
import { PageNotFoundStyle } from "./pageNotFoundStyle.styled";

const PageNotFound = () => {
    return (
        <PageNotFoundStyle>
            <div className="wrapper">
                <h1>404</h1>
                <h2>Not Found</h2>
                <p>The resource requested could not be found on this server!</p>
                <NavLink to={'/'}>
                    Go to main
                </NavLink>
            </div>
        </PageNotFoundStyle>
    );
};

export default PageNotFound;