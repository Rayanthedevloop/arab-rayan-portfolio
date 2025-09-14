// Experience Data
const experiences = [
    {
        title: "Technicien Informatique (Stage)",
        subtitle: "3F Immobilier | Paris",
        description: [
            "Déploiement d'images Windows personnalisées sur postes de travail et tablettes.",
            "Gestion du support utilisateur via un système de ticketing.",
            "Maintenance, réparation et remplacement du matériel informatique."
        ]
    },
    {
        title: "Développeur Web (Stage d'observation)",
        subtitle: "Gendarmerie Nationale | Fort de Rosny, Rosny-sous-Bois",
        description: [
            "Initiation au développement de sites web internes pour les services de la gendarmerie.",
            "Découverte des processus de mise en production et de sécurité web en milieu sensible."
        ]
    },
    {
        title: "Technicien Polyvalent (Bénévolat)",
        subtitle: "Garage Numérique | Paris",
        description: [
            "Gestion et maintenance d'un parc informatique pour une association.",
            "Réparation et reconditionnement d'ordinateurs à destination de personnes dans le besoin.",
            "Vente et conseil pour du matériel informatique à bas coût."
        ]
    }
];

// Education Data
const education = [
    {
        title: "BTS SIO - Option SISR (1ère année)",
        subtitle: "Lycée Turgot, Paris | En cours",
        description: "Spécialisation dans l'administration des systèmes et des réseaux."
    },
    {
        title: "Baccalauréat Professionnel Systèmes Numériques",
        subtitle: "Lycée Condorcet, Montreuil | Mention Assez Bien",
        description: "Acquisition des bases en réseaux, électronique et systèmes embarqués."
    },
    {
        title: "Collège",
        subtitle: "Collège Colonel-Fabien, Montreuil",
        description: "Début de mon intérêt pour la technologie et l'informatique."
    }
];

// Skills Data
const skills = [
    { icon: "fab fa-windows", title: "Systèmes Windows", description: "Installation, configuration et maintenance de Windows Client & Server." },
    { icon: "fab fa-linux", title: "Systèmes Linux", description: "Administration de base des distributions serveurs (Debian, Ubuntu)." },
    { icon: "fas fa-network-wired", title: "Réseaux", description: "Configuration de routeurs/switchs, TCP/IP, adressage, VLANs." },
    { icon: "fas fa-server", title: "Virtualisation", description: "Utilisation de VMWare et Hyper-V pour la gestion de machines virtuelles." },
    { icon: "fas fa-database", title: "Services Réseau", description: "Mise en place de serveurs DHCP, DNS, Web (Apache)." },
    { icon: "fas fa-shield-alt", title: "Sécurité", description: "Notions de base en cybersécurité, configuration de pare-feu." },
    { icon: "fas fa-code", title: "Développement Web", description: "Notions de HTML, CSS, et PHP acquises lors de stages et projets." },
    { icon: "fas fa-tools", title: "Maintenance Matérielle", description: "Diagnostic et réparation de composants informatiques (PC fixes et portables)." }
];

// Certifications Data
const certifications = [
    { src: "certif prap.jpg", alt: "Certification PRAP - Prévention des Risques liés à l'Activité Physique", className: "cert-prap-image" },
    { src: "certification-placeholder-2.png", alt: "Placeholder pour une future certification", className: "" },
    { src: "certification-placeholder-3.png", alt: "Placeholder pour une future certification", className: "" },
    { src: "certification-placeholder-4.png", alt: "Placeholder pour une future certification", className: "" }
];

function renderTimeline(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = '';
    items.forEach(item => {
        let descriptionHtml = '';
        if (Array.isArray(item.description)) {
            descriptionHtml = '<ul>';
            item.description.forEach(desc => {
                descriptionHtml += `<li>${desc}</li>`;
            });
            descriptionHtml += '</ul>';
        } else {
            descriptionHtml = `<p>${item.description}</p>`;
        }

        html += `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content card">
                    <h3>${item.title}</h3>
                    <p class="card-subtitle">${item.subtitle}</p>
                    ${descriptionHtml}
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function renderSkills(containerId, skillsData) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = '';
    skillsData.forEach(skill => {
        html += `
            <div class="skill-item">
                <i class="${skill.icon}"></i>
                <h3>${skill.title}</h3>
                <p>${skill.description}</p>
            </div>
        `;
    });
    container.innerHTML = html;
}

function renderCertifications(containerId, certData) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = '';
    certData.forEach(cert => {
        html += `
            <div class="cert-item">
                <img src="${cert.src}" alt="${cert.alt}" class="${cert.className}">
            </div>
        `;
    });
    container.innerHTML = html;
}

export function initializeDynamicContent() {
    renderTimeline('experience-timeline-container', experiences);
    renderTimeline('education-timeline-container', education);
    renderSkills('skills-grid-container', skills);
    renderCertifications('certifications-grid-container', certifications);
}