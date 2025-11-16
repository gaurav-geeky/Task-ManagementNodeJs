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








# employee dashboard css 

/* ================= EMPLOYEE DASHBOARD ================= */

:root {
    --purple1: #f054f0;
    /* Your primary purple */
}

/* ====== MAIN DASHBOARD ====== */
.empdashboard {
    min-height: 100vh;
    width: 100%;
    background-color: rgb(243, 214, 255);
    display: flex;
    flex-direction: column;
    font-family: "Segoe UI", Arial, sans-serif;
}

/* ====== HEADER ====== */
#empheader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 2.5vw;
    flex-wrap: wrap;
}

#empheader #hamburger {
    display: none;
    font-size: 28px;
    cursor: pointer;
    user-select: none;
    padding: 5px 10px;
}

#employee {
    color: var(--purple1);
    font-weight: 800;
    font-size: 28px;
}

#employee span {
    color: black;
}

.empwelcome {
    color: black;
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 800 !important;
    font-size: 1rem;
}

.logout {
    background: #f8e294;
    border: none;
    padding: 7px 15px;
    border-radius: 5px;
    color: blue;
    cursor: pointer;
    font-weight: bold;
    border: 2px solid black;
}

.logout:hover {
    background: rgba(255, 0, 0, 0.1);
}

/* ====== MAIN CONTAINER ====== */
.empcontainer {
    display: flex;
    min-height: 90vh;
    width: 95vw;
    margin: 2vh auto;
    border-radius: 20px;
    overflow: hidden;
    background-color: rgb(243, 214, 255);
}

/* ====== SIDEBAR MENU ====== */
#empmenu {
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    border-radius: 20px 0 0 20px;
    transition: left 0.3s ease;
    width: 240px;
    background-color: #f054f0;
}

#empmenu a {
    color: black;
    text-decoration: none;
    font-size: 20px;
    margin-top: 20px;
    max-width: 220px;
    background-color: rgb(224, 183, 255);
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    font-weight: bold;
    box-shadow: 0 4px 12px rgba(214, 22, 22, 0.3);
    cursor: pointer;
    transition: background 0.3s, transform 0.2s;
}

#empmenu a:hover {
    background-color: rgb(255, 209, 255);
    transform: translateX(5px);
}

.empactive-menu {
    background-color: rgb(255, 209, 255);
}

/* Close button for mobile menu */
#closemenu {
    display: none;
    font-size: 28px;
    cursor: pointer;
    margin-bottom: 20px;
    user-select: none;
}

/* ====== DASHBOARD CONTENT ====== */
#empdata {
    width: 85vw;
    padding: 20px;
    background: linear-gradient(to bottom, rgb(194, 123, 248) 0%, rgb(243, 167, 246) 50%, rgb(219, 183, 234) 100%);
    border-radius: 0 20px 20px 0;
}

/* ================= RESPONSIVE STYLES ================= */
@media (max-width: 1000px) {
    #empheader {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }

    .empwelcome {
        flex-direction: column;
        align-items: flex-start;
        font-size: 18px;
    }

    #empheader #hamburger {
        display: block;
    }

    .empcontainer {
        flex-direction: column;
        width: 100%;
    }

    #empmenu {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 25px;
        transform: translateX(-100%);
        z-index: 1000;
        border-radius: 0;
    }

    #empmenu.showmenu {
        transform: translateX(0);
        width: 265px;
    }

    #closemenu {
        display: block;
        color: white;
    }

    #empdata {
        width: 100%;
        border-radius: 0;
        margin-top: 10px;
    }
}

@media (max-width: 500px) {
    #employee {
        font-size: 24px;
    }

    #empmenu a {
        font-size: 18px;
        margin-top: 15px;
    }

    .logout {
        font-size: 16px;
    }
}