export const tiles = {
    empty: {
        baseClassName: "empty",
        code: "E",
        tooltip: "Empty tile. Players can move and shoot through freely.",
        canBePartial: false,
        onlyPartial: false,
    },
    wall: {
        baseClassName: "wall",
        code: "W",
        tooltip: "Wall. Players can't move on nor shoot through it.",
        canBePartial: true,
        onlyPartial: false,
    },
    hole: {
        baseClassName: "hole",
        code: "H",
        tooltip: "Hole. Players can't move on it, but can shoot through it.",
        canBePartial: true,
        onlyPartial: false,
    },
    diagonalwall: {
        baseClassName: "diagonalwall",
        code: "D",
        tooltip: "Diagonal wall. Redirects incoming shots.",
        canBePartial: false,
        onlyPartial: false,
    },
    pickupactive: {
        baseClassName: "pickupactive",
        code: "X",
        tooltip: "Energy pickup. Other pickups respawn when the last one is picked up.",
        canBePartial: false,
        onlyPartial: false,
    },
    pickupinactive: {
        baseClassName: "pickupinactive",
        code: "x",
        tooltip: "Energy pickup. Other pickups respawn when the last one is picked up.",
        canBePartial: false,
        onlyPartial: false,
    },
    playerstart: {
        baseClassName: "playerstart",
        code: "S",
        tooltip: "Recommended player start location.",
        canBePartial: false,
        onlyPartial: false,
    },
    barrier: {
        baseClassName: "barrier",
        code: "B",
        tooltip: "Barrier. Players can move through freely. Blocks incoming shots on the tile.",
        canBePartial: true,
        onlyPartial: true
    },
    hazard: {
        baseClassName: "hazard",
        code: "Z",
        tooltip: "Hazard. Players can shoot through freely. Blocks incoming movement on the tile.",
        canBePartial: true,
        onlyPartial: true
    },
}