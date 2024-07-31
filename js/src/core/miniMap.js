import { assert } from '../utils/assert';

const WALL_TILE = 1;
const FLOOR_TILE = 0;
const MIN_GRID_SIZE = 3;

export class MiniMap {
    constructor() {
        this.grid = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1]
        ];
        
        this.windowWidth;
        this.windowHeight;
        this.tileSize = 16;
        this.wallColor = "#000";
        this.floorColor = "#fff";

        this.setTileSize(this.tileSize);
    }


    setGrid(grid) {
        assert(Array.isArray(grid), "Grid can't be anyhting rather than array of arrays");

        assert(grid.length >= MIN_GRID_SIZE || grid[0].length >= MIN_GRID_SIZE, 
                                    "Grid can't be less than 3 x 3 Matrix"); 

        for (let row = 0; row < grid.length; row++) {
            assert(Array.isArray(grid[row]), "Grid can't be anyhting rather than array of arrays");
            assert(grid[row].length == grid[0].length, "Each row must be the same length");
    
            for (let col = 0; col < grid[row].length; col++) {
                assert(grid[row][col] == 1 || grid[row][col] == 0, "Grid values only contain 0 and 1");

                if (row == 0 || col == 0 || row == grid.length - 1 || col == grid[row].length - 1)
                    assert(grid[row][col] == 1, "Grid can only contain 1 at the borders");
            }
        }

        this.grid = grid;
        this.setTileSize(this.tileSize);
    }


    setTileSize(tileSize) {
        this.tileSize = tileSize;
        this.windowHeight = this.grid.length * this.tileSize;
        this.windowWidth = this.grid[0].length * this.tileSize;
    }


    render() {
        for (let row = 0; row < this.grid.length; row++) {
            for (let col = 0; col < this.grid[row].length; col++) {
                const tileX = col * this.tileSize;
                const tileY = row * this.tileSize;

                const tileColor = this.grid[row][col] == WALL_TILE ? this.wallColor : this.floorColor; 
                
                fill(tileColor);
                rect(tileX, tileY, this.tileSize, this.tileSize);
            }
        }
    }
}

