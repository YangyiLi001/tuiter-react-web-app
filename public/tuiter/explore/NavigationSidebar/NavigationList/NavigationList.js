import NavigationItem from "./NavigationItem.js";
import navigation from "./Navigation.js";
const NavigationList = (active) => {
    console.log("active:", active);
    return(`
    <ul class="list-group">
        ${
        navigation.map(navigation => {
            return(NavigationItem(navigation, active));
        }).join('')
    }
     </ul>
   `);
}
export default NavigationList;