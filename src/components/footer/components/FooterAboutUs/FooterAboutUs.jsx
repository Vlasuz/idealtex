import logoImg from '../../../../assets/initial/img/main-img/logo-big.webp'
import logoWeb from '../../../../assets/initial/img/main-img/logo-big.png'
import mailIc from '../../../../assets/initial/img/icons/mail.svg'
import phoneIc from '../../../../assets/initial/img/icons/phone2.svg'

export const FooterAboutUs = () => {
  return (
    <div class="footer__column">
        <a href="" class="footer__logo">
            <picture><source srcSet={logoWeb} type="image/webp"/>
                <img src={logoImg} alt="photo"/>
            </picture>
        </a>
        <ul class="footer__link-list">
            <li>
                <a href="mailto:idealtex82@gmail.com">
                    <img src={mailIc} alt="icon"/>
                    idealtex82@gmail.com
                </a>
            </li>
            <li>
                <a href="tel:380951333412">
                    <img src={phoneIc} alt="icon"/>
                    Vodafone 380951333412 (Viber)
                </a>
            </li>
            <li>
                <a href="tel:380951333412">
                    <img src={phoneIc} alt="icon"/>
                    Kyivstar 380981333672 (Viber)
                </a>
            </li>
            <li>
                <a href="tel:380951333412">
                    <img src={phoneIc} alt="icon"/>
                    Lifecell 380731333512
                </a>
            </li>
        </ul>
    </div>
  )
}
