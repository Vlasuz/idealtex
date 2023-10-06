import { useEffect, useState } from 'react'
import { ReactComponent as ScrollTopIcon } from '../../../../assets/initial/img/icons/scrolltop.svg';

export const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const handleScroll = () =>{
      window.pageYOffset > 100 ? setIsVisible(true) : setIsVisible(false)
    }

    window.addEventListener('scroll', handleScroll);

    return () =>{
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);



  return (
    <button onClick={scrollToTop} className={`button-icon header__scroll-top ${isVisible ? '_header-scroll' : ''}`}>
        <ScrollTopIcon alt="icon" />
    </button>
  )
}
