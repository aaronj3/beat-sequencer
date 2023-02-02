
//count represents the number of frequential inputs for a particulr sound board ie. count = 16 means a user has 16 different "counts" to choose from
//num_channels represents the number of different sounds associated with a sound board ie. num_channels = 4 equals (bass low, bass mid, bass high, 808)


class Sequencer {
    constructor(count, num_channels) {
        this.count = count;
        this.num_channels = num_channels;
    }
}


class Drums extends Sequencer {
    constructor(count, num_channels) {
        super(count, num_channels);
    }
}

class Bass extends Sequencer {
    constructor(count, num_channels) {
        super(count, num_channels);

    }
}

class Chords extends Sequencer {
    constructor(count, num_channels) {
        super(count, num_channels);
    }
}



module.exports = {
    Sequencer,
    Drums,
    Bass,
    Chords
}
