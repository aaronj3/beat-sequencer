//import Tone API
import * as Tone from 'tone';
import { Node } from "./node";
import { Sequencer } from './sequencer';



export class Drums extends Sequencer {
    constructor(count, num_channels) {
        super(count, num_channels);
        this.sounds = this.initialize_sounds();
        this.populate_rows();
    }


    initialize_sounds(){
        let sounds = [];
        const hihat = new Tone.Player('../src/audio/splice-drums/MURDA_hihat.wav').toDestination();
        const kick = new Tone.Player('../src/audio/splice-drums/OS_VBE_kick_deep.wav').toDestination();
        const snare = new Tone.Player('../src/audio/splice-drums/SANGO_snare_standard_09.wav').toDestination();
        const clap = new Tone.Player('../src/audio/splice-drums/clap_click.wav').toDestination();
        const clap2 = new Tone.Player('../src/audio/splice-drums/clap2.wav').toDestination();
        const rimshot = new Tone.Player('../src/audio/splice-drums/rimshot.wav').toDestination();


        sounds.push(hihat);
        sounds.push(kick);
        sounds.push(snare);
        sounds.push(clap);
        sounds.push(clap2);
        sounds.push(rimshot);
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
