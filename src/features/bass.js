//import Tone API
import * as Tone from 'tone';
import { Node } from "./node";
import { Sequencer } from './sequencer';


export class Bass extends Sequencer {
    constructor(count, num_channels) {
        super(count, num_channels);
        this.sounds = this.initialize_sounds();
        this.populate_rows();
    }


    initialize_sounds(){
        // const sampleA = new Tone.Player("../audio/")


    }

    populate_rows(){
        for(let i = 0; i < this.num_channels; i++) {
            let row = [];
            for (let j = 0; j < this.count; j++) {
                row.push(new Node(false));
            }
        this.rows.push(row);
        }
    }

}
