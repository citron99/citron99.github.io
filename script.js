/* =========================
   SCROLL ANIMATIONS
========================= */

.hidden{

    opacity:0;

    transform:
        translateY(40px);

    transition:
        all .8s ease;
}

.show{

    opacity:1;

    transform:
        translateY(0);
}

.nav-links a.active{

    color:var(--primary);
}
