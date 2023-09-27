import { FooterAboutUs } from "./components/FooterAboutUs/FooterAboutUs";
import { FooterCategory } from "./components/FooterCategory/FooterCategory";
import { FooterInfo } from "./components/FooterInfo/FooterInfo";

 export const Footer = () => {
    return (
        <footer className="footer">
			<div className="footer__container">
				<div className="footer__top">
					<FooterAboutUs/>

					<FooterCategory/>

					<FooterInfo/>
				</div>
				<div className="footer__copy">
					<p>© 2023 Idealtex - найкраща швейна фурнітура і тканини оптом All Right Reserved.</p>
				</div>
			</div>
		</footer>
    );
};