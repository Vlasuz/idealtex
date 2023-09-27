import textImg from '../../../../assets/initial/img/main-img/text-img.webp'
import textImg2 from '../../../../assets/initial/img/main-img/text-img.png'

export const Text = () => {
  return (
    <div className="text-block">
      <div className="text-block__container">
        <div className="text-block__image-ibg">
          <picture>
            <source srcSet={textImg} type="image/webp" />
            <img src={textImg2} alt="photo" />
          </picture>
        </div>
        <div className="text-block__content">
          <h4>Швейна фурнітура оптом зі складу в Києві - з 1995 року!</h4>
          <p> Більше 25 років ми займаємося великими поставками якісної імпортної швейної фурнітури, а також фурнітурою українських виробників. Вибираючи товар в нашому магазині, кожен покупець може купити оптом швейну фурнітуру, що задовольняє найвищим вимогам.</p>
          <p>
            Великий досвід і налагоджена логістика забезпечують нам можливість швидко і якісно обслужити покупця з будь-якого міста, незалежно від обсягу замовлення. Приємних покупок.</p>
        </div>
      </div>
    </div>
  );
};
