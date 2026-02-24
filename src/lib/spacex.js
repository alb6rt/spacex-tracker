// base url variable
const BASE_URL = 'https://api.spacexdata.com/v4';

// fetch from spaceX v4 api
export async function getLaunches() {
  const res = await fetch(`${BASE_URL}/launches`);

  return res.json();
}

export async function getLaunchpads() {
  const res = await fetch(`${BASE_URL}/launchpads`);

  return res.json();
}

export async function getLandpads() {
  const res = await fetch(`${BASE_URL}/landpads`);

  return res.json();
}

export async function getRockets() {
  const res = await fetch(`${BASE_URL}/rockets`);

  return res.json();
}

// fetches all data and returns relevant object
export async function getAllData() {
  const [launches, launchpads, landpads, rockets] = await Promise.all([
    getLaunches(),
    getLaunchpads(),
    getLandpads(),
    getRockets(),
  ]);

  return { launches, launchpads, landpads, rockets };
}
