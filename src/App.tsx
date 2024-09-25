import { Component } from 'solid-js';

const App: Component = () => {
  return (
    <div class="min-h-screen bg-base-200 text-base-content">
      <header class="text-center p-10 bg-primary text-primary-content">
        <h1 class="text-4xl font-bold">My Social Portfolio</h1>
        <p class="text-xl">Connect with me on various platforms</p>
      </header>
      <section class="text-center p-10">
        <div class="avatar">
          <div class="w-24 mask mask-hexagon">
            <img src="profile.jpg" alt="Profile Picture" />
          </div>
        </div>
        <h2 class="text-2xl mt-4">Your Name</h2>
        <p>Digital Marketer | Content Creator | Social Media Enthusiast</p>
      </section>
      <section class="flex flex-wrap justify-center p-10 gap-6">
        {[
          {
            href: 'https://instagram.com',
            icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/instagram.svg',
            label: 'Instagram',
            description: 'Follow my latest updates and photos on Instagram.',
          },
          {
            href: 'https://linkedin.com',
            icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg',
            label: 'LinkedIn',
            description: 'Connect with me professionally on LinkedIn.',
          },
          {
            href: 'https://twitter.com',
            icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg',
            label: 'Twitter',
            description: 'Stay updated with my thoughts and updates on Twitter.',
          },
          {
            href: 'https://facebook.com',
            icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/facebook.svg',
            label: 'Facebook',
            description: 'Join my Facebook network.',
          },
          {
            href: 'https://youtube.com',
            icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/youtube.svg',
            label: 'YouTube',
            description: 'Watch my latest videos on YouTube.',
          },
          {
            href: 'https://github.com',
            icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg',
            label: 'GitHub',
            description: 'Check out my projects on GitHub.',
          },
          {
            href: 'https://yourblog.com',
            icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/blog.svg',
            label: 'Personal Blog',
            description: 'Read my latest blog posts.',
          },
        ].map((link) => (
          <div class="card w-64 bg-base-100 shadow-xl">
            <figure>
              <img src={link.icon} alt={link.label} class="h-16 w-16" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">{link.label}</h2>
              <p>{link.description}</p>
              <div class="card-actions justify-end">
                <a href={link.href} class="btn btn-primary btn-outline">Visit</a>
              </div>
            </div>
          </div>
        ))}
      </section>
      <section class="p-10 bg-base-300 text-base-content">
        <h2 class="text-2xl">Contact Me</h2>
        <form class="form-control">
          <label class="label" for="name">
            <span class="label-text">Name:</span>
          </label>
          <input type="text" id="name" name="name" class="input input-bordered" required />
          <label class="label" for="email">
            <span class="label-text">Email:</span>
          </label>
          <input type="email" id="email" name="email" class="input input-bordered" required />
          <label class="label" for="message">
            <span class="label-text">Message:</span>
          </label>
          <textarea id="message" name="message" class="textarea textarea-bordered" required></textarea>
          <button type="submit" class="btn btn-primary mt-4">Send</button>
        </form>
      </section>
      <footer class="text-center p-10 bg-primary text-primary-content">
        <a href="privacy.html" class="link link-hover">Privacy Policy</a>
        <a href="terms.html" class="link link-hover">Terms of Service</a>
        <p>© 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
