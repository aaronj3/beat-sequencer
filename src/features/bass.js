//import Tone API
import * as Tone from 'tone';
import Node from "./node";


class Bass extends Sequencer {
    constructor(count, num_channels) {
        super(count, num_channels);
        this.sounds = [];
        this.initialize_sounds();
        this.populate_rows();


    }


    initialize_sounds(){
        // const sampleA = new Tone.Player("../audio/")


    }

    populate_rows(){
        for(let i = 0; i < num_channels; i++) {
            row = [];
            for (let j = 0; j < count; j++) {
                row.push(new Node(false));
            }
        this.rows.push(row);
        }
    }





}
