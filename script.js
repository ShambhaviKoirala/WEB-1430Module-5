const container = document.getElementById("mission-container");
let nextId = 1;

function createMission(text) {
  const li = document.createElement("li");
  li.textContent = text;
  li.setAttribute("data-id", nextId++);
  return li;
}

function getList() {
  return container.querySelector("ul");
}

function logMissions(label) {
  const missions = [...getList().children].map(
    (li) => `${li.getAttribute("data-id")}: ${li.textContent}`
  );
  console.log(label, missions);

  const entry = document.createElement("li");
  entry.textContent = `${label} ${missions.join(" | ")}`;
  document.getElementById("log").appendChild(entry);
}

function initializeDashboard() {
  const h1 = document.createElement("h1");
  h1.textContent = "Secret Agent Dashboard";
  container.prepend(h1);

  const ul = document.createElement("ul");
  ["Decode encrypted message", "Gather intel", "Disable security system"].forEach(
    (text) => ul.appendChild(createMission(text))
  );
  container.appendChild(ul);
}

function addMission(text) {
  getList().appendChild(createMission(text));
}

function updateMission(index, newText) {
  const li = getList().children[index];
  if (li) li.textContent = newText;
}

function deleteMission(index) {
  const li = getList().children[index];
  if (li) li.remove();
}

function insertAfter(newText, referenceIndex) {
  const ref = getList().children[referenceIndex];
  if (ref) ref.after(createMission(newText));
}

// Extra challenge: locate missions by data-id instead of index
function updateMissionById(id, newText) {
  const li = getList().querySelector(`[data-id="${id}"]`);
  if (li) li.textContent = newText;
}

function deleteMissionById(id) {
  const li = getList().querySelector(`[data-id="${id}"]`);
  if (li) li.remove();
}

// Demo
initializeDashboard();
logMissions("Initial:");

addMission("Infiltrate enemy base");
logMissions("After addMission:");

updateMission(1, "Gather intel on target");
logMissions("After updateMission(1):");

deleteMission(0);
logMissions("After deleteMission(0):");

insertAfter("Plant tracking device", 0);
logMissions("After insertAfter(..., 0):");

updateMissionById(3, "Disable security system (backup power too)");
logMissions("After updateMissionById(3):");

deleteMissionById(4);
logMissions("After deleteMissionById(4):");
