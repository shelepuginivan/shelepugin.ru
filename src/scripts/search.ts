const searchModal = document.getElementById('search-modal')
const searchContent = document.getElementById('search-modal-content')
const searchInput = document.querySelector(
    'input.pagefind-ui__search-input',
) as HTMLInputElement

const openModal = () => {
    if (!searchModal) return

    searchModal.classList.remove('hidden')
    document.body.classList.add('noscroll')
    searchInput.focus()
}

const closeModal = () => {
    if (!searchModal) return

    searchModal.classList.add('hidden')
    document.body.classList.remove('noscroll')
    searchInput.blur()
}

const toggleModal = () => {
    if (!searchModal) return

    if (searchModal.classList.contains('hidden')) {
        openModal()
    } else {
        closeModal()
    }
}

Array.from(document.getElementsByClassName('search-button')).forEach(
    (element) => {
        element.addEventListener('click', openModal)
    },
)

document.addEventListener('keydown', (event) => {
    if ((event.ctrlKey && event.code === 'KeyK') || event.code === 'Slash') {
        event.preventDefault()
        return toggleModal()
    }

    if (event.key === 'Escape') {
        event.preventDefault()
        return closeModal()
    }
})

searchModal?.addEventListener('click', closeModal)
searchContent?.addEventListener('click', (event) => {
    event.stopPropagation()
})
