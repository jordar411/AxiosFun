async function getLaunches() {
	const res = await axios.get('https://api.spacexdata.com/v3/launches/upcoming');
	renderLaunches(res.data);
}

function renderLaunches(launches) {
	const ul = document.querySelector('#launches');
	for (let launch of launches) {
		ul.append(makeLaunchLI(launch));
	}
}

function makeLaunchLI(launch) {
	const newLI = document.createElement('LI');
	const mission = document.createElement('B');
	mission.innerText = launch.mission_name;
	newLI.append(mission);
	newLI.innerHTML += ` - ${launch.rocket.rocket_name}`;
	return newLI;
}

const btn = document.querySelector('#getLaunches');
btn.addEventListener('click', getLaunches);
