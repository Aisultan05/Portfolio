function loadPage(page) {
    const content = document.getElementById('content');

    switch (page) {
        case 'home':
            content.innerHTML = `
                <section class="hero">
                    <div class="hero-content">
                        <h1>Aisultan Aitmagambet</h1>
                        <p>Welcome to my portfolio! I specialize in web development and data management.</p>
                        <a href="#" class="cta-button">Let’s get started ></a>
                    </div>
                    <div class="hero-image">
                        <img src="photo.jpg" alt="photo">
                    </div>
                </section>
                <section class="worked-with">
                    <h2>Worked on</h2>
                    <div class="logos">
                        <img src="clickup-logo.png" alt="">
                        <img src="dropbox-logo.png" alt="">
                        <img src="paychex-logo.png" alt="">
                        <img src="elastic-logo.png" alt="">
                        <img src="stripe-logo.png" alt="">
                    </div>
                </section>
            `;
            break;

        case 'case-studies':
            content.innerHTML = `
                <section>
                    <h2>Case Studies</h2>
                    <p>Here are some projects I've worked on:</p>
                    <ul>
                        <li><strong>Project 1:</strong> </li>
                        <li><strong>Project 2:</strong> </li>
                        <li><strong>Project 3:</strong> </li>
                    </ul>
                </section>
            `;
            break;

        case 'testimonials':
            content.innerHTML = `
                <section>
                    <h2>Testimonials</h2>
                    <p>Feedback from clients and colleagues:</p>
                    <blockquote></blockquote>
                    <blockquote></blockquote>
                </section>
            `;
            break;

        case 'recent-work':
            content.innerHTML = `
                <section>
                    <h2>Recent Work</h2>
                    <p>Here are some of my recent projects:</p>
                    <ul>
                        <li><strong>Personal Portfolio:</strong> A modern portfolio built with HTML, CSS, and JavaScript.</li>
                        <li><strong>Travel Agency</strong></li>
                        <li><strong>Web-Marketplace :</strong> </li>
                    </ul>
                </section>
            `;
            break;

        case 'contact':
            content.innerHTML = `
                <section class="contact">
                    <h2>Get In Touch</h2>
                    <p>If you'd like to discuss a project or have any questions, feel free to reach out!</p>
                    <form class="contact-form">
                        <div class="form-group">
                            <label for="name">Name:</label>
                            <input type="text" id="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" id="email" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Message:</label>
                            <textarea id="message" required></textarea>
                        </div>
                        <button type="submit" class="send-button">Send Message</button>
                    </form>
                </section>
            `;
            break;


        default:
            content.innerHTML = `<h2>Page not found</h2>`;
            break;
    }
}

// Load the home page by default
loadPage('home');
