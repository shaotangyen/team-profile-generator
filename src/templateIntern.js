const templateIntern = (intern) =>
`<div class="card m-4 p-0 shadow" style="width: 18rem;">
    <div class="card-header bg-primary">
        <h5 class="card-title p-1 fs-4 text-white fw-bolder">${intern.getName()}</h5>
        <p class="card-text p-1 text-white"><i class="fas fa-mug-hot"></i> ${intern.getRole()}</p>
    </div>
    <div class="card-body bg-light">
        <ul class="list-group border list-group-flush">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}" class="card-link">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>`;

module.exports = templateIntern;