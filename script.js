const ajouter_employe_view = document.getElementById("ajouter_employe_view")
const go_to_add_worker_form = document.getElementById("add_worker_button")
const unassigned_workers_view = document.getElementById("unassigned_workers_view")
const close_form_button = document.getElementById("close_form_button")
const ajouter_experience_container = document.getElementById("ajouter_experience_container")
const ajouter_experience_button = document.getElementById("ajouter_experience_button")
const photo_input_url = document.getElementById('photo_input_url')
const photo_preview_url = document.getElementById('photo_preview_url')
const photo_par_defaut = src = "https://www.gravatar.com/avatar/?d=mp&s=128"
const hide_menu = document.getElementById("hide_menu")
const close_sidebar_button = document.getElementById("close_sidebar_button")
const open_sidebar_button = document.getElementById("open_sidebar_button")
const workspace2D = document.getElementById("workspace2D")
const add_employee_form = document.getElementById("add_employee_form")
const unassigned_staff_list = document.getElementById("unassigned_staff_list")
const assign_worker_button = document.getElementById("assign_worker_button")
const assign_worker_popup = document.getElementById("assign_worker_popup")
const assign_worker_popup_close_button = document.getElementById("assign_worker_popup_close_button")
const afficher_employe_popup = document.getElementById("afficher_employe_popup")
const afficher_employe_popup_close_button = document.getElementById("afficher_employe_popup_close_button")
const details_employe = document.getElementById("details_employe")

let staff = JSON.parse(localStorage.getItem("mes_employes")) || []
afficher_les_employes()

// Afficher / Cacher la popup pour assigner un worker
assign_worker_button.addEventListener("click", () => {

    assign_worker_popup.classList.remove("hidden")
})
assign_worker_popup_close_button.addEventListener("click", () => {
    assign_worker_popup.classList.add("hidden")
})

// formulaire pour ajouter un employé
add_employee_form.addEventListener("submit", function (e) {
    e.preventDefault()
    const nom = document.getElementById("nom").value
    const role = document.getElementById("role").value
    let photo = document.getElementById("photo_input_url").value
    const email = document.getElementById("email").value
    const telephone = document.getElementById("telephone").value
    const localisation = "Unassigned"

    if (photo === "") {
        photo = "https://www.gravatar.com/avatar/?d=mp&s=128"
    }
    let mes_experiences = []
    const blocks_experience = ajouter_experience_container.querySelectorAll(".new_employe_experiences")

    blocks_experience.forEach(block => {
        const poste = block.querySelector("input[name='experience_poste']").value
        const entreprise = block.querySelector("input[name='experience_entreprise']").value
        const debut = block.querySelector("input[name='experience_start_date']").value
        const fin = block.querySelector("input[name='experience_end_date']").value

        const une_experience = {
            poste: poste,
            entreprise: entreprise,
            debut: debut,
            fin: fin
        }
        mes_experiences.push(une_experience)
    })

    const nouvel_employe = {
        nom: nom,
        role: role,
        photo: photo,
        email: email,
        tel: telephone,
        experiences: mes_experiences,
        localisation : localisation
        }

    staff.push(nouvel_employe)
    localStorage.setItem("mes_employes", JSON.stringify(staff))
    afficher_les_employes()
    add_employee_form.reset()
    photo_preview_url.src = "https://www.gravatar.com/avatar/?d=mp&s=128"

    ajouter_employe_view.classList.add("hidden")
    unassigned_workers_view.classList.remove("hidden")
})

function afficher_les_employes() {
    unassigned_staff_list.innerHTML = ""
    staff.forEach((employe, index) => {
        unassigned_staff_list.innerHTML += `
            <div onclick="voir_details(${index})" class="cursor-pointer flex items-center p-3 bg-gray-50 rounded-lg shadow-sm border border-gray-200 mb-2">
                <img src="${employe.photo}" class="w-12 h-12 rounded-full border border-gray-300 object-cover border-2 border-blue-500">
                <div class="ml-3">
                    <p class="text-sm font-semibold text-gray-900">${employe.nom}</p>
                    <p class="text-xs text-gray-600">${employe.role}</p>
                </div>
            </div>
        `
    })
}

