import React from 'react'

export const FooterInfo = () => {
  return (
      <div className="footer__column">
          <div className="footer__title">
              Інформація
          </div>
          <nav className="footer__nav">
              <ul className="footer__list">
                  <li>
                      <a href="#">
                          Про нас
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          Умови роботи
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          Знижки
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          Навігація
                      </a>
                  </li>
              </ul>
          </nav>
      </div>
  )
}
