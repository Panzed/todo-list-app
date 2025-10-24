# 📝 Todo List App

Un'applicazione moderna e responsive per la gestione delle attività, costruita con React e Tailwind CSS. Include funzionalità per aggiungere, completare ed eliminare todo con persistenza dei dati tramite localStorage.

🔗 **[Demo Live](https://panzed.github.io/todo-list-app/)**

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.12-646CFF?style=flat&logo=vite&logoColor=white)

---

## ✨ Funzionalità

- ✅ **Aggiungi todo** - Crea nuove attività con un form pulito
- ✅ **Segna come completato** - Clicca su un todo per marcarlo come completato/non completato
- ✅ **Elimina todo** - Rimuovi attività con modal di conferma
- ✅ **Persistenza dati** - I todo vengono salvati nel localStorage
- ✅ **Design responsive** - Funziona perfettamente su mobile e desktop
- ✅ **Architettura a componenti** - Codice pulito e manutenibile

---

## 🛠️ Tecnologie Utilizzate

### Core
- **React 18** - Libreria UI moderna con hooks
- **Vite** - Build tool veloce e dev server
- **Tailwind CSS** - Framework CSS utility-first

### Concetti Applicati
- **React Hooks** - useState, useEffect
- **Composizione Componenti** - Componenti riutilizzabili e modulari
- **Props** - Comunicazione tra componenti
- **Rendering Condizionale** - Aggiornamenti UI dinamici
- **Gestione Eventi** - Interazioni utente
- **Local Storage API** - Persistenza dati
- **ES6+** - Funzionalità JavaScript moderne

---

## 📂 Struttura del Progetto

```
src/
├── components/
│   ├── TodoForm.jsx      # Form per aggiungere nuovi todo
│   ├── TodoItem.jsx      # Card del singolo todo
│   ├── TodoList.jsx      # Container per tutti i todo
│   └── DeleteModal.jsx   # Modal di conferma eliminazione
├── App.jsx               # Componente principale
└── main.jsx              # Entry point
```

---

## 🚀 Come Iniziare

### Prerequisiti
- Node.js (v20 o superiore)
- npm o yarn

### Installazione

1. **Clona il repository**
   ```bash
   git clone https://github.com/Panzed/todo-list-app.git
   cd todo-list-app
   ```

2. **Installa le dipendenze**
   ```bash
   npm install
   ```

3. **Avvia il server di sviluppo**
   ```bash
   npm run dev
   ```

4. **Apri il browser**
   ```
   http://localhost:5173
   ```

### Build per la Produzione

```bash
npm run build
```

La build ottimizzata sarà nella cartella `dist/`.

---

## 🎯 Cosa Ho Imparato

Costruendo questo progetto ho appreso:

- **Fondamenti di React** - Ciclo di vita dei componenti, gestione dello state e props
- **Architettura a componenti** - Suddividere l'UI in pezzi riutilizzabili
- **CSS moderno** - Utilizzo dell'approccio utility-first di Tailwind
- **API del Browser** - Lavorare con localStorage per la persistenza dei dati
- **Build tools** - Vite per sviluppo veloce e build ottimizzate
- **Controllo di versione** - Workflow Git e collaborazione su GitHub
- **CI/CD** - Deploy automatizzato con GitHub Actions

---

## 🔄 Possibili Miglioramenti Futuri

Funzionalità da aggiungere:
- [ ] Filtrare i todo (Tutti / Attivi / Completati)
- [ ] Modificare il testo dei todo
- [ ] Drag and drop per riordinare
- [ ] Toggle modalità dark
- [ ] Categorie/tag per i todo
- [ ] Date di scadenza e promemoria

---

## 📄 Licenza

Questo progetto è open source e disponibile sotto la [Licenza MIT](LICENSE).

---

## 👨‍💻 Autore

**Matteo Pasquinoni** (Panzed)

- GitHub: [@Panzed](https://github.com/Panzed)
- Email: matteopasquinoni@gmail.com

---

## 🙏 Ringraziamenti

- Progetto realizzato come parte dell'apprendimento dei fondamenti di React
- Stilizzato con [Tailwind CSS](https://tailwindcss.com/)
- Deployato con [GitHub Pages](https://pages.github.com/)
