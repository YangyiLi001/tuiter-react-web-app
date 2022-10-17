import navigation from "./Navigation.js";

const checkName = (navigation, active) => {
    if (active == navigation.Name){
        console.log(1)
        return "list-group-item list-group-item-action active"
    }
    else {
        return "list-group-item list-group-item-action"
    }
}

const NavigationItem = (navigation, active) => {
    console.log("navigation", navigation);
    console.log("active", active);
    return(`
      
     <a href="${navigation.href}" class="${checkName(navigation, active)}">
        <i class='${navigation.className}'></i><span class="d-none d-xl-inline"> ${navigation.Name}</span></a>

 `);
}
export default NavigationItem;