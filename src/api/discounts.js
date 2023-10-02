import axios from "axios";
import {getApiLink} from "../hooks/getApiLink";
import {setDiscounts} from "../redux/toolkitSlice";

export const discounts = ({dispatch}) => {
    axios.get(getApiLink('v1/public/settings/discounts')).then(({data}) => {
        console.log(data.settings)
        dispatch(setDiscounts(data.settings))
    }).catch(er => {
        console.log(er)
    })
}