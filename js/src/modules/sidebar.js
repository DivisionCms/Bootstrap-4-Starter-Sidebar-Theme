export default class Sidebar {

    /**
     * Permet d'initialiser le comportement de la sidebar
     *
     */
    static init() {

        let body = document.querySelector('body');

        //Lors du clique sur le bouton pour afficher / masquer la sidebar
        document.querySelector('[data-toggle="sidebar"]').addEventListener('click', () => {

            if((body.classList.contains('sidebar-toggle-display')) || body.classList.contains('sidebar-absolute')) {

                body.classList.toggle('sidebar-hidden');
            }
            else {

                body.classList.toggle('sidebar-icon-only');
            }
        });

        //Affichage / masquage du menu lors du comportement mobile
        document.querySelector('[data-toggle="offcanvas"]').addEventListener('click', () => {

            let offcanvas = document.querySelector('.row-offcanvas');
            offcanvas.classList.toggle('active');
        });
    }
}
