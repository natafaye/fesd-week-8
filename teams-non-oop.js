const describePlayer = (player) => {
    return `${player.name} plays ${player.position}.`
}

const describeTeam = (team) => {
    return `${team.name} has ${team.players.length} players.`;
}

const teams = [];
let selectedTeam = null;

const start = () => {
    let selection = null;
    while (selection !== 0) {
        selection = showMainMenuOptions();
        switch (selection) {
            case '1':
                createTeam();
                break;
            case '2':
                viewTeam();
                break;
            case '3':
                deleteTeam();
                break;
            case '4':
                displayTeams();
                break;
            default:
                selection = 0;
        }
    }
    alert('Goodbye!');
}

const showMainMenuOptions = () => {
    return prompt(`
        0) exit
        1) create new team
        2) view team
        3) delete team
        4) display all teams
    `)
}

const showTeamMenuOptions = (teamInfo) => {
    return prompt(`
        0) back
        1) create player
        2) delete player
        .................
        ${teamInfo}
    `)
}

const displayTeams = () => {
    let teamString = '';
    teams.forEach((team, index) => {
        teamString += index + ') ' + describeTeam(team) + "Players:\n         " + team.players.map(player => describePlayer(player)).join("\n        ") + '\n';
    })
    alert(teamString);
}

const createTeam = () => {
    let name = prompt('Enter name for new team:');
    teams.push({
        name: name,
        players: []
    });
}

const viewTeam = () => {
    let index = prompt('Enter the index of the team you wish to view:');
    if (index > -1 && index < teams.length) {
        selectedTeam = teams[index];
        let description = 'Team Name: ' + selectedTeam.name + '\n';
        selectedTeam.players.forEach((player, i) => {
            description += i + ') ' + describePlayer(player) + '\n';
        })

        let selection = showTeamMenuOptions(description);
        switch (selection) {
            case '1':
                createPlayer();
                break;
            case '2':
                deletePlayer();
                break;
        }
    }
}

function deleteTeam() {
    let index = prompt('Enter the index of the team you wish to delete:');
    if (index > -1 && index < teams.length) {
        teams.splice(index, 1);
    }
}

function createPlayer() {
    let name = prompt('Enter name for new player:');
    let position = prompt('Enter position for new player:');
    selectedTeam.players.push({
        name: name,
        position: position
    });
}

const deletePlayer = () => {
    let index = prompt('Enter the index of the player you wish to delete:');
    if (index > -1 && index < selectedTeam.players.length) {
        selectedTeam.players.splice(index, 1);
    }
}

start();