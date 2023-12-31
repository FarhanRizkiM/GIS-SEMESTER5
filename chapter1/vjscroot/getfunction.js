import {
    get
} from "https://jscroot.github.io/api/croot.js";
import {
    setInner,
    addChild
} from "https://jscroot.github.io/element/croot.js";

export let URLGeoJson = "../data.json";
export let tableTag = "tr";
export let tableRowClass = "content is-small";
export let tableTemplate = `
<td>#TYPE#</td>
<td>#NAME#</td>
<td>#KORDINAT#</td>
`

export function responseData(results) {
    console.log(results.features);
    results.features.forEach(isiRowPoint);
    results.features.forEach(isiRowLineString);
    results.features.forEach(isiRowPolygon);
}

export function isiRowPoint(value) {
    if (value.geometry.type === "Point") {
        let content = tableTemplate.replace("#TYPE#", value.geometry.type).replace("#NAME#", value.properties.name).replace("#KORDINAT#", value.geometry.coordinates);
        console.log(content);
        addChild("point", tableTag, tableRowClass, content);
    }
}

export function isiRowLineString(value) {
    if (value.geometry.type === "LineString") {
        let content = tableTemplate.replace("#TYPE#", value.geometry.type).replace("#NAME#", value.properties.name).replace("#KORDINAT#", value.geometry.coordinates);
        console.log(content);
        addChild("line", tableTag, tableRowClass, content);
    }
}

export function isiRowPolygon(value) {
    if (value.geometry.type === "Polygon") {
        let content = tableTemplate.replace("#TYPE#", value.geometry.type).replace("#NAME#", value.properties.name).replace("#KORDINAT#", value.geometry.coordinates);
        console.log(content);
        addChild("polygon", tableTag, tableRowClass, content);
    }
}