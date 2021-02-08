namespace Ende {

    // export interface Item {
    //     name: string;
    //     price: number;
    //     stepper: boolean;
    // }

    // export interface Data {
    //     [category: string]: Item[];
    // }

    // export function generateContent(_data: Data): void {
    //     console.log(_data);

    //     for (let category in _data) {
    //         console.log(category);


    //         let items: Item[] = _data[category];
    //         createMultiple(items, category);

            
    //         console.log(items);
    //         let group: HTMLElement | null = null;

    //         switch (category) {
    //             case "zutaten":
    //                 group = createMultiple(items, category);

                    
    //                 let fieldset: HTMLFieldSetElement = document.querySelector("#ingredients");
    //                 if (fieldset && group) {
    //                     fieldset.appendChild(group);

    //                 }
    //                 break;
    //             default:
    //                 break;


    //         }
    //     }

    // }
    // function createMultiple(_items: Item[], _category: string): HTMLElement | null {
    //     let group: HTMLDivElement = document.createElement("div");
    //     for (let item of _items) {
    //         let checkbox: HTMLInputElement = document.createElement("input");
    //         checkbox.type = "checkbox";
    //         checkbox.setAttribute("price", item.price.toFixed(2));
    //         checkbox.value = item.name;
    //         checkbox.name = _category;
    //         checkbox.id = item.name;


    //         let label: HTMLLabelElement = document.createElement("label");
    //         label.textContent = item.name;
    //         label.htmlFor = item.name;

    //         let stepper: HTMLInputElement = document.createElement("input");
    //         stepper.type = "number";
    //         stepper.name = _category;
    //         stepper.id = item.name + "_stepper";
    //         stepper.step = "1";
    //         stepper.min = "0";
    //         stepper.max = "100";
    //         stepper.value = "0";

    //         //let absatz: HTMLElement = document.createElement("<br>");


    //         group.appendChild(checkbox);
    //         group.appendChild(label);
    //         group.appendChild(stepper);
    //         //group.appendChild(absatz);



    //     }
    //     return group;
    // }
    // interface Rocket {
    //     _id: string;
    //     Name?: string;
    //     Color?: string;
    //     Explosion?: string;
    //     Lifetime?: string;
    // }

    // export async function getPotion (_event: Event): Promise<void> {
    //     let url: string = "https://eia2endabgabe.herokuapp.com/retrieve";
    //      /* let url: string = "http://localhost:5001/retrieve";  */  
    //     let response: Response = await fetch(url);
    //     let reply: Rocket[] = JSON.parse(await response.text());
    //     document.getElementById("output")!.innerHTML = "";
    //     for (let i: number = 0; i < reply.length; i++) {
    //         let div: HTMLDivElement = document.createElement("div");  
    //         div.setAttribute("class", "vorschau");
    //         let p: HTMLElement = document.createElement("p");
    //         p.innerHTML += "<h4>Trankname: " + reply[i].Name + "</h4><br>";
    //         if (reply[i].Lifetime != undefined)
    //             p.innerHTML += "<b>Lifetime:</b> " + reply[i].Lifetime + "<br>";
    //         p.innerHTML += "<b>Explosion:</b> " + reply[i].Explosion + "<br>" + "<b>Wirkungsdauer:</b> " + reply[i].Color + " min <br>";
    //         if (reply[i].Lifetime != "")
    //             p.innerHTML += "<b>Lifetime:</b>" + "<br>";   
            
    //         div.appendChild(p);
    //         document.getElementById("output")!.appendChild(div);           
    //     }   
    // }





}
