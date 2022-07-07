class World {
    constructor(numFloors) {
        this.location = 0;
        this.floors = [];
        for (let i = 0; i < numFloors; i++) {
            this.floors.push({dirty: false});
        }
    }

    markFloorDirty(floorNumber) {
        this.floors[floorNumber].dirty = true;
    }

    simulate(action) {
        switch(action) {
            case 'SUCK':
                this.floors[this.location].dirty = false;
                break;
            case 'ZERO':
                this.location = 0;
                break;
            case 'ONE':
                this.location = 1;
                break;
            case 'TWO':
                this.location = 2;
                break;
            case 'THREE':
                this.location = 3;
                break;
        }

        return action;
    }
}

function reflexVacuumAgent(world) {
    if (world.floors[world.location].dirty) {
        return 'SUCK';
    } else {
        randomDirty(world)
        return randomPos(world.location);
    }
}

function randomPos (currentPos) {
    let possiblePos = []
    const randomNumber = (Math.random() >= 0.5) ? 1 : 0;

    possiblePos[0] = ['ONE', 'TWO']
    possiblePos[1] = ['ZERO', 'THREE']
    possiblePos[2] = ['ZERO', 'THREE']
    possiblePos[3] = ['ONE', 'TWO']

    return possiblePos[currentPos][randomNumber]
}

function randomDirty (world) {
    let randomNumber = 0;
    for (let i = 0; i < world.floors.length; i++) {
        randomNumber = (Math.random() >= 0.5) ? 1 : 0;
        if (randomNumber === 1 && world.location != i) world.markFloorDirty(i)
    }
}
