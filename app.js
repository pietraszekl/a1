function initMainMenu() {
  const topLevelNav = document.getElementsByClassName("js-topLevelNav");
  Array.from(topLevelNav).forEach((navEl) => new TopMenuItem(navEl, topLevelNav));
}

class TopMenuItem {
  constructor(el, allElements) {
    this.el = el;
    this.allElements = allElements;
    this.el.addEventListener("click", this);
  }

  ACTIVE_CLASS = "is-active";

  handleEvent(event) {
    this.toggleActiveClass(event);
  }

  addActiveClass() {
    this.el.classList.add(this.ACTIVE_CLASS);
  }

  removeActiveClass() {
    Array.from(this.allElements).forEach((navEl) => {
      navEl.classList.remove(this.ACTIVE_CLASS);
    });
  }

  toggleActiveClass() {
    if (this.el.classList.contains(this.ACTIVE_CLASS)) {
      this.removeActiveClass();
    } else {
      this.removeActiveClass();
      this.addActiveClass();
    }
  }
}

(() => initMainMenu())();
