# Soma Web 

![Soma](public/favicon.svg)

This repository contains the source code for the [Soma Project landing page](https://somaos-nc.github.io/SomaWeb/).

**Soma** is an application designed to translate real-time brainwave (EEG) data into generative musical soundscapes. This website serves as the central hub for the project, providing information about its features and direct links to download the compiled binaries.

## Tech Stack

This static website was built with a focus on speed, simplicity, and a modern aesthetic:
- **Framework:** [Astro](https://astro.build/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Hosting:** GitHub Pages
- **Deployment:** GitHub Actions

## Local Development

To run this website locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/somaos-nc/SomaWeb.git
   cd SomaWeb
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:4321`.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The static files will be generated in the `dist/` directory.

## Contributing

While this repository is specifically for the static landing page, the core application logic (Flutter/Dart) lives in the main [Soma repository](https://github.com/noam/Soma).

## License

This project is open-source under the MIT License.