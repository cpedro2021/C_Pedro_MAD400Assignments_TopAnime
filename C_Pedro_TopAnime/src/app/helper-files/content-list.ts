import { Content } from "./content-interface";

export class ContentList {
    static animeCount = 0;
    private content: Content[];

    constructor(item: Content) {
        this.content = [];
        this.content[0] = item;
        this.increaseCount();
    }

    get contents(): Content[] {
        return this.content;
    }

    addContent(newItem: Content) {
        this.content.push(newItem);
    }

    increaseCount() {
        return ++ContentList.animeCount;
    }

    totalCount(): number {
        return this.content.length;
    }

    readContent(i: number) {
        var element = document.createElement("p");
        var imageElement = document.createElement("img");
        var div = document.getElementById("anime");
        var image = document.getElementById("image");

        imageElement.setAttribute("src", this.content[i].imgURL);
        element.innerText = "Title: " + this.content[i].title + ",     Description: " + this.content[i].description + ",     Creator: " + this.content[i].creator + ",     Type: " + this.content[i].type;
        div?.replaceWith(element);
        image?.replaceWith(imageElement);
        return ;
    }

}