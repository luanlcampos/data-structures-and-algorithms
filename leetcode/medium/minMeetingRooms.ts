function minMeetingRooms(intervals: number[][]): number {
  let starts: number[] = [],
    ends: number[] = [];

  for (let interval of intervals) {
    starts.push(interval[0]);
    ends.push(interval[1]);
  }

  starts.sort((a, b) => a - b);
  ends.sort((a, b) => a - b);

  let rooms = 0,
    endItr = 0;

  for (let i = 0; i < starts.length; i++) {
    if (starts[i] < ends[endItr]) {
      rooms++;
    } else {
      endItr++;
    }
  }

  return rooms;
}

console.log(
  minMeetingRooms([
    [7, 10],
    [2, 4],
  ])
);
