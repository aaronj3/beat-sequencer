//import Tone API
import * as Tone from 'tone';
import Node from "./node";
import { Sequencer } from './sequencer';



export class Drums extends Sequencer {
    constructor(count, num_channels) {
        super(count, num_channels);
        this.sounds = this.initialize_sounds();

        //the idx of row will map to the idx of sounds
        this.populate_rows();
    }


    initialize_sounds(){
        let sounds = [];
        const hihat = new Tone.Player('../audio/drum-samples/acoustic-kit/hihat.mp3')
        const kick = new Tone.Player('../audio/drum-samples/acoustic-kit/kick.mp3')
        const snare = new Tone.Player('../audio/drum-samples/acoustic-kit/snare.mp3')
        const tom1 = new Tone.Player('../audio/drum-samples/acoustic-kit/tom1.mp3')
        const tom2 = new Tone.Player('../audio/drum-samples/acoustic-kit/tom2.mp3')
        const tom3 = new Tone.Player('../audio/drum-samples/acoustic-kit/tom3.mp3')

        sounds.push(hihat);
        sounds.push(kick);
        sounds.push(snare);
        sounds.push(tom1);
        sounds.push(tom2);
        sounds.push(tom3);
        return sounds;
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
