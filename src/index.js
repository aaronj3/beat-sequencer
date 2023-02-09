import * as Tone from 'tone';
import { Sequencer } from "./features/sequencer"
import { Drums } from "./features/drums"
import { Bass } from "./features/bass"



document.addEventListener("DOMContentLoaded", ()=> {
    //intialize global variables
    let beat = 0;
    const rows = 6;
    const count = 16;


    const play_button = document.getElementById("play-button");
    const clear_button = document.getElementById("clear-button");
    const master_volume_slider = document.getElementById("volume-control");
    const bpm_slider = document.getElementById("BPM-control");


    //set initial BPM
    Tone.Transport.bpm.value = bpm_slider.value;


    //initialize racks

    let drums = new Drums(count, rows);
    drums.renderRack(count, rows, "drum_rack");

    let bass = new Bass(count, rows);
    bass.renderRack(count, rows, "bass_rack");


    const playLoop = () => {
        const loop = (time) => {
            drums.playNotes(beat, time);
            bass.playNotes(beat, time);
            beat = (beat + 1) % count;
        }
        Tone.Transport.scheduleRepeat(loop, '8n');
    }



    //bpm controller\
    const BPMcounter = document.getElementById("BPM-counter");
    bpm_slider.addEventListener("input", () => {
        Tone.Transport.bpm.value = bpm_slider.value;
        BPMcounter.innerHTML = `BPM: ${bpm_slider.value}`
        console.log(Tone.Transport.bpm.value)
    })


    //play button toggle
    play_button.addEventListener("click", ()=> {
        if (play_button.innerHTML === "Play") {
            beat = 0;
            Tone.context.resume();
            Tone.Transport.cancel();
            Tone.Transport.start();
            playLoop();
            play_button.innerHTML = "Stop";
            } else {
            Tone.Transport.stop();
            play_button.innerHTML = "Play";
            beat = 0;
        }
    });

    const all_nodes = document.getElementsByClassName("node");
    clear_button.addEventListener("click", ()=>{
        console.log("working");
        for(let i = 0; i < rows; i++) {
            for(let j = 0; j < count; j++) {
                drums.rows[i][j].state = false;
                bass.rows[i][j].state = false;

            }
        }
        for(let k = 0; k < all_nodes.length; k++) {
            all_nodes[k].classList.remove("on");
        }
    });




    //master volume control
    master_volume_slider.addEventListener("input", ()=> {
        Tone.Destination.volume.value = master_volume_slider.value;
    });



    //instructions button logic
    const instructions_button = document.getElementById("instructions-btn");
    const instructions_modal = document.getElementById("instructions-modal");
    const closeButton = document.getElementsByClassName("close-button")[0];

    instructions_button.addEventListener("click", () => {
    instructions_modal.style.display = "block";
    })

    closeButton.addEventListener("click", () => {
    instructions_modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
    if (e.target == instructions_modal) {
        instructions_modal.style.display = "none";}
    });


});
