import { CategoriesHead } from './components/CategoriesHead/CategoriesHead';

import category from '../../assets/initial/img/main-img/category.webp'
import category2 from '../../assets/initial/img/main-img/category.png'

export const Categories = () => {
    return (
        <div className="category">
            <div className="category__container">

                <CategoriesHead/>

                <div className="category__grid-layout">
                    <a href="#" className="category-card">
                        <div className="category-card__image-ibg">
                            <picture>
                                <source srcSet={category} type="image/webp" />
                                <img src={category2} alt="photo" />
                            </picture>
                        </div>
                        <h4 className="category-card__title">
                            ВСЕ ДЛЯ ШИТТЯ
                        </h4>
                    </a>
                    <a href="#" className="category-card">
                        <div className="category-card__image-ibg">
                            <picture>
                                <source srcSet={category} type="image/webp" />
                                <img src={category2} alt="photo" />
                            </picture>
                        </div>
                        <h4 className="category-card__title">
                            ТКАНИНИ І ПРИКЛАДНІ МАТЕРІАЛИ
                        </h4>
                    </a>
                    <a href="" className="category-card">
                        <div className="category-card__image-ibg">
                            <picture>
                                <source srcSet={category} type="image/webp" />
                                <img src={category2} alt="photo" />
                            </picture>
                        </div>
                        <h4 className="category-card__title">
                            БЛИСКАВКА, НИТКА, ҐУДЗИК
                        </h4>
                    </a>
                    <a href="" className="category-card">
                        <div className="category-card__image-ibg">
                            <picture>
                                <source srcSet={category} type="image/webp" />
                                <img src={category2} alt="photo" />
                            </picture>
                        </div>
                        <h4 className="category-card__title">
                            БЛИСКАВКА, НИТКА, ҐУДЗИК
                        </h4>
                    </a>
                    <a href="" className="category-card">
                        <div className="category-card__image-ibg">
                            <picture>
                                <source srcSet={category} type="image/webp" />
                                <img src={category2} alt="photo" />
                            </picture>
                        </div>
                        <h4 className="category-card__title">
                            ВСЕ ДЛЯ ШИТТЯ 1
                        </h4>
                    </a>
                    <a href="" className="category-card">
                        <div className="category-card__image-ibg">
                            <picture>
                                <source srcSet={category} type="image/webp" />
                                <img src={category2} alt="photo" />
                            </picture>
                        </div>
                        <h4 className="category-card__title">
                            ТКАНИНИ І ПРИКЛАДНІ МАТЕРІАЛИ 2
                        </h4>
                    </a>
                    <a href="" className="category-card">
                        <div className="category-card__image-ibg">
                            <picture>
                                <source srcSet={category} type="image/webp" />
                                <img src={category2} alt="photo" />
                            </picture>
                        </div>
                        <h4 className="category-card__title">
                            БЛИСКАВКА, НИТКА, ҐУДЗИК 3
                        </h4>
                    </a>
                    <a href="" className="category-card">
                        <div className="category-card__image-ibg">
                            <picture>
                                <source srcSet={category} type="image/webp" />
                                <img src={category2} alt="photo" />
                            </picture>
                        </div>
                        <h4 className="category-card__title">
                            РУКОДІЛЛЯ І ТВОРЧІСТЬ 4
                        </h4>
                    </a>
                </div>
            </div>
        </div>
    );
};
