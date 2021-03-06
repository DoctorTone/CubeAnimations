// General parameters to help with setting up scene

const SceneConfig = {
    clearColour: 0x0000ff,
    ambientLightColour: 0x383838,
    pointLightColour: 0xffffff,
    CameraPos: {
        x: 0,
        y: 230,
        z: 460
    },
    LookAtPos: {
        x: 0,
        y: 0,
        z: 0
    },
    NEAR_PLANE: 0.1,
    FAR_PLANE: 10000,
    FOV: 45
};

export { SceneConfig };