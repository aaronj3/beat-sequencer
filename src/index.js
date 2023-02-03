import * as Tone from 'tone';

document.addEventListener("DOMContentLoaded", ()=> {
    const play_button = document.getElementById("play-button");
    const mute_button = document.getElementById("mute-button");
    const master_volume_slider = document.getElementById("volume-control");

    const master_volume = new Tone.Volume(master_volume_slider.value).toDestination();
    console.log(master_volume_slider.value);


    //test button --- get rid of this
    document.getElementById("test").addEventListener("click", ()=> {
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("A4", "8n");
    });


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
