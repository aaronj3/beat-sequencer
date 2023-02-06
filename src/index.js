import * as Tone from 'tone';
import { Sequencer } from "./features/sequencer"
import { Drums } from "./features/drums"
import { Bass } from "./features/bass"
import { Chords } from "./features/chords"



document.addEventListener("DOMContentLoaded", ()=> {
    //intialize global variables
    const count = 16;
    let playing = false;
    Tone.Transport.bpm.value = 80;



    const play_button = document.getElementById("play-button");
    const mute_button = document.getElementById("mute-button");
    const master_volume_slider = document.getElementById("volume-control");
    const bpm_slider = document.getElementById("BPM-control");

    const master_volume = new Tone.Volume(master_volume_slider.value).toDestination();
    console.log(master_volume_slider.value);


    //initialize racks

    let drums = new Drums(count, 6);
    drums.renderRack(count, 6, "drum_rack");

    let bass = new Bass(count, 6);
    bass.renderRack(count, 6, "bass_rack");

    let chords = new Chords(count, 6);
    chords.renderRack(count, 6, "chord_rack");


    //test button --- get rid of this
    document.getElementById("test").addEventListener("click", ()=> {
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("A4", "8n");
    });


    //bpm controller
    bpm_slider.addEventListener("input", () => {
        Tone.Transport.bpm.value = bpm_slider.value;
        console.log(Tone.Transport.bpm.value)
    })


    //play button toggle
    play_button.addEventListener("click", ()=> {
        //build function to stop or play the loop


        //handles the UI cosmetic change
        if (play_button.innerHTML === "Play") {
            play_button.innerHTML = "Stop";
        } else {
            play_button.innerHTML = "Play";
        }
    });

    //mute button toggle
    mute_button.addEventListener("click", ()=> {
        //build function to mute
        //handles the UI cosmetic change
        if (mute_button.innerHTML === "Mute") {
            mute_button.innerHTML = "Unmute";
        } else {
            mute_button.innerHTML = "Mute";
        }
    });


    ///????This is not working as intended??///
    master_volume_slider.addEventListener("input", ()=> {
        master_volume.volume.value = master_volume_slider.value;
        console.log(master_volume_slider.value);
        console.log(master_volume.volume.value);
    });

})
