import scrollTop from '../../../../assets/initial/img/icons/scrolltop.svg'

export const ScrollUp = () => {
  return (
    <a href="" data-goto=".wrapper" class="button-icon header__scroll-top">
        <img src={scrollTop} alt="icon"/>
    </a>
  )
}