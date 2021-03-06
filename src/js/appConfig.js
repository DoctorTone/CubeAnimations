// General parameters for this app

const APPCONFIG = {
    ROOT_ROTATE: Math.PI/4,
    BLOCK_COLOUR : 0xfff000,
    BLOCK_HEIGHT: 5,
    BLOCK_MATERIAL: 0x6a0dad,
    NUM_BLOCKS_PER_ROW: 40,
    NUM_ROWS: 10,
    GROUND_WIDTH: 1000,
    GROUND_HEIGHT: 1000,
    GROUND_MATERIAL: 0xb9b9b9,
    blockStartPos: {
        x: -180,
        y: 0,
        z: -20
    },
    BLOCK_INC_X: 10,
    BLOCK_INC_Z: 10,
    RIGHT: 1,
    LEFT: 0,
    UP: 2,
    DOWN: 3,
    ZOOM_SPEED: 0.1,
    THETA_INC: Math.PI/50,
    WAVE_SCALE: 50
}

export { APPCONFIG };