function voir_details(index) {
    const employe_clique = staff[index]
    let experiences_html = ""
    if (employe_clique.experiences?.length > 0) {
        employe_clique.experiences.forEach(exp => {
            experiences_html += `
                <div class="mb-2 border-b border-gray-200 pb-2">
                    <p class="font-bold text-gray-800">${exp.poste}</p>
                    <p class="text-blue-600 text-sm">${exp.entreprise}</p>
                    <p class="text-xs text-gray-500">De ${exp.debut} à ${exp.fin}</p>
                </div>`
        })
    }
    else {
        experiences_html += `
                <div class="mb-2 border-b border-gray-200 pb-2 last:border-0">
                    <p>Cet employé n'a aucune expérience</p>
                </div>`
    }
    details_employe.innerHTML = `
        <div class="text-center mb-4">
            <img src="${employe_clique.photo}" class="w-24 h-24 rounded-full border-2 border-blue-500 mx-auto mb-2 object-cover">
            <h3 class="text-xl font-bold text-gray-800">${employe_clique.nom}</h3>
            <p class="text-gray-600 font-medium">${employe_clique.role}</p>
        </div>
        <div class="space-y-2 text-sm text-gray-700">
            <p><strong>Email :</strong> ${employe_clique.email}</p>
            <p><strong>Téléphone :</strong> ${employe_clique.tel}</p>
            <p><strong>Localisation actuelle:</strong> 
                <span>${employe_clique.localisation}</span>
            </p>
            <hr class="my-3">
            <h4 class="font-bold mb-2">Expériences :</h4>
            <p class="text-gray-500 italic">
            ${experiences_html}
            </p>
        </div>
    `
    afficher_employe_popup.classList.remove("hidden")
}
afficher_employe_popup_close_button.addEventListener("click", () => {
    afficher_employe_popup.classList.add("hidden")
})

// afficher / cacher le menu
close_sidebar_button.addEventListener("click", () => {
    hide_menu.classList.add("hidden")
    open_sidebar_button.classList.remove("hidden");
})

open_sidebar_button.addEventListener("click", () => {
    hide_menu.classList.remove("hidden");
    open_sidebar_button.classList.add("hidden");
})

// afficher la page pr ajouter un worker
go_to_add_worker_form.addEventListener("click", () => {
    ajouter_employe_view.classList.remove("hidden")
    unassigned_workers_view.classList.add("hidden")
})
close_form_button.addEventListener("click", () => {
    ajouter_employe_view.classList.add("hidden")
    unassigned_workers_view.classList.remove("hidden")
})

// formulaire dynamique pr ajouter des experiences
ajouter_experience_button.addEventListener("click", () => {
    const nouvelle_experience_div = document.createElement("div")
    nouvelle_experience_div.className = "new_employe_experiences p-3 border rounded-md bg-gray-50 relative mb-4";
    nouvelle_experience_div.innerHTML = `
        <button type="button" class="delete_experience_button absolute top-1 right-2 text-red-400 hover:text-red-600 font-bold text-xl">
            &times
        </button>

        <div class="mb-2">
            <label class="text-xs font-medium text-gray-600">Poste</label>
            <input type="text" name="experience_poste" placeholder="Entrez le poste occupé"
                class="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
        </div>
        
        <div>
            <label class="text-xs font-medium text-gray-600">Entreprise</label>
            <input type="text" name="experience_entreprise" placeholder="Entrez l'entreprise"
                class="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
        </div>
        <div>
            <label class="text-xs font-medium text-gray-600">Date de Début</label>
            <input type="date" name="experience_start_date" class="w-full px-2 py-1 border border-gray-300 rounded-md">
        <div>
        <div>
            <label class="text-xs font-medium text-gray-600">Date de Fin</label>
            <input type="date" name="experience_end_date" class="w-full px-2 py-1 border border-gray-300 rounded-md">
        <div>
    `

    const delete_experience_button = nouvelle_experience_div.querySelector(".delete_experience_button")
    delete_experience_button.addEventListener("click", () => {
        nouvelle_experience_div.remove()
    })
    ajouter_experience_container.appendChild(nouvelle_experience_div)
})

// preview de la photo dans le modal
photo_input_url.addEventListener("input", () => {
    const url = photo_input_url.value
    if (url.trim() !== "") {
        photo_preview_url.src = url
    } else {
        photo_preview_url.src = photo_par_defaut
    }
})