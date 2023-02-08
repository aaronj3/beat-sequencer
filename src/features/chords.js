//import Tone API
import * as Tone from 'tone';
import { Node } from "./node";
import { Sequencer } from './sequencer';


export class Chords extends Sequencer {
    constructor(count, num_channels) {
        super(count, num_channels);
        this.sounds = this.initialize_sounds();
        this.populate_rows();
    }

    initialize_sounds(){
        let sounds = [];


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


    toggle(row, col, e) {
        const node = this.rows[row][col];
        if (!node.state) {
            node.state = true;
            e.target.classList.add("on");

        } else {
            node.state = false;
            e.target.classList.remove("on");
        }
    }

    playNotes(beat, time) {
        for(let i = 0; i < this.rows.length; i++) {
            if(this.rows[i][beat].state === true) {
                let sample = this.sounds[i];
                sample.start(time);
            }
        }
    }
}
