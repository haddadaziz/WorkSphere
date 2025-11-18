const ajouter_employe_view = document.getElementById("ajouter_employe_view")
const go_to_add_worker_form = document.getElementById("add_worker_button")
const unassigned_workers_view = document.getElementById("unassigned_workers_view")
const close_form_button = document.getElementById("close_form_button")
const ajouter_experience_container = document.getElementById("ajouter_experience_container")
const ajouter_experience_button = document.getElementById("ajouter_experience_button")

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
            <input type="text" name="exp_poste[]" placeholder="Entrez le poste occupé" required
                class="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
        </div>
        
        <div>
            <label class="text-xs font-medium text-gray-600">Entreprise</label>
            <input type="text" name="exp_entreprise[]" placeholder="Entrez l'entreprise" required
                class="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
        </div>
    `

    const delete_experience_button = nouvelle_experience_div.querySelector(".delete_experience_button")
    delete_experience_button.addEventListener("click", () => {
        nouvelle_experience_div.remove()
    })
    ajouter_experience_container.appendChild(nouvelle_experience_div)
})