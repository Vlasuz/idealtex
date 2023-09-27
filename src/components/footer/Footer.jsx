import { FooterAboutUs } from "./components/FooterAboutUs/FooterAboutUs";
import { FooterCategory } from "./components/FooterCategory/FooterCategory";
import { FooterInfo } from "./components/FooterInfo/FooterInfo";

 export const Footer = () => {
    return (
        <footer class="footer">
			<div class="footer__container">
				<div class="footer__top">
					<FooterAboutUs/>

					<FooterCategory/>

					<FooterInfo/>
				</div>
				<div class="footer__copy">
					<p>© 2023 Idealtex - найкраща швейна фурнітура і тканини оптом All Right Reserved.</p>
				</div>
			</div>
		</footer>
    );
};