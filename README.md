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
<img width="384" alt="Screen Shot 2023-02-09 at 11 10 07 AM" src="https://user-images.githubusercontent.com/63475688/217913846-4b1a7692-d537-4d9f-8d47-57b6547176d1.png">


<img width="366" alt="Screen Shot 2023-02-09 at 11 10 13 AM" src="https://user-images.githubusercontent.com/63475688/217913834-9a52f24b-0d53-40cd-b259-acc3e899a84d.png">

These two function primarily handle the loop playback mechanism. Tone enables for a global time context to be set so that you can
schedule playback.

<img width="538" alt="Screen Shot 2023-02-09 at 11 09 29 AM" src="https://user-images.githubusercontent.com/63475688/217913878-26f39b9d-780b-40d4-ba7f-1dd2111cf042.png">

This is the main Sequencer class that serves as the top-level model for my sound rack. A straight-forward approach, this implementation
utilizes the states of nodes (as represented by on/off toggles of a button) to play a .wav file that is mapped to the index of an array of these nodes.


## Interface

<img width="1644" alt="Screen Shot 2023-02-09 at 10 55 04 AM" src="https://user-images.githubusercontent.com/63475688/217911207-38f49321-8fff-447b-beaa-8a267d61110f.png">
