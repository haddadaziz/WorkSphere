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
    nouvelle_experience_div.className = "p-3 border rounded-md bg-gray-50 relative mb-4";
    nouvelle_experience_div.innerHTML = `
        <button type="button" class="delete_experience_button absolute top-1 right-2 text-red-400 hover:text-red-600 font-bold text-xl">
            &times
        </button>

        <div class="mb-2">
            <label class="text-xs font-medium text-gray-600">Poste</label>
            <input type="text" name="exp_poste[]" placeholder="Entrez le poste occupé"
                class="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
        </div>
        
        <div>
            <label class="text-xs font-medium text-gray-600">Entreprise</label>
            <input type="text" name="exp_entreprise[]" placeholder="Entrez l'entreprise"
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