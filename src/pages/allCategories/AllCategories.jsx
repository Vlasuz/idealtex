import {useEffect, useState} from "react"
import {getAllCategories, getAllCategoriesChildren} from "../../api/categories";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import {ProductsNotFound} from "../productsNotFound/ProductsNotFound";
import {Loader} from "../../components/loader/Loader";
import {BreadCrumbs} from "../../components/breadCrumbs/BreadCrumbs";

export const AllCategories = ({categoryAlias}) => {

    const [loading, setLoading] = useState(true);
    const [allCategories, setAllCategories] = useState([]);

    useEffect(() => {
        if (categoryAlias) {
            getAllCategoriesChildren(categoryAlias)
                .then(({categories}) => {
                    setAllCategories(categories);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Ошибка я не получил все категории для ст:", error);
                });
        } else {
            getAllCategories()
                .then(({categories}) => {
                    setAllCategories(categories);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Ошибка я не получил все категории для ст:", error);
                });
        }
    }, [categoryAlias]);

    return (
        <>
            <BreadCrumbs pages={[{page: 'Всі категорії'}]}/>
            <div className="category2">
                <div className="category2__container">
                    <h2 className="category2__title title">
                        Категорії
                    </h2>

                    {
                        loading ? <Loader/> : allCategories.length ? <div className="category2__grid-layout">
                            {allCategories?.map((category) => (
                                <CategoryCard key={category.categoryAlias} data={category} type={"page-categories"}/>
                            ))}
                        </div> : <ProductsNotFound/>
                    }

                </div>
            </div>
        </>
    );
}
