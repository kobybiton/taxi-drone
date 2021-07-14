export const TOTAL_SIMULATION_TIME = 240;
export const NUMBER_OF_DRONES = 20;
export const HEIGHT_ALLOTMENT = Array.from({length: 15}, (arr, i) => i + 1);
export const PASSENGER_ARRIVAL_TIME_RANGE = Array.from({length: 15}, (arr, i) => i + 1);
export const AVG_PASSENGER_ARRIVAL_TIME = PASSENGER_ARRIVAL_TIME_RANGE[Math.floor(Math.random()*PASSENGER_ARRIVAL_TIME_RANGE.length)];
export const NUMBER_OF_HEIGHTS = 15;
export const AVG_SPEED = 60;

