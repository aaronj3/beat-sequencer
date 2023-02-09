# Beat Sequencer
The Beat Sequencer is a simple browser app that enables users to create beats on a 4-bar track through toggle actions on several sequencers or tracks.
It is intended for users of all backgrounds, as prior knowledge of music theory is not required to make simple, yet melodic and rhythmical beats.

https://aaronj3.github.io/beat-sequencer/

## Key Features:
In the Beat Sequencer, users will be able to:
    - manipulate the on/off status of a tracks
    - change a track's loop through manipulation of the 4-bar visual bar


## Primary Components
    - bass
    - drums

## Global Controls
    - play/stop
    - clear
    - volume bar
    - BPM bar

## Technologies, Libraries, APIs
Tone.JS
Javascript
HTML
CSS

## Technical Implementation
```
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
```

```
    const playLoop = () => {
        const loop = (time) => {
            drums.playNotes(beat, time);
            bass.playNotes(beat, time);
            beat = (beat + 1) % count;
        }
        Tone.Transport.scheduleRepeat(loop, '8n');
    }
```


These two function primarily handle the loop playback mechanism. Tone enables for a global time context to be set so that you can
schedule playback.

```
export class Sequencer {
    constructor(count, num_channels) {
        this.count = count;
        this.num_channels = num_channels;
        this.rows = [];
    }

    renderRack(rack_name){
        const master_rack = document.getElementById("master-rack");
        const rack = document.createElement("div");
        rack.id = `${rack_name}`;

        // i = row, j = col
        for(let i = 0; i < this.rows.length; i++) {
            const row = document.createElement("div");
            row.className = 'row';
            row.dataset.pos = i;
            for(let j = 0; j < this.count; j++) {
                const button = document.createElement("button");
                button.classList.add("node");
                button.dataset.pos = j;
                button.addEventListener('click', (e) => {
                    this.toggle(i, j, e);
                });

                row.append(button);
            }
            rack.append(row);
        }
        master_rack.append(rack);
    }
}
```

This is the main Sequencer class that serves as the top-level model for my sound rack. A straight-forward approach, this implementation
utilizes the states of nodes (as represented by on/off toggles of a button) to play a .wav file that is mapped to the index of an array of these nodes.


## Interface

<img width="1644" alt="Screen Shot 2023-02-09 at 10 55 04 AM" src="https://user-images.githubusercontent.com/63475688/217911207-38f49321-8fff-447b-beaa-8a267d61110f.png">
