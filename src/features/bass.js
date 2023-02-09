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
        let sounds = [];
        const bass_1 = new Tone.Player('../src/audio/bass-samples/CHEF_808_clean_A.wav').toDestination();
        const bass_2 = new Tone.Player('../src/audio/bass-samples/ESTA_bass_one_shot_doom_C.wav').toDestination();
        const bass_3 = new Tone.Player('../src/audio/bass-samples/LAPALUX_bass_one_shot_dirty_growling_prophet_C.wav').toDestination();
        const bass_4 = new Tone.Player('../src/audio/bass-samples/OS_RCK_808_badd_C.wav').toDestination();
        const bass_5 = new Tone.Player('../src/audio/bass-samples/OS_TE_Sub_C_Bags.wav').toDestination();
        const bass_6 = new Tone.Player('../src/audio/bass-samples/tp_808_one_shot_southern_Bbmaj.wav').toDestination();

        sounds.push(bass_1);
        sounds.push(bass_2);
        sounds.push(bass_3);
        sounds.push(bass_4);
        sounds.push(bass_5);
        sounds.push(bass_6);

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
