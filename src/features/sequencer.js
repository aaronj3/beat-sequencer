//import Tone API
import * as Tone from 'tone';
import { Node } from "./node";



//count represents the number of frequential inputs for a particulr sound board ie. count = 16 means a user has 16 different "counts" to choose from

//num_channels represents the number of different sounds associated with a sound board ie. num_channels = 4 equals (bass low, bass mid, bass high, 808)


export class Sequencer {
    constructor(count, num_channels) {
        this.count = count;
        this.num_channels = num_channels;
        this.rows = [];
    }


    renderRack(count, num_channels, rack_name){
        const master_rack = document.getElementById("master-rack");
        const rack = document.createElement("div");
        rack.id = `${rack_name}`;

        // i = row, j = col
        for(let i = 0; i < this.rows.length; i++) {
            const row = document.createElement("div");
            row.className = 'row';
            row.dataset.pos = i;
            for(let j = 0; j < this.count; j++) {
                const button = document.createElement("button");
                button.classList.add("node");
                button.dataset.pos = j;
                button.addEventListener('click', (e) => {
                    this.toggle(i, j, e);
                });

                row.append(button);
            }
            rack.append(row);
        }
        master_rack.append(rack);
    }


}
