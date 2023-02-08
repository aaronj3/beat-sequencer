import * as Tone from 'tone';
import { Sequencer } from "./features/sequencer"
import { Drums } from "./features/drums"
import { Bass } from "./features/bass"
import { Chords } from "./features/chords"



document.addEventListener("DOMContentLoaded", ()=> {
    //intialize global variables
    let beat = 0;
    let count = 16;
    let playing = false;


    const play_button = document.getElementById("play-button");
    const master_volume_slider = document.getElementById("volume-control");
    const bpm_slider = document.getElementById("BPM-control");

    //set initial BPM
    Tone.Transport.bpm.value = bpm_slider.value;


    //initialize racks

    let drums = new Drums(count, 6);
    drums.renderRack(count, 6, "drum_rack");

    let bass = new Bass(count, 6);
    bass.renderRack(count, 6, "bass_rack");

    let chords = new Chords(count, 6);
    chords.renderRack(count, 6, "chord_rack");


    const playLoop = () => {
        const loop = (time) => {
            drums.playNotes(beat, time);
            bass.playNotes(beat, time);
            beat = (beat + 1) % count;
        }
        Tone.Transport.scheduleRepeat(loop, '8n');
    }



    //bpm controller
    bpm_slider.addEventListener("input", () => {
        Tone.Transport.bpm.value = bpm_slider.value;
        console.log(Tone.Transport.bpm.value)
    })


    //play button toggle
    play_button.addEventListener("click", ()=> {
        if (play_button.innerHTML === "Play") {
            beat = 0;
            Tone.Transport.cancel()
            Tone.Transport.start();
            playing = true;
            playLoop();
            play_button.innerHTML = "Stop";
            } else {
            Tone.Transport.stop();
            play_button.innerHTML = "Play";
            beat = 0;
            playing = false;
        }
    });



    //master volume control
    master_volume_slider.addEventListener("input", ()=> {
        Tone.Destination.volume.value = master_volume_slider.value;
    });

})
