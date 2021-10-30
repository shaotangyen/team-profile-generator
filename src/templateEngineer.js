const templateEngineer = (engineer) =>
`<div class="card m-4 p-0 shadow" style="width: 18rem;">
<div class="card-header bg-primary">
    <h5 class="card-title p-1 fs-4 text-white fw-bolder">${engineer.getName()}</h5>
    <p class="card-text p-1 fs-6 text-light"><i class="fas fa-cogs"></i> ${engineer.getRole()}</p>
</div>
<div class="card-body bg-light">
    <ul class="list-group border list-group-flush">
        <li class="list-group-item">ID: 1</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}" class="card-link">${engineer.getEmail()}</a></li>
        <li class="list-group-item">Github: <a href="${engineer.getGithub()}" target="_blank" class="card-link">${engineer.getGithubId()}</a></li>
    </ul>
</div>
</div>`;

module.exports = templateEngineer;