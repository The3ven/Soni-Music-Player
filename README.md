# Soni Music 🎵  
**A modern music player app built with Ionic, Angular, and Capacitor.**

## 📖 Description  
Soni Music is a sleek and intuitive music player application that allows users to play their favorite tracks with ease. Built using the powerful Ionic framework, Angular for front-end development, and Capacitor for native app functionality, this app provides a seamless music playback experience.

---

## 🚀 Features  
- **Inbuild Songs**: Have songs in assets you can change them before build to do so, you have to change songs json inside songs.page.ts too
- **Responsive Design**: Optimized for both mobile and desktop platforms.  
- **Cross-Platform**: Runs on Android, iOS, and the web using a single codebase.  
- **Customizable**: Modify and extend functionalities to suit your needs.  

---

## 🛠️ Technologies Used  
- **[Ionic Framework](https://ionicframework.com/)**: For building a hybrid app with a native-like experience.  
- **[Angular](https://angular.io/)**: Front-end framework for creating dynamic user interfaces.  
- **[Capacitor](https://capacitorjs.com/)**: For accessing native device functionalities.  

---

## 🔧 Installation  

### Prerequisites  
Ensure you have the following installed:  
- [Node.js](https://nodejs.org/) (v14 or later)  
- [Ionic CLI](https://ionicframework.com/docs/cli)  
- [Capacitor CLI](https://capacitorjs.com/docs/getting-started)  

### Steps  
1. Clone the repository:  
   ```bash
   git clone https://github.com/The3ven/Soni Music.git
   cd Soni Music
   ```  

2. Install dependencies:  
   ```bash
   npm install
   ```  

3. Run the app in development mode:  
   ```bash
   ionic serve
   ```  

4. To build the app for production:  
   ```bash
   ionic build
   ```  

5. To run on a mobile device:  
   - Add the platform (e.g., Android or iOS):  
     ```bash
     ionic cap add android (already added)
     ionic cap add ios
     ```  
   - Sync the project:  
     ```bash
     ionic cap sync
     ```  
   - Open the project in the native IDE:  
     ```bash
     ionic cap open android
     ionic cap open ios
     ```  

---

## 📸 Screenshots  
*Add screenshots of your app here to showcase its interface and functionality.*  

---

## 🔨 Todo
- Add last play song on startup ( with thumbnail and name of the song)
- Add total count and the current song index


---

## 🤝 Contributing  
Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/The3ven/Soni Music/issues) for open tickets.  

---

## 📝 License  
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.  

---

## 🙌 Acknowledgments  
Special thanks to the developers and contributors of the Ionic, Angular, and Capacitor ecosystems for making this project possible.