# Y2K Webdesign and Deployment Course

**Help & Setup Page**

## Setup

We are using the following three core technologies: **VSCode, Git, and Vercel**. You are free to experiment with other services or tools, but for the sake of consistency and easier troubleshooting with your peers, we recommend sticking with this shared environment.

This page references official guides and installation resources. If you encounter problems, always consult the official documentation first and carefully follow the provided instructions.

### VSCode

Visual Studio Code is our primary code editor. The following guide explains how to install and set up VSCode on Windows, macOS, and Linux:
[VSCode Setup Guide](https://code.visualstudio.com/docs/setup/setup-overview)

We will also use the **Live Server** extension, which allows us to run HTML files locally in the browser with automatic reload on changes. Install it here:
[Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

After installing, you can access it from the bottom status bar in VSCode.

### Git

Git is required for version control and for interacting with GitHub. Install it using the instructions provided in the official guide:
[How to Install Git](https://github.com/git-guides/install-git)

#### GitHub

Our course repository is hosted on GitHub. To work independently, you will need your own copy of the repository. This is done by **forking** the main repository:

1. Open the course repository link: [Y2K Swag Webdesign Course](https://github.com/maaaaaaaaaaaaaaaax/y2k-swag-webdesign-course)
2. Click the **Fork** button in the top right corner – this creates a copy of the repository under your account.
3. Clone your forked repository locally using Git:

   ```bash
   git clone https://github.com/your-username/y2k-swag-webdesign-course.git
   ```

### Vercel

[--]

## Running

1. Open your local cloned version of the course repository in VSCode.
2. Open the integrated terminal and navigate into the `src` directory. Run:

   `
   ./generate-file-array.sh
   `
3. Navigate to the `index.html` file in the file explorer.
4. Click the **Go Live** button in the VSCode bottom bar.

Your browser should now open and display the running app.

## Developing

Most of the rendering logic is located in `modules/render`. Only make changes here if you are confident in what you are doing.

Development workflow:

* Add new assets and content into their dedicated folders.
* Always run `./generate-file-array.sh` after updating content to refresh the file index.
* Write your own custom CSS classes and animations 
* Manually integrate HTML or JavaScript into your app

## Deploying

[--]

## Further Resources and Self-Help

If you encounter problems, use the following resources before asking for direct support:

* **VSCode Documentation**: [VSCode Docs](https://code.visualstudio.com/docs)
* **Git Documentation**: [Git Docs](https://git-scm.com/doc)
* **GitHub Docs**: [GitHub Documentation](https://docs.github.com/)
* **Vercel Documentation**: [Vercel Docs](https://vercel.com/docs)
* **General Troubleshooting**:

  * [MDN Web Docs](https://developer.mozilla.org/) – Reference for HTML, CSS, and JavaScript.
