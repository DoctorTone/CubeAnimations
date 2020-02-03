// General parameters for this app

const APPCONFIG = {
    ROOT_ROTATE: Math.PI/4,
    BLOCK_COLOUR : 0xfff000,
    BLOCK_HEIGHT: 10,
    BLOCK_MATERIAL: 0xc8c8c8,
    NUM_BLOCKS_PER_ROW: 20,
    NUM_ROWS: 10,
    blockStartPos: {
        x: -65,
        y: 0,
        z: 0
    },
    BLOCK_INC_X: 15,
    BLOCK_INC_Z: 15,
    RIGHT: 1,
    LEFT: 0,
    UP: 2,
    DOWN: 3,
    ZOOM_SPEED: 0.1,
    THETA_INC: Math.PI/40,
    WAVE_SCALE: 30
}

export { APPCONFIG };
