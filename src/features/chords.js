//import Tone API
import * as Tone from 'tone';
import Node from "./node";



class Chords extends Sequencer {
    constructor(count, num_channels) {
        super(count, num_channels);

        for(let i = 0; i < num_channels; i ++) {
            this.channels.push(new Node(false));
        }
    }
}
