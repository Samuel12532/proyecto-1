# Enciclopedia de Age of Empires II: HD Edition

¡Bienvenido a la Enciclopedia de Age of Empires II: HD Edition! Este es un proyecto web interactivo diseñado para proporcionar información detallada sobre las civilizaciones, unidades, estructuras y mecánicas del aclamado juego de estrategia en tiempo real.

*(Es recomendable reemplazar la imagen de abajo con una captura de pantalla real de la aplicación)*
![Captura de pantalla de la aplicación](https://raw.githubusercontent.com/AI-Maker-Space/project-images/main/age-of-empires-screenshot.png)

## ✨ Características

-   **Navegación Intuitiva**: Explora fácilmente las diferentes secciones del juego a través de una barra de navegación clara y concisa.
-   **Detalles de Civilizaciones**: Descubre los bonos, unidades únicas, tecnologías y estilos de juego de cada una de las civilizaciones.
-   **Catálogo de Unidades**: Consulta las estadísticas base y máximas de todas las unidades, desde el humilde aldeano hasta el poderoso paladín.
-   **Guía de Estructuras**: Aprende la función, estadísticas y tecnologías de cada edificio del juego.
-   **Diseño Responsivo**: La interfaz se adapta a diferentes tamaños de pantalla, desde móviles hasta escritorios.
-   **Cero Configuración (Zero-Config)**: Funciona directamente en el navegador sin necesidad de Node.js, `npm` o un paso de compilación (`build`).

## 🚀 Tecnologías Utilizadas

Este proyecto fue construido utilizando tecnologías web modernas, enfocándose en un desarrollo ligero y sin necesidad de un servidor de backend complejo.

-   **[React](https://react.dev/)**: Para construir la interfaz de usuario interactiva.
-   **[TypeScript](https://www.typescriptlang.org/)**: Para añadir tipado estático y mejorar la calidad del código.
-   **[Tailwind CSS](https://tailwindcss.com/)**: Para un diseño rápido y personalizable directamente en el HTML/JSX.
-   **[React Router](https://reactrouter.com/)**: Para gestionar la navegación y las rutas del lado del cliente (`HashRouter` para compatibilidad con hosting estático).
-   **ES Modules (via `esm.sh`)**: Carga las dependencias de React y otras librerías directamente desde una CDN, eliminando la necesidad de un empaquetador como Webpack o Vite.

## 🛠️ Cómo Ejecutar el Proyecto Localmente

Como este proyecto no requiere un proceso de compilación, ejecutarlo es muy sencillo.

1.  **Clona o descarga el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/tu-repositorio.git
    cd tu-repositorio
    ```

2.  **Abre `index.html` en tu navegador:**
    La forma más fácil es usar una extensión de servidor en vivo para tu editor de código, como **Live Server** para VS Code.
    -   Instala la extensión "Live Server" desde el marketplace de VS Code.
    -   En tu explorador de archivos, haz clic derecho en el archivo `index.html`.
    -   Selecciona "Open with Live Server".

    Esto iniciará un servidor de desarrollo local y abrirá la página en tu navegador. ¡Y eso es todo! No necesitas instalar ninguna dependencia.

## 🌐 Despliegue en GitHub Pages

Este proyecto está perfectamente configurado para ser desplegado en servicios de alojamiento estático como **GitHub Pages**.

1.  Sube tu código a un repositorio de GitHub.
2.  Ve a la pestaña **Settings** > **Pages** de tu repositorio.
3.  En la sección "Build and deployment", bajo "Source", selecciona **Deploy from a branch**.
4.  Elige la rama `main` (o la que contenga tu código) y la carpeta `/(root)`.
5.  Haz clic en **Save**.

En unos minutos, tu enciclopedia estará disponible en la URL que GitHub te proporcione (generalmente `https://<tu-usuario>.github.io/<nombre-del-repositorio>/`).