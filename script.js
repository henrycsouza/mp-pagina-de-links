fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    const card = document.getElementById('profileCard');
    card.classList.add('show'); 
    


    // Separar nome para deixar último sobrenome em negrito
    const nameParts = data.name.split(" ");
    const lastName = nameParts.pop();
    const firstName = nameParts.join(" ");
    const loading = document.getElementById('loading');

    card.innerHTML = `
      <img src="${data.avatar}" alt="${data.name}" class="photo-persona">

      <h1>${firstName} <strong>${lastName}</strong></h1>

      <p>${data.description}</p>

      <div class="btn_links">
        ${data.links.slice(0,5).map(link => `
          <a href="${link.url}" target="_blank">${link.title}</a>
        `).join("")}
      </div>

      <div class="redes_sociais">
        ${data.socialLinks.map(social => `
          <a href="${social.url}" target="_blank">
            <img src="./img/${social.platform}.png" alt="${social.platform}">
          </a>
        `).join("")}
      </div>
    `
    loading.remove();
    ;
  })
  .catch(error => console.error("Erro ao carregar JSON:", error));