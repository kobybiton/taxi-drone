import { NUMBER_OF_HEIGHTS } from '../constants';

const heights = {};

for (let i = 1; i <= NUMBER_OF_HEIGHTS; i++) {
    heights[i] = false;
}

const centralControlService = {};

centralControlService.getAvailableHeight = () => {
    // check for height structure
    for(let i = 1; i <= Object.keys(heights).length; i++) {
        if(heights[i] === false) {
            heights[i] = true;
            return i;
        }
    }

    return null;
}

export default centralControlService;