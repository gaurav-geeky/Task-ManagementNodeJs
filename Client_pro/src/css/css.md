# admin dash css

/* =======================================================
   CLEAN RESPONSIVE ADMIN DASHBOARD + HAMBURGER MENU
======================================================= */

:root {
  --menu-bg: rgb(125, 125, 255);
  --menu-btn-bg: #bcd7ff;
  --header-bg: rgb(220, 228, 251);
  --gradient-bg: linear-gradient(to bottom,
        rgb(125, 125, 255) 0%,
        rgb(167, 223, 246) 50%,
        lightblue 100%);
}

/* Prevent horizontal scroll */
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  font-family: "Segoe UI", Arial, sans-serif;
}

/* MAIN WRAPPER */
.admindashboard {
  width: 100%;
  min-height: 100vh;
  background: var(--header-bg);
  display: flex;
  flex-direction: column;
}

/* =======================================================
   HEADER
======================================================= */
#adminheader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 3vw;
  background: var(--header-bg);
  gap: 10px;
}

#admin {
  font-size: 2rem;
  font-weight: 900;
  color: rgb(58, 58, 255);
}

#admin span {
  color: #000;
}

.welcome {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  font-size: 1rem;
  font-weight: 600;
}

/* Logout button */
.logout {
  background: rgb(255, 97, 97);
  border: none;
  padding: 6px 12px;
  color: white;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.25s;
}
.logout:hover {
  background: red;
}

/* =======================================================
   HAMBURGER BUTTON (MOBILE ONLY)
======================================================= */
#hamburger {
  display: none;
  font-size: 32px;
  cursor: pointer;
  padding: 4px 12px;
  border-radius: 8px;
  background: white;
  box-shadow: 0 3px 6px rgba(0,0,0,0.25);
  user-select: none;
  transition: 0.2s;
}
#hamburger:active {
  transform: scale(0.9);
}

/* =======================================================
   MAIN CONTENT AREA
======================================================= */
.admincontainer {
  display: flex;
  width: 100%;
  flex: 1;
  margin-top: 10px;
}

/* =======================================================
   LEFT MENU (DESKTOP)
======================================================= */
#adminmenu {
  width: 240px;
  background: var(--menu-bg);
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  transition: 0.3s ease;
}

#adminmenu a {
  text-decoration: none;
  font-size: 1.1rem;
  background: var(--menu-btn-bg);
  padding: 10px 12px;
  border-radius: 10px;
  text-align: center;
  font-weight: 700;
  color: #000;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  transition: 0.25s;
}

#adminmenu a:hover {
  transform: translateY(-3px);
  background: white;
}

.adminactive-menu {
  background: white !important;
  border: 2px solid #000;
}

/* =======================================================
   RIGHT CONTENT
======================================================= */
#admindata {
  flex: 1;
  padding: 25px;
  background: var(--gradient-bg);
  min-height: 100%;
  overflow-x: hidden;
}

/* =======================================================
   RESPONSIVE DESIGN
======================================================= */

/* ========= TABLETS ========= */
@media (max-width: 900px) {
  #admin {
    font-size: 1.7rem;
  }
  #adminmenu {
    width: 200px;
  }
}

/* ========= MOBILE — ENABLE HAMBURGER ========= */
@media (max-width: 700px) {

  /* Show hamburger */
  #hamburger {
    display: block;
  }

  /* Adjust header */
  #adminheader {
    justify-content: space-between;
    flex-wrap: nowrap;
  }

  /* Hide menu initially */
  #adminmenu {
    display: none;
    width: 100%;
    flex-direction: column;
    padding: 15px;
  }

  /* When hamburger clicked */
  #adminmenu.showmenu {
    display: flex !important;
  }

  /* Full-width items */
  #adminmenu a {
    width: 100%;
  }

  /* Stack content vertically */
  .admincontainer {
    flex-direction: column;
  }
}

/* ========= SMALL MOBILE ========= */
@media (max-width: 500px) {
  .welcome {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }
  #admindata {
    padding: 15px;
  }
  #adminmenu a {
    font-size: 1rem;
  }
}

/* ========= VERY SMALL ========= */
@media (max-width: 350px) {
  #admin {
    font-size: 1.4rem;
  }
  #adminmenu a {
    font-size: 0.9rem;
  }
}
